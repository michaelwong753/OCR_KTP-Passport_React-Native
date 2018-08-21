# OCR_KTP-Passport_React-Native
Mobile Version of OCR Indonesian ID card (KTP) &amp; Indonesian Passport using Tesseract 4.0.0 and LSTM traineddata (front-end)
## Requirements
Use Back-End from the web version to integrate with the Front End version of React Native and follow **ONLY** the **REQUIREMENTS**
([Back-End](https://github.com/sodagembira/OCR-KTP-Passport_Web)).  
```
git clone https://github.com/sodagembira/OCR-KTP-Passport_Web.git && cd back-end
```
Then run
```
node app.js
```

## Installation
Changes port number to your desired port in [Login](https://github.com/sodagembira/OCR_KTP-Passport_React-Native/blob/master/Components/Login.js) and [LoginPass](https://github.com/sodagembira/OCR_KTP-Passport_React-Native/blob/master/Components/LoginPass.js)
```
fetch("<YOUR DESIRED PORT(DEFAULT PORT: 3000, IF RAN IN LOCALHOST)>" + "upload", config)
		 .then((checkStatusAndGetJSONResponse)=>{    
		   return checkStatusAndGetJSONResponse.json()
```
Run the Application
```
react-native run-android
```
## Usage
1. Choose either KTP/Passport
2. Upload your picture

![alt text](https://github.com/sodagembira/OCR_KTP-Passport_React-Native/blob/master/example1.png)
![alt text](https://github.com/sodagembira/OCR_KTP-Passport_React-Native/blob/master/example2.png)
