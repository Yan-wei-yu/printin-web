interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({ tag, title, subtitle, center = true, light = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
          <span className="w-5 h-px bg-[#00AEEF]" />
          <span className="px-3 py-1 bg-[#00AEEF]/10 border border-[#00AEEF]/25 text-[#00AEEF] text-xs font-bold rounded-full uppercase tracking-widest">
            {tag}
          </span>
          <span className="w-5 h-px bg-[#00AEEF]" />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-3 ${light ? 'text-white' : 'text-[#0B2545]'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${light ? 'text-white/65' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 flex items-center gap-1.5 ${center ? 'justify-center' : ''}`}>
        <div className="w-10 h-1 rounded-full bg-[#00AEEF]" />
        <div className="w-2 h-1 rounded-full bg-[#00AEEF]/40" />
        <div className="w-1 h-1 rounded-full bg-[#00AEEF]/20" />
      </div>
    </div>
  );
}
