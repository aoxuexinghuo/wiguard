import { Pool } from 'pg'

interface User {
  id: number
  username: string
  password: string
}

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

export default pool