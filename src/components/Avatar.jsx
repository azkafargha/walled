import { useState } from "react";

<<<<<<< HEAD
import avatarImg from "../assets/avatar.png";
=======
import avatarImg from "../assets/34.jpg";
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c

function Avatar() {
  const [isAvatarActive, setIsAvatarActive] = useState(false);

  return (
    <div className="flex items-center gap-x-4 ml-auto">
      <span className="text-right">
<<<<<<< HEAD
        <p className="text-black font-bold">Chelsea Immanuela</p>
=======
        <p className="text-black font-bold">Siti Nur Lathifah</p>
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c
        <p className="text-black">Personal Account</p>
      </span>
      <div
        className={`rounded-full border-[6px] hover:border-[6px] hover:border-[#178F8D] cursor-pointer transition-all ${
          isAvatarActive ? "border-[#178F8D]" : "border-[#fafbfd]"
        }`}
        onClick={() => setIsAvatarActive((prev) => !prev)}
      >
<<<<<<< HEAD
        <img src={avatarImg} alt="avatar" className="rounded-full" />
=======
        <img src={avatarImg} alt="avatar" className="flex items-right rounded-full w-20 h-20 aspect-square object-cover hover:ring-8 hover:ring-blue-500 transition-all duration-300" />
>>>>>>> c449dd74f4b75dcf7302954c3ca734dbd4b05d6c
      </div>
    </div>
  );
}

export default Avatar;
