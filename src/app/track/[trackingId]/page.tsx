'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import { 
  CheckCircle, 
  AlertTriangle, 
  MapPin, 
  Thermometer, 
  Shield,
  Clock,
  Truck,
  Award
} from 'lucide-react';
import Layout from '@/components/Layout';
import { mockDeliveries } from '@/data/delivery-data';
import { mockProducts } from '@/data/mock-data';

interface TrackingPageProps {
  params: Promise<{ trackingId: string }>;
}

export default function TrackingPage({ params }: TrackingPageProps) {
  const { trackingId } = use(params);
  
  // Find the delivery record
  const delivery = mockDeliveries.find(d => d.tracking_number === trackingId);
  
  if (!delivery) {
    notFound();
  }

  // Find the associated product
  const product = mockProducts.find(p => p.id === delivery.product_id);
  
  if (!product) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'failed': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default: return <CheckCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed': return 'text-green-600 bg-green-50 border-green-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'failed': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
      timeZoneName: 'short'
    }).format(date);
  };

  return (
    <Layout>
      <div className="bg-neutral-warm py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white rounded-card shadow-elegant p-8 mb-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="heading-display text-3xl md:text-4xl text-foreground mb-2">
                Product Authenticity Verified
              </h1>
              <p className="text-lg text-text-muted mb-4">
                Tracking: <span className="font-mono font-semibold text-accent-primary">{delivery.tracking_number}</span>
              </p>
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-800 px-4 py-2 rounded-full border border-green-200">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Delivery Completed Successfully</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="heading-secondary text-xl text-foreground mb-4">Product Details</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-text-muted">Product Name</p>
                    <p className="font-semibold text-foreground">{product.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Producer</p>
                    <p className="font-semibold text-foreground">{product.producer_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Origin</p>
                    <p className="font-semibold text-foreground">{product.origin_region}, {product.origin_country}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Best By Date</p>
                    <p className="font-semibold text-foreground">{formatDateTime(product.expiration_date)}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="heading-secondary text-xl text-foreground mb-4">Delivery Summary</h2>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-text-muted">Delivered To</p>
                    <p className="font-semibold text-foreground">{delivery.customer_name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Delivery Date</p>
                    <p className="font-semibold text-foreground">{formatDateTime(delivery.delivery_date)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Final Temperature</p>
                    <p className="font-semibold text-foreground flex items-center gap-1">
                      <Thermometer className="w-4 h-4 text-blue-600" />
                      {delivery.final_temperature}°C
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Package Condition</p>
                    <p className="font-semibold text-foreground capitalize">{delivery.packaging_condition}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Checks */}
          <div className="bg-white rounded-card shadow-elegant p-8 mb-8">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-accent-primary" />
              Quality Verification Report
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {delivery.quality_checks.map((check) => (
                <div key={check.id} className={`border rounded-lg p-4 ${getStatusColor(check.status)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(check.status)}
                      <span className="font-semibold capitalize">{check.check_type.replace('_', ' ')}</span>
                    </div>
                    <span className="text-sm font-medium capitalize">{check.status}</span>
                  </div>
                  {check.value && (
                    <p className="text-sm mb-1">
                      <strong>Result:</strong> {check.value}
                    </p>
                  )}
                  <p className="text-xs">{check.notes}</p>
                  <p className="text-xs mt-2 opacity-75">
                    Checked by: {check.checked_by}
                  </p>
                </div>
              ))}
            </div>

            {delivery.authenticity_verified && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">Authenticity Guaranteed</span>
                </div>
                <p className="text-sm text-green-700 mt-1">
                  This product has been verified as authentic and sourced directly from the certified producer.
                </p>
              </div>
            )}
          </div>

          {/* Travel Journey */}
          <div className="bg-white rounded-card shadow-elegant p-8">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-accent-primary" />
              Journey Timeline
            </h2>

            <div className="space-y-4">
              {delivery.travel_path.map((checkpoint, index) => (
                <div key={checkpoint.id} className="flex gap-4">
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      checkpoint.status === 'delivered' ? 'bg-green-500' : 
                      checkpoint.status === 'arrived' ? 'bg-blue-500' : 'bg-gray-400'
                    }`}>
                      {checkpoint.status === 'delivered' ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : checkpoint.status === 'arrived' ? (
                        <MapPin className="w-4 h-4 text-white" />
                      ) : (
                        <Truck className="w-4 h-4 text-white" />
                      )}
                    </div>
                    {index < delivery.travel_path.length - 1 && (
                      <div className="w-0.5 h-12 bg-gray-200 mt-2"></div>
                    )}
                  </div>

                  <div className="flex-grow pb-8">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">{checkpoint.location}</h3>
                        <p className="text-sm text-text-muted flex items-center gap-1 mt-1">
                          <Clock className="w-3 h-3" />
                          {formatDateTime(checkpoint.timestamp)}
                        </p>
                        <p className="text-sm text-text-muted capitalize mt-1">
                          Status: {checkpoint.status.replace('_', ' ')}
                        </p>
                        {checkpoint.notes && (
                          <p className="text-sm text-foreground mt-2">{checkpoint.notes}</p>
                        )}
                      </div>
                      <div className="text-right text-sm">
                        <div className="flex items-center gap-1 text-blue-600">
                          <Thermometer className="w-3 h-3" />
                          <span>{checkpoint.temperature_recorded}°C</span>
                        </div>
                        {checkpoint.humidity && (
                          <div className="text-text-muted mt-1">
                            Humidity: {checkpoint.humidity}%
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {delivery.delivery_notes && (
              <div className="mt-8 p-4 bg-neutral-cool rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Delivery Notes</h3>
                <p className="text-foreground">{delivery.delivery_notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
