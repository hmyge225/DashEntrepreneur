import { createBrowserRouter, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import App from '../App.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Apprentissage from '../pages/Apprentissage.jsx';
import BusinessPlan from '../pages/BusinessPlan.jsx';
import Mentors from '../pages/Mentors.jsx';
import Statistiques from '../pages/Statistiques.jsx';
import Profil from '../pages/Profil.jsx';
import Parametres from '../pages/Parametres.jsx';

import mockData from '../data/mockData.json';

const user = mockData.user;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-[40px]">🚧</p>
        <h2 className="text-[25px] font-bold" style={{ color: '#1A1A1A' }}>Page introuvable</h2>
        <Link
          to="/"
          className="flex items-center gap-3 px-6 py-3 rounded-xl text-white text-[15px] font-semibold transition-all duration-200 hover:-translate-x-1 hover:opacity-90"
          style={{ backgroundColor: '#2563EB', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }}
        >
          <ArrowLeft size={20} />
          Retour au tableau de bord
        </Link>
      </div>
    ),
    children: [
      { 
        index: true,           
        element: <Dashboard user={user} /> 
      },
      { 
        path: 'apprentissage', 
        element: <Apprentissage /> 
      },
      { 
        path: 'business-plan', 
        element: <BusinessPlan /> 
      },
      { 
        path: 'mentors',       
        element: <Mentors /> 
      },
      { 
        path: 'statistiques',  
        element: <Statistiques /> 
      },
      {
        path: 'profil',
        element: <Profil />
      },
      {
        path: 'parametres',
        element: <Parametres />
      },
    ],
  },
]);

export default router;
