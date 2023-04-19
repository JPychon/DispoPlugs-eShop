import {
  WarningBanner,
  Header,
  FooterB,
} from '~/components';

export function Layout({children, layout}) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header
          title={layout?.shop.name ?? 'DisposablesPlug'}
          menu={layout?.headerMenu}
        />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
      <FooterB/>
      {/*<FooterA menu={layout?.footerMenu} />*/}
    </>
  );
}