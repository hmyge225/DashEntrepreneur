export default function MobileWelcomeCard({ user }) {
  const stats = [
    { emoji: '🔥', value: `${user.streak} jours`, bg: '#FEF3C7', color: '#D97706' },
    { emoji: '⭐', value: `${user.score.toLocaleString('fr-FR')} pts`, bg: '#EDE9FE', color: '#7C3AED' },
    { emoji: '🏆', value: user.rank, bg: '#D1FAE5', color: '#16A34A' },
  ];

  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3"
      style={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* Top row: info + avatar */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-bold text-text-primary">{user.fullName}</span>
          <span className="text-[13px] text-text-secondary">{user.role} · {user.level}</span>
        </div>
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[20px] font-extrabold shrink-0"
          style={{ backgroundColor: '#2563EB' }}
        >
          {user.fullName.charAt(0)}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-2">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-[12px] font-semibold"
            style={{ backgroundColor: stat.bg, color: stat.color }}
          >
            {stat.emoji} {stat.value}
          </div>
        ))}
      </div>
    </div>
  );
}
