# Raspberry Pi Temperature Monitoring Setup

This folder contains the Python script to send temperature data from your Raspberry Pi to your website.

## 📋 Requirements

### Python Packages
```bash
pip3 install requests
```

### For Real Sensors (Optional)
```bash
# For DHT22 sensor
pip3 install adafruit-circuitpython-dht
sudo apt-get install libgpiod2

# For DS18B20 sensor (1-Wire)
# Enable 1-Wire interface in raspi-config
sudo raspi-config
# Select Interface Options > 1-Wire > Enable
```

## 🚀 Quick Start

### 1. Edit the Configuration

Open `send_temperature.py` and update:

```python
API_URL = "https://your-actual-site.vercel.app/api/temperature"
UPDATE_INTERVAL = 60  # seconds between updates
```

### 2. Test with Simulated Data

```bash
python3 send_temperature.py
```

This will send random temperature data to test the connection.

### 3. Add Your Real Sensor Code

Replace the `read_temperature()` function with your actual sensor code:

#### For DHT22 Sensor:
```python
import board
import adafruit_dht

dhtDevice = adafruit_dht.DHT22(board.D4)

def read_temperature():
    temperature = dhtDevice.temperature
    humidity = dhtDevice.humidity
    return temperature, humidity
```

#### For DS18B20 Sensor:
```python
import glob

def read_temperature():
    device_file = glob.glob('/sys/bus/w1/devices/28-*/w1_slave')[0]
    with open(device_file, 'r') as f:
        lines = f.readlines()
    temperature = float(lines[1].split('t=')[1]) / 1000.0
    return temperature, 0  # DS18B20 doesn't measure humidity
```

### 4. Run on Boot (Optional)

To make it start automatically when Pi boots:

```bash
# Edit crontab
crontab -e

# Add this line:
@reboot sleep 30 && /usr/bin/python3 /home/pi/send_temperature.py &
```

## 📊 Monitor Output

The script will show:
```
==================================================
Temperature Monitor Started
API URL: https://your-site.vercel.app/api/temperature
Update Interval: 60 seconds
==================================================
Press Ctrl+C to stop

✓ Sent: 23.5°C, 65.2% at 14:32:01
✓ Sent: 23.7°C, 64.8% at 14:33:01
```

## 🛠 Troubleshooting

### Connection Error
- Check your internet connection
- Verify the API_URL is correct
- Make sure your website is deployed on Vercel

### Sensor Not Reading
- Check sensor wiring
- Verify correct GPIO pin
- Install required libraries

### Permission Denied
```bash
sudo python3 send_temperature.py
```

## 📱 View Live Data

Once running, visit your website:
```
https://your-site.vercel.app/live-temp
```

The page will auto-refresh every 5 seconds to show the latest data!
