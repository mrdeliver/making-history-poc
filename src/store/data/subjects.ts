export default {
  result: [
    {
      id: '1',
      heading: 'Geschichte',
      bandIds: ['1'],
      titleImagePath: '',
    },
    {
      id: '2',
      heading: 'Mathematik',
      bandIds: [],
      titleImagePath: '',
    },
    {
      id: '3',
      heading: 'Deutsch',
      bandIds: [],
      titleImagePath: '',
    }],
};

export interface Subject {
  id: string,
  heading: string,
  bandIds: string[],
  titleImagePath: string
}
