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

# Convert payload to JSON format
payload_json = json.dumps(payload)

# Make a POST request to the API Gateway endpoint
response = requests.post(api_url, data=payload_json)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Print the response content (the result from your Lambda function)
    print(response.json())
else:
    # Print error message if request failed
    print("Error:", response.text)
