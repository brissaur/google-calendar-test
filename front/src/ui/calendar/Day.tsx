import { useState } from 'react';
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
  return (
    <div>
      {title}
      {hours.map((hour) => (
        <div
          onMouseDown={() => {
            setInitialElement(hour);
          }}
          onMouseUp={() => {
            if (initialElement === null) {
              return;
            }
            onHoursDragAndDrop({ firstHour: initialElement, secondHour: hour });
          }}
          key={hour}
          className="hour"
        >
          {hour}
        </div>
      ))}
    </div>
  );
}
