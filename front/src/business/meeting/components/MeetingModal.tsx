/* eslint-disable react/require-default-props */
import { useState } from 'react';
import ReactModal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface Props {
  meetingRequest?: {
    hourStart?: number
    hourEnd?: number
    day?: string;
  },
  isOpen: boolean;
  cancel: () => Promise<unknown>
  submit: ({
    hourStart, hourEnd, day, details,
  }: {
    hourStart?: number,
    hourEnd?: number,
    day?: string,
    details?: string
  }) => Promise<unknown>
}

export default function MeetingModal({
  meetingRequest, cancel, submit, isOpen,
}: Props) {
  const [details, setDetails] = useState('');
  const { hourStart, hourEnd, day } = (meetingRequest || {});

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <ReactModal
        isOpen={isOpen}
        // eslint-disable-next-line react/jsx-no-bind
        style={customStyles}
        contentLabel="Confirm meeting"
      >
        <h2>Please confirm meeting</h2>
        <div>
          {`day: ${day}`}
        </div>
        <div>
          {`start: ${hourStart}h`}
        </div>
        <div>
          {`end: ${hourEnd}h`}
        </div>
        <div>
          (optional) provide any additional infos
          <input value={details} onChange={(e) => setDetails(e.target.value)} />
        </div>
        <button type="button" onClick={() => cancel().then(() => setDetails(''))}>Cancel</button>
        <button
          type="button"
          onClick={() => submit({
            day, hourEnd, hourStart, details,
          }).then(() => setDetails(''))}
        >
          Confirm
        </button>
      </ReactModal>
    </div>
  );
}
