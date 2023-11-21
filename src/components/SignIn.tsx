import React from "react";
import Image from "next/image";
import UserAuthForm from "./UserAuthForm";

const SignIn = () => {
  return (
    <div className="p-3 flex flex-col justify-center ">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={50}
        height={50}
        className="self-center"
      />
      <div className="flex flex-col justify-center items-center py-2">
        <span className="font-bold text-2xl">Welcome Back</span>
        <p className="font-normal text-base text-gray-700 max-w-xs text-center pt-2">
          By continuing, you are setting up a ConvoBlend account and agree to
          our User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
    </div>
  );
};

export default SignIn;
