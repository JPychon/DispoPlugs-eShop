import {ProductCard, Section, Grid} from '~/components';

export function ProductDisplayLane({products}) {
  return (
      <Section padding='y' divider='top' heading='Related Products' display='grid'>
        <div className='grid grid-flow-col sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-cols-fr gap-4'>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              className="col-span-1"
            />
          ))}
        </div>
      </Section>
  );
}