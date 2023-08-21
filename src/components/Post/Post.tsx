import { Post } from '@/interfaces/Post'
import Link from 'next/link'
import React from 'react'

const PostComponent = ({ post }: { post: Post }) => {
  return (
    <div className='p-3 max-w-3xl mx-auto lg:w-full lg:p-4 md:w-full md:p-4 sm:w-full sm:p-4 border-gray-600 border-4 rounded m-4 '>

      <div className='bg-gray-800 font-bold text-lg leading-[35px] font-sans font-ptsans capitalize m-0 text-white mx-4 border-2 border-gray-500 rounded-lg text-center'>
        {post.title}
      </div>
      <p className='leading-7 text-[#666] font-sans font-ptsans'>
        {post.body}
      </p>
      <div className='flex flex-col items-center'>
        <Link className="bg-gray-700 text-white font-bold py-2 px-4 rounded" href={`/${post.id}`} >details</Link>
      </div>
    </div>
  )
}

export default PostComponent