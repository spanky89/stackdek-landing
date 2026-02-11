import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase credentials')
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req, res) {
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
    console.log('Signup request received:', req.body)
    console.log('Supabase URL:', supabaseUrl)
    console.log('Service key exists:', !!supabaseServiceKey)

    const { name, email, phone, trade, headache } = req.body

    // Validate required fields
    if (!name || !email) {
      console.log('Validation failed - missing name or email')
      return res.status(400).json({ error: 'Name and email are required' })
    }

    console.log('About to insert into Supabase...')
    
    // Store in Supabase
    const { data, error: dbError } = await supabase
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
      return res.status(500).json({ error: 'Database error: ' + dbError.message })
    }

    console.log('Successfully inserted signup:', data)

    return res.status(200).json({ 
      success: true, 
      message: 'Signup recorded successfully' 
    })
  } catch (error) {
    console.error('Signup error:', error)
    return res.status(500).json({ error: 'Error: ' + error.message })
  }
}
