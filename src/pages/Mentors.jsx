import { useState } from 'react';
import { Star, MapPin, BadgeCheck, MessageCircle, Search } from 'lucide-react';

const mentors = [
  { id: 1, initials: 'MD', name: 'Marie Dupont',       specialty: 'E-commerce & Retail',          rating: 4.9, sessions: 128, location: 'Paris',     available: true,  tags: ['Marketing', 'Shopify', 'SEO'],          color: '#2563EB' },
  { id: 2, initials: 'TK', name: 'Thomas Klein',       specialty: 'Financement & Levée de fonds', rating: 4.8, sessions: 95,  location: 'Lyon',      available: true,  tags: ['VC', 'Pitch', 'Finance'],               color: '#7C3AED' },
  { id: 3, initials: 'AC', name: 'Aminata Coulibaly',  specialty: 'Tech & SaaS',                  rating: 5.0, sessions: 210, location: 'Bordeaux',  available: false, tags: ['Product', 'No-Code', 'Growth'],         color: '#059669' },
  { id: 4, initials: 'RB', name: 'Romain Bernard',     specialty: 'Stratégie & Opérations',       rating: 4.7, sessions: 74,  location: 'Lille',     available: true,  tags: ['OKR', 'Scale-up', 'RH'],                color: '#D97706' },
  { id: 5, initials: 'SP', name: 'Sofia Pereira',      specialty: 'Branding & Communication',     rating: 4.9, sessions: 163, location: 'Marseille', available: false, tags: ['Identité', 'Social Media', 'Storytelling'], color: '#DB2777' },
  { id: 6, initials: 'JM', name: 'Julien Moreau',      specialty: 'Export & International',       rating: 4.6, sessions: 58,  location: 'Nantes',    available: true,  tags: ['B2B', 'Afrique', 'Asie'],               color: '#0891B2' },
];

function MentorCard({ mentor: m }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-[16px] font-bold shrink-0" style={{ backgroundColor: m.color }}>
          {m.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <p className="text-[14px] font-bold truncate" style={{ color: '#1A1A1A' }}>{m.name}</p>
            <BadgeCheck size={14} color="#2563EB" />
          </div>
          <p className="text-[12px] truncate" style={{ color: '#6B7280' }}>{m.specialty}</p>
        </div>
        <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: m.available ? '#DCFCE7' : '#F3F4F6', color: m.available ? '#16A34A' : '#9CA3AF' }}>
          {m.available ? 'Disponible' : 'Occupé'}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Star size={13} color="#F59E0B" fill="#F59E0B" />
          <span className="text-[13px] font-bold" style={{ color: '#1A1A1A' }}>{m.rating}</span>
        </div>
        <span className="text-[12px]" style={{ color: '#9CA3AF' }}>{m.sessions} séances</span>
        <div className="flex items-center gap-1">
          <MapPin size={12} color="#9CA3AF" />
          <span className="text-[12px]" style={{ color: '#9CA3AF' }}>{m.location}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {m.tags.map(tag => (
          <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-full" style={{ backgroundColor: '#F3F4F6', color: '#374151' }}>
            {tag}
          </span>
        ))}
      </div>

      <button
        disabled={!m.available}
        className="w-full h-10 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 cursor-pointer"
        style={{ backgroundColor: m.available ? m.color : '#F3F4F6', color: m.available ? '#fff' : '#9CA3AF', opacity: m.available ? 1 : 0.7 }}
      >
        <MessageCircle size={15} />
        {m.available ? 'Contacter' : 'Indisponible'}
      </button>
    </div>
  );
}

export default function Mentors() {
  const [query, setQuery] = useState('');

  const filtered = mentors.filter(m => {
    const q = query.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.specialty.toLowerCase().includes(q) ||
      m.location.toLowerCase().includes(q) ||
      m.tags.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:flex flex-col gap-6 px-8 py-6">
        <div className="rounded-2xl px-7 py-6 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)' }}>
          <div>
            <h1 className="text-white text-[20px] font-extrabold">Trouver un Mentor</h1>
            <p className="text-white/70 text-[13px] mt-1">{filtered.length} mentor{filtered.length > 1 ? 's' : ''} · Séances en visio 1-to-1</p>
          </div>
          <div className="hidden xl:flex items-center gap-2 px-4 h-10 rounded-xl w-60" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <Search size={15} color="rgba(255,255,255,0.7)" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Rechercher un mentor…"
              className="bg-transparent outline-none text-[13px] w-full placeholder-white/50 text-white"
            />
          </div>
        </div>

        {filtered.length > 0
          ? <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
              {filtered.map(m => <MentorCard key={m.id} mentor={m} />)}
            </div>
          : <p className="text-center text-[14px] py-16" style={{ color: '#9CA3AF' }}>Aucun mentor trouvé pour « {query} »</p>
        }
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-4 p-4 pb-24 lg:hidden">
        <div className="rounded-2xl px-5 py-5" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #DB2777 100%)' }}>
          <h1 className="text-white text-[18px] font-extrabold">Trouver un Mentor</h1>
          <p className="text-white/70 text-[12px] mt-0.5">{filtered.length} mentor{filtered.length > 1 ? 's' : ''} disponibles</p>
          <div className="flex items-center gap-2 px-3 h-9 rounded-xl mt-3" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
            <Search size={14} color="rgba(255,255,255,0.7)" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Rechercher…"
              className="bg-transparent outline-none text-[13px] w-full placeholder-white/50 text-white"
            />
          </div>
        </div>

        {filtered.length > 0
          ? filtered.map(m => <MentorCard key={m.id} mentor={m} />)
          : <p className="text-center text-[14px] py-12" style={{ color: '#9CA3AF' }}>Aucun mentor trouvé pour « {query} »</p>
        }
      </div>
    </>
  );
}
