import React from 'react';
import { timePoints } from '../../../data/times';

interface TimetableRowProps {
  isHeader?: boolean;
  cellData: string[];
}

const renderCells = (cellData: string[], isHeader?: boolean): JSX.Element[] => {
  let row: JSX.Element[];

  if (isHeader) {
    const [heading, ...times] = cellData;
    row = [
      <div key={heading} className={`cell`}><h3 className="heading--tertiary">{heading}</h3></div>,
      ...times.map((str) => {
        return (<div key={str} className={`cell`}><span>{str}</span></div>);
      })
    ];
  }
  else {
    const [companyName, ...availabilities] = cellData;
    let currentConsec = 0;
    let chainStarted = true;
    let chainStart = -1;
    row = [
      <div key={companyName} className={`cell`}><span>{companyName}</span></div>,
      ...availabilities.map((str, index) => {
        if (str === 'X') {
          if (chainStarted) {
            chainStart = index;
          }
          chainStarted = false;
          const startTime = timePoints[chainStart];
          const endTime = timePoints[chainStart + availabilities.join('').slice(chainStart).match(/X*/)![0].length];
          return (
            <div
              title={`${companyName}\n${startTime}-${endTime}`}
              data-group={currentConsec}
              data-start={timePoints[index]}
              data-end={timePoints[index + 1]}
              onMouseEnter={(e) => {
                const parent = e.currentTarget.parentElement!;
                const children = Array.from(parent.querySelectorAll(`[data-group="${e.currentTarget.dataset.group}"]`));
                children.forEach((child) => child.classList.add(`cell--group-hovered`));
              }}
              onMouseLeave={(e) => {
                const parent = e.currentTarget.parentElement!;
                const children = Array.from(parent.querySelectorAll(`[data-group="${e.currentTarget.dataset.group}"]`));
                children.forEach((child) => child.classList.remove(`cell--group-hovered`));
              }}
              key={`${companyName}-${index}`}
              className={`cell cell--filled`}
            >
            </div>
          );
        }
        else {
          ++currentConsec;
          chainStarted = true;
          return (
            <div key={`${companyName}-${index}`} className={`cell cell--empty`}></div>
          )
        }
      })
    ];
  }

  row.splice(1, 0, <div key="spacer-1" className="cell cell--spacer"></div>);
  row.push(<div key="spacer-2" className="cell cell--spacer"></div>);

  return row;
}

export function TimetableRow({isHeader, cellData}: TimetableRowProps): JSX.Element {
  return (
    <div className={`timetable__row${isHeader ? ' timetable__row--header' : ''}`}>
      {renderCells(cellData, isHeader)}
    </div>
  );
}
