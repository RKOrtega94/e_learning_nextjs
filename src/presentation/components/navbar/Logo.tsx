import Image from "next/image";

import VercelIcon from "/public/vercel.svg";

export default function Logo() {
  return (
    <div className="flex items-center">
      <Image className="h-16 w-16 mr-2" src={VercelIcon} alt="Logo" />
    </div>
  );
}
