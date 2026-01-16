import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  // Try to use logo image if available, otherwise use CSS version
  const logoExists = false; // Set to true if you add logo.png to public folder
  
  if (logoExists) {
    return (
      <Link href="/" className="flex items-center group">
        <div className="relative h-12 w-auto">
          <Image
            src="/logo.png"
            alt="Sharkwave Infotech"
            width={200}
            height={48}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center group">
      <div className="relative h-12 w-auto">
        {/* Professional Logo Design */}
        <div className="relative h-12 flex items-center gap-3 group-hover:gap-3.5 transition-all duration-300">
          {/* Logo Icon/Shape */}
          <div className="relative flex-shrink-0">
            <div className="w-11 h-11 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ring-2 ring-white/50">
              <span className="text-white font-black text-xl leading-none" style={{ fontFamily: 'system-ui, sans-serif' }}>S</span>
            </div>
          </div>
          
          {/* Logo Text */}
          <div className="flex flex-col items-start justify-center leading-tight">
            <span 
              className="text-header-text font-black text-xl tracking-tight uppercase group-hover:text-header-primary transition-colors duration-300"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.3px',
                fontWeight: 900,
                lineHeight: '1.1'
              }}
            >
              SHARKWAVE
            </span>
            <span 
              className="text-header-text-light text-[10px] font-bold tracking-wider uppercase mt-0.5 group-hover:text-header-text transition-colors duration-300"
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '1.2px',
                fontWeight: 700
              }}
            >
              INFOTECH
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

