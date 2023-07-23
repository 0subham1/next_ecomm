"use client";
import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import GradingIcon from "@mui/icons-material/Grading";
import Cookies from "universal-cookie";
const Nav = () => {
  const cookies = new Cookies();
  const router = useRouter();
  
  let userInfo=cookies.get("userInfo")

  
  return (
    <>
      {userInfo?.isAdmin ? (
        <Card className="row2">
          <div onClick={() => router.push("/items")} className="hover">
            <FastfoodIcon /> <span>Items</span>
          </div>
          <br />{" "}
          <div onClick={() => router.push("/orders")} className="hover">
            <GradingIcon /> <span>Orders</span>
          </div>
          <br />
          <div onClick={() => router.push("/users")} className="hover">
            <AccessibilityNewIcon /> <span>Users</span>
          </div>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};

export default Nav;
