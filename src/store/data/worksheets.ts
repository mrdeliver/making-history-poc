import { Tip } from './data-types';

export default {
  result: [
    {
      id: '0',
      heading: 'AB1',
      tasks: [
        {
          id: '11',
          heading: 'Aufgabe 1',
          question: 'Wann fand die Französische Revolution statt?',
          tipps: [{
            heading: 'Frankreich Supchapter',
            text: 'Frankreich im Westen Europas ist ein Land mit mittelalterlichen Städten, Bergdörfern und Mittelmeerstränden. Die Hauptstadt Paris gilt als erstrangiges Mode- und Kulturzentrum.',
          }],
        },
        {
          id: '12',
          heading: 'Aufgabe 2',
          question: 'Wann war die Französische Revolution vorbei?',
          tipps: [],
        },
        {
          id: '13',
          heading: 'Aufgabe 3',
          question: 'Wann war die Deutsche Revolution vorbei?',
          tipps: [],
        },
      ],
    },
    {
      id: '1',
      heading: 'AB2',
      tasks: [
        {
          id: '21',
          heading: 'Aufgabe 1',
          question: 'Vergleiche die französische mit der russischen Revolution',
          tipps: [],
        },
        {
          id: '22',
          heading: 'Aufgabe 2',
          question: 'Wie hieß der letzte französische König?',
          tipps: [],
        },
      ],
    },
    {
      id: '2',
      heading: 'AB3',
      tasks: [
        {
          id: '31',
          heading: 'Aufgabe 1',
          question: 'Wann fand die Französische Revolution statt?',
          tipps: [],
        },
        {
          id: '32',
          heading: 'Aufgabe 2',
          question: 'Wann war die Französische Revolution vorbei?',
          tipps: [],
        },
      ],
    },
  ],
};

export interface Task {
  id: string,
  heading: string,
  question: string,
  tipps: Tip[]
}

export interface Worksheet {
  id: string,
  heading: string,
  tasks: Task[]
}
