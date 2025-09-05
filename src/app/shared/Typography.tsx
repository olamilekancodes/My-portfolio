interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph = ({ children, className }: Props) => {
  return (
    <p
      className={`text-[0.8rem] md:text-[1.25rem] mt-3 md:mt-5 text-[#9498a0] ${className}`}
    >
      {children}
    </p>
  );
};

export const Title = ({ children, className }: Props) => {
  return (
    <h1
      className={`text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#222] leading-none ${className}`}
    >
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children, className }: Props) => {
  return (
    <div className="flex items-end gap-[2px] justify-start">
      <h1
        className={`text-[1.5rem] md:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] font-bold text-[#222] leading-none ${className}`}
      >
        {children}
      </h1>
      <div className="flex w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-[#6e06f2]"></div>
    </div>
  );
};

export const HomepageSectionTitle = ({ children, className }: Props) => {
  return (
    <div className="flex items-end gap-[2px] justify-start">
      <h1
        className={`text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#222] leading-none ${className}`}
      >
        {children}
      </h1>
      <div className="flex w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-[#6e06f2]"></div>
    </div>
  );
};
