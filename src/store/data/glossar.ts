export default {
  result: {
    entries: [
      {
        id: '1',
        heading: 'Maximilien de Robespierre',
        text: 'Maximilien de Robespierre ([maksimiˈljɛ̃ də ʀɔbɛsˈpjɛːʀ]; * 6. Mai 1758 in Arras; † 28. Juli 1794 in Paris; getauft Maximilien-François-Marie-Isidore), häufig nur Maximilien Robespierre[1], auch „der Unbestechliche“ genannt, war ein französischer Rechtsanwalt, Revolutionär und führender Politiker der Jakobiner. Er wirkte ab 1789 auf die erste Phase der Französischen Revolution ein und gewann bis kurz vor seiner Hinrichtung 1794 einen zunehmend prägenden Einfluss auf ihre Entwicklung. Nach dem Beginn des Ersten Koalitionskriegs war er auf der innenpolitischen Ebene der 1792 ausgerufenen ersten Französischen Republik einer der maßgeblichen Initiatoren für die als „Verteidigung der Republik“ begründete Schreckensherrschaft (frz. la Terreur) von 1793/94.',
        imageUrl: 'https://de.wikipedia.org/wiki/Datei:Robespierre.jpg',
      },
      {
        id: '2',
        heading: 'Sansculottes',
        text: 'Als Sansculottes wurden in der Zeit der Französischen Revolution die Pariser Arbeiter und Kleinbürger bezeichnet, die im Gegensatz zu den von Adligen getragenen Kniebundhosen oftmals lange Hosen trugen. ',
        imageUrl: '',
      },
    ],
  },

};

export interface GlossarEntry {
  id: string,
  heading: string,
  text: string,
  imageUrl: string,
}
