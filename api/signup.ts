import { VercelRequest, VercelResponse } from '@vercel/node'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY
const googleSheetsApiKey = process.env.GOOGLE_SHEETS_API_KEY
const sheetsId = '1auECJo1Z8iNqOCKaPdyqrWAom1zNGXbEmNxPeuw_CVs'

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase credentials')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function appendToGoogleSheet(name: string, email: string, phone: string, trade: string, headache: string) {
  if (!googleSheetsApiKey) {
    console.warn('Google Sheets API key not configured, skipping sheet append')
    return
  }

  try {
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    const values = [[name, email, phone || '', trade || '', headache || '', timestamp]]

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/Sheet1!A:F:append?valueInputOption=USER_ENTERED&key=${googleSheetsApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ values }),
      }
    )

    if (!response.ok) {
      console.error('Google Sheets error:', await response.text())
    }
  } catch (error) {
    console.error('Failed to append to Google Sheet:', error)
  }
}

interface SignupData {
  name: string
  email: string
  phone?: string
  trade?: string
  headache?: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, trade, headache } = req.body as SignupData

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' })
    }

    // Store in Supabase
    const { error: dbError } = await supabase
      .from('signups')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          trade: trade || null,
          headache: headache || null,
          created_at: new Date().toISOString(),
        },
      ])

    if (dbError) {
      console.error('Database error:', dbError)
      return res.status(500).json({ error: 'Failed to save signup' })
    }

    // Add to Google Sheet (async, don't wait)
    appendToGoogleSheet(name, email, phone || '', trade || '', headache || '').catch(err => 
      console.error('Sheet append failed:', err)
    )

    // TODO: Send notification email (Resend or similar)

    return res.status(200).json({ 
      success: true, 
      message: 'Signup recorded successfully' 
    })
  } catch (error) {
    console.error('Signup error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
