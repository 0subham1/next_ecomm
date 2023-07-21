
import { Card } from "@mui/material";
import React from "react";
import { useRouter } from "next/navigation";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import GradingIcon from "@mui/icons-material/Grading";
const Nav = ({ css }) => {
  const router = useRouter();
  return (
    <>
      <Card className="row2">
        <div onClick={() => router.push("/Items")} className="hover">
          <FastfoodIcon /> <span>Items</span>
        </div>
        <br />{" "}
        <div onClick={() => router.push("/Orders")} className="hover">
          <GradingIcon /> <span>Orders</span>
        </div>
        <br />
        <div onClick={() => router.push("/Users")} className="hover">
          <AccessibilityNewIcon /> <span>Users</span>
        </div>
      </Card>
    </>
  );
};

export default Nav;
