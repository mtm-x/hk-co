import { ProductDelivery, QualityCheck, TravelCheckpoint } from '@/types/product';

// Mock quality checks for delivered Indian produce
const mockQualityChecks: QualityCheck[] = [
  {
    id: 'qc-001',
    check_type: 'temperature',
    status: 'passed',
    value: '8.2°C',
    notes: 'Temperature maintained within optimal range throughout cold chain',
    checked_at: new Date('2025-09-09T14:30:00Z'),
    checked_by: 'Quality Control Team - Mumbai Hub'
  },
  {
    id: 'qc-002',
    check_type: 'packaging',
    status: 'passed',
    value: 'Intact',
    notes: 'Eco-friendly packaging shows no signs of damage or contamination',
    checked_at: new Date('2025-09-09T14:32:00Z'),
    checked_by: 'Quality Control Team - Mumbai Hub'
  },
  {
    id: 'qc-003',
    check_type: 'visual',
    status: 'passed',
    value: 'Excellent',
    notes: 'Fresh appearance with vibrant color indicating peak nutritional value',
    checked_at: new Date('2025-09-09T14:35:00Z'),
    checked_by: 'Quality Control Team - Mumbai Hub'
  },
  {
    id: 'qc-004',
    check_type: 'freshness',
    status: 'passed',
    value: '96%',
    notes: 'Farm-fresh quality maintained with optimal nutrient retention',
    checked_at: new Date('2025-09-09T14:38:00Z'),
    checked_by: 'Quality Control Team - Mumbai Hub'
  },
  {
    id: 'qc-005',
    check_type: 'documentation',
    status: 'passed',
    value: 'Complete',
    notes: 'Organic certification and traceability documentation verified',
    checked_at: new Date('2025-09-09T14:40:00Z'),
    checked_by: 'Certification & Documentation Team'
  }
];

// Mock travel checkpoints for Indian produce
const tomatoTravelPath: TravelCheckpoint[] = [
  {
    id: 'cp-001',
    location: 'Nashik, Maharashtra',
    coordinates: { lat: 19.9975, lng: 73.7898 },
    timestamp: new Date('2025-09-07T06:00:00Z'),
    status: 'departed',
    temperature_recorded: 12.0,
    notes: 'Harvested fresh from organic farms in Western Ghats region'
  },
  {
    id: 'cp-002',
    location: 'Mumbai Cold Storage Hub',
    coordinates: { lat: 19.0760, lng: 72.8777 },
    timestamp: new Date('2025-09-07T10:30:00Z'),
    status: 'in_transit',
    temperature_recorded: 8.5,
    notes: 'Sorted and packaged in temperature-controlled facility'
  },
  {
    id: 'cp-003',
    location: 'Mumbai Distribution Center',
    coordinates: { lat: 19.0896, lng: 72.8656 },
    timestamp: new Date('2025-09-07T14:15:00Z'),
    status: 'in_transit',
    temperature_recorded: 8.0,
    notes: 'Quality inspection completed, loaded for regional delivery'
  },
  {
    id: 'cp-004',
    location: 'Pune Logistics Hub',
    coordinates: { lat: 18.5204, lng: 73.8567 },
    timestamp: new Date('2025-09-08T08:45:00Z'),
    status: 'arrived',
    temperature_recorded: 8.2,
    notes: 'Arrived at regional hub, preparing for local delivery'
  },
  {
    id: 'cp-005',
    location: 'Local Delivery Vehicle',
    coordinates: { lat: 18.5679, lng: 73.9143 },
    timestamp: new Date('2025-09-08T15:30:00Z'),
    status: 'in_transit',
    temperature_recorded: 8.5,
    notes: 'Final freshness check before customer delivery'
  },
  {
    id: 'cp-006',
    location: 'Customer Address, Pune',
    coordinates: { lat: 18.5204, lng: 73.8567 },
    timestamp: new Date('2025-09-09T11:00:00Z'),
    status: 'delivered',
    temperature_recorded: 8.0,
    notes: 'Fresh tomatoes delivered to customer, quality verified on arrival'
  }
];

export const mockDeliveries: ProductDelivery[] = [
  {
    id: 'delivery-001',
    product_id: 'organic-red-onions-002',
    tracking_number: 'HKC-TOM-2025-001',
    customer_name: 'Priya Sharma',
    delivery_date: new Date('2025-09-09T14:45:00Z'),
    quality_checks: mockQualityChecks,
    travel_path: tomatoTravelPath,
    final_temperature: 8.0,
    packaging_condition: 'excellent',
    authenticity_verified: true,
    delivery_notes: 'Fresh tomatoes delivered in perfect condition. Customer satisfied with quality and freshness.'
  },
  {
    id: 'delivery-002',
    product_id: 'organic-baby-spinach-003',
    tracking_number: 'HKC-SPI-2025-002',
    customer_name: 'Rajesh Kumar',
    delivery_date: new Date('2025-09-08T16:20:00Z'),
    quality_checks: mockQualityChecks.map((qc, index) => ({
      ...qc,
      id: `qc-002-${index + 1}`,
      value: qc.check_type === 'temperature' ? '6.5°C' : qc.value
    })),
    travel_path: tomatoTravelPath.map((cp, index) => ({
      ...cp,
      id: cp.id.replace('001', '002'),
      temperature_recorded: 6.5,
      location: index === 0 ? 'Kochi, Kerala' : cp.location.replace('Nashik', 'Kochi').replace('Maharashtra', 'Kerala'),
      coordinates: index === 0 ? { lat: 9.9312, lng: 76.2673 } : cp.coordinates
    })),
    final_temperature: 6.5,
    packaging_condition: 'excellent',
    authenticity_verified: true,
    delivery_notes: 'Organic spinach delivered fresh with perfect texture. Organic certification verified.'
  },
  {
    id: 'delivery-003',
    product_id: 'organic-alphonso-mangoes-001',
    tracking_number: 'HKC-MAN-2025-003',
    customer_name: 'Anita Desai',
    delivery_date: new Date('2025-09-07T11:30:00Z'),
    quality_checks: mockQualityChecks.map((qc, index) => ({
      ...qc,
      id: `qc-003-${index + 1}`,
      value: qc.check_type === 'temperature' ? '12.5°C' : qc.value
    })),
    travel_path: tomatoTravelPath.map((cp, index) => ({
      ...cp,
      id: cp.id.replace('001', '003'),
      temperature_recorded: 12.5,
      location: index === 0 ? 'Ratnagiri, Maharashtra' : cp.location.replace('Nashik', 'Ratnagiri'),
      coordinates: index === 0 ? { lat: 16.9944, lng: 73.3000 } : cp.coordinates
    })),
    final_temperature: 12.5,
    packaging_condition: 'excellent',
    authenticity_verified: true,
    delivery_notes: 'Premium Alphonso mangoes delivered at perfect ripeness. GI tag verified authenticity.'
  }
];
