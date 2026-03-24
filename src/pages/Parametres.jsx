import { useState } from 'react';
import { Check, Settings } from 'lucide-react';
import mockData from '../data/mockData.json';

function Card({ title, children }) {
  return (
    <div className="rounded-2xl p-6 flex flex-col gap-5" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
      {title && <h3 className="text-[15px] font-bold" style={{ color: '#1A1A1A' }}>{title}</h3>}
      {children}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold" style={{ color: '#6B7280' }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, type = 'text', placeholder }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-10 px-3 rounded-xl text-[13px] outline-none transition-all"
      style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB', color: '#1A1A1A' }}
      onFocus={e => (e.target.style.borderColor = '#2563EB')}
      onBlur={e  => (e.target.style.borderColor = '#E5E7EB')}
    />
  );
}

function SaveButton() {
  const [saved, setSaved] = useState(false);
  function handleClick() { setSaved(true); setTimeout(() => setSaved(false), 2000); }
  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 px-5 py-2 rounded-xl text-white text-[13px] font-semibold transition-all cursor-pointer self-start"
      style={{ backgroundColor: saved ? '#16A34A' : '#2563EB', boxShadow: `0 4px 12px ${saved ? 'rgba(22,163,74,0.35)' : 'rgba(37,99,235,0.35)'}` }}
    >
      {saved && <Check size={14} />}
      {saved ? 'Enregistré !' : 'Enregistrer'}
    </button>
  );
}

export default function Parametres() {
  const u = mockData.user;
  const [form, setForm] = useState({ fullName: u.fullName, role: u.role, domain: u.domain, email: 'serge.mbouya@email.com' });
  const set = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const stats = [
    { label: 'Score',  value: u.score      },
    { label: 'Streak', value: `${u.streak}j` },
    { label: 'Rang',   value: u.rank       },
  ];

  return (
    <div className="flex flex-col gap-4 pb-24 h-full">

      {/* Bannière desktop */}
      <div className="hidden lg:flex px-8 pt-6">
        <div
          className="w-full rounded-2xl px-7 py-6 flex items-center justify-between"
          style={{ background: 'linear-gradient(135deg, #059669 0%, #2563EB 100%)' }}
        >
          <div>
            <h1 className="text-white text-[20px] font-extrabold">Paramètres</h1>
            <p className="text-white/70 text-[13px] mt-1">Gérez votre profil et vos préférences</p>
          </div>
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
            style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          >
            <Settings size={28} color="white" />
          </div>
        </div>
      </div>

      {/* Bannière mobile */}
      <div className="lg:hidden px-4 pt-4">
        <div
          className="rounded-2xl px-5 py-5"
          style={{ background: 'linear-gradient(135deg, #059669 0%, #2563EB 100%)' }}
        >
          <h1 className="text-white text-[18px] font-extrabold">Paramètres</h1>
          <p className="text-white/70 text-[12px] mt-0.5">Gérez votre profil et vos préférences</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-8 py-2">
      <Card title="Informations personnelles">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-[24px] font-bold shrink-0" style={{ backgroundColor: '#2563EB' }}>
            {form.fullName.charAt(0)}
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: '#1A1A1A' }}>{form.fullName}</p>
            <p className="text-[12px]" style={{ color: '#9CA3AF' }}>{form.role} · {u.level}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nom complet"><Input value={form.fullName} onChange={set('fullName')} /></Field>
          <Field label="Email"><Input value={form.email} onChange={set('email')} type="email" /></Field>
          <Field label="Rôle"><Input value={form.role} onChange={set('role')} /></Field>
          <Field label="Domaine"><Input value={form.domain} onChange={set('domain')} /></Field>
        </div>

        <SaveButton />
      </Card>

      <Card title="Statistiques">
        <div className="grid grid-cols-3 gap-3 flex-1">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-1 py-6 rounded-xl" style={{ backgroundColor: '#F9FAFB' }}>
              <span className="text-[20px] font-extrabold" style={{ color: '#2563EB' }}>{value}</span>
              <span className="text-[11px]" style={{ color: '#9CA3AF' }}>{label}</span>
            </div>
          ))}
        </div>
      </Card>

        <div className="flex-1" />
      </div>
    </div>
  );
}
