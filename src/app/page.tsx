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
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 z-0">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-lime-400/40 via-transparent to-green-600/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-300/30 via-transparent to-transparent"></div>
          
          {/* Animated shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>
          
          {/* Decorative elements - vegetables emojis */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute text-9xl top-10 left-10 animate-float">🥬</div>
            <div className="absolute text-8xl top-20 right-20 animate-float-delay-1">🥭</div>
            <div className="absolute text-7xl bottom-20 left-20 animate-float-delay-2">🧅</div>
            <div className="absolute text-9xl bottom-10 right-10 animate-float">🌽</div>
            <div className="absolute text-6xl top-1/2 left-1/4 animate-float-delay-1">🥕</div>
            <div className="absolute text-7xl top-1/3 right-1/4 animate-float-delay-2">🍅</div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6 inline-block animate-bounce-slow">
            <div className="text-6xl">🌱</div>
          </div>
          <h1 className="heading-display text-5xl md:text-7xl mb-6 fade-in drop-shadow-2xl">
            Fresh from the Farm.
            <br />
            <span className="text-yellow-300 drop-shadow-lg">Delivered to Your Door.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto slide-up">
            Discover the freshest organic vegetables and fruits from Indian farms. 
            Every product is carefully selected for quality, taste, and nutrition.
          </p>
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            Explore Our Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>100% Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              <span>Premium Quality</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-neutral-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-6">
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
      <section className="py-24">
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
                className="group relative h-80 rounded-card overflow-hidden card-hover shadow-elegant"
              >
                {/* Beautiful gradient backgrounds with emojis */}
                <div className={`w-full h-full relative ${
                  index === 0 ? 'bg-gradient-to-br from-orange-300 via-red-400 to-pink-500' : 
                  index === 1 ? 'bg-gradient-to-br from-yellow-300 via-orange-400 to-red-400' : 
                  'bg-gradient-to-br from-red-300 via-pink-400 to-rose-500'
                } group-hover:scale-110 transition-transform duration-700`}>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className={`absolute text-9xl opacity-20 ${
                      index === 0 ? 'top-10 right-10 animate-float' :
                      index === 1 ? 'top-5 left-5 animate-float-delay-1' :
                      'bottom-10 right-10 animate-float-delay-2'
                    }`}>
                      {index === 0 ? '🥕' : index === 1 ? '🍎' : '🥬'}
                    </div>
                    <div className={`absolute text-7xl opacity-15 ${
                      index === 0 ? 'bottom-5 left-5 animate-float-delay-1' :
                      index === 1 ? 'bottom-10 right-10 animate-float-delay-2' :
                      'top-5 left-5 animate-float'
                    }`}>
                      {index === 0 ? '🧅' : index === 1 ? '🥭' : '🌶️'}
                    </div>
                  </div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <div className="text-5xl mb-4">
                      {index === 0 ? '🥗' : index === 1 ? '🍇' : '🌿'}
                    </div>
                    <h3 className="heading-secondary text-3xl mb-3 drop-shadow-lg">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-lg drop-shadow-md">
                      {category.description}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
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
              <p className="text-lg text-text-muted mb-12">
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

            <div className="relative h-96 rounded-card overflow-hidden shadow-elegant group">
              {/* Beautiful animated background */}
              <div className="w-full h-full relative bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 group-hover:scale-110 transition-transform duration-700">
                {/* Animated vegetables floating */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute text-8xl top-10 left-10 opacity-20 animate-float">🌾</div>
                  <div className="absolute text-7xl bottom-10 right-10 opacity-15 animate-float-delay-1">🚜</div>
                  <div className="absolute text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 animate-float-delay-2">🌱</div>
                  <div className="absolute text-5xl top-20 right-20 opacity-20 animate-float">🥕</div>
                  <div className="absolute text-6xl bottom-20 left-20 opacity-15 animate-float-delay-1">🌽</div>
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                
                {/* Radial glow effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white transform group-hover:scale-110 transition-transform duration-500">
                    <div className="mb-6 animate-bounce-slow">
                      <div className="text-8xl drop-shadow-2xl">🌾</div>
                    </div>
                    <p className="text-2xl font-bold drop-shadow-lg mb-2">Farm to Table</p>
                    <p className="text-lg opacity-90 drop-shadow-md px-4">Fresh. Organic. Sustainable.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-primary text-4xl md:text-5xl text-foreground mb-16">
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
