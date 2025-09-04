import React , { useState } from 'react';

import {
  LogoInstagram, LogoLinkedin, LogoTwitter, LogoYoutube,
  LogoGithub, GlobeOutline, LogoFacebook
} from '../../../../components/iconComponents';

import { CommitteeMember, Socials } from '../../../../data/committee';

type Color = 'red' | 'green' | 'yellow' | 'purple';

export type CommitteeBlockProps = Pick<
  CommitteeMember,
  | 'fullName'
  | 'role'
  | 'rank'
  | 'imageName'
  | 'specialImageName'
  | 'specialImgAlt'
  | 'description'
  | 'socials'
>;

const rankToColor = (rank: CommitteeBlockProps['rank']): Color => {
  switch(rank) {
    case 1: return `red`;
    case 2: return `green`;
    case 3: return `yellow`;
    case 4: return `purple`;
    default: throw new Error(`Invalid rank ${rank} has no corresponding color`);
  }
};

const renderSocialLink = (type: keyof Socials, url: string, memberName: string): JSX.Element => {
  return (
    <li key={url} className="committee-block__social-item">
      <a
        className="committee-block__social-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${memberName}'s ${type}`}
        onClick={(e) => {
          e.stopPropagation(); // prevents triggering setExpanded()
        }}
      >
        {
          (() => {
            switch(type) {
              case 'linkedin': return <LogoLinkedin />;
              case 'youtube': return <LogoYoutube />;
              case 'twitter': return <LogoTwitter />;
              case 'github': return <LogoGithub />;
              case 'facebook': return <LogoFacebook />;
              case 'instagram': return <LogoInstagram />;
              case 'website': return <GlobeOutline />;
              default: throw new Error(`Invalid social type ${type}.`);
            }
          })()
        }
      </a>
    </li>
  );
};

const renderSocialLinks = (socials: Partial<Socials>, memberName: string): JSX.Element[] => {
  return Object.entries(socials)
    .filter(([_, url]) => url)
    .map(([type, url]) => {
      return renderSocialLink(type as keyof Socials, url, memberName);
    });
};

export function CommitteeBlock(props: CommitteeBlockProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`committee-block${` committee-block--${rankToColor(props.rank)}`}`}>
      <div className="committee-block__header" onClick={() => setExpanded(!expanded)}>
        <div className="committee-block__photo-container">
          <picture className="committee-block__picture">
            <source srcSet={require(`../../../../images/committee/${props.imageName}.webp`)} type="image/webp" />
            <source srcSet={require(`../../../../images/committee/${props.imageName}.jpg`)} type="image/jpeg" />
            <img src={require(`../../../../images/committee/${props.imageName}.jpg`)} alt={props.fullName} className="committee-block__photo" />
          </picture>
          {
            props.specialImageName &&
            <picture className="committee-block__picture">
              <source srcSet={require(`../../../../images/committee/${props.specialImageName}.webp`)} type="image/webp" />
              <source srcSet={require(`../../../../images/committee/${props.specialImageName}.jpg`)} type="image/jpeg" />
              <img src={require(`../../../../images/committee/${props.specialImageName}.jpg`)} alt={props.specialImgAlt} className="committee-block__photo committee-block__photo--special" />
            </picture>
          }
        </div>

        <div className={`committee-block__title`}>
          <h3 className={`committee-block__name`}>{props.fullName}</h3>
          <p className={`committee-block__role`}>{props.role}</p>
        </div>

        <button className="dropdown-marker-container" aria-label={`${expanded ? 'Collapse' : 'Expand'} description for ${props.fullName}`}>
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </button>

        {
          Object.keys(props.socials).length > 0 &&
          <ul className={`committee-block__socials`}>
            {renderSocialLinks(props.socials, props.fullName)}
          </ul>
        }
      </div>

      <div className={`committee-block__description${!expanded ? ' committee-block__description--hidden' : ''}`} aria-hidden={!expanded ? "true" : "false"}>
        <div className="paragraphs">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
