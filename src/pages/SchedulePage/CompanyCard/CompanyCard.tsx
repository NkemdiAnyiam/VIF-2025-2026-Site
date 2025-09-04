import React, { useState } from 'react';
import { nameToLogoName, toExternalUrl } from '../../../utils';

export interface CompanyCardProps {
  companyName: string;
  focuses: string;
  positionTypes: string[];
  website: string;
  interviews: string;
}

const renderTags = (positionTypes: string[]): JSX.Element[] => {
  return positionTypes
    .filter(positionType => positionType.trim() !== '') // prevent blanks
    .map((positionType) => {
      return (
        <li key={positionType.replace(' employees', '')} className="company-card__position-item">
          <div className="company-card__tag">{positionType.replace(' employees', '')}</div>
        </li>
      );
    });
};

export function CompanyCard(props: CompanyCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const logoName = nameToLogoName(props.companyName);

  return (
    <div className={`company-card company-card--white`}>
      <div className="company-card__header" onClick={() => setExpanded(!expanded)}>
        <div className="company-card__photo-container">
          {/* <picture className="company-card__picture company-card__picture--blurred">
            <source srcSet={require(`../../../images/companies/${logoName}.webp`)} type="image/webp" />
            <source srcSet={require(`../../../images/companies/${logoName}.jpg`)} type="image/jpeg" />
            <img src={require(`../../../images/companies/${logoName}.jpg`)} alt={props.companyName + ' logo'} className="company-card__photo company-card__photo--blurred" />
          </picture> */}
          <picture className="company-card__picture">
            <source srcSet={require(`../../../images/companies/${logoName}.webp`)} type="image/webp" />
            <source srcSet={require(`../../../images/companies/${logoName}.jpg`)} type="image/jpeg" />
            <img src={require(`../../../images/companies/${logoName}.jpg`)} alt={props.companyName + ' logo'} className="company-card__photo" />
          </picture>
        </div>

        <div className={`company-card__title`}>
          <h3 className={`company-card__name`}>{props.companyName}</h3>
        </div>

        <p className={`company-card__focuses`}>{props.focuses}</p>

        <button className="dropdown-marker-container" aria-label={`${expanded ? 'Collapse' : 'Expand'} description for ${props.companyName}`}>
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </button>
      </div>

      <div className={`company-card__description${!expanded ? ' company-card__description--hidden' : ''}`} aria-hidden={!expanded ? "true" : "false"}>
        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Website:</h4>
          <a
            href={toExternalUrl(props.website)}
            className="link company-card__website"
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${props.companyName}'s website`}
            tabIndex={expanded ? 0 : -1}
          >
            Visit {props.companyName}
          </a>
        </div>

        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Recruiting:</h4>
          <ul className="company-card__positions-list">{renderTags(props.positionTypes)}</ul>
        </div>

        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Interviews:</h4>
          <div className={`company-card__tag company-card__tag--${
            (() => {
              switch(props.interviews) {
                case 'Yes': return 'green';
                case 'No': return 'red';
                case 'Maybe': return 'yellow';
              }
            })()}`
          }>
            {props.interviews}
          </div>
        </div>
      </div>
    </div>
  );
}

