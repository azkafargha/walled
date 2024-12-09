import { useState } from "react";

import avatarImg from "../assets/34.jpg";

function Avatar() {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
        <p className="text-black font-bold">Siti Nur Lathifah</p>
        <p className="text-black">Personal Account</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
        <img src={avatarImg} alt="avatar" className="flex items-right rounded-full w-20 h-20 aspect-square object-cover hover:ring-8 hover:ring-blue-500 transition-all duration-300" />
      </div>
    </div>
  );
}

export default Avatar;
