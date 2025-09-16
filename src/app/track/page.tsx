'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Package, QrCode } from 'lucide-react';
import Layout from '@/components/Layout';
import { mockDeliveries } from '@/data/delivery-data';

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    // Check if tracking number exists
    const delivery = mockDeliveries.find(d => 
      d.tracking_number.toLowerCase() === trackingNumber.toLowerCase().trim()
    );

    if (delivery) {
      router.push(`/track/${delivery.tracking_number}`);
    } else {
      setError('Tracking number not found. Please check and try again.');
    }
  };

  return (
    <Layout>
      <div className="bg-neutral-warm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-primary/10 flex items-center justify-center">
              <Package className="w-8 h-8 text-accent-primary" />
            </div>
            <h1 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
              Track Your Order
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Enter your tracking number or scan the QR code on your package to view 
              detailed product information, quality checks, and delivery status.
            </p>
          </div>

          {/* Tracking Form */}
          <div className="bg-white rounded-card shadow-elegant p-8 mb-8">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-6">
                <label htmlFor="tracking" className="block text-sm font-medium text-foreground mb-2">
                  Tracking Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="tracking"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="e.g., TGL-SIC-2025-001"
                    className="w-full px-4 py-3 pl-10 border border-border-subtle rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-accent-primary"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-accent-primary hover:bg-accent-primary/90 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
              >
                Track Product
              </button>
            </form>
          </div>

          {/* Demo Section */}
          <div className="bg-white rounded-card shadow-elegant p-8">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 text-center">
              Try Demo Tracking Numbers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockDeliveries.map((delivery) => (
                <div key={delivery.id} className="border border-border-subtle rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">
                    {delivery.customer_name}&apos;s Order
                  </h3>
                  <p className="text-sm text-text-muted mb-3">
                    Tracking: <span className="font-mono">{delivery.tracking_number}</span>
                  </p>
                  <button
                    onClick={() => router.push(`/track/${delivery.tracking_number}`)}
                    className="w-full bg-neutral-cool hover:bg-border-subtle text-foreground py-2 px-3 rounded-lg text-sm font-medium transition-colors"
                  >
                    View Tracking
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* QR Instructions */}
          <div className="mt-8 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-card p-6">
              <QrCode className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="heading-secondary text-lg text-blue-800 mb-2">
                Have a QR Code?
              </h3>
              <p className="text-blue-700">
                Simply scan the QR code on your product package with your phone&apos;s camera
                or any QR code reader app to instantly access your tracking information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
