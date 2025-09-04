import { SectionTitle } from "./Typography";

interface Props {
  children: React.ReactNode;
  title: string;
}

const EnhancedSectionTitle = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
      <SectionTitle>{title}</SectionTitle>
      <div>{children}</div>
    </div>
  );
};

export default EnhancedSectionTitle;
