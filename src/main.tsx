import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles.ts'
import Navigate from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navigate />
    <GlobalStyles />
  </StrictMode>
)
