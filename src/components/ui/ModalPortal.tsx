import React from 'react'
import reactDom from 'react-dom'

type Props = {
  children: React.ReactNode;
}

// 칠드런 요소들을
export default function ModalPortal({children}: Props) {


  // 포털 div 요소에 연결해줌
  const node = document.getElementById("portal") as Element;
  return reactDom.createPortal(children, node);
}
