import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from 'swiper/react';


export function ProductSlideShow({ collections }) {
  return (
    <div className="shadow-lg overflow-hidden">
      <Carousel
        autoplay
        className="rounded-b-md h-[60vh]"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="filled"
          color="blue-gray"
          size="sm"
          ripple
          onClick={handlePrev}
          className="!absolute top-2/4 -translate-y-2/4 left-4"
        >
          <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="filled"
          color="blue-gray"
          size="sm"
          onClick={handleNext}
          className="!absolute top-2/4 -translate-y-2/4 !right-4"
        >
          <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
        </IconButton>
      )} 
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-gray w-8" : "bg-black w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {
        collections.map((collection, index) => {
          return <Slide key={index} collection={collection}/> 
      })
      }
  </Carousel>
  </div>
  )
} 

function Slide({ collection }) {
  return(
    <div className='w-full h-full bg-gradient-to-r from-primary to-transparent shadow-md rounded-b-lg overflow-hidden p-2'>
      <Link to={`/collections/${collection.handle}`} key={collection.id}>
        <Image
          className='w-full h-full pb-4 pl-0 pr-0 ml-0 mr-0 object-contain bg-primaryOpacity transition-transform duration-500 transform hover:scale-105'
          data={collection.image}
          alt={`Image of ${collection.title}`}
          loading='lazy'
        />
      </Link>
    </div>
  )
}
