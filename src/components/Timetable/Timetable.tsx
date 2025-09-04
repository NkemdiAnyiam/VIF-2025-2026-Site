import React, { useEffect, useRef } from 'react';

import { TimetableRow } from './TimetableRow/TimetableRow';

interface TimetableProps {
  heading: 'Virtual' | 'In-Person';
  rowData: string[][];
}

const renderRows = (rowData: TimetableProps['rowData']): JSX.Element[] => {
  return rowData.map((arr) => {
    return <TimetableRow key={arr[0]} cellData={arr} />
  });
}

export function Timetable({heading, rowData}: TimetableProps): JSX.Element {
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tableEl = tableRef.current;

    // when table is clicked
    const handleClick = (e: MouseEvent) => {
      const cell = (e.target as HTMLElement);
      // only do process if time cells were clicked
      if (!(
        cell.classList.contains('cell--filled')
        || cell.classList.contains('cell--empty')
        || cell.classList.contains('cell--spacer')
      )) { return; }

      document.documentElement.classList.add('cursor--move');
      // unhighlight all text to prevent annoying dragging issues
      document.getSelection()?.removeAllRanges();
      // add listeners for handling drag and release
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleRelease);
      window.addEventListener('mouseleave', handleRelease);
    };

    const handleDrag = (e: MouseEvent) => {
      const [x, y] = [e.movementX, e.movementY];
      if (tableEl) {
        tableRef.current?.scrollTo({top: tableEl.scrollTop - y, left: tableEl.scrollLeft - x});
      }
    }
    
    const handleRelease = (e: MouseEvent) => {
      document.documentElement.classList.remove('cursor--move');
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleRelease);
      window.removeEventListener('mouseleave', handleRelease);
    }

    tableEl?.addEventListener('mousedown', handleClick);

    return () => {
      tableEl?.removeEventListener('mousedown', handleClick);
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleRelease);
      window.removeEventListener('mouseleave', handleRelease);
    }
  }, []);

  return (
    <div ref={tableRef} className={`timetable`} draggable={'false'}>
      <TimetableRow
        isHeader
        cellData={[
          heading,
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '1:00',
          '1:30',
          '2:00',
          '2:30',
          '3:00',
          '3:30',
          '4:00',
        ]}
      />
      {renderRows(rowData)}

      {/* <TimetableRow
        cellData={[
          'AEM Creations',
          'X',
          'O',
          'X',
          'O',
          'O',
          'O',
          'O',
          'O',
          'X',
          'X',
          'X',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'App Lovin',
          'O',
          'O',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'X',
        ]}
      />
      <TimetableRow
        cellData={[
          'Credera',
          'X',
          'X',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'X',
          'X',
          'X',
        ]}
      />
      <TimetableRow
        cellData={[
          'Disney',
          'O',
          'X',
          'O',
          'O',
          'X',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'EA',
          'X',
          'X',
          'O',
          'O',
          'O',
          'X',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'IMG Studio',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'Might Coconut',
          'X',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'X',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'Texas Film Commission',
          'O',
          'O',
          'O',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'Texas Moving Picture Alliance (TXMPA)',
          'O',
          'O',
          'X',
          'O',
          'O',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'Viasat',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'X',
          'O',
          'X',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'VIBE',
          'O',
          'O',
          'O',
          'O',
          'X',
          'O',
          'O',
          'O',
          'X',
          'O',
          'O',
          'O',
        ]}
      />
      <TimetableRow
        cellData={[
          'Vytal Studios',
          'O',
          'X',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
          'O',
        ]}
      /> */}
    </div>
  );
}
