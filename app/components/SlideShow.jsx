import {Link} from '~/components';
import {Image} from '@shopify/hydrogen';
import {Carousel} from 'flowbite-react';

export function SlideShow({ collections }) {
  return (
    <div className="h-[2vh] overflow-x-hidden hiddenScroll flex items-center justify-center">
      <Carousel slideInterval={5000}>
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.handle}`}
            className="w-full flex items-center justify-center"
          >
                <Image
                  className="object-cover h-full w-full"
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