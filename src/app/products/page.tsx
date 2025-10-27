import { Suspense } from 'react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { mockProducts } from '@/data/mock-data';
import { Filter, SortAsc } from 'lucide-react';

export default function ProductsPage() {
  return (
    <Layout>
      <div className="bg-neutral-warm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-4xl md:text-5xl text-foreground mb-4">
              Fresh Produce
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Discover fresh organic vegetables and fruits from Indian farms, 
              each carefully selected for quality, nutrition, and authentic taste.
            </p>
          </div>

          {/* Filters & Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white border border-border-subtle px-4 py-2 rounded-lg hover:bg-neutral-cool transition-colors">
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <select className="bg-white border border-border-subtle px-4 py-2 rounded-lg">
                <option>All Countries</option>
                <option>India</option>
                <option>Spain</option>
                <option>France</option>
              </select>
              <select className="bg-white border border-border-subtle px-4 py-2 rounded-lg">
                <option>All Categories</option>
                <option>Preserves</option>
                <option>Cheese</option>
                <option>Charcuterie</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <SortAsc className="w-4 h-4 text-text-muted" />
              <select className="bg-white border border-border-subtle px-4 py-2 rounded-lg">
                <option>Name A-Z</option>
                <option>Name Z-A</option>
                <option>Rating High-Low</option>
                <option>Rating Low-High</option>
              </select>
            </div>
          </div>

          {/* Products Count */}
          <div className="mb-8">
            <p className="text-text-muted">
              Showing <span className="font-semibold text-foreground">{mockProducts.length}</span> products
            </p>
          </div>

          {/* Products Grid */}
          <Suspense fallback={<ProductGridSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Suspense>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Load More Products
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Loading skeleton component
function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-card shadow-elegant overflow-hidden animate-pulse">
          <div className="h-64 bg-gray-200"></div>
          <div className="p-6">
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-3"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-1">
              <div className="h-6 w-12 bg-gray-200 rounded"></div>
              <div className="h-6 w-12 bg-gray-200 rounded"></div>
              <div className="h-6 w-12 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
