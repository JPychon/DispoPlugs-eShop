import {Image} from '@shopify/hydrogen';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from '~/components';

export function CollectionSlider({collections}) {
    return (
        <div>
          <Carousel autoPlay>
            {collections.map((collection) => (
              <div key={collection.id}>
                <Link to={`/collections/${collection.handle}`}>
                  {collection?.image && (
                    <Image
                      alt={`Image of ${collection.title}`}
                      data={collection.image}
                      height={400}
                      sizes="(max-width: 32em) 100vw, 33vw"
                      width={600}
                      widths={[400, 500, 600, 700, 800, 900]}
                      loaderOptions={{
                        scale: 2,
                        crop: 'center',
                      }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      );
    };