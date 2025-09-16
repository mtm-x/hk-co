import Layout from '@/components/Layout';
import Link from 'next/link';
import { mockCategories } from '@/data/mock-data';
import { Leaf, Apple, Salad, Flower } from 'lucide-react';

export default function CategoriesPage() {
  const categoryIcons = {
    'vegetables': Leaf,
    'fruits': Apple,
    'leafy-greens': Salad,
    'herbs-spices': Flower,
  };

  return (
    <Layout>
      <div className="bg-neutral-warm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="heading-primary text-4xl md:text-5xl text-foreground mb-4">
              Product Categories
            </h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Explore our fresh categories of organic produce, each carefully selected 
              from the finest Indian farms and delivered with care.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockCategories.map((category, index) => {
              const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Leaf;
              
              return (
                <Link 
                  key={category.id} 
                  href={`/categories/${category.slug}`}
                  className="group bg-white rounded-card p-8 shadow-elegant card-hover text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    index === 0 ? 'bg-green-100' :
                    index === 1 ? 'bg-orange-100' :
                    index === 2 ? 'bg-emerald-100' :
                    'bg-yellow-100'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      index === 0 ? 'text-green-600' :
                      index === 1 ? 'text-orange-600' :
                      index === 2 ? 'text-emerald-600' :
                      'text-yellow-600'
                    }`} />
                  </div>
                  
                  <h3 className="heading-secondary text-xl text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-text-muted text-sm">
                    {category.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Featured Information */}
          <div className="mt-16 bg-white rounded-card p-8 shadow-elegant">
            <div className="text-center mb-8">
              <h2 className="heading-secondary text-2xl text-foreground mb-4">
                Why Choose HK & CO?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">100% Organic</h3>
                <p className="text-text-muted text-sm">
                  All our produce is grown using organic methods without harmful chemicals or pesticides.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Salad className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Farm Fresh</h3>
                <p className="text-text-muted text-sm">
                  Harvested at peak freshness and delivered within 24 hours to maintain nutrition and taste.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Apple className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-text-muted text-sm">
                  Each product undergoes strict quality checks to ensure only the best reaches your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
