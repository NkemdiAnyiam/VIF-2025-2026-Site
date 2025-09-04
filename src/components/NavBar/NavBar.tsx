import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { NavLink } from './NavLink/NavLink';
import { PvfaLogoWhite, TamuLogoWhite, VifLogoMark, VifLogoWide, XSign } from '../iconComponents';

export function NavBar(): JSX.Element {
  const [sticky, setSticky] = useState(window.scrollY > 0);
  const [isMobileWidth, setIsMobileWidth] = useState(window.matchMedia(`(max-width: 768px)`).matches);
  const [expanded, setExpanded] = useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => { setSticky(window.scrollY > 0); }
    window.addEventListener('scroll', handleScroll);

    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setIsMobileWidth(e.matches);
      setExpanded(false);
    }
    const mediaList = window.matchMedia(`(max-width: 768px)`);
    mediaList.addEventListener('change', handleMediaQuery);

    const navEl = navRef.current;
    if (!navEl) { throw new Error('navRef.curr is null'); }
    const trapFocus = (e: KeyboardEvent) => {
      if (!expanded || e.key !== 'Tab') { return; }

      // get all focusable elements within navbar and store the first and last ones
      const focusableEls = navEl.querySelectorAll('span.navbar__link--top-level, a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')
      const firstFocusableEl = focusableEls[0] as HTMLElement;
      const lastFocusableEl = focusableEls[focusableEls.length - 1] as HTMLElement;

      // if Shift + Tab was pressed and first element is focused, wrap to last element
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      }
      // if Tab is pressed and last element was focused, wrap to first element
      else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    }
    navRef.current?.addEventListener('keydown', trapFocus);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaList.removeEventListener('change', handleMediaQuery);
      navEl.removeEventListener('keydown', trapFocus);
    };
  });

  useEffect(() => {
    if (expanded) {
      document.querySelector('body')?.classList.add('scroll-disabled');
    }
    else {
      document.querySelector('body')?.classList.remove('scroll-disabled');
    }
  }, [expanded]);
  
  const handleLogoClick = () => {
    setExpanded(false);
    window.scrollTo(0, 0);
  };

  const handleHamburgerClick = () => {
    setExpanded(true);
  };

  const handleXClick = () => {
    setExpanded(false);
  };

  return (
    <nav ref={navRef} className={`navbar${sticky ? ' navbar--sticky' : ''}${expanded ? ' navbar--expanded' : ''}`}>
      <div className="navbar__logos">
        <Link onClick={handleLogoClick} to="/" className="navbar__logo-link navbar__logo-link--vif" aria-label="Go to homepage">
            <VifLogoMark className={`vif-logo-mark${(sticky || expanded) ? '' : ' vif-logo--invisible'}`} />
            <VifLogoWide className={`vif-logo-wide${!(sticky || expanded) ? '' : ' vif-logo--invisible'}`} />
        </Link>
        <div className="navbar__logo-link navbar__logo-link--tamu">
          {
            (sticky || !isMobileWidth)
            ? <PvfaLogoWhite className={`tamu-logo-wide`} />
            : <TamuLogoWhite className={`tamu-logo-mark`} /> // logo mark shows only at the top of the page at mobile width
          }
        </div>
      </div>
      
      {
        (!isMobileWidth || expanded) &&
        <ul 
          onClick={(e: React.MouseEvent<HTMLUListElement>) => {
            if (e.target instanceof HTMLAnchorElement) {
              e.currentTarget
                .querySelectorAll('.navbar__link')
                .forEach((link) => (link as HTMLElement).blur());

              // if the link is disabled, no need to close the navigation menu
              if (e.target.classList.contains('navbar__link--disabled')) { return; }

              setExpanded(false);
            }
          }}
          className={`navbar__links-list${expanded ? ' navbar__links-list--expanded' : ''}`}
        >
          <li className="navbar__item">
            <span {...expanded ?  {} : {tabIndex: 0}} className="navbar__link navbar__link--top-level">About<span className="dropdown-marker"></span></span>
            
            <ul className={`navbar__nested-list${expanded ? ' navbar__nested-list--expanded' : ''}`}>
              <NavLink to="/about/about-viz" nested>About Viz</NavLink>
              <NavLink to="/about/vif-committee" nested>VIF Committee</NavLink>
            </ul>
          </li>

          <li className="navbar__item">
            <span {...expanded ? {} : {tabIndex: 0}} className="navbar__link navbar__link--top-level">Event Information<span className="dropdown-marker"></span></span>

            <ul className={`navbar__nested-list${expanded ? ' navbar__nested-list--expanded' : ''}`}>
              <NavLink to="/event-information/for-students" nested>For Students</NavLink>
              <NavLink to="/event-information/for-industry" nested>For Industry</NavLink>
              <NavLink to="/event-information/common-questions" nested>Common Questions</NavLink>
            </ul>
          </li>

          <li className="navbar__item">
            <NavLink to="/schedule">Schedule</NavLink>
          </li>
        </ul>
      }

      {
        isMobileWidth &&
        (
          expanded ?

          <button onClick={handleXClick} className="navbar__close-button" aria-label="Close nav">
            <XSign className="navbar__close-button-icon" />
          </button> :

          <div onClick={handleHamburgerClick} className="navbar__hamburger">
            <button className="navbar__hamburger-button" aria-label="Open nav">
              <div className="navbar__hamburger-bar"></div>
              <div className="navbar__hamburger-bar"></div>
              <div className="navbar__hamburger-bar"></div>
            </button>
          </div>
        )
      }
    </nav>
  );
}
