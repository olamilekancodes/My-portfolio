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
      className={`text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] font-bold ${className}`}
    >
      {children}
    </h1>
  );
};
