"use client";
import Nav from "@/components/Nav";
import { useRouter,usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

const page = () => {
  const pathName=usePathname()
  const router = useRouter();
  useEffect(() => {
    console.log("a")
    router.refresh();
  }, [pathName]);
  return <>home</>;
};

export default page;
