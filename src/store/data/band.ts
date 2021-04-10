export default {
  result: [
    {
      id: '1',
      heading: 'Französische Revolution',
      teaserText: 'Die Französische Revolution von 1789 bis 1799 gehört zu den folgenreichsten Ereignissen der neuzeitlichen europäischen Geschichte. Die Abschaffung des feudal-absolutistischen Ständestaats sowie die Propagierung und Umsetzung grundlegender Werte und Ideen der Aufklärung als Ziele der Französischen Revolution – das betrifft insbesondere die Menschenrechte – waren mitursächlich für tiefgreifende macht- und gesellschaftspolitische Veränderungen in ganz Europa und haben das moderne Demokratieverständnis entscheidend beeinflusst.',
      backgroundClass: 'frenchRev',
    },
    {
      id: '2',
      heading: 'Kubakrise',
      teaserText: 'Die Kubakrise (in der Sowjetunion und im Sprachgebrauch der DDR auch als „Karibische Krise“, auf Kuba als „Oktoberkrise“ bezeichnet) im Oktober 1962 war eine Konfrontation zwischen den Vereinigten Staaten von Amerika und der UdSSR, die sich aus der Stationierung US-amerikanischer Jupiter-Mittelstreckenraketen auf einem NATO-Stützpunkt in der Türkei und die daraufhin beschlossene Stationierung sowjetischer Mittelstreckenraketen auf Kuba entwickelte.',
      backgroundClass: 'cubaCrisis',
    },
  ],
};

export interface LatestRead {
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
