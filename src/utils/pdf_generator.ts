import { Worksheet, Task } from '@/store/data/worksheets';
import { jsPDF } from 'jspdf';

export default class PDFGenerator {
  private worksheet: Worksheet;

  private lineOffset = 20;

  private fixedOffset = 40;

  doc: jsPDF;

  constructor(worksheet: Worksheet) {
    this.worksheet = worksheet;

    // eslint-disable-next-line new-cap
    this.doc = new jsPDF();

    this.createPDF();
  }

  createPDF(): void {
    this.addMainHeading(this.worksheet.heading);
    for (let i = 0; i < this.worksheet.tasks.length; i += 1) {
      this.addTask(this.worksheet.tasks[i], i);
    }
  }

  addTask(task: Task, line: number): void {
    const y = line * this.lineOffset + this.fixedOffset;
    this.doc.setFontSize(8);
    this.doc.setTextColor('#767676');
    this.doc.text(task.heading, 10, y);
    this.doc.setFontSize(13);
    this.doc.setTextColor('#000000');
    this.doc.text(task.question, 10, y + 5);
  }

  addMainHeading(h: string) {
    this.doc.setFontSize(40);
    this.doc.text(h, 10, 20);
  }

  getPDF(): void {
    this.doc.save(this.worksheet.heading);
  }
}
