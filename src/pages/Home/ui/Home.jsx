import { Header } from "../../../widgets/Header";
import { SideBar } from "../../../widgets/SideBar";
import { PostFeed } from "../../../widgets/PostFeed";
import { useState } from "react";


export function Home() {
  return (
    <div className="relative">
      <SideBar />
      <div className="w-full flex justify-center">
        <PostFeed />
      </div>
    </div>
  );
}
