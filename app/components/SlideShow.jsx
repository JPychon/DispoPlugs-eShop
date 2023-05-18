import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {Carousel} from 'flowbite-react';


export function SlideShow({collections}) {
    return(
      <div className="h-96 sm:h-64 xl:h-96 2xl:h-96">
        <Carousel slideInterval={5000}>
          {collections.map((collection) => ( // map through the collections array
            <Link key={collection.id} to={`/collections/${collection.handle}`} className="overscroll-x-hidden overflow-hidden">
                  <Image
                    width="100%"
                    className='object-cover h-auto'
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