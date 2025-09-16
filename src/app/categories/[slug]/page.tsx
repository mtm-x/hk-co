import { use } from 'react';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { mockProducts, mockCategories } from '@/data/mock-data';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);
  
  // Find the category
  const category = mockCategories.find(c => c.slug === slug);
  
  if (!category) {
    notFound();
  }

  // Filter products by category - for now, we'll show all products
  // In a real app, products would have category associations
  const categoryProducts = mockProducts.filter(product => {
    if (slug === 'vegetables') {
      return product.name.toLowerCase().includes('onion');
    }
    if (slug === 'fruits') {
      return product.name.toLowerCase().includes('mango');
    }
    if (slug === 'leafy-greens') {
      return product.name.toLowerCase().includes('spinach');
    }
    return false;
  });

  return (
    <Layout>
      <div className="bg-neutral-warm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-4xl md:text-5xl text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-text-muted">
              Showing <span className="font-semibold text-foreground">{categoryProducts.length}</span> products in {category.name}
            </p>
          </div>

          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white rounded-card p-12 shadow-elegant">
                <h3 className="heading-secondary text-xl text-foreground mb-4">
                  Coming Soon!
                </h3>
                <p className="text-text-muted mb-6">
                  We&apos;re working hard to bring you the finest {category.name.toLowerCase()} from our partner farms.
                </p>
                <p className="text-sm text-text-muted">
                  Check back soon or explore our other categories.
                </p>
              </div>
            </div>
          )}

          {/* Category Information */}
          <div className="mt-16 bg-white rounded-card p-8 shadow-elegant">
            <h2 className="heading-secondary text-2xl text-foreground mb-6 text-center">
              About Our {category.name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Quality Standards</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>100% organic farming methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>No chemical pesticides or fertilizers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Harvested at peak freshness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Cold chain preservation</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Delivery Promise</h3>
                <ul className="space-y-2 text-text-muted">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>24-hour farm to door delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Temperature-controlled transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Careful packaging to prevent damage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>100% freshness guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
