
import {Suspense, useEffect} from 'react';
import {Await, useMatches, useFetchers} from '@remix-run/react';
import {CartLineItems, CartActions, CartSummary} from '~/components/Cart';
import {Banner} from '~/components/Banner';
import {Footer} from '~/components/Footer';
import {Drawer, useDrawer} from '~/components/Drawer';
import {Image} from '@shopify/hydrogen';

function CartHeader({cart, openDrawer}) {
	return (
	  <Suspense>
		<Await resolve={cart}>
		  {(data) => (
			<button
			  className="relative ml-auto flex items-center justify-center w-120 h-8"
			  onClick={openDrawer}
			>
			  <svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				className="w-5 h-5"
			  >
				<title>Cart</title>
				<path
				  fillRule="evenodd"
				  d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
				></path>
			  </svg>
			  {data?.totalQuantity > 0 && (
				<div className="text-contrast bg-red-500 text-white absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px">
				  <span>{data?.totalQuantity}</span>
				</div>
			  )}
			</button>
		  )}
		</Await>
	  </Suspense>
	);
}

export function Layout({children, title}) {
const {isOpen, openDrawer, closeDrawer} = useDrawer();
const fetchers = useFetchers();
const [root] = useMatches();
const cart = root.data?.cart;

// Grab all the fetchers that are adding to cart
const addToCartFetchers = [];
	for (const fetcher of fetchers) {
	if (fetcher?.submission?.formData?.get('cartAction') === 'ADD_TO_CART') {
		addToCartFetchers.push(fetcher);
		}
	}
	// When the fetchers array changes, open the drawer if there is an add to cart action
	useEffect(() => {
		if (isOpen || addToCartFetchers.length === 0) return;
		openDrawer();
	}, [addToCartFetchers]);

return (
	<div className="flex flex-col min-h-screen antialiased bg-neutral-50">
	<Banner 
		title="WARNING:"
		description="These products contain nicotine - Nicotine is an addictive chemical."
	/>
	<header
		role="banner"
		className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-md bg-neutral-50`}
	>
		<div className="flex gap-12 w-full items-center mt-7">
		<a className="font-bold" href="/">
		<img
		// Website Logo
		src="https://i.ibb.co/kxZhCWz/disposables-plug.png"
		width={200}
		height={50}
		/>
		</a>
		<CartHeader cart={cart} openDrawer={openDrawer} />
		</div>
	</header>
	<main
		role="main"
		id="mainContent"
		className="flex-grow p-6 md:p-8 lg:p-12"
	>
		{children}
	</main>
	<Footer/>
	<Drawer open={isOpen} onClose={closeDrawer}>
		<CartDrawer cart={cart} close={closeDrawer} />
	</Drawer>
	</div>
  );
}

function CartDrawer({cart, close}) {
return (
	<Suspense>
	<Await resolve={cart}>
		{(data) => (
		<>
			{data?.totalQuantity > 0 ? (
			<>
				<div className="flex-1 overflow-y-auto">
				<div className="flex flex-col space-y-7 justify-between items-center md:py-8 md:px-12 px-4 py-6">
					<CartLineItems linesObj={data.lines} />
				</div>
				</div>
				<div className="w-full md:px-12 px-4 py-6 space-y-6 border border-1 border-gray-00">
				<CartSummary cost={data.cost} />
				<CartActions checkoutUrl={data.checkoutUrl} />
				</div>
			</>
			) : (
			<div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
				<h2 className="whitespace-pre-wrap max-w-prose font-bold text-4xl">
				Your cart is empty
				</h2>
				<button
				onClick={close}
				className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none bg-black text-white w-full"
				>
				Continue shopping
				</button>
			</div>
			)}
		</>
		)}
	</Await>
	</Suspense>
  );
}
  