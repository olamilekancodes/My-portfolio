import Link from "next/link";

const MessageButton = () => {
  return (
    <Link
      href="#"
      className="p-4 rounded-lg bg-black shadow-lg text-xs hover:bg-[#222]"
    >
      Get In Touch
    </Link>
  );
};

export default MessageButton;
