import React from 'react'

import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ivoaofipzllrsyzymtha.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2b2FvZmlwemxscnN5enltdGhhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzYyMjcxOCwiZXhwIjoyMDEzMTk4NzE4fQ.ohmO9rBGH5H31wvD9TmHxzln7g9M5COWTQGpCZE1-QY')

const BookRecordsPage = () => {
  return (
    <div>
      <h1>BookRecordsPage</h1>
    </div>
  )
}

export default BookRecordsPage