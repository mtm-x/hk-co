import Layout from '@/components/Layout';
import Link from 'next/link';
import { mockDeliveries } from '@/data/delivery-data';
import { Package, Eye, CheckCircle } from 'lucide-react';

export default function DemoPage() {
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
              Demo: Track Your Orders
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Click on any tracking number below to see the detailed tracking information 
              for that order, including quality checks and delivery journey.
            </p>
          </div>

          {/* Available Tracking Numbers */}
          <div className="bg-white rounded-card shadow-elegant p-8 mb-8">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 text-center">
              Available Demo Orders
            </h2>
            <div className="space-y-4">
              {mockDeliveries.map((delivery) => (
                <div key={delivery.id} className="border border-gray-200 rounded-lg p-6 hover:border-accent-primary transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Package className="w-5 h-5 text-accent-primary" />
                        <span className="font-mono text-lg font-semibold text-foreground">
                          {delivery.tracking_number}
                        </span>
                        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span className="text-xs font-medium text-green-800">Delivered</span>
                        </div>
                      </div>
                      <p className="text-text-muted">
                        <strong>Customer:</strong> {delivery.customer_name}
                      </p>
                      <p className="text-text-muted">
                        <strong>Product ID:</strong> {delivery.product_id}
                      </p>
                      <p className="text-text-muted text-sm">
                        <strong>Delivered:</strong> {delivery.delivery_date.toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                    <div className="ml-4">
                      <Link 
                        href={`/track/${delivery.tracking_number}`}
                        className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        View Tracking
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manual Tracking Input */}
          <div className="bg-white rounded-card shadow-elegant p-8">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 text-center">
              Or Enter Tracking Number Manually
            </h2>
            <div className="text-center">
              <Link 
                href="/track"
                className="inline-flex items-center gap-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Go to Tracking Page
                <Package className="w-4 h-4" />
              </Link>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-text-muted">
                Try these tracking numbers: {mockDeliveries.map(d => d.tracking_number).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
