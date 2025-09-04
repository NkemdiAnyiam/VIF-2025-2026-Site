import React from 'react';
import { TimeEvent } from '../../utils';

export type EventBoxProps = {
  heading: string;
  headingLink?: string;
  events: TimeEvent[];
  modifiers?: string[];
};

const generateListItems = (events: TimeEvent[]): JSX.Element[] => {
  return events.map((event) => {
    const {weekday, month, weekdate, weekdateOrdinal, timeRange, timeZone } = event;
    return (
      <li key={`${month} ${weekdate}`} className="event-box__item">
        <p className="event-box__date">{weekday}, {month} {weekdate}<sup>{weekdateOrdinal}</sup></p>
        <p className="event-box__time">{timeRange} {timeZone}</p>
      </li>
    );
  });
};

export function EventBox(props: EventBoxProps): JSX.Element {
  return (
    <div className={`event-box${props.modifiers?.map(modifier => ` event-box--${modifier}`) ?? ''}`}>
      <h4 className="heading-quaternary">
        {
          props.headingLink
          ? <a href={props.headingLink} className="link" target="_blank" rel="noreferrer">{props.heading}</a>
          : props.heading
        }
      </h4>
      <ul className="event-box__dates-list">
        {generateListItems(props.events)}
      </ul>
    </div>
  );
}
