export default function WelcomeBanner({ user }) {
  const stats = [
    { value: `${user.progression}%`, label: 'Progression' },
    { value: user.score.toLocaleString('fr-FR'), label: 'Points' },
    { value: `${user.streak}`, label: 'Jours streak' },
  ];

  return (
    <div
      className="flex items-center justify-between h-[160px] rounded-[20px] px-7 py-8 gap-6 shrink-0"
      style={{
        backgroundColor: '#2563EB',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      {/* Left: Text + Button */}
      <div className="flex flex-col gap-1.5 min-w-0">
        <h2 className="text-white text-[16px] font-bold leading-tight truncate">
          Prêt à conquérir le marché, {user.name} ?
        </h2>
        <p className="text-white/70 text-[13px] leading-tight">
          Tu es dans le top 12% des entrepreneurs actifs cette semaine.
        </p>
        <button
          className="mt-2 p-3 rounded-xl text-[13px] font-semibold text-blue-800 flex items-center gap-1.5 w-fit transition-colors bg-white cursor-pointer"
        >
          ▶ &nbsp; Reprendre le cours
        </button>
      </div>

      {/* Right: Stats */}
      <div className="flex items-center gap-6 shrink-0">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center gap-0.5">
            <span className="text-white text-[20px] font-extrabold leading-none">{stat.value}</span>
            <span className="text-white/60 text-[11px] font-normal whitespace-nowrap">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
