import {
  Input,
  IconSearch,
  Link,
  AccountLink,
  CartCount,
  WarningBanner,
} from '~/components';
import {useParams, Form} from '@remix-run/react';
import {useWindowScroll} from 'react-use';

export function DesktopHeader({isHome, menu, openCart}) {
    const params = useParams();
    const {y} = useWindowScroll();
    return (
      <header
        role="banner"
        className={`${
          isHome
            ? 'bg-primaryOpacity/99 dark:bg-primaryOpacity/60 text-contrast dark:text-primary shadow-darkHeader mt-6'
            : 'bg-primaryOpacity/99 dark:bg-primaryOpacity/60 text-contrast dark:text-primary shadow-darkHeader mt-6'
        } ${
          !isHome && y > 50 && ' shadow-lightHeader'
        } fixed hidden h-nav lg:flex items-center sticky transition duration-300 z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
      >
        <div className="flex gap-12 mt-6">
          <Link className="font-bold" to="/" prefetch="intent">
            <img
                src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/logo.png?v=1681790728"
                className='w-full h-52 object-cover -ml-12'
            />
          </Link>
          <nav className="flex gap-8">
            {/* Top level menu items */}
            {(menu?.items || []).map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
                prefetch="intent"
                className={({isActive}) =>
                  isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
                }
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-1 mt-6">
          <Form
            method="get"
            action={params.lang ? `/${params.lang}/search` : '/search'}
            className="flex items-center gap-2"
          >
            <Input
              className={
                isHome
                  ? 'focus:border-contrast/20 dark:focus:border-primary/20'
                  : 'focus:border-primary/20'
              }
              type="search"
              variant="minisearch"
              placeholder="Search"
              name="q"
            />
            <button
              type="submit"
              className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5"
            >
              <IconSearch />
            </button>
          </Form>
          <AccountLink className="relative flex items-center justify-center w-8 h-8 focus:ring-primary/5" />
          <CartCount isHome={isHome} openCart={openCart} />
        </div>
      </header>
    );
  }