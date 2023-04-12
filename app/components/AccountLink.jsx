import {
    Link,
    IconAccount,
    IconLogin,
  } from '~/components';
import {useMatches} from '@remix-run/react';

export function AccountLink({className}) {
    const [root] = useMatches();
    const isLoggedIn = root.data?.isLoggedIn;
    return isLoggedIn ? (
      <Link to="/account" className={className}>
        <IconAccount />
      </Link>
    ) : (
      <Link to="/account/login" className={className}>
        <IconLogin />
      </Link>
    );
  }