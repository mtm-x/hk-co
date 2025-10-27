#!/usr/bin/env python3
"""
Test script to send data to your API
Run this from any computer to test if the API is working
"""

import requests
import json

# REPLACE THIS with your actual Vercel URL after deployment
API_URL = "http://localhost:3000/api/temperature"  # For local testing
# API_URL = "https://your-site.vercel.app/api/temperature"  # For production

def test_send_temperature():
    """Send test data to API"""
    print("Testing Temperature API...")
    print(f"API URL: {API_URL}\n")
    
    # Test data
    test_data = {
        "temperature": 23.5,
        "humidity": 65.0,
        "location": "Test Location"
    }
    
    try:
        print(f"Sending: {json.dumps(test_data, indent=2)}\n")
        
        response = requests.post(API_URL, json=test_data, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}\n")
        
        if response.status_code == 200:
            print("✓ SUCCESS! Temperature data sent successfully!")
            print("\nNow visit http://localhost:3000/live-temp to see the data!")
        else:
            print("✗ FAILED! Check the error message above.")
            
    except Exception as e:
        print(f"✗ ERROR: {e}")
        print("\nMake sure:")
        print("1. Your Next.js dev server is running (npm run dev)")
        print("2. The API_URL is correct")
        print("3. You have internet connection")

def test_get_temperature():
    """Get current temperature from API"""
    print("\n" + "="*50)
    print("Testing GET endpoint...")
    print("="*50 + "\n")
    
    try:
        response = requests.get(API_URL, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}\n")
        
        if response.status_code == 200:
            data = response.json()['data']
            print("✓ Current Temperature Data:")
            print(f"  Temperature: {data['temperature']}°C")
            print(f"  Humidity: {data['humidity']}%")
            print(f"  Location: {data['location']}")
            print(f"  Last Updated: {data['timestamp']}")
        
    except Exception as e:
        print(f"✗ ERROR: {e}")

if __name__ == "__main__":
    # Test sending data
    test_send_temperature()
    
    # Test retrieving data
    test_get_temperature()
