import { Bell } from 'lucide-react';

export default function MobileHeader({ user }) {
  return (
    <header className="flex lg:hidden items-center justify-between h-16 px-5 bg-bg-topbar border-b border-border shrink-0">
      {/* Left: Avatar + Greeting */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[14px] font-bold shrink-0"
          style={{ backgroundColor: '#2563EB' }}
        >
          {user.fullName.charAt(0)}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-bold text-text-primary leading-tight">
            Bonjour, {user.name} 👋
          </span>
          <span
            className="text-[11px] font-semibold px-2.5 py-0.5 rounded-xl w-fit"
            style={{ backgroundColor: '#E0E7FF', color: '#3730A3' }}
          >
            {user.domain}
          </span>
        </div>
      </div>

      {/* Right: Bell */}
      <button
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 cursor-pointer"
        style={{ backgroundColor: '#F3F4F6' }}
      >
        <Bell size={18} color="#6B7280" />
      </button>
    </header>
  );
}
