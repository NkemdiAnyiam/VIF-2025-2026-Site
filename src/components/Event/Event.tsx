import React from 'react';

import { EventBoxProps } from '../EventBox/EventBox';

type EventProps = {
  eventName: string;
  eventBoxes?: React.ReactElement<EventBoxProps>[];
  children?: JSX.Element | JSX.Element[];
}

export function Event({ eventName, eventBoxes, children }: EventProps): JSX.Element {
  return (
    <div className="event">
      <h3 className="heading-tertiary">{eventName}</h3>
      {children}
      {
        eventBoxes &&
        <div className="event__event-boxes">
          {eventBoxes.map(eventBox => {return {...eventBox, key: eventBox.props.heading}})}
        </div>
      }
    </div>
  );
}
