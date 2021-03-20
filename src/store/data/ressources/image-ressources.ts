import {
  Ressource, Annotation, ContentBlockType, RessourceType,
} from '../data-types';

export default {
  result: [
    {
      id: '1',
      typ: RessourceType.IMAGE_SOURCE,
      author: 'James Gillray  (1756–1815)',
      url: 'https://de.wikipedia.org/wiki/Datei:James_Gillray_Pinnacle_of_Liberty.jpeg',
      caption: 'Schönes Bild von James Gillray (1756-1815), als er damals abgemalt wurde.',
      annotations: [],
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Pinnacle of Liberty',
          glossarEntries: [],
          text: 'The Zenith of French Glory: The Pinnacle of Liberty. Religion, Justice, Loyalty & all the Bugbears of Unenlightend Minds, Farewell!". Karikatur von James Gillray auf die radikale Phase der französische Revolution.',
          tipps: [],
        },
      ],
    },
  ],
};

export interface ImageRessource extends Ressource {
  url: string,
  annotations: Annotation[],
}
