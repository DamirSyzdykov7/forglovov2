import { Header } from "../../../widgest/Header";
import { SideBar } from "../../../widgest/SideBar";
import { PostFeed } from "../../../widgest/PostFeed";
import { useState } from "react";

export function Home() {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <div className="">
      <Header props={isSwitched} />
      <SideBar />
      <PostFeed />
    </div>
  );
}
