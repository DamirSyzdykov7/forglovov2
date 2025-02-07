import { Header } from "../../../widget/Header";
import { SideBar } from "../../../widget/SideBar";
import { PostFeed } from "../../../PostFeed/ui/PostFeed";
import { useState } from "react";

export function Home() {
  const [isSwitched, setIsSwitched] = useState(false);

  return (
    <div className="">
      <Header />
      <SideBar />
      <PostFeed />
    </div>
  );
}
