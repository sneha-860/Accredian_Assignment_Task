import { NextResponse } from 'next/server';

// In-memory array to store leads for this mock implementation
const leads: any[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, program } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required fields.' },
        { status: 400 }
      );
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      program: program || 'Not specified',
      createdAt: new Date().toISOString(),
    };

    leads.push(newLead);
    
    // In a real application, you would save this to a database, 
    // send a confirmation email, or post to a CRM webhook.
    console.log('New Lead Captured:', newLead);

    return NextResponse.json(
      { message: 'Lead captured successfully', leadId: newLead.id },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your request.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Simple endpoint to verify the mock database (you'd typically secure this)
  return NextResponse.json({
    message: 'Leads endpoint is active. Use POST to submit leads.',
    leadsCount: leads.length,
    // Avoid returning all leads in a real production app without auth!
    leads: leads 
  });
}
