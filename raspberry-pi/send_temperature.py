#!/usr/bin/env python3
"""
Raspberry Pi Temperature Sender Script
Simple script to send temperature data to your Next.js website
"""

import requests
import time
import board
import adafruit_dht

# Configuration
API_URL = "https://hk-co.vercel.app/api/temperature"  # Your Vercel deployment URL
UPDATE_INTERVAL = 60  # Update every 60 seconds (1 minute)

# Initialize DHT11 sensor on GPIO4
dht_sensor = adafruit_dht.DHT11(board.D4)

def read_temperature():
    """
    Read temperature and humidity from DHT11 sensor
    Retries up to 3 times if there's an error
    """
    max_retries = 3
    retry_delay = 2.0
    
    for attempt in range(max_retries):
        try:
            temperature = dht_sensor.temperature
            humidity = dht_sensor.humidity
            
            # Check if readings are valid
            if temperature is not None and humidity is not None:
                return temperature, humidity
            else:
                print(f"⚠ Sensor returned None values (attempt {attempt + 1}/{max_retries})")
                time.sleep(retry_delay)
                
        except RuntimeError as error:
            # DHT sensors often have temporary read errors
            print(f"⚠ Sensor error: {error.args[0]} (attempt {attempt + 1}/{max_retries})")
            if attempt < max_retries - 1:
                time.sleep(retry_delay)
            continue
    
    # If all retries failed, return None
    print("✗ Failed to read sensor after all retries")
    return None, None

def send_temperature(temperature, humidity):
    """Send temperature data to the API"""
    try:
        data = {
            "temperature": temperature,
            "humidity": humidity,
            "location": "Cold Storage - Mumbai"  # Customize this
        }
        
        response = requests.post(API_URL, json=data, timeout=10)
        
        if response.status_code == 200:
            print(f"✓ Sent: {temperature}°C, {humidity}% at {time.strftime('%H:%M:%S')}")
            return True
        else:
            print(f"✗ Error: {response.status_code} - {response.text}")
            return False
            
    except Exception as e:
        print(f"✗ Failed to send data: {e}")
        return False

def main():
    """Main loop"""
    print("=" * 50)
    print("DHT11 Temperature Monitor Started")
    print(f"Sensor: DHT11 on GPIO4")
    print(f"API URL: {API_URL}")
    print(f"Update Interval: {UPDATE_INTERVAL} seconds")
    print("=" * 50)
    print("Press Ctrl+C to stop\n")
    
    try:
        while True:
            # Read temperature from sensor
            temperature, humidity = read_temperature()
            
            # Only send if we got valid readings
            if temperature is not None and humidity is not None:
                print(f"📊 Read: {temperature:.1f}°C, {humidity:.1f}%")
                send_temperature(temperature, humidity)
            else:
                print("⏭ Skipping this cycle due to sensor error")
            
            # Wait before next update
            time.sleep(UPDATE_INTERVAL)
            
    except KeyboardInterrupt:
        print("\n\n✓ Temperature monitor stopped")
        # Clean up the sensor
        dht_sensor.exit()

if __name__ == "__main__":
    main()
