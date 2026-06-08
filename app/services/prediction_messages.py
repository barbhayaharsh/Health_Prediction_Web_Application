def get_prediction_message(model_name, prediction):
    
    try:
        pred = int(prediction)
    except:
        return "Prediction result unclear. Please meet the doctor."

    
    if model_name == "diabetes":
        if pred == 1:
            return "You are a patient of Diabetes. Please meet the doctor for proper treatment."
        else:
            return "You are not a patient of Diabetes, but please do regular health checkups and meet the doctor if needed."

    
    elif model_name == "heart-disease":
        if pred == 1:
            return "You are a patient of Heart Disease. Please meet the doctor immediately."
        else:
            return "You are not a patient of Heart Disease, but please meet the doctor for regular heart checkups."

    
    elif model_name == "liver-disease":
        if pred == 1:
            return "You are a patient of Liver Disease. Please meet the doctor as soon as possible."
        else:
            return "You do not have any liver disease, but please meet the doctor for confirmation."

    
    elif model_name == "lung-cancer":
        if pred == 0:
            return "Your condition is serious and survival chances are low. Please meet the doctor immediately."
        else:
            return "No tension, you can survive, but please meet the doctor and follow their instructions carefully."

    
    elif model_name == "eye-disease":
        if pred == 1:
            return "You are a patient of Eye Disease. Please meet the eye specialist doctor."
        else:
            return "You do not have any problem related to Eye Disease, but please meet the doctor for regular eye checkups."

    
    elif model_name == "mental-health-adult":
        if pred == 0:
            return "You have medium risk of mental health issues. Please meet the doctor for guidance."
        elif pred == 1:
            return "You have high risk of mental health problems. Please meet the doctor immediately."
        else:
            return "You have low risk of mental health issues, but please meet the doctor for proper advice."

    
    elif model_name == "student-depression":
        if pred == 1:
            return "You have depression problem, so please meet the doctor. It is good for your health."
        else:
            return "You do not have depression problem, but please meet the doctor for mental health checkup."
   
    return "Please meet the doctor for proper medical advice."

def get_dl_prediction_message(prediction):

    
    if prediction == "actinic keratosis":
        return "You have Actinic Keratosis. Please meet the doctor and take proper skin treatment."

    
    elif prediction == "basal cell carcinoma":
        return "You are a patient of Basal Cell Carcinoma. Please meet the doctor immediately."

    
    elif prediction == "dermatofibroma":
        return "You have Dermatofibroma. It is usually not dangerous but please meet the doctor."

    
    elif prediction == "melanoma":
        return "You are a patient of Melanoma which is a serious skin cancer. Please meet the doctor immediately."

    
    elif prediction == "nevus":
        return "You have Nevus (mole). It is usually not dangerous but please meet the doctor for regular checkup."

    
    elif prediction == "pigmented benign keratosis":
        return "You have Pigmented Benign Keratosis. Please meet the doctor for confirmation."

    
    elif prediction == "seborrheic keratosis":
        return "You have Seborrheic Keratosis. It is mostly harmless but please meet the doctor."

    
    elif prediction == "squamous cell carcinoma":
        return "You are a patient of Squamous Cell Carcinoma. Please meet the doctor immediately."

    
    elif prediction == "vascular lesion":
        return "You have Vascular Lesion. Please meet the doctor for proper diagnosis."

    else:
        return "Skin disease detected. Please meet the dermatologist."

