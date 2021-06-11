import {
  Ressource, ContentBlockType, RessourceType,
} from '../data-types';

export default {
  result: [
    {
      id: '0',
      typ: RessourceType.AUDIO_SOURCE,
      heading: 'A1',
      author: 'Random Author',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Nl-Evian_2-article.ogg',
      caption: 'Audio Audio',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Beschreibung',
          glossarEntries: [],
          text: 'Dies das Französische Revolution',
          tipps: [],
        },
      ],
    },
  ],
};

export interface AudioRessource extends Ressource {
  url: string,
}
