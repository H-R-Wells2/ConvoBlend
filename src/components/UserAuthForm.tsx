"use client";

import React, { useState } from "react";
import signIn from "next-auth";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/Toast";
import { FcGoogle } from "react-icons/fc";

const UserAuthForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      // await signIn()
      toast({
        title: "Not Yet Implemented ",
        description: "Authentication stuck due to database limitation",
        variant: "destructive",
      });
    } catch (err) {
      toast({
        title: "Not Yet Implemented ",
        description: "Authentication stuck due to database limitation",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-2">
      <button
        className="w-full rounded-full bg-zinc-100/80 px-3 py-2 border border-gray-300 flex mt-3 items-center justify-start hover:bg-orange-200/20 active:bg-orange-200/30"
        onClick={loginWithGoogle}
      >
        <FcGoogle className="h-6 w-6" />
        <span className="text-center flex justify-center w-full">
          Continue with Google
        </span>
      </button>
    </div>
  );
};

export default UserAuthForm;
