interface GlassOverlayProps {
  blur?: number;
  tintOpacity?: number;
  withHighlight?: boolean;
  className?: string;
}

export default function GlassOverlay({
  blur = 60,
  tintOpacity = 0.05,
  withHighlight = true,
  className = "",
}: GlassOverlayProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          background: `rgba(255,255,255,${tintOpacity})`,
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      {withHighlight && (
        <>
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -20px 40px rgba(0,0,0,0.15)",
            }}
          />
        </>
      )}
    </div>
  );
}
