import Link from "next/link";

export const MessageButton = () => {
  return (
    <Link
      href="#"
      className="p-4 rounded-lg bg-black shadow-md text-xs lg:text-[1rem] text-[#fff] hover:bg-[#2d2d2d] shadow-[#989797] font-medium"
    >
      Get In Touch
    </Link>
  );
};

export const ResumeButton = () => {
  return (
    <Link
      href="#"
      className="p-4 rounded-lg bg-[#ebebeb] text-xs lg:text-[1rem] hover:bg-[#d5d5d5] shadow-[#989797] shadow-md font-semibold"
    >
      Resume
    </Link>
  );
};
