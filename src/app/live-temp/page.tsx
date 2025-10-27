'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Thermometer, Droplets, Clock, MapPin, RefreshCw } from 'lucide-react';

interface TemperatureData {
  temperature: number;
  humidity: number;
  timestamp: string;
  location: string;
}

export default function LiveTemperaturePage() {
  const [tempData, setTempData] = useState<TemperatureData | null>(null);
  const [loading, setLoading] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  const fetchTemperature = async () => {
    try {
      const response = await fetch('/api/temperature');
      const result = await response.json();
      if (result.success) {
        setTempData(result.data);
      }
    } catch (error) {
      console.error('Error fetching temperature:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTemperature();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchTemperature();
    }, 1000); // Refresh every 1 second

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Layout>
      <div className="bg-neutral-warm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-primary/10 flex items-center justify-center">
              <Thermometer className="w-8 h-8 text-accent-primary" />
            </div>
            <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
              Live Temperature Monitoring
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Real-time temperature and humidity data from our storage facility
            </p>
          </div>

          {/* Main Temperature Display */}
          <div className="bg-white rounded-card shadow-elegant p-8 mb-8">
            {loading ? (
              <div className="text-center py-12">
                <RefreshCw className="w-12 h-12 text-accent-primary animate-spin mx-auto mb-4" />
                <p className="text-text-muted">Loading temperature data...</p>
              </div>
            ) : tempData ? (
              <div className="space-y-8">
                {/* Temperature & Humidity Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Temperature Card */}
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-6 border-2 border-red-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-6 h-6 text-red-600" />
                        <h3 className="font-semibold text-lg text-foreground">Temperature</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-red-600 mb-2">
                        {tempData.temperature.toFixed(1)}°C
                      </div>
                      <div className="text-sm text-text-muted">
                        {((tempData.temperature * 9/5) + 32).toFixed(1)}°F
                      </div>
                    </div>
                  </div>

                  {/* Humidity Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-6 h-6 text-blue-600" />
                        <h3 className="font-semibold text-lg text-foreground">Humidity</h3>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-6xl font-bold text-blue-600 mb-2">
                        {tempData.humidity.toFixed(1)}%
                      </div>
                      <div className="text-sm text-text-muted">
                        Relative Humidity
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location & Timestamp */}
                <div className="bg-neutral-cool rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent-primary" />
                      <div>
                        <div className="text-sm text-text-muted">Location</div>
                        <div className="font-semibold text-foreground">{tempData.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent-primary" />
                      <div>
                        <div className="text-sm text-text-muted">Last Updated</div>
                        <div className="font-semibold text-foreground">
                          {formatTimestamp(tempData.timestamp)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto-refresh Toggle */}
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2">
                    <RefreshCw className={`w-5 h-5 ${autoRefresh ? 'text-green-600 animate-spin' : 'text-gray-400'}`} />
                    <span className="text-sm font-medium text-foreground">
                      Auto-refresh every 1 second
                    </span>
                  </div>
                  <button
                    onClick={() => setAutoRefresh(!autoRefresh)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                      autoRefresh 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                    }`}
                  >
                    {autoRefresh ? 'ON' : 'OFF'}
                  </button>
                </div>

                {/* Manual Refresh Button */}
                <div className="text-center">
                  <button
                    onClick={fetchTemperature}
                    className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Refresh Now
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-text-muted">No temperature data available</p>
              </div>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-2">
              📡 How This Works
            </h3>
            <p className="text-sm text-text-muted mb-3">
              This page displays real-time temperature and humidity data sent from a Raspberry Pi sensor. 
              The data updates automatically every 1 second when auto-refresh is enabled.
            </p>
            <div className="bg-white rounded p-3 font-mono text-xs text-gray-700">
              <div>API Endpoint: <span className="text-accent-primary">/api/temperature</span></div>
              <div>Update Interval: <span className="text-accent-primary">1 second</span></div>
              <div>Data Storage: <span className="text-accent-primary">In-Memory (Demo)</span></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
