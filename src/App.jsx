import { useState } from 'react';
import mockData from './data/mockData.json';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MobileHeader from './components/MobileHeader';
import WelcomeBanner from './components/WelcomeBanner';
import MobileWelcomeCard from './components/MobileWelcomeCard';
import QuickActions from './components/QuickActions';
import Progress from './components/Progress';
import AISuggestions from './components/AISuggestions';
import BadgesCard from './components/BadgesCard';
import NextStepCard from './components/NextStepCard';
import BottomNav from './components/BottomNav';

export default function App() {
  const [user] = useState(mockData.user);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-primary">
      {/* ── SIDEBAR (desktop only) ── */}
      <Sidebar navItems={mockData.navItems} user={user} />

      {/* ── MAIN AREA ── */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

        {/* Desktop Header */}
        <Header user={user} date={mockData.date} />

        {/* Mobile Header */}
        <MobileHeader user={user} />

        {/* ── SCROLL BODY ── */}
        <div className="flex-1 overflow-y-auto bg-bg-primary">

          {/* ── DESKTOP LAYOUT (lg+) ── */}
          <div className="hidden lg:flex gap-6 px-8 py-6">

            {/* Left column */}
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <WelcomeBanner user={user} />
              <QuickActions actions={mockData.quickActions} />
              <AISuggestions suggestions={mockData.aiSuggestions} />
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-5 w-[320px] shrink-0">
              <Progress progressItems={mockData.progressItems} />
              <BadgesCard badges={mockData.badges} />
              <NextStepCard nextStep={mockData.nextStep} />
            </div>
          </div>

          {/* ── MOBILE LAYOUT (<lg) ── */}
          <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
            <MobileWelcomeCard user={user} />
            <QuickActions actions={mockData.quickActions} />
            <Progress progressItems={mockData.progressItems} />
            <AISuggestions suggestions={mockData.aiSuggestions} />
            <BadgesCard badges={mockData.badges} />
            <NextStepCard nextStep={mockData.nextStep} />
          </div>
        </div>

        {/* ── BOTTOM NAV (mobile only) ── */}
        <BottomNav navItems={mockData.bottomNavItems} />
      </div>
    </div>
  );
}
