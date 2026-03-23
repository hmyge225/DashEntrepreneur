export default function NextStepCard({ nextStep }) {
  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3"
      style={{
        backgroundColor: '#FEF3C7',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      }}
    >
      <h2 className="text-[16px] font-semibold" style={{ color: '#78350F' }}>
        {nextStep.title}
      </h2>
      <p className="text-[13px] leading-relaxed" style={{ color: '#92400E' }}>
        {nextStep.description}
      </p>
      <button
        className="mt-1 w-full py-2.5 rounded-lg text-[13px] font-semibold transition-opacity hover:opacity-90"
        style={{ backgroundColor: '#D97706', color: '#FFFFFF' }}
      >
        {nextStep.buttonLabel}
      </button>
    </div>
  );
}
