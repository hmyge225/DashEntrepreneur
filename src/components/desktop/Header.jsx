import { useState } from 'react';
import { Bell } from 'lucide-react';
import ProfileModal from './ProfileModal';
import NotificationsPanel from './NotificationsPanel';

export default function Header({ user, date, notifications }) {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);

  const unreadCount = notifications?.filter(n => !n.read).length ?? 0;

  return (
    <>
      <header className="hidden lg:flex items-center justify-between h-[72px] px-8 bg-bg-topbar border-b border-border shrink-0">

        <div className="flex flex-col gap-0.5">
          <h1 className="text-[24px] font-bold text-text-primary leading-tight">
            Bonjour, {user.name} 👋
          </h1>
          <p className="text-[13px] text-text-secondary">
            {date} · {user.domain}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 px-4.5 py-2 rounded-lg text-[13px] font-semibold"
            style={{ backgroundColor: '#FEF3C7', color: '#D97706' }}
          >
            🔥 {user.streak} jours de streak
          </div>

          {/* Bouton Notifications */}
          <div className="relative">
            <button
              onClick={() => { setShowNotifs(v => !v); setShowProfile(false); }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              style={{ backgroundColor: '#F3F4F6' }}
            >
              <Bell size={18} color="#6B7280" />
            </button>
            {unreadCount > 0 && (
              <span
                className="absolute -top-1 -right-1 w-4.5 h-4.5 rounded-full text-[10px] font-bold text-white flex items-center justify-center"
                style={{ backgroundColor: '#2563EB' }}
              >
                {unreadCount}
              </span>
            )}
          </div>

          {/* Bouton Profil */}
          <button
            onClick={() => { setShowProfile(v => !v); setShowNotifs(false); }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0 cursor-pointer transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#2563EB' }}
          >
            {user.fullName.charAt(0)}
          </button>
        </div>
      </header>

      {showNotifs && (
        <NotificationsPanel notifications={notifications} onClose={() => setShowNotifs(false)} />
      )}
      {showProfile && (
        <ProfileModal user={user} onClose={() => setShowProfile(false)} />
      )}
    </>
  );
}
