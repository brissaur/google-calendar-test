import fetcher from '../../../technical/network/fetcher';

export default async function createMeeting() {
  const meeting = await fetcher.post('/meeting');

  return meeting;
}
