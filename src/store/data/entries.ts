export enum EntryType {
  GLOSSAR,
  METHOD
}

export default {
  result: {
    entries: [
      {
        id: '1',
        type: EntryType.GLOSSAR,
        heading: 'Maximilien de Robespierre',
        text: 'Maximilien de Robespierre ([maksimiˈljɛ̃ də ʀɔbɛsˈpjɛːʀ]; * 6. Mai 1758 in Arras; † 28. Juli 1794 in Paris; getauft Maximilien-François-Marie-Isidore), häufig nur Maximilien Robespierre[1], auch „der Unbestechliche“ genannt, war ein französischer Rechtsanwalt, Revolutionär und führender Politiker der Jakobiner. Er wirkte ab 1789 auf die erste Phase der Französischen Revolution ein und gewann bis kurz vor seiner Hinrichtung 1794 einen zunehmend prägenden Einfluss auf ihre Entwicklung. Nach dem Beginn des Ersten Koalitionskriegs war er auf der innenpolitischen Ebene der 1792 ausgerufenen ersten Französischen Republik einer der maßgeblichen Initiatoren für die als „Verteidigung der Republik“ begründete Schreckensherrschaft (frz. la Terreur) von 1793/94.',
        imageUrl: 'https://de.wikipedia.org/wiki/Datei:Robespierre.jpg',
        replaceTexts: [
          'Maximilien de Robespierre',
          'Robespierres',
        ],
      },
      {
        id: '2',
        type: EntryType.GLOSSAR,
        heading: 'Sansculottes',
        text: 'Als Sansculottes wurden in der Zeit der Französischen Revolution die Pariser Arbeiter und Kleinbürger bezeichnet, die im Gegensatz zu den von Adligen getragenen Kniebundhosen oftmals lange Hosen trugen. ',
        imageUrl: '',
        replaceTexts: [
          'Sansculotten',
        ],
      },
      {
        id: '3',
        type: EntryType.GLOSSAR,
        heading: 'Nationalkonvent',
        text: 'Der Nationalkonvent (französisch Convention nationale) war während der Französischen Revolution die konstitutionelle und legislative parlamentarische Versammlung, die vom 20. September 1792 bis zum 26. Oktober 1795 (dem 4. Brumaire des Jahres IV.) tagte.',
        imageUrl: '',
        replaceTexts: [
          'Nationalkonvent',
        ],
      },
      {
        id: '4',
        type: EntryType.GLOSSAR,
        heading: 'Friedhof Picpus',
        text: 'Der Cimetière de Picpus ist der größte private Friedhof im Quartier Picpus in Paris (Frankreich).',
        imageUrl: '',
        replaceTexts: [
          'Picpus',
        ],
      },
    ],
  },
};

export const MethodEntries = {
  result: {
    entries: [
      {
        id: '1',
        type: EntryType.METHOD,
        heading: 'Graffiti',
        goal: 'Die Lernenden erarbeiten Teilaspekte eines Themas und sichern diese in einem Graffiti zu einem übergeordneten Thema. Ein Graffiti ist dadurch gekennzeichnet, dass es schnell entsteht, künstlerische Elemente enthält und in Teilschritten wachsen kann. Das Erfassen der Lernvoraussetzungensteht bei dieser Methode im Vordergrund [10].',
        execution: 'Es bilden sich so viele Gruppen, wie Arbeitsaufträge vorhanden sind. Pro Gruppentisch liegen die Arbeitsaufträge und ein großes Plakat oder eine Folie mit dazu passenden Stiften bereit. Die Lernenden beginnen in ihrer Gruppe mit der Bearbeitung der jeweiligen Arbeitsaufträge, die erste Gruppe startet das Graffiti auf dem vorhandenen Plakat. Sobald jede Gruppe ihre Ergebnisse auf dem Plakat notiert hat, rotieren die Gruppen. Das angefangene Graffiti bleibt dabei auf dem Platz liegen und die Lernenden arbeiten an dem schon angefangenen Plakat weiter. Am Ende hat jede Gruppe an jedem Graffiti, demnach an jedem Plakat, mitgearbeitet. Eine Variationsform ist, dass die Gruppen sich jeweils auf eine Notationsform festlegen (z.B. eine Tabelle, ein kommentiertes Bild, eine Map, etc.), sodass am Ende jede Form auf jedem Plakat zu finden ist. Die anschließende Präsentation erfolgt im Plenum.',
        replaceTexts: [
          'Graffiti',
          'Graffitis',
        ],
      },
      {
        id: '2',
        type: EntryType.METHOD,
        heading: 'Themen-ABC',
        goal: 'Als Sansculottes wurden in der Zeit der Französischen Revolution die Pariser Arbeiter und Kleinbürger bezeichnet, die im Gegensatz zu den von Adligen getragenen Kniebundhosen oftmals lange Hosen trugen. ',
        execution: 'Die Lernenden erhalten oder fertigen selbst ein Blatt an, auf dem zu jedem Buchstaben des Alphabetes ein Begriff zugeordnet wird. Diese Begriffe sollten dabei möglichst Substantive und Fachbegriffe sein. Die Vorstellung der Ergebnisse kann entweder durch schnelles vorlesen erfolgen oder gemeinsam auf ein Plakat notiert werden. Wichtig dabei ist, dass zu jedem Buchstaben mehrere Ergebnisse vorgetragen bzw. auf dem gemeinsamen Plakat notiert werden. Begriffsdopplungen sollen in beiden Variationen vermieden werden.',
        imageUrl: '',
        replaceTexts: [
          'Sansculotten',
        ],
      },
    ],
  },
};

export interface Entry {
  id: string,
  heading: string,
  type: EntryType;
  replaceTexts: string[]
}

export interface MethodEntry extends Entry {
  goal: string,
  execution: string,
}

export interface GlossarEntry extends Entry {
  text: string,
  imageUrl: string,
  replaceTexts: string[],
}
