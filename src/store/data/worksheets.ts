export default {
  result: [
    {
      id: '0',
      heading: 'AB1',
      tasks: [
        {
          id: '11',
          question: 'Wann fand die Französische Revolution statt?',
        },
        {
          id: '12',
          question: 'Wann war die Französische Revolution vorbei?',
        },
      ],
    },
    {
      id: '1',
      heading: 'AB2',
      tasks: [
        {
          id: '21',
          question: 'Vergleiche die französische mit der russischen Revolution',
        },
        {
          id: '22',
          question: 'Wie hieß der letzte französische König?',
        },
      ],
    },
    {
      id: '2',
      heading: 'AB3',
      tasks: [
        {
          id: '31',
          question: 'Wann fand die Französische Revolution statt?',
        },
        {
          id: '32',
          question: 'Wann war die Französische Revolution vorbei?',
        },
      ],
    },
  ],
};

export interface Task {
  id: string,
  question: string
}

export interface Worksheet {
  id: string,
  heading: string,
  tasks: Task[]
}
