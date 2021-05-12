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
      url: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/6/6d/Folge_12_-_Crashkurs_Kapitalismus_%28Meine_Wende_-_Unsere_Einheit%29.webm/Folge_12_-_Crashkurs_Kapitalismus_%28Meine_Wende_-_Unsere_Einheit%29.webm.360p.vp9.webm',
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
      caption: 'Französische Revolution I Gründe I musstewissen Geschichte',
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
