export default {
  result: [
    {
      id: '1',
      heading: 'Französische Revolution',
      teaserText: 'Die Französische Revolution von 1789 bis 1799 gehört zu den folgenreichsten Ereignissen der neuzeitlichen europäischen Geschichte.',
      backgroundClass: 'frenchRev',
    },
    {
      id: '2',
      heading: 'Kubakrise',
      teaserText: 'Die Kubakrise (in der Sowjetunion und im Sprachgebrauch der DDR auch als „Karibische Krise“, auf Kuba als „Oktoberkrise“ bezeichnet) im Oktober 1962 war eine Konfrontation zwischen den Vereinigten Staaten von Amerika und der UdSSR.',
      backgroundClass: 'cubaCrisis',
    },
  ],
};

export interface LatestRead {
  bandId: string,
  pageId: string,
  teaserText: string
}

export interface Band {
  id: string;
  heading: string,
  teaserText: string,
  backgroundClass: string,
  latestRead?: LatestRead
}
