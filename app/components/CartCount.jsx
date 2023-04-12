import {IconBag, Link} from '~/components';
import {Await, useMatches} from '@remix-run/react';
import {useIsHydrated} from '~/hooks/useIsHydrated';
import {Suspense, useMemo} from 'react';


export function CartCount({isHome, openCart}) {
    const [root] = useMatches();
  
    return (
      <Suspense fallback={<Badge count={0} dark={isHome} openCart={openCart} />}>
        <Await resolve={root.data?.cart}>
          {(cart) => (
            <Badge
              dark={isHome}
              openCart={openCart}
              count={cart?.totalQuantity || 0}
            />
          )}
        </Await>
      </Suspense>
    );
}

function Badge({openCart, dark, count}) {
const isHydrated = useIsHydrated();

const BadgeCounter = useMemo(
    () => (
    <>
        <IconBag />
        <div
        className={`${
            dark
            ? 'text-primary bg-contrast dark:text-contrast dark:bg-primary'
            : 'text-contrast bg-primary'
        } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
        >
        <span>{count || 0}</span>
        </div>
    </>
    ),
    [count, dark],
);

return isHydrated ? (
    <button
    onClick={openCart}
    className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
    {BadgeCounter}
    </button>
) : (
    <Link
    to="/cart"
    className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
    >
    {BadgeCounter}
    </Link>
);
}