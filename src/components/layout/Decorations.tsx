'use client';

export function Decorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating bubbles - scattered across viewport */}
      <div className="absolute top-[10%] right-[15%] w-12 h-12 opacity-20 animate-float">
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[25%] right-[8%] w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '1.5s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[40%] left-[12%] w-10 h-10 opacity-25 animate-float" style={{ animationDelay: '0.5s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[60%] right-[20%] w-14 h-14 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[75%] left-[25%] w-12 h-12 opacity-15 animate-float" style={{ animationDelay: '3s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[15%] left-[5%] w-8 h-8 opacity-30 animate-float" style={{ animationDelay: '1s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>

      {/* Coral decorations - bottom corners */}
      <div className="absolute bottom-0 left-0 w-24 opacity-30 animate-wave">
        <img src="/images/decorations/coral.svg" alt="" />
      </div>
      <div className="absolute bottom-0 left-32 w-20 opacity-25 animate-wave" style={{ animationDelay: '1s' }}>
        <img src="/images/decorations/coral.svg" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 opacity-30 animate-wave" style={{ animationDelay: '2s', transform: 'scaleX(-1)' }}>
        <img src="/images/decorations/coral.svg" alt="" />
      </div>
      <div className="absolute bottom-0 right-32 w-20 opacity-25 animate-wave" style={{ animationDelay: '1.5s', transform: 'scaleX(-1)' }}>
        <img src="/images/decorations/coral.svg" alt="" />
      </div>

      {/* Seaweed decorations - sides */}
      <div className="absolute bottom-0 left-[10%] w-12 opacity-20 animate-wave" style={{ animationDelay: '0.5s' }}>
        <img src="/images/decorations/seaweed.svg" alt="" />
      </div>
      <div className="absolute bottom-0 right-[10%] w-12 opacity-20 animate-wave" style={{ animationDelay: '2.5s' }}>
        <img src="/images/decorations/seaweed.svg" alt="" />
      </div>

      {/* Additional small bubbles for ambient effect */}
      <div className="absolute top-[30%] left-[30%] w-6 h-6 opacity-10 animate-float" style={{ animationDelay: '2.5s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[50%] right-[35%] w-8 h-8 opacity-12 animate-float" style={{ animationDelay: '3.5s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
      <div className="absolute top-[70%] left-[40%] w-6 h-6 opacity-15 animate-float" style={{ animationDelay: '1.8s' }}>
        <img src="/images/decorations/bubble.svg" alt="" />
      </div>
    </div>
  );
}
