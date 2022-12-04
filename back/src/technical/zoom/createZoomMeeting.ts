const { ZOOM_MEETING_URL } = process.env;

if (!ZOOM_MEETING_URL) {
  throw new Error('missing env var ZOOM_MEETING_URL');
}

export default async function createZoomMeeting() {
  return { url: ZOOM_MEETING_URL };
}
