import {
  Content,
  ContentBlockType, Ressources, RessourceType,
} from './data-types';

export default {
  result: [
    {
      id: '1',
      chapterId: '1',
      name: 'Ursachen und Bedingungen',
      content: {
        teacherContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: '',
            text: 'Geschichtsbewusstsein ist eine mentale Disposition die jeder hat, also ein individuelles Konstrukt, das mehr oder weniger stark ausgeprägt und mehr oder weniger reflektiert und (selbst-)reflexiv sein kann. Hierfür eignet sich die Themen-ABC Methode sehr gut.',
            highlightEntries: ['2'],
            tipps: [],
          },
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Sichere Lernumgebung',
            text: 'Eine sichere Lernumgebung zeichnet sich dadurch aus, dass Schülerinnen und Schüler während der kooperativen Unterrichtssituation ein Gefühl der Sicherheit verspüren. Dazu muss ihnen klar sein, was von ihnen erwartet wird. Dies bezieht sich sowohl auf die zu erledigende Aufgabenstellung als auch ihr Arbeitsverhalten und die Arbeitshaltung ihrer Mitschüler. Des Weiteren muss ein Gefühl der Zugehörigkeit sowie des "Man-selbst-Sein" geschaffen werden. Vereinfacht gesagt müssen sich die Schülerinnen und Schüler wohl in ihrer Haut fühlen. Um künstlerisches Denken zu fördern kann die Graffiti Methode eingesetzt werden.',
            highlightEntries: ['1'],
            tipps: [],
          },
        ],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Der Nationlakonvent',
            text: 'Der Nationalkonvent beschloss am 5. September 1793 unter dem Druck der Septemberbewegung, die das Gebäude besetzt hielt, die Einführung von Terrormaßnahmen zur Unterdrückung aller „konterrevolutionären“ Aktivitäten. Etwa 21.000 „Überwachungsausschüsse“ wurden gebildet. Das Revolutionstribunal führte als Gerichtshof die Prozesse gegen politische Täter. Gegen seine Urteile war keine Berufung möglich. Ähnliche Tribunale gab es auch in den Provinzen. Gemeinsam mit dem Wohlfahrtsausschuss beriet sich wöchentlich der Sicherheitsausschuss. Dieser beauftragte die Revolutionskomitees mit der listenmäßigen Erfassung von verdächtigen Personen. Am 17. September 1793 wurde das Gesetz über die Verdächtigen beschlossen: Adlige, ehemalige Beamte des Ancien Régimes, Spekulanten, heimgekehrte Emigranten und überhaupt alle, die nicht Gewähr boten, jederzeit für die Revolution einzustehen, wurden auf eigene Kosten unbefristet in Haft genommen. Dies betraf zwischen 300.000 und 800.000 Personen, also 1 – 4 % der Bevölkerung Frankreichs.',
            highlightEntries: ['1', '2', '3'],
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
            id: '0',
          },
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Todesstrafe',
            text: 'Mit dem Gesetz vom 22. Prairial vom 10. Juni 1794 begann die Grande Terreur: Die Todesstrafe wurde gegen alle „Feinde des Volkes“ verbindlich festgeschrieben. Die vage Definition öffnete der Denunziation Tür und Tor.',
            highlightEntries: ['1', '2', '3'],
            tipps: [],
          },
          {
            type: ContentBlockType.SOURCE_CONTENT_BLOCK,
            sourceType: RessourceType.VIDEO_SOURCE,
            id: '0',
          },
          {
            type: ContentBlockType.SOURCE_CONTENT_BLOCK,
            sourceType: RessourceType.AUDIO_SOURCE,
            id: '0',
          },
          {
            type: ContentBlockType.SOURCE_CONTENT_BLOCK,
            sourceType: RessourceType.MULTI_IMAGE_SOURCE,
            id: '0',
          },
        ],
      },
      ressources: {
        textSources: ['0'],
        imageSources: ['0', '1'],
        audioSources: ['0'],
        videoSources: ['0', '1'],
        multiImageSources: ['0'],
      },
      worksheets: ['0', '1'],
    },
    {
      id: '2',
      chapterId: '1',
      name: 'Opferzahlen',
      content: {
        teacherContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Sichere Lernumgebung',
            text: 'Obschon von 5 Basismerkmalen die Rede ist, geht vor allem von der positiven Abhängigkeit als auch von der individuelle Verantwortung eine besondere Bedeutung aus. Der Arbeitsauftrag muss so beschaffen sein, dass jedes Mitglied der Lerngruppe seinen Teil zur Gesamtlösung beitragen kann. Gerade in heterogenen Lerngruppen kann auf diesem Wege eine hohe Zufriedenheit geschaffen werden. Wenn den Schülerinnen und Schülern klar ist, dass sie nur miteinander zur Gesamtlösung kommen können, steigt so die Verantwortung für das eigene Handeln in den einzelnen kooperativen Arbeitsphasen. Keiner möchte sich eine Blöße geben oder die Anderen enttäuschen.',
            highlightEntries: [],
            tipps: [],
          },
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Vorteile des Kooperativen Lernens',
            text: 'Gerade in der Anfangsphase versuchen die Schüler gern, Themen-ABCs zu konzipieren. Hier gilt es als Lehrkraft von Anfang an darauf zu achten, dass alle drei Phasen korrekt erfolgen. Auch ist der zeitliche Aufwand immer wieder zu berücksichtigen. In 90 Minuten lassen sich kooperative Lernsituationen sehr gut inszenieren, wohin gegen im 45-Minutentakt die Aufgabenstellung entsprechend zu konfektionieren ist. Dies gilt auch für die Auswahl der kooperativen Lernmethode.vKomplexe kooperative Methoden wie das Gruppenpuzzle lassen sich sicherlich auf mehrere Einzelstunden aufteilen, was für das Lerntempoduett nicht geht.',
            highlightEntries: ['2'],
            tipps: [],
          },
        ],
        studentContent: [
          {
            type: ContentBlockType.TEXT_CONTENT_BLOCK,
            heading: 'Terrorherrschaft',
            text: 'Die Terrorherrschaft führte in Frankreich nach Archivunterlagen, die von Donald Greer ausgewertet wurden, zu mindestens 16.594 Todesurteilen[4] vollstreckt durch die Guillotine, davon über 2500 in Paris. 1306 der in Paris Hingerichteten liegen auf dem Friedhof Picpus begraben, weitere auf dem Cimetière des Errancis, dem Cimetière de la Madeleine und dem Cimetière de Sainte-Marguerite.',
            highlightEntries: ['4'],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: ['0'],
        imageSources: ['1'],
        audioSources: [],
        videoSources: [],
        multiImageSources: [],
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
            highlightEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
        videoSources: [],
        multiImageSources: [],
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
            highlightEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
        videoSources: [],
        multiImageSources: [],
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
            highlightEntries: [],
            tipps: [],
          },
        ],
      },
      ressources: {
        textSources: [],
        imageSources: [],
        audioSources: [],
        videoSources: [],
        multiImageSources: [],
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
