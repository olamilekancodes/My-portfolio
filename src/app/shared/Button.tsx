import Link from "next/link";

interface MessageButtonProps {
  action?: () => void;
}

export const MessageButton = ({ action }: MessageButtonProps) => {
  return (
    <Link
      href="/contact"
      className="p-4 rounded-lg bg-[#7812ff] text-xs lg:text-[1rem] text-[#fff] hover:bg-[#6006d5]  font-medium transition-colors duration-300"
      onClick={action}
    >
      Get In Touch
    </Link>
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
