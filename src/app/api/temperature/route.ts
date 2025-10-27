import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for temperature data
// This will reset when the server restarts, which is perfect for demo purposes
let temperatureData = {
  temperature: 25.0,
  humidity: 60.0, // optional - if your sensor supports it
  timestamp: new Date().toISOString(),
  location: 'Storage Facility',
};

// GET endpoint - Website reads temperature
export async function GET() {
  return NextResponse.json({
    success: true,
    data: temperatureData,
  });
}

// POST endpoint - Raspberry Pi sends temperature
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Update temperature data
    temperatureData = {
      temperature: body.temperature || temperatureData.temperature,
      humidity: body.humidity || temperatureData.humidity,
      timestamp: new Date().toISOString(),
      location: body.location || temperatureData.location,
    };

    return NextResponse.json({
      success: true,
      message: 'Temperature updated successfully',
      data: temperatureData,
    });
  } catch {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid request' 
      },
      { status: 400 }
    );
  }
}
