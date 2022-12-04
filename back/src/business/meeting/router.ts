import express from 'express';
import createMeetingController from './controller';

const meetingRouter = express.Router();

meetingRouter.post('/meeting', createMeetingController);

export default meetingRouter;
