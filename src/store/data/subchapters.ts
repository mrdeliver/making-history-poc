import {
  Content,
  ContentBlock, ContentBlockType, Ressources, RessourceType,
} from './data-types';

export default {
  result: [
    {
      id: '1',
      chapterId: '1',
      name: 'Ursachen und Bedingungen',
      content: {
        teacherContent: [],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Der Nationlakonvent',
            text: 'Der Nationalkonvent beschloss am 5. September 1793 unter dem Druck der Septemberbewegung, die das Gebäude besetzt hielt, die Einführung von Terrormaßnahmen zur Unterdrückung aller „konterrevolutionären“ Aktivitäten. Etwa 21.000 „Überwachungsausschüsse“ wurden gebildet. Das Revolutionstribunal führte als Gerichtshof die Prozesse gegen politische Täter. Gegen seine Urteile war keine Berufung möglich. Ähnliche Tribunale gab es auch in den Provinzen. Gemeinsam mit dem Wohlfahrtsausschuss beriet sich wöchentlich der Sicherheitsausschuss. Dieser beauftragte die Revolutionskomitees mit der listenmäßigen Erfassung von verdächtigen Personen. Am 17. September 1793 wurde das Gesetz über die Verdächtigen beschlossen: Adlige, ehemalige Beamte des Ancien Régimes, Spekulanten, heimgekehrte Emigranten und überhaupt alle, die nicht Gewähr boten, jederzeit für die Revolution einzustehen, wurden auf eigene Kosten unbefristet in Haft genommen. Dies betraf zwischen 300.000 und 800.000 Personen, also 1 – 4 % der Bevölkerung Frankreichs.',
            glossarEntries: ['1', '2', '3'],
            tipps: [
              {
                heading: 'Frankreich Supchapter',
                text: 'Frankreich im Westen Europas ist ein Land mit mittelalterlichen Städten, Bergdörfern und Mittelmeerstränden. Die Hauptstadt Paris gilt als erstrangiges Mode- und Kulturzentrum.',
              },
            ],
          },
          {
            type: ContentBlockType.SOURCE_CONTENT_BLOCK,
            sourceType: RessourceType.IMAGE_SOURCE,
            id: '1',
          },
          {
            type: ContentBlockType.SOURCE_CONTENT_BLOCK,
            sourceType: RessourceType.TEXT_SOURCE,
            id: '1',
          },
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Todesstrafe',
            text: 'Mit dem Gesetz vom 22. Prairial vom 10. Juni 1794 begann die Grande Terreur: Die Todesstrafe wurde gegen alle „Feinde des Volkes“ verbindlich festgeschrieben. Die vage Definition öffnete der Denunziation Tür und Tor.',
            glossarEntries: ['1', '2', '3'],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: ['1'],
        imageSources: ['0', '1'],
        audioSources: [],
      },
      worksheets: ['0', '1'],
    },
    {
      id: '2',
      chapterId: '1',
      name: 'Opferzahlen',
      content: {
        teacherContent: [],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Terrorherrschaft',
            text: 'Die Terrorherrschaft führte in Frankreich nach Archivunterlagen, die von Donald Greer ausgewertet wurden, zu mindestens 16.594 Todesurteilen[4] vollstreckt durch die Guillotine, davon über 2500 in Paris. 1306 der in Paris Hingerichteten liegen auf dem Friedhof Picpus begraben, weitere auf dem Cimetière des Errancis, dem Cimetière de la Madeleine und dem Cimetière de Sainte-Marguerite.',
            glossarEntries: ['4'],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: ['1'],
        imageSources: ['1'],
        audioSources: [],
      },
      worksheets: ['2'],
    },
    {
      id: '3',
      chapterId: '1',
      name: 'Napoleon Bonaparte',
      content: {
        teacherContent: [],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: '',
            text: 'Die nach der Entwertung des Papiergelds eingetretene Wirtschaftsdepression, die vor allem durch einen Preisverfall für bäuerliche Produkte und als Folge davon durch eine anhaltende allgemeine Geschäftsflaute bedingt war, hatte breite Kreise der Bevölkerung mehr und mehr gegen das Direktorium aufgebracht.[99]',
            glossarEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
      },
      worksheets: [],
    },
    {
      id: '4',
      chapterId: '1',
      name: 'Rezeption und Deutung',
      content: {
        teacherContent: [],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: '',
            text: 'Geschichte und Geschichtsschreibung der Französischen Revolution sind von ihrem Anbeginn bereits unter Zeitgenossen vielschichtig-facettenreich und kontrovers erfasst worden. In Frankreich hatte die „Große Revolution“ zeitüberdauernd auch politisch identitätsstiftende Bedeutung. Sie wirkte auf akademischer Ebene epochen- und schulbildend, führte zu politischen Polemiken und historiographischen Grabenkriegen.',
            glossarEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
      },
      worksheets: [],
    },
    {
      id: '5',
      chapterId: '1',
      name: 'Siehe auch',
      content: {
        teacherContent: [],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: '',
            text: 'Dem liberalen Ansatz zuzurechnen sind laut Pelzer unter anderen Adolphe Thiers und François-Auguste Mignet; als national-romantisch eingeordnet wird Jules Michelet, strukturanalytisch Alexis de Tocqueville, kulturkritisch Hippolyte Taine, politisch-religiös Alphonse Aulard, internationalistisch Albert Sorel, sozialistisch Louis Blanc Albert Mathiez und Georges Lefèbvre, revisionistisch François Furet und Denis Richet.[103]',
            glossarEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
      },
      worksheets: [],
    },
  ],
};

export interface Subchapter {
  id: string,
  chapterId: string,
  name: string,
  content: Content,
  ressources: Ressources,
  worksheets: string[]
}
