import { LatestRead } from './band';

export default {
  result: [
    {
      id: '1',
      heading: 'Geschichte',
      bandIds: ['1', '2'],
      backgroundClass: 'history',
    },
    {
      id: '2',
      heading: 'Mathematik',
      bandIds: [],
      backgroundClass: 'math',
    },
    {
      id: '3',
      heading: 'Deutsch',
      bandIds: [],
      backgroundClass: 'german',
    }],
};

export interface Subject {
  id: string,
  heading: string,
  bandIds: string[],
  backgroundClass: string
  latestRead?: LatestRead
}
