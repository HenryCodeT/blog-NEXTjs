import { getPost } from '@/api/api';
import { Post } from '@/interfaces/Post';

const PostPage = async ({ params }: any) => {

  const post: Post | null = await getPost(params?.id);

  return (
    <div className='p-12 max-w-[750px] mx-auto sm:w-full sm:p-4 md:w-full md:p-4 lg:w-auto lg:p-0 '>
      <h1 className='text-gray-700 font-bold text-[1.75rem] leading-[35px] capitalize m-0'>
        {post?.title}
      </h1>
      <p className='leading-[28px] text-[#666] '>
        {post?.body}
      </p>
    </div>
  )
}

export default PostPage