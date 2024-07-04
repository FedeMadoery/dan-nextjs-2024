import { NextResponse } from 'next/server';

/**
 * NextRequest
 * https://nextjs.org/docs/app/api-reference/functions/next-request
 * 
 * NextResponsep
 * https://nextjs.org/docs/app/api-reference/functions/next-response
 */

/**
 * Handler for GET requests.
 * @param {NextRequest} req - The request object.
 * @param {{param: any}} context - Context of the query
 * @returns {void}
 */
export async function GET(req, context) {
  // Sample data
  const data = {
    message: 'Hello, this is your GET response!',
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}

/**
 * Handler for POST requests.
 * @param {NextRequest} req - The request object.
 * @returns {void}
 */
export async function POST(req) {
  const { name, message } = req.body;

  if (!name || !message) {
    return NextResponse.json({ error: 'Name and message are required' }, {status: 400});
  }

  const responseData = {
    receivedName: name,
    receivedMessage: message,
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(responseData);
}

