import React from 'react';

type FooterLinkProps = {
  href: string;
  children: JSX.Element;
  ariaLabel: string
}

export function FooterLink(props: FooterLinkProps): JSX.Element {
  return (
    <li className="footer__item">
      <a className="footer__link" href={props.href} target="_blank" rel="noreferrer" aria-label={props.ariaLabel}>
        {props.children}
      </a>
    </li>
  );
}
