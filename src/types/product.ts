export interface Product {
  // Basic Information
  id: string;
  name: string;
  image?: string; // optional filename located in /products folder
  images?: string[]; // optional array of image filenames for gallery
  current_temperature: number; // in Celsius
  expiration_date: Date;

  // Provenance & Story
  origin_country: string;
  origin_region: string;
  producer_name: string;
  producer_story: string; // Supports Markdown
  cultural_significance: string; // Supports Markdown

  // Culinary Details
  tagline: string;
  description: string; // Supports Markdown
  tasting_notes: string[];
  pairing_suggestions: string[];
  dietary_tags: string[];
  ingredients: string[];

  // Shipping & Logistics
  shipping_method: string;
  cold_chain_certified: boolean;
  journey_map_data: {
    from: {
      lat: number;
      lng: number;
      city: string;
    };
    to: {
      lat: number;
      lng: number;
      city: string;
    };
  };

  // User Interaction
  average_rating: number; // 1-5 scale
  review_count: number;
}

export interface Review {
  id: string;
  product_id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: Date;
}

export interface QualityCheck {
  id: string;
  check_type: 'temperature' | 'visual' | 'packaging' | 'freshness' | 'documentation';
  status: 'passed' | 'failed' | 'warning';
  value?: string;
  notes?: string;
  checked_at: Date;
  checked_by: string;
}

export interface TravelCheckpoint {
  id: string;
  location: string;
  coordinates: { lat: number; lng: number };
  timestamp: Date;
  temperature_recorded: number;
  humidity?: number;
  status: 'departed' | 'in_transit' | 'arrived' | 'customs' | 'delivered';
  notes?: string;
}

export interface ProductDelivery {
  id: string;
  product_id: string;
  tracking_number: string;
  customer_name: string;
  delivery_date: Date;
  quality_checks: QualityCheck[];
  travel_path: TravelCheckpoint[];
  final_temperature: number;
  packaging_condition: 'excellent' | 'good' | 'fair' | 'damaged';
  authenticity_verified: boolean;
  delivery_notes?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}
