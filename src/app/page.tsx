import {
  UserCog,
  MapPin,
  Briefcase,
  MessageSquare,
  ImagePlus,
  FileVideo2,
  Paperclip,
  FileAudio,
  UserMinus,
} from "lucide-react";
import blanckProfile from "../assets/blanckprofile.jpg";
import demoads from "../assets/demoads.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center">
      {/* User Info Card */}
      <div className="sm:mr-7 my-2 w-1/4 hidden md:block">
        <div className="bg-zinc-200 flex flex-col items-center text-black p-4 rounded-lg h-fit">
          <div className="flex justify-between w-full pb-2">
            <div className="flex justify-center items-center gap-2">
              <Image
                src={"/assets/images/blankprofile.jpg"}
                className="rounded-full border border-zinc-400"
                alt="profile"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold">Chaman Chatur</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <UserCog className="h-6 w-6 mr-1 cursor-pointer text-orange-600 hover:text-orange-700" />
            </div>
          </div>

          <div className="flex pb-2 ">
            <span>chamanchatur@gmail.com</span>
          </div>

          <div className="flex w-full justify-start py-2 border-t border-slate-400">
            <div className="flex flex-col items-center w-1/2">
              <span>23</span>
              <span>Followers</span>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <span>23K</span>
              <span>Following</span>
            </div>
          </div>

          <div className="flex justify-start w-full border-t border-slate-400 py-2 ml-2 gap-1">
            <MapPin />
            <span>Somewhere out thane</span>
          </div>
          <div className="flex justify-start w-full border-b border-slate-400 pb-2 ml-2 gap-1">
            <Briefcase />
            <span>Engineer</span>
          </div>

          <button className="btn-orange flex mt-3 gap-1">
            <MessageSquare className="w-5 h-5 mt-1" /> Message
          </button>
        </div>
      </div>

      {/* Main div */}
      <div className="md:w-2/5 w-full mx-3 md:mx-0">
        {/* Create Post box */}
        <div className="bg-zinc-200 flex flex-col items-center text-gray-800 my-2 p-4 rounded-lg w-full h-fit">
          <div className="flex justify-start w-full pb-2">
            <Image
              src={"/assets/images/blankprofile.jpg"}
              className="rounded-full border border-zinc-400"
              alt="profile"
              width={40}
              height={40}
            />
            <input
              type="text"
              className=" rounded-full ml-3 w-full text-slate-700 outline-none pl-4 "
              placeholder="What's in your mind?"
            />
          </div>

          <div className="flex w-full justify-between items-center border-t border-slate-400 mt-1 pt-1 overflow-auto">
            <div className="flex gap-1 cursor-pointer">
              <ImagePlus />
              <span className="hidden md:block">Image</span>
            </div>
            <div className="flex gap-1 cursor-pointer">
              <FileVideo2 />
              <span className="hidden md:block">Clip</span>
            </div>
            <div className="flex gap-1 cursor-pointer">
              <Paperclip />
              <span className="hidden md:block">Attachment</span>
            </div>
            <div className="flex gap-1 cursor-pointer">
              <FileAudio />
              <span className="hidden md:block">Audio</span>
            </div>
            <div className="flex gap-1 justify-end">
              <button className="py-1 btn-orange mt-2 flex gap-1">Post</button>
            </div>
          </div>
        </div>

        {/* Posts */}
        {/* <Postitem /> */}
      </div>

      <div className="sm:ml-7 my-2 w-1/4 hidden md:block">
        {/* Demo Ad */}
        <div className="bg-zinc-200 flex flex-col items-center text-gray-900 p-4 rounded-lg  h-fit">
          <div className="flex justify-between items-center w-full pb-2">
            <span className="font-semibold">Sponsored</span>
            <span className="text-xs opacity-75">Create Ad</span>
          </div>

          <div className="flex items-center w-full pb-2">
            {/* <img src={demoads} alt="demo ads" className="rounded-lg" /> */}
            <Image
              src={"/assets/images/demoads.png"}
              alt="profile"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div className="flex justify-between items-center w-full pb-2 text-sm text-slate-700">
            <span className="font-medium">Gaana</span>
            <span className="font-sans">Gaana.com</span>
          </div>

          <div className="flex items-center w-full pb-2 text-xs text-slate-600">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              non culpa ipsum architecto ratione tenetur adipisci. Sapiente.
            </span>
          </div>
        </div>

        {/* Friend List */}
        <div className="bg-zinc-200 flex flex-col items-center text-gray-800 justify-start p-4 rounded-lg mt-2 h-fit">
          <div className="flex items-center w-full pb-2 border-b border-slate-400">
            <span className="font-semibold">Friend List</span>
          </div>

          <div className="flex w-full py-2">
            <div className="flex items-center gap-2 w-full">
              <Image
                src={"/assets/images/blankprofile.jpg"}
                className="rounded-full border border-zinc-400"
                alt="profile"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Kachara Sheth</span>
                <span className="text-sm font-normal">Dubai, Bhangarvala</span>
              </div>
            </div>
            <div className="flex items-center mr-2 ">
              <UserMinus className="text-orange-600 hover:text-orange-700 cursor-pointer" />
            </div>
          </div>

          {/* Repeted */}
          <div className="flex w-full py-2">
            <div className="flex items-center gap-2 w-full">
              <Image
                src={"/assets/images/blankprofile.jpg"}
                className="rounded-full border border-zinc-400"
                alt="profile"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Shyam</span>
                <span className="text-sm font-normal">Gorai, Doctor</span>
              </div>
            </div>
            <div className="flex items-center mr-2 ">
              <UserMinus className="text-orange-600 hover:text-orange-700 cursor-pointer" />
            </div>
          </div>
          <div className="flex w-full py-2">
            <div className="flex items-center gap-2 w-full">
              <Image
                src={"/assets/images/blankprofile.jpg"}
                className="rounded-full border border-zinc-400"
                alt="profile"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="text-xl font-semibold">Raju</span>
                <span className="text-sm font-normal">Mira Road, ITUS</span>
              </div>
            </div>
            <div className="flex items-center mr-2 ">
              <UserMinus className="text-orange-600 hover:text-orange-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
