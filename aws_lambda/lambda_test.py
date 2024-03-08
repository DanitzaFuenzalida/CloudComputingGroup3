import requests
import json

# Define the API Gateway endpoint URL
api_url = "https://xfae0aaxng.execute-api.us-west-2.amazonaws.com/prod/dbapi"

# Define the payload to send to your Lambda function
payload = {
    "query": "SELECT * FROM cloudcomputinggroup3.users;",
    "username": "admin",
    "password": "password"
}

payload_json = json.dumps(payload)

response = requests.post(api_url, data=payload_json)

if response.status_code == 200:
    print(response.json())
else:
    print("Error:", response.text)
