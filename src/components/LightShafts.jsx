export default function LightShafts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] mix-blend-screen">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "linear-gradient(115deg, transparent 30%, rgba(244,213,141,0.18) 45%, transparent 60%, rgba(244,213,141,0.10) 75%, transparent 90%)",
        }}
      />
      <div
        className="absolute inset-0 animate-[drift_18s_linear_infinite] opacity-30"
        style={{
          background:
            "repeating-linear-gradient(115deg, transparent 0px, transparent 90px, rgba(244,213,141,0.08) 90px, rgba(244,213,141,0.08) 140px)",
        }}
      />
      <style>{`@keyframes drift { 0%{transform:translateX(-5%)} 100%{transform:translateX(5%)} }`}</style>
    </div>
  );
}
