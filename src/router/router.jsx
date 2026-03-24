import { createBrowserRouter, Link } from 'react-router-dom';

import App from '../App.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Apprentissage from '../pages/Apprentissage.jsx';
import BusinessPlan from '../pages/BusinessPlan.jsx';
import Mentors from '../pages/Mentors.jsx';
import Statistiques from '../pages/Statistiques.jsx';
import Profil from '../pages/Profil.jsx';

import mockData from '../data/mockData.json';

const user = mockData.user;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-[40px]">🚧</p>
        <h2 className="text-[22px] font-bold" style={{ color: '#1A1A1A' }}>Page introuvable</h2>
        <Link to="/" className="text-[14px]" style={{ color: '#2563EB' }}>Retour au tableau de bord</Link>
      </div>
    ),
    children: [
      { index: true,           element: <Dashboard user={user} /> },
      { path: 'apprentissage', element: <Apprentissage /> },
      { path: 'business-plan', element: <BusinessPlan /> },
      { path: 'mentors',       element: <Mentors /> },
      { path: 'statistiques',  element: <Statistiques /> },
      { path: 'profil',        element: <Profil /> },
    ],
  },
]);

export default router;
