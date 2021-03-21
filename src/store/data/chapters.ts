import { ContentBlock, ContentBlockType, Ressources } from './data-types';

export default {
  result: [
    {
      id: '1',
      name: 'Schreckensherrschaft',
      bandId: '1',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Definition',
          text: 'Die Terrorherrschaft, die Schreckensherrschaft oder der Schrecken (französisch La Terreur, „Der Schrecken“) war eine Periode der Französischen Revolution von Anfang Juni 1793 bis Ende Juli 1794, die durch die brutale Unterdrückung aller Personen gekennzeichnet war, die verdächtigt wurden, Gegner der Revolution zu sein. Die Terrorherrschaft wurde vom Wohlfahrtsausschuss, einem Komitee von zwölf Männern, geleitet. Zuerst wurde es von Georges Danton und dann zunehmend von Maximilien de Robespierre angeführt.',
          glossarEntries: ['1', '2'],
          tipps: [
            {
              heading: 'Frankreich',
              text: 'Frankreich im Westen Europas ist ein Land mit mittelalterlichen Städten, Bergdörfern und Mittelmeerstränden. Die Hauptstadt Paris gilt als erstrangiges Mode- und Kulturzentrum.',
            },
            {
              heading: 'Europa',
              text: 'Europa ist ein Erdteil, der sich über das westliche Fünftel der eurasischen Landmasse erstreckt. Obwohl es geographisch gesehen nur ein Subkontinent ist, der mit Asien zusammen den Kontinent Eurasien bildet, wird es historisch und kulturell begründet oft als eigenständiger Kontinent betrachtet.',
            },
          ],
        },
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Wie alles begann...',
          text: 'Die Terrorherrschaft begann mit dem Aufstand der Pariser Sansculotten gegen den Konvent vom 31. Mai bis 2. Juni 1793 und der Annahme der Verfassung vom 24. Juni 1793, die allerdings nie in Kraft trat. Ihren Höhepunkt erreichte sie im Juni und Juli 1794; diese Zeit wird auch als Der Große Terror (frz. la Grande Terreur) bezeichnet. Sie fand ein Ende mit der Verhaftung und Hinrichtung Robespierres und der Machtübernahme der Thermidorianer am 9. Thermidor II (27. Juli 1794).',
          glossarEntries: ['1', '2'],
          tipps: [],
        },
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Opferzahlen',
          text: 'Je nach Schätzung wurden 25.000 bis 40.000 Menschen Opfer des Terrors. Dabei sind die hohen Opferzahlen etwa bei der Niederschlagung des Aufstands in der Vendée nicht vollständig mitgezählt.',
          glossarEntries: ['1', '2'],
          tipps: [
            {
              heading: 'Terror',
              text: 'Der Terror ist die systematische und oftmals willkürlich erscheinende Verbreitung von Angst und Schrecken durch ausgeübte oder angedrohte Gewalt, um Menschen gefügig zu machen.',
            },
          ],
        },
      ],
      ressources: {
        textSources: ['1'],
        imageSources: ['1'],
        audioSources: [],
        workSheets: [],
      },
    },
  ],
};

export interface Chapter {
  id: string,
  name: string,
  bandId: string,
  content: ContentBlock[]
  ressources: Ressources
}
