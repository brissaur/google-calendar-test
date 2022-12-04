import { useState } from 'react';
import MeetingModal from '../../business/meeting/components/MeetingModal';
import createMeeting from '../../business/meeting/services/services';
import logger from '../../technical/logger/logger';

import './Calendar.css';
import Day from './Day';

const DAYS = [
  { display: 'Monday 5', dayNumber: 5 },
  { display: 'Tuesday 6', dayNumber: 6 },
  { display: 'Wednesday 7', dayNumber: 7 },
  { display: 'Thursday 8', dayNumber: 8 },
  { display: 'Friday 9', dayNumber: 9 },
];

export default function Calendar() {
  const [meetingRequest, setMeetingRequest] = useState<{
    hourStart?: number;
    hourEnd?: number;
    day?: string;
  } | null >(null);
  return (
    <div className="calendar">
      <MeetingModal
        isOpen={!!meetingRequest}
        meetingRequest={meetingRequest || undefined}
        cancel={() => Promise.resolve(setMeetingRequest(null))}
        submit={async (data) => {
          logger.log('before api call', data);
          const createdMeeting = await createMeeting();
          logger.log('createdMeeting', createdMeeting);
          setMeetingRequest(null);
          alert(
            `SUCCESS: Meeting available on url: ${createdMeeting.data.url}`,
          );
        }}
      />
      {DAYS.map(({ display, dayNumber }) => (
        <Day
          key={dayNumber}
          title={display}
          onHoursDragAndDrop={async (meeting) => {
            setMeetingRequest({
              hourStart: meeting.firstHour,
              hourEnd: meeting.secondHour,
              day: display,
            });
          }}
        />
      ))}
    </div>
  );
}
