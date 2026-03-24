import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileModal from './ProfileModal';
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  BarChart3,
  Settings,
};

const ROUTES = {
  dashboard:  '/',
  learn:      '/apprentissage',
  plan:       '/business-plan',
  mentors:    '/mentors',
  stats:      '/statistiques',
  parametres: '/parametres',
};

export default function Sidebar({ navItems, user, isMobileOpen, onCloseMobile }) {
  const [collapsed, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const profileRef = useRef(null);
  
  const effCollapsed = collapsed && !isMobileOpen;

  // SideBar
  function getModalPos() {
    if (!profileRef.current) return {};
    // Capte les coordonnées du bouton
    const rect = profileRef.current.getBoundingClientRect();

    return {
      // Place le modal à droite du bouton (+ 8px)  
      left: rect.right + 8, 
      // Place le modal en bas du bouton
      bottom: window.innerHeight - rect.bottom 
    };
  }

  return (
    <aside
      className={`${isMobileOpen ? 'fixed inset-0 z-50 flex' : 'hidden lg:flex'} flex-col min-h-screen bg-bg-sidebar shrink-0 transition-all duration-300 relative`}
      style={{ width: isMobileOpen ? '100%' : (collapsed ? 68 : 240) }}
    >
      {isMobileOpen && (
        <button
          onClick={onCloseMobile}
          className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer lg:hidden"
        >
          <X size={20} />
        </button>
      )}

      {/* Toggle button */}
      {!isMobileOpen && (
        <button
          onClick={() => setCollapsed(c => !c)}
          className="absolute -right-3.5 top-8 w-7 h-7 rounded-full flex items-center justify-center z-10 border border-white/10 transition-colors hover:opacity-90 cursor-pointer"
          style={{ backgroundColor: '#1E293B' }}
        >
          {collapsed
            ? <ChevronRight size={14} color="white" />
            : <ChevronLeft  size={14} color="white" />
          }
        </button>
      )}

      {/* Logo */}
      <NavLink to="/" onClick={() => { if (isMobileOpen && onCloseMobile) onCloseMobile(); }}>
        <div className={`flex items-center cursor-pointer gap-3 pt-7 pb-5 ${effCollapsed ? 'justify-center px-0' : 'px-5'}`}>
          <div
            className="w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0"
            style={{ backgroundColor: '#2563EB' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="2"  y="2"  width="7" height="7" rx="2" fill="white" />
              <rect x="11" y="2"  width="7" height="7" rx="2" fill="white" fillOpacity="0.6" />
              <rect x="2"  y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.6" />
              <rect x="11" y="11" width="7" height="7" rx="2" fill="white" fillOpacity="0.3" />
            </svg>
          </div>
          {!effCollapsed && (
            <span className="text-white text-[18px] font-extrabold tracking-tight">DashDigi</span>
          )}
        </div>
      </NavLink>
      {/* Navigation */}
      <nav className={`flex flex-col gap-1 flex-1 ${effCollapsed ? 'px-2' : 'px-5'}`}>
        {!effCollapsed && (
          <p className="text-[10px] font-bold tracking-widest mb-2" style={{ color: '#6366F1' }}>
            MENU
          </p>
        )}
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const to = ROUTES[item.id] ?? '/';
          return (
            <NavLink
              key={item.id}
              to={to}
              end={to === '/'}
              onClick={() => {
                if (isMobileOpen && onCloseMobile) onCloseMobile();
              }}
              title={effCollapsed ? item.label : undefined}
              className={({ isActive }) =>
                `flex items-center h-11 rounded-[10px] w-full transition-colors cursor-pointer ${
                  effCollapsed ? 'justify-center px-0' : 'gap-3 px-3'
                } ${
                  isActive
                    ? 'bg-accent text-white'
                    : 'text-white/60 hover:text-white/80 hover:bg-white/5'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {Icon && <Icon size={20} />}
                  {!effCollapsed && (
                    <span className={`text-[14px] ${isActive ? 'font-semibold' : 'font-normal'}`}>
                      {item.label}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Profile */}
      <button
        ref={profileRef}
        onClick={() => setModalOpen(o => !o)}
        className={`hidden lg:flex items-center gap-[10px] py-5 border-t border-white/10 w-full cursor-pointer hover:bg-white/5 transition-colors ${
          effCollapsed ? 'justify-center px-0' : 'px-5'
        }`}
      >
        <div
          className="w-[38px] h-[38px] rounded-full bg-accent shrink-0 flex items-center justify-center text-white text-[14px] font-bold"
          title={effCollapsed ? user.fullName : undefined}
        >
          {user.fullName.charAt(0)}
        </div>
        {!effCollapsed && (
          <div className="flex flex-col gap-0.5 min-w-0 text-left">
            <span className="text-white text-[13px] font-semibold truncate">{user.fullName}</span>
            <span className="text-white/50 text-[11px]">{user.role}</span>
          </div>
        )}
      </button>

      {modalOpen && (
        <ProfileModal
          user={user}
          pos={getModalPos()}
          onClose={() => setModalOpen(false)}
        />
      )}
    </aside>
  );
}
