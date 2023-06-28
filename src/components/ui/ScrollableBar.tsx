import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1220 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 8
  },
  smallTablet: {
    breakpoint: { max: 767, min: 501 },
    items: 7
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 5
  }
};

import React from 'react'

export default function ScrollableBar({children}: {children: React.ReactNode}) {
  return (
    <Carousel
      className="flex md:gap-6 w-full shadow-md p-2 md:p-4 md:rounded-lg overflow-x-auto z-0"
      responsive={responsive}
    >
      {children}
    </Carousel>
  )
}
