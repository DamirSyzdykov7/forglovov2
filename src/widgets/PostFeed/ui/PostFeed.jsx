import { PostCard } from "../../../entities/Post/PostCard";
import { CreatePost } from "../../../features/CreatePost";

export function PostFeed() {
  return (
    <main className="p-8 min-w-[1000px]">
      {/* New Post Input Component */}
      <CreatePost />

      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
