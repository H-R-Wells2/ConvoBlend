import React from "react";
import { SignIn } from "@/components";

const page = () => {
  return (
    <div className="absolute inset-0 flex justify-center">
      <div className="h-full max-w-2xl flex flex-col justify-center items-center gap-20">
        <SignIn/>
      </div>
    </div>
  );
};

export default page;
