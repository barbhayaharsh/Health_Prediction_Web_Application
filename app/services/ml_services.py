import joblib
import os
import numpy as np
from app.config.encoders import ENCODERS
from app.config.feature_orders import FEATURE_ORDER
from app.config.model_alias import MODEL_ALIAS



_loaded_models = {}

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
MODEL_DIR = os.path.join(BASE_DIR, "models")

def load_model(model_name):
    if model_name in _loaded_models:
        return _loaded_models[model_name]

    model_path = os.path.join(MODEL_DIR, f"{model_name}.pkl")
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Model not found: {model_path}")

    model = joblib.load(model_path)
    _loaded_models[model_name] = model
    return model

def convert_value(model_name, field, value):
    if value is None:
        raise ValueError(f"Missing value for {field}")

    
    model_encoders = ENCODERS.get(model_name, {})

    
    if field in model_encoders:
        v = str(value).strip().lower()
        encoder = model_encoders[field]

        
        for k, val in encoder.items():
            if v == str(k).lower():
                return val

        raise ValueError(f"Invalid categorical value for {field}: {value}")

   
    try:
        return float(value)
    except:
        raise ValueError(f"Invalid numeric value for {field}: {value}")




def predict_ml(model_name, data: dict):

    
    if model_name in MODEL_ALIAS:
        model_name = MODEL_ALIAS[model_name]

    model = load_model(model_name)

    features = FEATURE_ORDER.get(model_name)
    if not features:
        raise ValueError(f"Feature order not defined for {model_name}")

    values = []
    for f in features:
        if f not in data:
            raise KeyError(f"Missing input field: {f}")
        values.append(convert_value(model_name, f, data[f]))

    X = np.array([values])
    pred = model.predict(X)[0]

    confidence = None
    if hasattr(model, "predict_proba"):
        prob = model.predict_proba(X)[0].max()
        confidence = round(float(prob * 100), 2)

    return str(pred), confidence

