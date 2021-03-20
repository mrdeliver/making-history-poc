import { ContentBlock, ContentBlockType, Ressources } from './data-types';

export default {
  result: [
    {
      id: '1',
      chapterId: '1',
      name: 'Ursachen und Bedingungen',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: '',
          text: 'Der Nationalkonvent beschloss am 5. September 1793 unter dem Druck der Septemberbewegung, die das Gebäude besetzt hielt, die Einführung von Terrormaßnahmen zur Unterdrückung aller „konterrevolutionären“ Aktivitäten. Etwa 21.000 „Überwachungsausschüsse“ wurden gebildet. Das Revolutionstribunal führte als Gerichtshof die Prozesse gegen politische Täter. Gegen seine Urteile war keine Berufung möglich. Ähnliche Tribunale gab es auch in den Provinzen. Gemeinsam mit dem Wohlfahrtsausschuss beriet sich wöchentlich der Sicherheitsausschuss. Dieser beauftragte die Revolutionskomitees mit der listenmäßigen Erfassung von verdächtigen Personen. Am 17. September 1793 wurde das Gesetz über die Verdächtigen beschlossen: Adlige, ehemalige Beamte des Ancien Régimes, Spekulanten, heimgekehrte Emigranten und überhaupt alle, die nicht Gewähr boten, jederzeit für die Revolution einzustehen, wurden auf eigene Kosten unbefristet in Haft genommen. Dies betraf zwischen 300.000 und 800.000 Personen, also 1 – 4 % der Bevölkerung Frankreichs.',
          glossarEntries: [],
          tipps: [],
        },
        {
          type: ContentBlockType.SOURCE_CONTENT_BLOCK,
          sourceType: 'imageSource',
          id: '1',
        },
      ],
      ressources: {
        textSources: [],
        imageSources: ['1'],
        audioSources: [],
        workSheets: [],
      },
    },
    {
      id: '2',
      chapterId: '1',
      name: 'Opferzahlen',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: '',
          text: 'Die Terrorherrschaft führte in Frankreich nach Archivunterlagen, die von Donald Greer ausgewertet wurden, zu mindestens 16.594 Todesurteilen[4] vollstreckt durch die Guillotine, davon über 2500 in Paris. 1306 der in Paris Hingerichteten liegen auf dem Friedhof Picpus begraben, weitere auf dem Cimetière des Errancis, dem Cimetière de la Madeleine und dem Cimetière de Sainte-Marguerite.',
          glossarEntries: [],
          tipps: [],
        },
      ],
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
        workSheets: [],
      },
    },
  ],
};

export interface Subchapter {
  id: string,
  chapterId: string,
  name: string,
  content: ContentBlock[],
  ressources: Ressources
}
