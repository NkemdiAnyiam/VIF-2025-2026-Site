import React from "react";

type PictureSquareProps = {
  text?: string;
  imageName: string;
  altText?: string;
  color: 'red' | 'green' | 'yellow' | 'purple';
}

export function PictureSquare(props: PictureSquareProps): JSX.Element {
  return (
    <div className={`picture-square${props.color ? ` picture-square--${props.color}` : ''}`}>
      <p className="picture-square__text">{props.text}</p>
      <div className="picture-square__background">
        <picture className="picture-square__picture">
          <source srcSet={require(`../../images/programs/${props.imageName}.webp`)} type="image/webp" />
          <source srcSet={require(`../../images/programs/${props.imageName}.jpg`)} type="image/jpeg" />
          <img src={require(`../../images/programs/${props.imageName}.jpg`)} alt={props.altText || ''} className="picture-square__image" />
        </picture>
      </div>
    </div>
  );
}
