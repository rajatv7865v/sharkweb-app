import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  // Try to use logo image if available, otherwise use CSS version
  const logoExists = false; // Set to true if you add logo.png to public folder
  
  if (logoExists) {
    return (
      <Link href="/" className="flex items-center group">
        <div className="relative h-14 w-auto">
          <Image
            src="/logo.png"
            alt="Sharkwave Infotech"
            width={200}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center group">
      <div className="relative h-14 w-auto">
        {/* Logo with white background matching the design */}
        <div className="relative h-14 w-64 bg-white rounded-xl flex items-center justify-start px-6 overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-gray-300">
          <div className="flex items-center gap-3">
            {/* Logo Icon/Shape */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-header-primary via-header-accent to-header-primary-dark rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-black text-lg leading-none" style={{ fontFamily: 'system-ui, sans-serif' }}>S</span>
              </div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col items-start justify-center leading-tight">
              <span 
                className="text-black font-black text-xl tracking-tighter uppercase"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '-0.5px',
                  fontWeight: 900,
                  lineHeight: '1.1'
                }}
              >
                SHARKWAVE
              </span>
              <span 
                className="text-header-text-light text-[10px] font-semibold tracking-widest uppercase mt-0.5"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '1.5px',
                  fontWeight: 600
                }}
              >
                INFOTECH
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

