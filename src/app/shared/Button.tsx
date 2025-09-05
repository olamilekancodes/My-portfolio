import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

interface ButtonProps {
  action?: () => void;
  title: string;
}

export const MessageButton = ({ action, title }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={action}
      className="p-4 rounded-lg bg-[#7812ff] text-xs lg:text-[1rem] text-[#fff] hover:bg-[#6006d5]  font-medium transition-colors duration-300"
    >
      {title}
    </button>
  );
};

export const ResumeButton = () => {
  return (
    <Link
      href="#"
      className="p-4 rounded-lg bg-none border-2 border-black text-xs lg:text-[1rem] font-semibold hover:bg-black hover:text-white transition-colors duration-300"
    >
      Resume
    </Link>
  );
};

export const PageNavigationButton = ({ action, title }: ButtonProps) => {
  return (
    <button
      className="text-[1rem] lg:text-[1.25rem] flex items-center gap-1 text-[#6e06f2] font-medium hover:underline transition-all duration-300"
      onClick={action}
      type="button"
    >
      {title} <GoArrowRight />
    </button>
  );
};
