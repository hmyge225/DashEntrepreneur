import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import mockData from './data/mockData.json';

import Sidebar from './components/desktop/Sidebar';
import Header from './components/desktop/Header';
import MobileHeader from './components/mobile/MobileHeader';
import BottomNav from './components/mobile/BottomNav';

export default function App() {
  const [user] = useState(mockData.user);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      <Sidebar navItems={mockData.navItems} user={user} />

      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Header user={user} date={mockData.date} notifications={mockData.notifications} />
        <MobileHeader user={user} />

        <div className="flex-1 overflow-y-auto bg-bg-primary">
          <Outlet context={{ user }} />
        </div>

        <BottomNav navItems={mockData.bottomNavItems} />
      </div>
    </div>
  );
}
