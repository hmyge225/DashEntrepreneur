import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  BarChart3,
} from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  BarChart3,
};

const ROUTES = {
  dashboard:  '/',
  learn:      '/apprentissage',
  plan:       '/business-plan',
  mentors:    '/mentors',
  stats:      '/statistiques',
};

export default function Sidebar({ navItems, user }) {
  return (
    <aside className="hidden lg:flex flex-col w-[240px] min-h-screen bg-bg-sidebar shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 pt-7 pb-5">
        <div
          className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: '#2563EB' }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="2" fill="white" />
            <rect x="11" y="2" width="7" height="7" rx="2" fill="white" fillOpacity="0.6" />
            <rect x="2" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.6" />
            <rect x="11" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.3" />
          </svg>
        </div>
        <span className="text-white text-[18px] font-extrabold tracking-tight">DashDigi</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 px-5 flex-1">
        <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#6366F1' }}>
          MENU
        </p>
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const to = ROUTES[item.id] ?? '/';
          return (
            <NavLink
              key={item.id}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 h-11 px-3 rounded-[10px] w-full text-left transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {Icon && <Icon size={20} />}
                  <span className={`text-[14px] ${isActive ? 'font-semibold' : 'font-normal'}`}>
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Profile */}
      <div className="flex items-center gap-[10px] px-5 py-5 border-t border-white/10">
        <div className="w-[38px] h-[38px] rounded-full bg-accent shrink-0 flex items-center justify-center text-white text-[14px] font-bold">
          {user.fullName.charAt(0)}
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <span className="text-white text-[13px] font-semibold truncate">{user.fullName}</span>
          <span className="text-white/50 text-[11px]">{user.role}</span>
        </div>
      </div>
    </aside>
  );
}
