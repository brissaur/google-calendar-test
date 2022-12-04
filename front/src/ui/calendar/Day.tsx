import { useState } from 'react';
import isBetweenNumbers from '../../technical/maths/services';
import './Day.css';

const hours = Array.from({ length: 24 }).map((_, index) => index);

interface Props {
  title: string;
  onHoursDragAndDrop: ({
    firstHour,
    secondHour,
  }: {
    firstHour: number;
    secondHour: number;
  }) => Promise<unknown>;
}

export default function Day({ title, onHoursDragAndDrop }: Props) {
  const [initialElement, setInitialElement] = useState<null | number>(null);
  const [secondElement, setSecondElement] = useState<null | number>(null);
  return (
    <div>
      {title}
      {hours.map((hour) => (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onMouseDown={() => setInitialElement(hour)}
          onMouseEnter={() => {
            // @todo fix: if mouse up outside the column - it breaks
            setSecondElement(hour);
          }}
          onMouseUp={() => {
            if (initialElement === null) {
              return;
            }
            onHoursDragAndDrop({ firstHour: initialElement, secondHour: hour }).then(() => {
              setInitialElement(null);
              setSecondElement(null);
            });
          }}
          key={hour}
          className={['hour', isBetweenNumbers(hour, initialElement, secondElement) ? 'selected' : null].filter(Boolean).join(' ')}
        >
          {hour}
        </div>
      ))}
    </div>
  );
}
