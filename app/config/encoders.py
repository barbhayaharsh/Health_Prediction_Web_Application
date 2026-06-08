
ENCODERS = {
    "diabetes": {
        "gender": {"male": 1, "female": 0},
        "hypertension" : {"yes": 1, "no": 0},
        "heart_disease" : {"yes": 1, "no": 0}
    },

    "eye-disease":{ 
        "has_diabetic_retinopathy": {"yes": 1, "no": 0}
    },

    "liver-disease":{ 
        "gender": {"male": 0, "female": 1}
    },

    "lung-cancer": {
        "gender": {"male": 0, "female": 1},
        "country" : {
            'Afghanistan':0,'Albania':1,'Algeria':2,'Andorra':3,'Angola':4,'Antigua and Barbuda':5,'Argentina':6,'Armenia':7,'Australia':8,'Austria':9,
            'Azerbaijan':10,'Bahamas':11,'Bahrain':12,'Bangladesh':13,'Barbados':14,'Belarus':15,'Belgium':16,'Belize':17,'Benin':18,'Bhutan':19,
            'Bolivia':20,'Bosnia and Herzegovina':21,'Botswana':22,'Brazil':23,'Brunei':24,'Bulgaria':25,'Burkina Faso':26,'Burundi':27,'Cabo Verde':28,'Cambodia':29,
            'Cameroon':30,'Canada':31,'Central African Republic':32,'Chad':33,'Chile':34,'China':35,'Colombia':36,'Comoros':37,'Congo, Democratic Republic of':38,'Congo, Republic of':39,
            'Costa Rica':40,'Croatia':41,'Cuba':42,'Cyprus':43,'Czech Republic':44,'Denmark':45,'Djibouti':46,'Dominica':47,'Dominican Republic':48,'Ecuador':49,
            'Egypt':50,'El Salvador':51,'Equatorial Guinea':52,'Eritrea':53,'Estonia':54,'Eswatini':55,'Ethiopia':56,'Fiji':57,'Finland':58,'France':59,
            'Gabon':60,'Gambia':61,'Georgia':62,'Germany':63,'Ghana':64,'Greece':65,'Grenada':66,'Guatemala':67,'Guinea':68,'Guinea-Bissau':69,
            'Guyana':70,'Haiti':71,'Honduras':72,'Hungary':73,'Iceland':74,'India':75,'Indonesia':76,'Iran':77,'Iraq':78,'Ireland':79,
            'Israel':80,'Italy':81,'Jamaica':82,'Japan':83,'Jordan':84,'Kazakhstan':85,'Kenya':86,'Kiribati':87,'Kuwait':88,'Kyrgyzstan':89,
            'Laos':90,'Latvia':91,'Lebanon':92,'Lesotho':93,'Liberia':94,'Libya':95,'Liechtenstein':96,'Lithuania':97,'Luxembourg':98,'Madagascar':99,
            'Malawi':100,'Malaysia':101,'Maldives':102,'Mali':103,'Malta':104,'Marshall Islands':105,'Mauritania':106,'Mauritius':107,'Mexico':108,'Micronesia':109,
            'Moldova':110,'Monaco':111,'Mongolia':112,'Montenegro':113,'Morocco':114,'Mozambique':115,'Myanmar':116,'Namibia':117,'Nauru':118,'Nepal':119,
            'Netherlands':120,'New Zealand':121,'Nicaragua':122,'Niger':123,'Nigeria':124,'North Korea':125,'North Macedonia':126,'Norway':127,'Oman':128,'Pakistan':129,
            'Palau':130,'Palestine':131,'Panama':132,'Papua New Guinea':133,'Paraguay':134,'Peru':135,'Philippines':136,'Poland':137,'Portugal':138,'Qatar':139,
            'Romania':140,'Russia':141,'Rwanda':142,'Saint Kitts and Nevis':143,'Saint Lucia':144,'Saint Vincent and the Grenadines':145,'Samoa':146,'San Marino':147,'Sao Tome and Principe':148,'Saudi Arabia':149,
            'Senegal':150,'Serbia':151,'Seychelles':152,'Sierra Leone':153,'Singapore':154,'Slovakia':155,'Slovenia':156,'Solomon Islands':157,'Somalia':158,'South Africa':159,
            'South Korea':160,'South Sudan':161,'Spain':162,'Sri Lanka':163,'Sudan':164,'Suriname':165,'Sweden':166,'Switzerland':167,'Syria':168,'Taiwan':169,
            'Tajikistan':170,'Tanzania':171,'Thailand':172,'Timor-Leste':173,'Togo':174,'Tonga':175,'Trinidad and Tobago':176,'Tunisia':177,'Turkey':178,'Turkmenistan':179,
            'Tuvalu':180,'Uganda':181,'Ukraine':182,'United Arab Emirates':183,'United Kingdom':184,'United States':185,'Uruguay':186,'Uzbekistan':187,'Vanuatu':188,'Vatican City':189,
            'Venezuela':190,'Vietnam':191,'Yemen':192,'Zambia':193,'Zimbabwe':194
        },
        "cancer_stage" : {'Stage I' : 0,'Stage II' : 1, 'Stage III' : 2, 'Stage IV' : 3, 'Not Applicable' : 0},
        "smoking_status" : {'Passive Smoker' : 0, 'Former Smoker' : 1, 'Never Smoked' : 2, 'Current Smoker' : 3},
        "hypertension" : {"yes": 1, "no": 0},
        "asthma" : {"yes": 1, "no": 0},
        "cirrhosis" : {"yes": 1, "no": 0},
        "other_cancer" : {"yes": 1, "no": 0},
        "treatment_type" : {'Chemotherapy' : 0, 'Surgery' : 1, 'Combined' : 2, 'Radiation' : 3},
    },

    "mental-health-adult":{ 
        "gender" : {"male": 0, "female": 1, "other" : 2},
        "employment_status" : {'Employed' : 0,'Student' : 1,'Unemployed' : 2,'Retried': 2},
        "work_environment" : {'On-site' : 0,'Remote' : 1,'Hybrid' : 2}
    },

    "student-depression": {
        "Gender" : {"male": 0, "female": 1, "other" : 0},
        "City" : {
        'Mumbai':0,'Delhi':1,'Bengaluru':2,'Hyderabad':3,'Ahmedabad':4,'Chennai':5,'Kolkata':6,'Surat':7,'Pune':8,'Jaipur':9,
        'Lucknow':10,'Kanpur':11,'Nagpur':12,'Indore':13,'Thane':14,'Bhopal':15,'Visakhapatnam':16,'Pimpri-Chinchwad':17,'Patna':18,'Vadodara':19,
        'Ghaziabad':20,'Ludhiana':21,'Agra':22,'Nashik':23,'Faridabad':24,'Meerut':25,'Rajkot':26,'Kalyan-Dombivli':27,'Vasai-Virar':28,'Varanasi':29,
        'Srinagar':30,'Aurangabad':31,'Dhanbad':32,'Amritsar':33,'Navi Mumbai':34,'Allahabad (Prayagraj)':35,'Howrah':36,'Ranchi':37,'Coimbatore':38,'Jabalpur':39,
        'Gwalior':40,'Vijayawada':41,'Madurai':42,'Raipur':43,'Kota':44,'Guwahati':45,'Chandigarh':46,'Solapur':47,'Hubli-Dharwad':48,'Bareilly':49,
        'Moradabad':50,'Mysuru (Mysore)':51,'Tiruchirappalli':52,'Salem':53,'Aligarh':54,'Thiruvananthapuram':55,'Bhiwandi':56,'Saharanpur':57,'Gorakhpur':58,'Guntur':59,
        'Bikaner':60,'Amravati':61,'Noida':62,'Jamshedpur':63,'Bhavnagar':64,'Cuttack':65,'Firozabad':66,'Kochi':67,'Dehradun':68,'Durg-Bhilai':69,
        'Asansol':70,'Nanded':71,'Ajmer':72,'Ujjain':73,'Tiruppur':74,'Belagavi':75,'Akola':76,'Nellore':77,'Sangli-Miraj':78,'Rourkela':79,
        'Mangalore':80,'Bhilwara':81,'Warangal':82,'Gaya':83,'Jalgaon':84,'Mathura':85,'Rampur':86,'Satna':87,'Muzaffarpur':88,'Anantapur':89,
        'Latur':90,'Dhule':91,'Rohtak':92,'Panipat':93,'Darbhanga':94,'Kurnool':95,'Rajahmundry':96,'Bokaro Steel City':97,'Bellary':98,'Akbarpur':99
        },
        "Dietary Habits" : {'Unhealthy' : 0,'Moderate' : 1,'Healthy': 2},
        "Have you ever had suicidal thoughts ?" : {"yes": 1, "no": 0},
        "Family History of Mental Illness" : {"yes": 1, "no": 0, "unknown": 1}
    },

    "heart-disease": { 
        "Sex" : {"male": 0, "female": 1},
        "ChestPainType" : {'Atypical Angina':0,'Non-Anginal Pain':1,'Asymptomatic':2,'Typical Angina':3},
        "FastingBS" : {'<120 mg/dl':0,'>120 mg/dl':1},
        "RestingECG" : {'Normal':0,'ST-T Wave Abnormality':1,'Left Ventricular Hypertrophy':2},
        "ExerciseAngina" : {"yes": 1, "no": 0},
        "ST_Slope" : {'Upsloping':0,'Flat':1,'Downsloping':2}
    }
}
