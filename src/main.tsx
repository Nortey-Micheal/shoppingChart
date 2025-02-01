import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './context/cartProvider.tsx'
import { DisplayProvider } from './context/displayContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </DisplayProvider>
  </StrictMode>,
)
