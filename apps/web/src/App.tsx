import { gql, useQuery } from '@apollo/client'
import './App.css'

const STATUS_QUERY = gql`
  query Status { status }
`

function App() {
  const { data, loading, error } = useQuery(STATUS_QUERY)
  return (
    <div style={{ padding: 16 }}>
      <h1>Wealth Tracker</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      {data && <p>API status: {data.status}</p>}
    </div>
  )
}

export default App
