import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {Carousel} from 'flowbite-react';

export function SlideShow({ collections }) {
  return (
<div className="h-96 sm:h-96 lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] overflow-x-hidden hiddenScroll">
  <Carousel slideInterval={5000}>
    {collections.map((collection) => (
      // map through the collections array
      <Link
        key={collection.id}
        to={`/collections/${collection.handle}`}
        className="w-full"
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
