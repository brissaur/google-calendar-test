import { RequestHandler } from 'express';
import createMeeting from '../services';

// @todo validate params
const createMeetingController: RequestHandler = async (req, res) => {
  const meeting = await createMeeting();

  return res.json(meeting);
};

export default createMeetingController;
