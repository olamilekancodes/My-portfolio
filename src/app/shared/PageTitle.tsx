import { ReactNode } from "react";
import { Title, Paragraph } from "./Typography";

interface Props {
  title: ReactNode;
  paragraph: string;
}

export const PageTitle = ({ title, paragraph }: Props) => {
  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <Title>{title}</Title>

      <Paragraph className="max-w-[45rem]">{paragraph}</Paragraph>
    </div>
  );
};
