import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"


export function ProductSlideShow({ collections }) {
  return (
    <Carousel
      autoplay
      className="rounded-b-xl overflow-hidden lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] drop-shadow-lg border-x-4 border-b-4 border-t-2 border-{#111827}"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="gradient"
          color="deep-orange"
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
          variant="gradient"
          color="deep-orange"
          size="sm"
          ripple
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
                activeIndex === i ? "bg-orange w-8" : "bg-orange w-4"
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
  )
} 

function Slide({ collection }) {
  return(
    <div className='w-[100vw] md:w-full lg:w-full xl:w-full 2xl:w-full h-full'>
      <Link to={`/collections/${collection.handle}`} key={collection.id}>
                <Image
                  className='w-full h-full object-cover aspect-square w-max-full'
                  data={collection.image}
                  alt={`Image of ${collection.title}`}
                  loaderOptions={{
                  scale: 2,
                  crop: 'bottom',
                }}
                />
      </Link>
    </div>
  )
}
