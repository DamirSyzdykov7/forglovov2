import { PostCard } from "../../../entities/Post/PostCard";
import { CreatePost } from "../../../features/CreatePost";

export function PostFeed() {
  return (
    <main className="ml-[250px] p-8 max-w-[800px]">
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
