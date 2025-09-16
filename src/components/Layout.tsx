import Link from 'next/link';
import { ShoppingBag, Search, User, Heart } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border-subtle sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="heading-display text-2xl text-foreground">
                HK & CO
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/products" 
                className="text-text-muted hover:text-foreground transition-colors duration-300"
              >
                Products
              </Link>
              <Link 
                href="/categories" 
                className="text-text-muted hover:text-foreground transition-colors duration-300"
              >
                Categories
              </Link>
              <Link 
                href="/track" 
                className="text-text-muted hover:text-foreground transition-colors duration-300"
              >
                Track Order
              </Link>
              <Link 
                href="/about" 
                className="text-text-muted hover:text-foreground transition-colors duration-300"
              >
                Our Story
              </Link>
              <Link 
                href="/contact" 
                className="text-text-muted hover:text-foreground transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>

            {/* Action Items */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-text-muted hover:text-foreground transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-muted hover:text-foreground transition-colors duration-300">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-muted hover:text-foreground transition-colors duration-300">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2 text-text-muted hover:text-foreground transition-colors duration-300 relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-accent-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-neutral-warm border-t border-border-subtle mt-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="heading-primary text-xl text-foreground mb-4">
                HK & CO
              </h3>
              <p className="text-text-muted mb-4 text-elegant">
                Bringing you the freshest organic vegetables and fruits from Indian farms, 
                each carefully selected for quality, taste, and nutritional value. We believe 
                in delivering farm-fresh goodness directly to your doorstep.
              </p>
              <div className="flex space-x-4">
                <div className="text-sm text-text-muted">
                  <strong>Cold Chain Certified</strong>
                </div>
                <div className="text-sm text-text-muted">
                  <strong>Authentic Sourcing</strong>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="text-text-muted hover:text-foreground transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/categories" className="text-text-muted hover:text-foreground transition-colors">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-text-muted hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-text-muted hover:text-foreground transition-colors">
                    Shipping Info
                  </Link>
                </li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact" className="text-text-muted hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-text-muted hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-text-muted hover:text-foreground transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/track" className="text-text-muted hover:text-foreground transition-colors">
                    Track Order
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border-subtle mt-8 pt-8 text-center text-text-muted text-sm">
            <p>&copy; 2025 HK & CO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
