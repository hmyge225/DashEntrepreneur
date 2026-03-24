import { TrendingUp, Flame, Award, BookOpen, Target } from 'lucide-react';

const weekDays     = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
const weekActivity = [60, 80, 45, 100, 70, 30, 55];

const monthBars = [
  { label: 'Jan', value: 40 }, { label: 'Fév', value: 65 },
  { label: 'Mar', value: 80 }, { label: 'Avr', value: 55 },
  { label: 'Mai', value: 90 }, { label: 'Jun', value: 70 },
];

const kpis = [
  { icon: Flame,    label: 'Streak',      value: '7 jours',   sub: '+2 vs semaine passée',    color: '#D97706', bg: '#FEF3C7' },
  { icon: Award,    label: 'Score total', value: '1 240 pts', sub: 'Top 12% des apprenants',  color: '#7C3AED', bg: '#EDE9FE' },
  { icon: BookOpen, label: 'Leçons',      value: '18',        sub: 'Ce mois-ci',              color: '#2563EB', bg: '#EFF6FF' },
  { icon: Target,   label: 'Objectif',    value: '45%',       sub: 'Parcours complété',       color: '#059669', bg: '#DCFCE7' },
];

const progress = [
  { label: 'Parcours Entrepreneuriat', pct: 45, color: '#2563EB' },
  { label: 'Business Plan IA',         pct: 70, color: '#7C3AED' },
  { label: 'Réseautage & Mentors',     pct: 20, color: '#059669' },
];

const CARD = { backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' };

function KpiCard({ icon: Icon, label, value, sub, color, bg }) {
  return (
    <div className="rounded-2xl p-4 flex flex-col gap-3" style={CARD}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: bg }}>
        <Icon size={18} color={color} />
      </div>
      <div>
        <p className="text-[20px] font-extrabold leading-tight" style={{ color: '#1A1A1A' }}>{value}</p>
        <p className="text-[11px] mt-0.5" style={{ color: '#9CA3AF' }}>{label}</p>
        <p className="text-[11px] font-semibold mt-1" style={{ color }}>{sub}</p>
      </div>
    </div>
  );
}

function BarChart({ bars, height = 112 }) {
  const max = Math.max(...bars.map(b => b.value));
  return (
    <div className="flex items-end gap-2" style={{ height: height + 24 }}>
      {bars.map((b, i) => (
        <div key={b.label} className="flex flex-col items-center gap-2 flex-1">
          <div className="w-full flex items-end" style={{ height }}>
            <div
              className="w-full rounded-t-lg"
              style={{
                height: `${(b.value / max) * 100}%`,
                background: i === bars.length - 1 ? 'linear-gradient(180deg,#2563EB,#7C3AED)' : '#E5E7EB',
              }}
            />
          </div>
          <span className="text-[11px]" style={{ color: '#9CA3AF' }}>{b.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProgressList({ items }) {
  return (
    <div className="flex flex-col gap-4">
      {items.map(p => (
        <div key={p.label}>
          <div className="flex justify-between mb-1.5">
            <span className="text-[13px] font-semibold" style={{ color: '#374151' }}>{p.label}</span>
            <span className="text-[13px] font-bold" style={{ color: p.color }}>{p.pct}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full" style={{ backgroundColor: '#F3F4F6' }}>
            <div className="h-2.5 rounded-full" style={{ width: `${p.pct}%`, backgroundColor: p.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Statistiques() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col gap-6 px-8 py-6">
        <div className="rounded-2xl px-7 py-6 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #059669 0%, #2563EB 100%)' }}>
          <div>
            <h1 className="text-white text-[20px] font-extrabold">Mes Statistiques</h1>
            <p className="text-white/70 text-[13px] mt-1">Tableau de bord de votre progression</p>
          </div>
          <div className="hidden xl:flex w-14 h-14 rounded-2xl items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <TrendingUp size={28} color="white" />
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          {kpis.map(k => <KpiCard key={k.label} {...k} />)}
        </div>

        <div className="flex gap-6">
          <div className="flex-1 rounded-2xl p-6" style={CARD}>
            <h3 className="text-[15px] font-bold mb-4" style={{ color: '#1A1A1A' }}>Activité mensuelle</h3>
            <BarChart bars={monthBars} height={112} />
          </div>

          <div className="w-[280px] shrink-0 rounded-2xl p-6" style={CARD}>
            <h3 className="text-[15px] font-bold mb-4" style={{ color: '#1A1A1A' }}>Cette semaine</h3>
            <div className="flex items-end gap-1.5 h-24">
              {weekDays.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div className="w-full flex items-end" style={{ height: 72 }}>
                    <div className="w-full rounded-t-md" style={{ height: `${weekActivity[i]}%`, backgroundColor: weekActivity[i] >= 80 ? '#2563EB' : weekActivity[i] >= 50 ? '#93C5FD' : '#DBEAFE' }} />
                  </div>
                  <span className="text-[11px]" style={{ color: '#9CA3AF' }}>{d}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-4">
              {[['Faible','#DBEAFE'],['Moyen','#93C5FD'],['Fort','#2563EB']].map(([l, c]) => (
                <div key={l} className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
                  <span className="text-[10px]" style={{ color: '#9CA3AF' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl p-6" style={CARD}>
          <h3 className="text-[15px] font-bold mb-5" style={{ color: '#1A1A1A' }}>Progression par parcours</h3>
          <ProgressList items={progress} />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
        <div className="rounded-2xl px-5 py-5" style={{ background: 'linear-gradient(135deg, #059669 0%, #2563EB 100%)' }}>
          <h1 className="text-white text-[18px] font-extrabold">Mes Statistiques</h1>
          <p className="text-white/70 text-[12px] mt-0.5">Tableau de bord de votre progression</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {kpis.map(k => <KpiCard key={k.label} {...k} />)}
        </div>
        <div className="rounded-2xl p-5" style={CARD}>
          <h3 className="text-[14px] font-bold mb-4" style={{ color: '#1A1A1A' }}>Activité mensuelle</h3>
          <BarChart bars={monthBars} height={88} />
        </div>
        <div className="rounded-2xl p-5" style={CARD}>
          <h3 className="text-[14px] font-bold mb-4" style={{ color: '#1A1A1A' }}>Progression par parcours</h3>
          <ProgressList items={progress} />
        </div>
      </div>
    </>
  );
}
