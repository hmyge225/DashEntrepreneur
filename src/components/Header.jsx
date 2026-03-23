import { Bell } from 'lucide-react';

export default function Header({ user, date }) {
  return (
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

        <button
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: '#F3F4F6' }}
        >
          <Bell size={18} color="#6B7280" />
        </button>

        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
          style={{ backgroundColor: '#2563EB' }}
        >
          {user.fullName.charAt(0)}
        </div>
      </div>
    </header>
  );
}
