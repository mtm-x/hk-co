import Link from 'next/link';
import { ArrowRight, Globe, Truck, Shield, Star } from 'lucide-react';
import Layout from '@/components/Layout';
import ProductCard from '@/components/ProductCard';
import { mockProducts, mockCategories } from '@/data/mock-data';

export default function Home() {
  const featuredProducts = mockProducts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-accent-primary via-accent-secondary to-neutral-warm"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="heading-display text-5xl md:text-7xl mb-6 fade-in">
            Fresh from the Farm.
            <br />
            <span className="text-accent-primary">Delivered to Your Door.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto slide-up">
            Discover the freshest organic vegetables and fruits from Indian farms. 
            Every product is carefully selected for quality, taste, and nutrition.
          </p>
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-primary/90 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-section bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-4">
              Fresh Picks
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Handpicked organic vegetables and fruits that represent the finest quality 
              from Indian farms, delivered fresh to your doorstep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-accent-primary text-accent-primary hover:bg-accent-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Explore our fresh categories of organic vegetables, seasonal fruits, and premium produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockCategories.map((category, index) => (
              <Link 
                key={category.id} 
                href={`/categories/${category.slug}`}
                className="group relative h-64 rounded-card overflow-hidden card-hover"
              >
                <div className={`w-full h-full bg-gradient-to-br ${
                  index === 0 ? 'from-orange-400 to-red-500' : 
                  index === 1 ? 'from-yellow-400 to-orange-500' : 
                  'from-red-400 to-pink-500'
                } group-hover:scale-105 transition-transform duration-500`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="heading-secondary text-2xl mb-2">{category.name}</h3>
                  <p className="text-white/80">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-section bg-neutral-cool">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-text-muted mb-6 text-elegant">
                We believe fresh, organic produce is the foundation of healthy living. 
                Our mission is to connect you directly with Indian farmers who grow 
                the freshest vegetables and fruits using sustainable, organic farming 
                practices without harmful chemicals.
              </p>
              <p className="text-lg text-text-muted mb-8">
                From small organic farms to cooperative farming communities, we partner 
                with dedicated farmers who pour their passion into growing nutritious produce. 
                Through our cold-chain logistics, your fresh vegetables and fruits arrive 
                at your door with maximum freshness and nutrition intact.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-accent-primary mx-auto mb-2" />
                  <div className="font-semibold text-2xl text-foreground">50+</div>
                  <div className="text-sm text-text-muted">Farms</div>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-accent-primary mx-auto mb-2" />
                  <div className="font-semibold text-2xl text-foreground">100%</div>
                  <div className="text-sm text-text-muted">Organic</div>
                </div>
                <div className="text-center">
                  <Truck className="w-8 h-8 text-accent-primary mx-auto mb-2" />
                  <div className="font-semibold text-2xl text-foreground">24hr</div>
                  <div className="text-sm text-text-muted">Delivery</div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-card overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium opacity-90">Artisans at Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                location: "New York, NY",
                rating: 5,
                text: "The Sicilian marmalade transported me straight to the Mediterranean. Absolutely divine quality and the story behind each product makes every bite special.",
              },
              {
                name: "Michael Rodriguez",
                location: "San Francisco, CA", 
                rating: 5,
                text: "As a chef, I'm incredibly picky about ingredients. The Global Larder sources the most authentic products I've ever found. My customers can taste the difference.",
              },
              {
                name: "Emma Thompson",
                location: "Austin, TX",
                rating: 5,
                text: "The cold chain delivery is impressive - everything arrives in perfect condition. It's like having a personal connection to artisans around the world.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-card shadow-elegant">
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-text-muted mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
