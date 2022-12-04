import "./Calendar.css";

interface Props {}

// const DAYS = [5];
const DAYS = [
  { display: "Monday 5", dayNumber: 6 },
  { display: "Tuesday 5", dayNumber: 6 },
  { display: "Wednesday 7", dayNumber: 7 },
  { display: "Thursday 8", dayNumber: 8 },
  { display: "Friday 9", dayNumber: 9 },
];

const hours = Array.from({ length: 24 }).map((_, index) => index);
function Day({ title }: { title: string }) {
  return (
    <div>
      {title}
      {hours.map((hour) => (
        <div key={hour} className="hour">{hour}</div>
      ))}
    </div>
  );
}

export default function Calendar(props: Props) {
  console.log(props);
  return (
    <div className="calendar">
      {DAYS.map(({ display, dayNumber }) => (
        <Day key={dayNumber} title={display} />
      ))}
    </div>
  );
}
