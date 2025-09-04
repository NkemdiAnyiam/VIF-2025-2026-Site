import React from 'react';
import { Link, useHistory } from 'react-router-dom';

type NavLinkProps = {
  to: string;
  nested?: boolean;
  children: JSX.Element | string | JSX.Element[];
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function NavLink({to, nested, children, ...rest}: NavLinkProps): JSX.Element {
  const history = useHistory();

  return (
    <Link
      {...rest}
      to={to}
      className={`navbar__link${nested ? ' navbar__link--nested' : ''}${history.location.pathname === to ? ' navbar__link--active' : ''}`
    }>
      {children}
    </Link>
  );
}
