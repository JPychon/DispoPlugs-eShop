import {useIsHomePath} from '~/lib/utils';
import {Heading, IconCaret, Section, Link, CountrySelector} from '~/components';
import {Disclosure} from '@headlessui/react';
import {Suspense} from 'react';


export function Footer({menu}) {
    const isHome = useIsHomePath();
    const itemsCount = menu
      ? menu?.items?.length + 1 > 4
        ? 4
        : menu?.items?.length + 1
      : [];
  
    return (
      <Section
        divider={isHome ? 'none' : 'top'}
        as="footer"
        role="contentinfo"
        className={`grid min-h-[25rem] items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-${itemsCount}
          bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
      >
        {<FooterMenu menu={menu} />}
        {/*<CountrySelector />*/}
        <div
          className={`self-end pt-8 opacity-50 md:col-span-2 lg:col-span-${itemsCount}`}
        >
        &copy; {new Date().getFullYear()} / Disposables Plug | All Rights Reserved.
        </div>
      </Section>
    );
  }
  
  const FooterLink = ({item}) => {
    if (item.to.startsWith('http')) {
      return (
        <a href={item.to} target={item.target} rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  
    return (
      <Link to={item.to} target={item.target} prefetch="intent">
        {item.title}
      </Link>
    );
  };
  
  function FooterMenu({menu}) {
    const styles = {
      section: 'grid gap-4',
      nav: 'grid gap-2 pb-6',
    };
  
    return (
      <>
        {(menu?.items || []).map((item) => (
          <section key={item.id} className={styles.section}>
            <Disclosure>
              {({open}) => (
                <>
                  <Disclosure.Button className="text-left md:cursor-default">
                    <Heading className="flex justify-between" size="lead" as="h3">
                      {item.title}
                      {item?.items?.length > 0 && (
                        <span className="md:hidden">
                          <IconCaret direction={open ? 'up' : 'down'} />
                        </span>
                      )}
                    </Heading>
                  </Disclosure.Button>
                  {item?.items?.length > 0 ? (
                    <div
                      className={`${
                        open ? `max-h-48 h-fit` : `max-h-0 md:max-h-fit`
                      } overflow-hidden transition-all duration-300`}
                    >
                      <Suspense data-comment="This suspense fixes a hydration bug in Disclosure.Panel with static prop">
                        <Disclosure.Panel static>
                          <nav className={styles.nav}>
                            {item.items.map((subItem) => (
                              <FooterLink key={subItem.id} item={subItem} />
                            ))}
                          </nav>
                        </Disclosure.Panel>
                      </Suspense>
                    </div>
                  ) : null}
                </>
              )}
            </Disclosure>
          </section>
        ))}
      </>
    );
  }


export function FooterLayout() {
  return(
    <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://disposablesplug.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Disposables Plug</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://disposablesplug.com/" class="hover:underline">Disposables Plug</a>. All Rights Reserved.</span>
    </div>
</footer>
)}