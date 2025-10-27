# 🌡️ Live Temperature Monitoring - Quick Start Guide

## ✅ What We Built

A simple system to display real-time temperature from your Raspberry Pi on your website!

```
Raspberry Pi → Next.js API → Website Display
```

---

## 📁 Files Created

### Website Files:
- ✅ `/src/app/api/temperature/route.ts` - API endpoint (GET & POST)
- ✅ `/src/app/live-temp/page.tsx` - Live temperature display page
- ✅ Updated navigation to include "Live Temp" link

### Raspberry Pi Files:
- ✅ `/raspberry-pi/send_temperature.py` - Main script for Pi
- ✅ `/raspberry-pi/test_api.py` - Test script (works on any computer)
- ✅ `/raspberry-pi/README.md` - Detailed Pi setup instructions

---

## 🚀 Quick Start (5 Steps)

### Step 1: Test Locally First

```bash
# Start your dev server
npm run dev
```

Visit: http://localhost:3000/live-temp
You should see the temperature page with default data (25°C, 60%).

### Step 2: Test the API Locally

```bash
# In another terminal, run the test script
cd raspberry-pi
python3 test_api.py
```

You should see:
```
✓ SUCCESS! Temperature data sent successfully!
```

Refresh http://localhost:3000/live-temp - temperature should update!

### Step 3: Deploy to Vercel

```bash
# Build and deploy
npm run build
git add .
git commit -m "Add live temperature monitoring"
git push
```

Your site will auto-deploy to Vercel.

### Step 4: Update Raspberry Pi Script

Edit `raspberry-pi/send_temperature.py`:

```python
# Change this line:
API_URL = "https://YOUR-ACTUAL-SITE.vercel.app/api/temperature"
```

### Step 5: Run on Raspberry Pi

```bash
# Copy send_temperature.py to your Raspberry Pi
# Then run:
python3 send_temperature.py
```

---

## 🎯 Testing Without a Sensor

The default script sends **random test data** - perfect for demo!

Just run it and it will send temperatures between 15-30°C every minute.

---

## 📊 What You'll See

### On the Website:
- **Large temperature display** in °C and °F
- **Humidity percentage**
- **Location** (customizable)
- **Last updated timestamp**
- **Auto-refresh** every 5 seconds
- **Manual refresh button**

### On Raspberry Pi Terminal:
```
==================================================
Temperature Monitor Started
API URL: https://your-site.vercel.app/api/temperature
Update Interval: 60 seconds
==================================================

✓ Sent: 23.5°C, 65.2% at 14:32:01
✓ Sent: 23.7°C, 64.8% at 14:33:01
```

---

## ⚙️ Configuration Options

### Update Frequency (Raspberry Pi)

In `send_temperature.py`:
```python
UPDATE_INTERVAL = 60  # Change to 30 for every 30 seconds
```

### Auto-Refresh Speed (Website)

In `/src/app/live-temp/page.tsx` (line 36):
```javascript
}, 5000); // Change to 10000 for every 10 seconds
```

### Location Name (Raspberry Pi)

In `send_temperature.py`:
```python
"location": "Cold Storage - Mumbai"  # Change to your location
```

---

## 🔧 Adding Real Sensor (Optional)

### For DHT22 Temperature & Humidity Sensor:

```bash
# On Raspberry Pi
pip3 install adafruit-circuitpython-dht
sudo apt-get install libgpiod2
```

Update `read_temperature()` function:
```python
import board
import adafruit_dht

dhtDevice = adafruit_dht.DHT22(board.D4)

def read_temperature():
    temperature = dhtDevice.temperature
    humidity = dhtDevice.humidity
    return temperature, humidity
```

### For DS18B20 Waterproof Sensor:

```bash
# Enable 1-Wire interface
sudo raspi-config
# Select: Interface Options > 1-Wire > Enable
# Reboot
```

Update `read_temperature()` function:
```python
import glob

def read_temperature():
    device_file = glob.glob('/sys/bus/w1/devices/28-*/w1_slave')[0]
    with open(device_file, 'r') as f:
        lines = f.readlines()
    temp_c = float(lines[1].split('t=')[1]) / 1000.0
    return temp_c, 0  # No humidity with DS18B20
```

---

## 🎥 Demo Flow (Perfect for 30 min demo!)

1. **Start Pi script** → `python3 send_temperature.py`
2. **Open website** → Visit `/live-temp` page
3. **Watch it update** → Auto-refreshes every 5 seconds
4. **Show the data** → Temperature, humidity, timestamp all live!
5. **Stop anytime** → Press Ctrl+C on Pi

---

## 📱 Mobile Friendly

The page is fully responsive and works great on phones!

Navigation includes the "Live Temp" link in the mobile menu.

---

## 💡 Tips

- **No database needed** - uses in-memory storage (perfect for demos!)
- **Data resets** when Vercel restarts - that's okay for your use case!
- **Very simple** - just HTTP requests, no complex setup
- **Free tier** - Everything runs on free Vercel hosting
- **Instant deploy** - Push to GitHub and it auto-deploys

---

## 🆘 Troubleshooting

### "Connection refused" error
- Make sure dev server is running (`npm run dev`)
- Check API_URL is correct

### Temperature not updating on website
- Check browser console for errors (F12)
- Verify auto-refresh is ON
- Try manual refresh button

### Pi can't connect to API
- Check internet connection
- Verify Vercel URL is correct (no trailing slash)
- Make sure site is deployed

---

## 🎉 You're Done!

That's it! Super simple temperature monitoring that works with your Vercel deployment.

**Next Page**: Visit `/live-temp` on your deployed site!

**Raspberry Pi**: Run `python3 send_temperature.py`

**Enjoy!** 🌡️✨
