import createZoomMeeting from '../technical/zoom/createZoomMeeting';

export default async function createMeeting() {
  const meeting = await createZoomMeeting();
  return meeting;
}
