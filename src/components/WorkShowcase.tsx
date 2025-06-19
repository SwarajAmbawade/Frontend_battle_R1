import React, { useEffect, useRef, useState } from 'react';

const WorkShowcase = () => {
  const cases = [
    {
      id: 1,
      title: "SWITCH - SOPRA STERIA KICK OFF 2025",
      location: "NORWAY",
      type: "B2E EVENT",
      image: "/lovable-uploads/f755ab52-6f7d-41c6-ab6c-d16ce285dbe8.png",
      description: "Innovative corporate event design"
    },
    {
      id: 2, 
      title: "GRAND HOTEL OSLO 150",
      location: "NORWAY",
      type: "BRAND ACTIVATION",
      image: "/lovable-uploads/d9dd1962-c54d-4c2d-86f7-ae79aec905b0.png",
      description: "Luxury hotel anniversary celebration"
    },
    {
      id: 3,
      title: "DIGITAL TRANSFORMATION SUMMIT",
      location: "INTERNATIONAL",
      type: "CONFERENCE",
      image: "/lovable-uploads/a10b5a9d-2d39-4b4e-907c-357027dd2e27.png",
      description: "Technology leadership conference"
    }
  ];

  // Track overlay fill for each case
  const [fills, setFills] = useState(Array(cases.length).fill(0));
  const caseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const newFills = cases.map((_, idx) => {
        const ref = caseRefs.current[idx];
        if (!ref) return 0;
        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate how much of the case is visible in viewport
        const visible = Math.min(windowHeight, Math.max(0, windowHeight - rect.top));
        const progress = Math.min(1, Math.max(0, visible / rect.height));
        return progress;
      });
      setFills(newFills);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cases.length]);

  return (
    <section
      id="work-showcase"
      className="relative w-full"
      style={{ height: `calc(100vh * ${cases.length})` }}
    >
      {cases.map((caseItem, idx) => (
        <div
          key={caseItem.id}
          ref={el => (caseRefs.current[idx] = el)}
          className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center"
          style={{ transform: `translateY(${idx * 100}vh)`, zIndex: 10 + idx }}
        >
          <img
            src={caseItem.image}
            alt={caseItem.title}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          {/* Red overlay fill for this case */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-800 transition-all duration-500"
            style={{
              clipPath: `polygon(0 ${100 - fills[idx] * 100}%, 100% ${100 - fills[idx] * 100}%, 100% 100%, 0 100%)`,
              opacity: 0.85,
            }}
          />
          <div className="relative z-10 text-center px-8 w-full">
            <div className="flex gap-2 justify-center mb-4">
              <span className="px-3 py-1 rounded text-sm bg-red-500 text-white">{caseItem.location}</span>
              <span className="px-3 py-1 rounded text-sm bg-red-500 text-white">{caseItem.type}</span>
            </div>
            <h3 className="text-5xl font-bold mb-4 text-white drop-shadow">{caseItem.title}</h3>
            <p className="text-2xl mb-8 text-red-100">{caseItem.description}</p>
            <button className="border px-8 py-3 rounded border-red-300 text-red-100 hover:bg-red-500 hover:text-white transition-all duration-300">
              READ MORE →
            </button>
          </div>
        </div>
      ))}
      {/* View all cases button at the end */}
      <div
        className="absolute left-0 w-full flex justify-center"
        style={{ top: `calc(100vh * ${cases.length} - 120px)` }}
      >
        <button className="border px-8 py-3 rounded-lg text-lg border-red-300 text-red-100 bg-red-700 hover:bg-red-500 hover:text-white transition-all duration-300">
          📁 VIEW ALL CASES
        </button>
      </div>
    </section>
  );
};

export default WorkShowcase;