import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import AppRouter from "./AppRouter.jsx";

import AuthProvider from "./providers/AuthProvider";
import Navbar from './components/Navbar.jsx';
import Buttons from './components/Buttons.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Buttons />
      <AppRouter/>
    </BrowserRouter>
  </AuthProvider>
);
