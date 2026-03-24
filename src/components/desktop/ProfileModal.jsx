import { useNavigate } from 'react-router-dom';
import { X, TrendingUp, Settings, LogOut } from 'lucide-react';

export default function ProfileModal({ user, onClose }) {
  const navigate = useNavigate();

  function goToSettings() {
    onClose();
    navigate('/parametres');
  }

  return (
    <>
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      <div
        className="fixed top-[80px] right-6 z-50 w-[320px] rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: '#FFFFFF', border: '1px solid #E2E8F0' }}
      >
        <div
          className="relative px-6 pt-6 pb-4"
          style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)' }}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <X size={14} color="#fff" />
          </button>

          <div className="flex items-center gap-3">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[22px] font-bold shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            >
              {user.fullName.charAt(0)}
            </div>
            <div>
              <p className="text-white text-[16px] font-bold leading-tight">{user.fullName}</p>
              <p className="text-white/70 text-[12px]">{user.role}</p>
              <span
                className="inline-block mt-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              >
                {user.level}
              </span>
            </div>
          </div>
        </div>

        {/* Progression */}
        <div className="px-6 py-4" style={{ borderBottom: '1px solid #E2E8F0' }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={14} color="#6B7280" />
              <span className="text-[12px] font-semibold" style={{ color: '#6B7280' }}>Progression globale</span>
            </div>
            <span className="text-[13px] font-bold" style={{ color: '#2563EB' }}>{user.progression}%</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ backgroundColor: '#E2E8F0' }}>
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${user.progression}%`, background: 'linear-gradient(90deg, #2563EB, #7C3AED)' }}
            />
          </div>
          <p className="text-[11px] mt-1.5" style={{ color: '#9CA3AF' }}>Domaine : {user.domain}</p>
        </div>

        {/* Actions */}
        <div className="px-3 py-3 flex flex-col gap-1">
          <MenuAction icon={<Settings size={15} />} label="Paramètres du compte" onClick={goToSettings} />
          <MenuAction icon={<LogOut size={15} />} label="Se déconnecter" danger />
        </div>
      </div>
    </>
  );
}

function MenuAction({ icon, label, danger, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors cursor-pointer text-left"
      style={{ color: danger ? '#DC2626' : '#374151' }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = danger ? '#FEF2F2' : '#F9FAFB'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <span style={{ color: danger ? '#DC2626' : '#6B7280' }}>{icon}</span>
      {label}
    </button>
  );
}
