import {
  Input,
  IconSearch,
  Heading,
  IconMenu,
  Link,
  AccountLink,
  CartCount,
} from '~/components';
import {useParams, Form} from '@remix-run/react';

export function MobileHeader({title, isHome, openCart, openMenu}) {
    // useHeaderStyleFix(containerStyle, setContainerStyle, isHome);
  
    const params = useParams();
  
    return (
      <header
        role="banner"
        className={`${
          isHome
            ? 'bg-primary text-gray shadow-lg'
            : 'bg-primary text-gray shadow-lg'
        } flex lg:hidden items-center h-nav sticky z-40 top-0 justify-between w-full leading-none gap-4 px-4 md:px-8 fixed sm:mt-0 md:mt-0`}
      >
        <div className="flex items-center justify-start w-full gap-4">
          <button
            onClick={openMenu}
            className="relative flex items-center justify-center w-8 h-8"
          >
            <IconMenu />
          </button>
          <Form
            method="get"
            action={params.lang ? `/${params.lang}/search` : '/search'}
            className="items-center gap-2 sm:flex"
          >
            <button
              type="submit"
              className="relative flex items-center justify-center w-8 h-8"
            >
              <IconSearch />
            </button>
            <Input
              className={
                isHome
                ? 'text-lightGray focus:border-contrast/20'
                  : 'text-lightGray focus:border-primary/20'
              }
              type="search"
              variant="minisearch"
              placeholder="Search"
              name="q"
            />
          </Form>
        </div>
  
        <Link
          className="flex items-center self-stretch leading-[3rem] md:leading-[4rem] justify-center flex-grow w-full h-full"
          to="/"
        >
          {/*<Heading className="font-bold text-center" as={isHome ? 'h1' : 'h2'}>
            {title}
          </Heading>*/}
          <img
                src="https://cdn.shopify.com/s/files/1/0745/8501/4570/files/small-logo.png?v=1681884207"
                className='w-fit h-fit object-cover'
            />
        </Link>
  
        <div className="flex items-center justify-end w-full gap-4">
          <AccountLink className="relative flex items-center justify-center w-8 h-8" />
          <CartCount isHome={isHome} openCart={openCart} />
        </div>
      </header>
    );
  }