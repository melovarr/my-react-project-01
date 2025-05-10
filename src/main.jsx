import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { createRoot } from "react-dom/client";

// const techName = "React";
// const imgUrl = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=640";

// createRoot(document.getElementById("root")).render(
//   <div>
//     <h1> Welcome to {techName}</h1>
//     <p>
//       This is JSX - it looks like HTML, but it's not quite the same. It has its own rules!
//     </p>
//     <img src={imgUrl} alt="Man, field and a mountain" width="340" />
//   </div>
// );

