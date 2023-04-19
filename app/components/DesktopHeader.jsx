import {
  Input,
  IconSearch,
  Link,
  AccountLink,
  CartCount,
  Text,
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
            ? 'bg-primary text-gray shadow-lg'
            : 'bg-primary text-gray shadow-lg'
        } ${
          !isHome && y > 50 && 'shadow-lightHeader'
        } fixed hidden h-nav lg:flex items-center sticky transition duration-300 z-40 top-0 justify-between w-full leading-none gap-8 px-12 py-8`}
      >
        <div className="flex gap-12">
          <Link className="font-bold" to="/" prefetch="intent">
            <img
                  src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/small-logo.png?v=1681884207"
                  className='w-full h-14 object-cover'
              />
          </Link>
          <nav className="flex gap-8 mt-8">
            {/* Top level menu items */}
            {(menu?.items || []).map((item) => (
              <Link
                key={item.id}
                to={item.to}
                target={item.target}
                prefetch="intent"
                className={
                  ({isActive}) =>
                  isActive ? 'pb-1 border-b -mb-px border-lightGray font-bold' : 'pb-1 font-semibold'
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
                  ? 'text-lightGray focus:border-gray border-b border-gray'
                  : 'text-lightGray focus:border-gray border-b border-gray'
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