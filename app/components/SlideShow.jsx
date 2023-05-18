import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {Carousel} from 'flowbite-react';


export function SlideShow({collections}) {
    return(
      <div className="h-52 sm:h-64 xl:h-80 2xl:h-96 ">
        <Carousel slideInterval={5000}>
          {collections.map((collection) => ( // map through the collections array
            <Link key={collection.id} to={`/collections/${collection.handle}`} className="overscroll-x-hidden overflow-hidden">
                  <Image
                    width="100%"
                    height="100%"
                    aspectRatio="4/5"
                    alt={`Image of ${collection.title}`}
                    data={collection.image}
                    loaderOptions={{
                      scale: 2,
                      crop: 'center',
                    }}
                  />
            </Link>
          ))}
        </Carousel>
      </div>
)}