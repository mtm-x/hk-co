'use client';

import Layout from '@/components/Layout';
import { Heart, Award, Leaf, Users, Target, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-neutral-warm">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-accent-primary via-accent-secondary to-orange-400 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="heading-display text-4xl md:text-6xl mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Bringing authentic Indian produce from farm to your table with transparency, 
              quality, and care at every step of the journey.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block bg-accent-primary/10 rounded-full p-3 mb-6">
                <Target className="w-8 h-8 text-accent-primary" />
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                At HK & CO, we&apos;re on a mission to connect conscious consumers with the 
                finest organic produce from Indian farms. We believe in transparency, 
                sustainability, and supporting local farmers who practice traditional, 
                eco-friendly farming methods.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Every product we offer comes with complete traceability - from the farm 
                where it was grown, through our temperature-controlled supply chain, 
                right to your doorstep. Quality you can trust, taste you can savor.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-card h-96 flex items-center justify-center shadow-elegant">
              <Globe className="w-32 h-32 text-white opacity-20" />
            </div>
          </div>

          {/* Values Grid */}
          <div className="mb-20">
            <h2 className="heading-primary text-3xl md:text-4xl text-foreground text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white rounded-card p-8 shadow-elegant hover:shadow-xl transition-shadow">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-secondary text-xl text-foreground mb-4">
                  100% Organic
                </h3>
                <p className="text-text-muted leading-relaxed">
                  We partner exclusively with certified organic farms that use sustainable 
                  practices, ensuring every product is free from harmful chemicals and pesticides.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-white rounded-card p-8 shadow-elegant hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-secondary text-xl text-foreground mb-4">
                  Quality Assured
                </h3>
                <p className="text-text-muted leading-relaxed">
                  Every shipment undergoes rigorous quality checks and temperature monitoring 
                  throughout the cold chain to guarantee freshness and safety.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-white rounded-card p-8 shadow-elegant hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="heading-secondary text-xl text-foreground mb-4">
                  Farmer First
                </h3>
                <p className="text-text-muted leading-relaxed">
                  We ensure fair prices for our farming partners, supporting sustainable 
                  livelihoods and preserving traditional agricultural knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-card p-8 md:p-12 shadow-elegant mb-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <Heart className="w-12 h-12 text-red-500" />
              </div>
              <h2 className="heading-primary text-3xl md:text-4xl text-foreground text-center mb-8">
                How We Started
              </h2>
              <div className="space-y-6 text-lg text-text-muted leading-relaxed">
                <p>
                  HK & CO was born from a simple realization: finding authentic, organic produce 
                  from India with complete transparency was nearly impossible. We wanted to know 
                  where our food came from, who grew it, and how it reached our table.
                </p>
                <p>
                  In 2023, we embarked on a journey across Maharashtra, Kerala, and Punjab, 
                  meeting farmers who were passionate about organic farming. We saw firsthand 
                  the dedication, knowledge, and care that goes into growing truly exceptional produce.
                </p>
                <p>
                  Today, we work with over 50 farming families across India, bringing their 
                  finest harvests directly to conscious consumers. Each product tells a story - 
                  of the land, the farmer, and the journey from farm to your table.
                </p>
                <p className="text-xl font-semibold text-accent-primary text-center mt-8">
                  Join us in celebrating authentic Indian agriculture, one product at a time.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-card p-6 text-center text-white shadow-elegant">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Farming Families</div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-card p-6 text-center text-white shadow-elegant">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-90">Organic Certified</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-card p-6 text-center text-white shadow-elegant">
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm opacity-90">States Covered</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-card p-6 text-center text-white shadow-elegant">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Cold Chain</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
