import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './components/Routes.jsx'
import { RouterProvider } from 'react-router'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-7xl  mx-auto'>
    <RouterProvider router={router} />
   </div>
  </StrictMode>,
)
