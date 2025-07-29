import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import StarterCard from './Starter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StarterCard />
    {/* <App /> */}
    {/* <Open /> */}
  </StrictMode>
)
