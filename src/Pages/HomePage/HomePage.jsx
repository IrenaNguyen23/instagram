import React from 'react'
import StoryCircle from '../../Component/Story/StoryCircle'
import HomeRight from '../../Component/HomeRight/HomeRight'
import PostCard from '../../Component/Post/PostCard'
import CreatePostModal from '../../Component/Post/CreatePostModal'
import { useDisclosure } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <div>
      <div className='mt-10 flex w-[100%] justify-center'>
        <div className='w-[44%] px-10'>
          <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full'>
            {[1,1,1].map((item)=> <StoryCircle/>)}
          </div>

          <div className='space-y-10 w-full mt-10'>
            {[1,1,1].map((item)=><PostCard/>)}
          </div>
        </div>
        <div className='w-[35%]'>
          <HomeRight/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
