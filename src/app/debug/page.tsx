import Layout from '@/components/Layout';
import Link from 'next/link';
import { mockDeliveries } from '@/data/delivery-data';

export default function DebugPage() {
  return (
    <Layout>
      <div className="py-12 px-4">
        <h1 className="text-2xl font-bold mb-8">Debug: Available Tracking Numbers</h1>
        <div className="space-y-4">
          {mockDeliveries.map((delivery) => (
            <div key={delivery.id} className="bg-white p-4 rounded-lg shadow">
              <p><strong>Tracking Number:</strong> {delivery.tracking_number}</p>
              <p><strong>Product:</strong> {delivery.product_id}</p>
              <p><strong>Customer:</strong> {delivery.customer_name}</p>
              <Link 
                href={`/track/${delivery.tracking_number}`}
                className="text-blue-600 hover:underline inline-block"
              >
                View Tracking →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
