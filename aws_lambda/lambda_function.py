import json
import pymysql

def lambda_handler(event, context):
    print('get_db_data: Started')
    
    input_data = event['body-json']
    username = input_data.get('username')
    password = input_data.get('password')
    
    query = f"SELECT * FROM cloudcomputinggroup3.users WHERE username = '{username}' AND password = '{password}';"
    
    # Inline database connection details
    proxy_endpoint = "proxy-1708648277586-cloudcomputinggroup3-db.proxy-c9y0kw2csmmu.us-west-2.rds.amazonaws.com"
    db_username = "root"
    db_password = "Cloudcomputinggroup3"
    db_name = "cloudcomputinggroup3"
    
    # Connect to the RDS Proxy
    conn = pymysql.connect(host=proxy_endpoint, user=db_username, password=db_password, database=db_name)
    
    print('get_db_data: Connected')
    # Execute the query
    with conn.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()
        print(str(result))
    
    # Close the connection
    conn.close()
    
    # Determine success based on the presence of result
    success = 1 if result else 0
    
    # Format the result into JSON
    json_result = json.dumps({'records': result})
    
    print('get_db_data: Returning')
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json_result,
        'success': success
    }