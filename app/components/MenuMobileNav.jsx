import {Text, Link} from '~/components';

export function MenuMobileNav({menu, onClose}) {
    return (
      <nav className="grid gap-4 p-6 sm:gap-6 sm:px-12 sm:py-8">
        {/* Top level menu items */}
        {(menu?.items || []).map((item) => (
          <span key={item.id} className="block">
            <Link
              to={item.to}
              target={item.target}
              onClick={onClose}
              className={({isActive}) =>
                isActive ? 'pb-1 border-b -mb-px' : 'pb-1'
              }
            >
              <Text as="span" size="copy" color='text-light'>
                {item.title}
              </Text>
            </Link>
          </span>
        ))}
      </nav>
    );
  }