import {ProductCard, Section, Grid} from '~/components';

export function ProductDisplayLane({products}) {
  return (
      <Section padding='y' divider='top' heading='Related Products' display='grid'>
        <Grid layout="products" items={4}>
          {products.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
              className="col-span-1"
            />
          ))}
        </Grid>
      </Section>
  );
}