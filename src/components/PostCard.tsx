import { SimplePost } from '@/model/post'
import React from 'react'
import ActionBar from './ActionBar';
// import ModalPortal from './ui/ModalPortal';

type Props = {
  post: SimplePost;
  // 이미지의 옵션 -> 사용자가 먼저 보는 이미지이기 때문에 먼저 받아줘~ 가튼 거
  priority?: boolean;
}

export default function PostCard({post}: Props) {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <article 
      className='flex flex-row w-full items-center justify-center pb-6 md:p-4 bg-white border-1 md:rounded-lg hover:shadow-xl'
      // onClick={()=> setOpenModal(true)}
    >
      <ActionBar 
        post={post}
      />
    </article>
  )
}
