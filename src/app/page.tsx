import { getPosts } from "@/api/api"
import PostComponent from "@/components/Post/Post"
import { Post } from "@/interfaces/Post"
import { NextPage } from "next"

const Home: NextPage = async () => {

  const posts: Post[] | null | undefined = await getPosts();

  return (
    <div>{posts?.map((post) => (
      <PostComponent key={post.id} post={post} />
    ))}</div>
  )
}

export default Home;
