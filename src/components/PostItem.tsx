import { UserPlus } from "lucide-react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import Image from "next/image";

type Props = {};

const PostItem = (props: Props) => {
  return (
    <div className="bg-zinc-200 flex flex-col items-center text-gray-800 my-2 p-4 rounded-lg w-full h-fit">
      <div className="flex justify-between w-full pb-2">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/assets/images/blankprofile.jpg"}
            className="rounded-full border border-zinc-400"
            alt="profile"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Baburao Apte</span>
            <span className="text-sm font-normal">Borivali, Engineer</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <UserPlus className="h-6 w-6 mr-3 cursor-pointer text-orange-600 hover:text-orange-700" />
        </div>
      </div>

      <div className="flex flex-col w-full justify-between items-center border-t border-slate-400 mt-1 pt-1">
        <div className="flex justify-start w-full py-2">
          <span>Hello Na Public</span>
        </div>
        <div className="w-full h-full">
          <Image
            src={"/assets/images/food.jpg"}
            alt="food"
            width={700} height={700}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="flex justify-between w-full mt-2 items-center">
        <div className="flex ml-2 gap-3 md:gap-6">
          <BsHeart className=" text-2xl md:text-3xl" />
          <BsHeartFill className="text-2xl md:text-3xl hidden" />
          <FaRegCommentDots className="text-2xl md:text-3xl" />
          <IoSend className="text-2xl md:text-3xl" />
        </div>
        <div className="flex mr-2">
          <FaRegBookmark className="text-2xl md:text-3xl" />
          <FaBookmark className="text-2xl md:text-3xl hidden" />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
