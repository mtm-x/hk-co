'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import { 
  Star, 
  MapPin, 
  Thermometer, 
  Calendar, 
  Plane, 
  CheckCircle,
  Heart,
  Share2,
  ShoppingBag
} from 'lucide-react';
import Layout from '@/components/Layout';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { mockProducts } from '@/data/mock-data';
import { mockDeliveries } from '@/data/delivery-data';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Unwrap the params Promise using React.use()
  const { id } = use(params);
  
  // Find the product - in a real app, this would be a database query
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" className="w-5 h-5 fill-amber-200 text-amber-400" />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
      );
    }

    return stars;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const allImages = ['view1', 'view2', 'view3', 'view4']; // Mock image names

  return (
    <Layout>
      <div className="bg-neutral-warm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-card bg-white">
                <div className="w-full h-full bg-gradient-to-br from-accent-primary via-accent-secondary to-orange-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-3xl font-bold">{product.name.charAt(0)}</span>
                    </div>
                    <p className="text-lg font-medium opacity-90">{product.name}</p>
                  </div>
                </div>
                
                {/* Temperature Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">{product.current_temperature}°C</span>
                </div>

                {/* Cold Chain Badge */}
                {product.cold_chain_certified && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white rounded-full px-3 py-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-medium">Cold Chain ✓</span>
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-accent-primary' 
                        : 'border-transparent hover:border-border-subtle'
                    }`}
                  >
                    <div className={`w-full h-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                      index === 1 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                      index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                      'bg-gradient-to-br from-pink-400 to-pink-600'
                    }`}>
                      {index + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Information */}
            <div className="space-y-6">
              {/* Origin */}
              <div className="flex items-center gap-2 text-text-muted">
                <MapPin className="w-4 h-4" />
                <span>{product.origin_region}, {product.origin_country}</span>
              </div>

              {/* Product Name */}
              <h1 className="heading-display text-3xl md:text-4xl text-foreground">
                {product.name}
              </h1>

              {/* Tagline */}
              <p className="text-xl text-accent-primary italic">
                {product.tagline}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.average_rating)}
                </div>
                <span className="font-semibold text-lg text-foreground">
                  {product.average_rating.toFixed(1)}
                </span>
                <span className="text-text-muted">
                  ({product.review_count} reviews)
                </span>
              </div>

              {/* Producer */}
              <div className="bg-white p-4 rounded-lg border border-border-subtle">
                <p className="text-sm text-text-muted mb-1">Crafted by</p>
                <p className="font-semibold text-lg text-foreground">{product.producer_name}</p>
              </div>

              {/* Key Info Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center border border-border-subtle">
                  <Thermometer className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm text-text-muted">Temperature</div>
                  <div className="font-semibold text-foreground">{product.current_temperature}°C</div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center border border-border-subtle">
                  <Calendar className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm text-text-muted">Best By</div>
                  <div className="font-semibold text-foreground text-xs">
                    {formatDate(product.expiration_date)}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg text-center border border-border-subtle">
                  <Plane className="w-6 h-6 text-accent-primary mx-auto mb-2" />
                  <div className="text-sm text-text-muted">Shipping</div>
                  <div className="font-semibold text-foreground text-xs">{product.shipping_method}</div>
                </div>
              </div>

              {/* Dietary Tags */}
              <div className="flex flex-wrap gap-2">
                {product.dietary_tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent-secondary/10 text-accent-secondary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-accent-primary hover:bg-accent-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-3 border border-border-subtle rounded-full hover:bg-neutral-cool transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 border border-border-subtle rounded-full hover:bg-neutral-cool transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabbed Section */}
          <div className="mt-16">
            <div className="border-b border-border-subtle">
              <nav className="flex space-x-8">
                {[
                  { id: 'description', label: 'Description' },
                  { id: 'details', label: 'Details & Pairing' },
                  { id: 'journey', label: 'The Journey' },
                  { id: 'tracking', label: 'Product Tracking' },
                  { id: 'reviews', label: 'Reviews' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-accent-primary text-accent-primary'
                        : 'border-transparent text-text-muted hover:text-foreground'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <div className="max-w-4xl">
                  <div className="prose prose-lg max-w-none mb-8">
                    <div className="text-lg text-foreground leading-relaxed mb-6">
                      {product.description.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-cool p-6 rounded-card">
                    <h3 className="heading-secondary text-xl text-foreground mb-4">Producer Story</h3>
                    <div className="text-foreground leading-relaxed">
                      {product.producer_story.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-card mt-6 border border-border-subtle">
                    <h3 className="heading-secondary text-xl text-foreground mb-4">Cultural Significance</h3>
                    <div className="text-foreground leading-relaxed">
                      {product.cultural_significance.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'details' && (
                <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="heading-secondary text-xl text-foreground mb-4">Tasting Notes</h3>
                    <ul className="space-y-2">
                      {product.tasting_notes.map((note) => (
                        <li key={note} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-primary rounded-full"></div>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="heading-secondary text-xl text-foreground mb-4 mt-8">Ingredients</h3>
                    <ul className="space-y-2">
                      {product.ingredients.map((ingredient) => (
                        <li key={ingredient} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-accent-secondary rounded-full"></div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="heading-secondary text-xl text-foreground mb-4">Perfect Pairings</h3>
                    <div className="grid grid-cols-1 gap-3">
                      {product.pairing_suggestions.map((pairing) => (
                        <div key={pairing} className="bg-neutral-cool p-3 rounded-lg">
                          <span className="font-medium">{pairing}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'journey' && (
                <div className="max-w-4xl">
                  <div className="bg-white p-6 rounded-card border border-border-subtle mb-6">
                    <h3 className="heading-secondary text-xl text-foreground mb-4">The Journey</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">From:</h4>
                        <p className="text-text-muted">{product.journey_map_data.from.city}</p>
                        <p className="text-sm text-text-muted">
                          {product.journey_map_data.from.lat.toFixed(4)}, {product.journey_map_data.from.lng.toFixed(4)}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">To:</h4>
                        <p className="text-text-muted">{product.journey_map_data.to.city}</p>
                        <p className="text-sm text-text-muted">
                          {product.journey_map_data.to.lat.toFixed(4)}, {product.journey_map_data.to.lng.toFixed(4)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-neutral-cool p-6 rounded-card">
                      <h4 className="font-semibold text-foreground mb-3">Shipping Method</h4>
                      <p className="text-text-muted mb-4">{product.shipping_method}</p>
                      
                      <div className={`flex items-center gap-2 ${product.cold_chain_certified ? 'text-green-600' : 'text-red-600'}`}>
                        {product.cold_chain_certified ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-current"></div>
                        )}
                        <span className="font-medium">
                          Cold Chain {product.cold_chain_certified ? 'Certified' : 'Not Certified'}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-card border border-border-subtle">
                      <h4 className="font-semibold text-foreground mb-3">Temperature Control</h4>
                      <p className="text-text-muted mb-2">Current Temperature:</p>
                      <p className="text-2xl font-bold text-blue-600">{product.current_temperature}°C</p>
                      <p className="text-sm text-text-muted mt-2">
                        Maintained throughout the entire journey from producer to your door.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tracking' && (
                <div className="max-w-4xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="heading-secondary text-xl text-foreground mb-4">Product Authentication</h3>
                      <p className="text-foreground mb-6">
                        When you receive this product, you&apos;ll find a QR code on the package.
                        Scan it to access detailed tracking information, quality checks, and
                        verify the authenticity of your purchase.
                      </p>                      <div className="bg-neutral-cool p-4 rounded-lg mb-6">
                        <h4 className="font-semibold text-foreground mb-2">What you&apos;ll find:</h4>
                        <ul className="space-y-2 text-sm text-foreground">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Complete journey from producer to your door
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Temperature monitoring throughout transport
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Quality control verification results
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Authenticity and origin certification
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            Package condition and freshness report
                          </li>
                        </ul>
                      </div>

                      {/* Demo Delivery Link */}
                      {(() => {
                        const demoDelivery = mockDeliveries.find(d => d.product_id === product.id);
                        return demoDelivery ? (
                          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-800 mb-2">Demo: View Sample Tracking</h4>
                            <p className="text-sm text-blue-700 mb-3">
                              See what the tracking page looks like for a delivered product:
                            </p>
                            <a
                              href={`/track/${demoDelivery.tracking_number}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              <ShoppingBag className="w-4 h-4" />
                              View Demo Tracking Page
                            </a>
                          </div>
                        ) : null;
                      })()}
                    </div>

                    <div>
                      <QRCodeGenerator
                        value={`${typeof window !== 'undefined' ? window.location.origin : 'https://the-global-larder.com'}/track/TGL-${product.id.slice(-3).toUpperCase()}-2025-001`}
                        title="Sample QR Code"
                        description="This is how your product QR code will look"
                        showDownload={true}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="max-w-4xl">
                  <div className="bg-white p-6 rounded-card border border-border-subtle text-center">
                    <h3 className="heading-secondary text-xl text-foreground mb-4">Customer Reviews</h3>
                    <p className="text-text-muted">
                      Reviews feature coming soon! In the meantime, this product has received{' '}
                      <span className="font-semibold text-foreground">{product.review_count}</span> reviews 
                      with an average rating of{' '}
                      <span className="font-semibold text-foreground">{product.average_rating}</span> stars.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
