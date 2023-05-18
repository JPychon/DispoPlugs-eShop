import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {Carousel} from 'flowbite-react';
import { useEffect, useRef } from 'react';

export function SlideShow({ collections }) {
  return (
<div className="h-96 sm:h-96 lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh]">
  <Carousel slideInterval={5000}>
    {collections.map((collection) => (
      // map through the collections array
      <Link
        key={collection.id}
        to={`/collections/${collection.handle}`}
        className="overscroll-x-hidden overflow-hidden lg:overscroll-x-hidden lg:overflow-hidden xl:overscroll-x-hidden xl:overflow-hidden 2xl:overscroll-x-hidden 2xl:overflow-hidden rounded-md w-full"
      >
            <Image
              className="object-contain h-96 sm:h-96 lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] w-full"
              alt={`Image of ${collection.title}`}
              data={collection.image}
              loaderOptions={{
                scale: 3,
                crop: 'center',
              }}
            />
      </Link>
    ))}
  </Carousel>
</div>
  );
}
