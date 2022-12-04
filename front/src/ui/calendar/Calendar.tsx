import createMeeting from '../../business/agenda/meeting/services';
import './Calendar.css';
import Day from './Day';

interface Props {

}

const DAYS = [
  { display: 'Monday 5', dayNumber: 5 },
  { display: 'Tuesday 6', dayNumber: 6 },
  { display: 'Wednesday 7', dayNumber: 7 },
  { display: 'Thursday 8', dayNumber: 8 },
  { display: 'Friday 9', dayNumber: 9 },
];

export default function Calendar() {
  return (
    <div className="calendar">
      {DAYS.map(({ display, dayNumber }) => (
        <Day
          key={dayNumber}
          title={display}
          onHoursDragAndDrop={async (res) => {
            console.log(res);
            const createdMeeting = await createMeeting();
            console.log('createdMeeting', createdMeeting);
            alert(`SUCCESS: Meeting available on url: ${createdMeeting.data.url}`);
          }}
        />
      ))}
    </div>
  );
}
