'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Mail, Phone, MapPin, Send, MessageSquare, Instagram, Facebook, Twitter } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hello@hkco.in?subject=${encodeURIComponent(formData.subject || 'Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Layout>
      <div className="bg-neutral-warm">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-accent-primary via-accent-secondary to-orange-400 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="heading-display text-4xl md:text-6xl mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Have questions about our products? We&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Email */}
              <div className="bg-white rounded-card p-6 shadow-elegant">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Email Us</h3>
                <p className="text-text-muted mb-2">Send us an email anytime!</p>
                <a href="mailto:hello@hkco.in" className="text-accent-primary hover:underline">
                  hello@hkco.in
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-card p-6 shadow-elegant">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Call Us</h3>
                <p className="text-text-muted mb-2">Mon-Fri 9am-6pm IST</p>
                <a href="tel:+911234567890" className="text-accent-primary hover:underline">
                  +91 123 456 7890
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-card p-6 shadow-elegant">
                <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Visit Us</h3>
                <p className="text-text-muted">
                  123 Organic Lane<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-card p-6 shadow-elegant">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-full transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="bg-sky-500 hover:bg-sky-600 text-white p-2 rounded-full transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-card p-8 shadow-elegant">
                <h2 className="heading-primary text-3xl text-foreground mb-6">
                  Send us a Message
                </h2>
                
                {submitted && (
                  <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <div className="bg-green-500 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-green-800 font-medium">
                      Thank you! Your message has been sent successfully.
                    </span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-support">Order Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>

              {/* FAQ Quick Links */}
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Quick Answers
                </h3>
                <ul className="space-y-2 text-text-muted">
                  <li>• <strong>Shipping:</strong> We deliver within 2-3 days with cold chain</li>
                  <li>• <strong>Returns:</strong> 100% satisfaction guarantee within 7 days</li>
                  <li>• <strong>Quality:</strong> All products are organic certified</li>
                  <li>• <strong>Tracking:</strong> Real-time tracking available for all orders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
