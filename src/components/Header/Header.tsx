import React from 'react';

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
  imageName: string;
  type: 'landing' | 'normal';
  objectPosition?: `${number}${'%' | 'rem' | 'px'}` | `${number}${'%' | 'rem' | 'px'} ${number}${'%' | 'rem' | 'px'}`;
}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className={`header header--${props.type}`}>
      <div className={`header__background header__background--${props.type === 'landing' ? 'green' : 'yellow'}`}>
        <picture className="header__background-picture">
          <source media="(max-width: 768px)" srcSet={require(`../../images/banners/${props.imageName}--thin.webp`)} type="image/webp" />
          <source media="(min-width: 769px)" srcSet={require(`../../images/banners/${props.imageName}.webp`)} type="image/webp" />
          <source media="(max-width: 768px)" srcSet={require(`../../images/banners/${props.imageName}--thin.jpg`)} type="image/jpeg" />
          <source media="(min-width: 769px)" srcSet={require(`../../images/banners/${props.imageName}.jpg`)} type="image/jpeg" />
          <img
            src={require(`../../images/banners/${props.imageName}.jpg`)}
            alt=""
            className="header__background-img"
            {...(props.objectPosition ? {style: {objectPosition: props.objectPosition}} : {})} />
        </picture>
      </div>
      <div className="container">
        {props.children}
      </div>
    </header>
  );
}
