import {
  Ressource, Annotation, ContentBlockType, RessourceType,
} from '../data-types';

export default {
  result: [
    {
      id: '0',
      typ: RessourceType.VIDEO_SOURCE,
      heading: 'V1',
      author: 'Mr Wissen2go Geschichte',
      url: 'https://youtube.com/embed/4dvyIMwUovo',
      caption: 'Französische Revolution I Beginn I musstewissen Geschichte',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Beschreibung',
          glossarEntries: [],
          text: 'Die Französischen Revolution ist ein Drama in 5 Akten: Die Wahl der Generalstände, der Ballhausschwur, der Sturm auf die Bastille, das Ende des Feudalsystems und zuletzt die Verkündung der Menschenrechte. Wie alles zusammenhängt erkärt dir Mirko in diesem Video. ',
          tipps: [],
        },
      ],
    },
    {
      id: '1',
      heading: 'V2',
      typ: RessourceType.VIDEO_SOURCE,
      author: 'Mr Wissen2go Geschichte',
      url: 'https://www.youtube.com/watch?v=TzwQVtzxGto',
      caption: 'Französische Revolution II Gründe I musstewissen Geschichte',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Beschreibung',
          glossarEntries: [],
          text: 'Die Vorgeschichte der Französischen Revolution. Mirko erklärt dir wieso es zur Französischen Revolution kommt und wir schauen uns ganz genau die vier Gründe dafür an. Eben alles, was du dazu wissen musst.',
          tipps: [],
        },
      ],
    },
  ],
};

export interface VideoRessource extends Ressource {
  url: string,
}
