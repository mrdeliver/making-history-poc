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
    {
      id: '2',
      typ: RessourceType.IMAGE_SOURCE,
      author: 'Jean-Jacques Le Barbier',
      url: 'https://de.wikipedia.org/wiki/Franz%C3%B6sische_Revolution#/media/Datei:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789.jpg',
      caption: 'Déclaration des Droits de l’Homme et du Citoyen. Die Erklärung der Menschen- und Bürgerrechte in einer Darstellung von Jean-Jacques Le Barbier',
      annotations: [],
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Die Erklärung der Menschen- und Bürgerrechte',
          glossarEntries: [],
          text: 'Als ein Gründungsereignis, das so tief wie kaum ein anderes die Geschichte der Moderne geprägt habe, wird die Französische Revolution in einer neueren Überblicksdarstellung bezeichnet.[1] Nicht nur im Bewusstsein der Franzosen hat diese Revolution eine enorme Bedeutung. Mit der Erklärung der Menschen- und Bürgerrechte vom 26. August 1789 wurden auf dem europäischen Kontinent jene Prinzipien bekräftigt und gegen absolutistische Monarchien in Stellung gebracht, die in der Unabhängigkeitserklärung der nordamerikanischen Kolonisten angelegt waren und die heutzutage von den Vereinten Nationen weltweit propagiert und eingefordert werden.',
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