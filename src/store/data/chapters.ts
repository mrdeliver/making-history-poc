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
          heading: '',
          text: 'Die Terrorherrschaft, die Schreckensherrschaft oder der Schrecken (französisch La Terreur, „Der Schrecken“) war eine Periode der Französischen Revolution von Anfang Juni 1793 bis Ende Juli 1794, die durch die brutale Unterdrückung aller Personen gekennzeichnet war, die verdächtigt wurden, Gegner der Revolution zu sein. Die Terrorherrschaft wurde vom Wohlfahrtsausschuss, einem Komitee von zwölf Männern, geleitet. Zuerst wurde es von Georges Danton und dann zunehmend von Maximilien de Robespierre angeführt.',
          glossarEntries: ['1'],
          tipps: [],
        },
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Wie alles begann...',
          text: 'Die Terrorherrschaft begann mit dem Aufstand der Pariser Sansculotten gegen den Konvent vom 31. Mai bis 2. Juni 1793 und der Annahme der Verfassung vom 24. Juni 1793, die allerdings nie in Kraft trat. Ihren Höhepunkt erreichte sie im Juni und Juli 1794; diese Zeit wird auch als Der Große Terror (frz. la Grande Terreur) bezeichnet. Sie fand ein Ende mit der Verhaftung und Hinrichtung Robespierres und der Machtübernahme der Thermidorianer am 9. Thermidor II (27. Juli 1794).',
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

export interface Chapter {
  id: string,
  name: string,
  bandId: string,
  content: ContentBlock[]
  ressources: Ressources
}
