import { Ressource, ContentBlockType, RessourceType } from '../data-types';

export default {
  result: [
    {
      id: '0',
      heading: 'T1',
      typ: RessourceType.TEXT_SOURCE,
      author: 'Emmanuel Sieyès',
      caption: 'Auszüge zitiert nach: W. Grab (Hg.), Die Französische Revolution. Eine Dokumentation, München 1973, S. 24 ff.',
      sourceText: 'Der Plan dieser Schrift ist ganz einfach. Wir haben uns drei Fragen vorzulegen. 1.) Was ist der Dritte Stand? Alles. 2.) Was ist er bis jetzt in der staatlichen Ordnung gewesen? Nichts. Was verlangt er? Etwas darin zu werden. Man wird sehen, ob die Antworten richtig sind. Erstes Kapitel: Der Dritte Stand ist eine vollständige Nation. Was ist nötig, damit eine Nation bestehen kann und gedeiht? Arbeiten im Privatinteresse und öffentliche Dienste. […] Es wäre überflüssig, […] zu zeigen, dass der Dritte Stand auf allen diesen Gebieten [Landwirtschaft, Gewerbe, Handel, Dienstleistungen] neunzehn Zwangzigstel leistet, nur dass er mit allen wirklich beschwerlichen Arbeiten belastet wird, die der privilegierte Stand zu übernehmen sich weigert. Nur die einträglichsten und ehrenvollsten Stellen sind von den Mitgliedern des privilegierten Standes besetzt […]. Wenn man den privilegierten Stand entferne, wäre die Nation nicht etwas weniger, sondern etwas mehr. Ebensowenig gehört der Adelsstand wegen seiner bürgerlichen und politischen Privilegien in unsere Mitte […]. Der Dritte Stand umfasst also alles, was zur Nation gehört. […] Zweites Kapitel: Was ist der Dritte Stand bis jetzt gewesen? Nichts. […] Drittes Kapitel: Was verlangt der Dritte Stand? Etwas zu werden. Es [das Volk] will echte Vertreter in den Generalständen haben, das heißt, Abgeordnete, die aus seinem Stand kommen, seine Wünsche vorbringen und seine Interessen verteidigen […] Daher steht es fest, dass der Dritte Stand nur dann in den Generalständen vertreten sein kann und seine Stimme abgeben kann, wenn er wenigstens den gleichen Einfluss wie die Privilegierten bekommt. Er verlangt daher ebenso viele Vertreter wie die beiden anderen Stände zusammen. Die Zahlengleichheit der Vertreter wäre aber vollkommen illusorisch, wenn jede Kammer nur eine Stimme hätte. Der Dritte Stand verlangt daher, dass nach Köpfen, und nicht nach Ständen abgestimmt wird […]. Die eigentliche Absicht des Dritten Standes ist es, in den Generalständen den gleichen Einfluss zu besitzen wie die Privilegierten […].',
      content: [
        {
          type: ContentBlockType.TEXT_CONTENT_BLOCK,
          heading: 'Eine folgenreiche Propagandaschrift',
          glossarEntries: [],
          text: 'Coole Erklärung',
          tipps: [],
        },
      ],
    },
  ],
};

export interface TextRessource extends Ressource {
  sourceText: string,
}
