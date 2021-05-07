import { Worksheet, Task } from '@/store/data/worksheets';
import { jsPDF } from 'jspdf';

export default class PDFGenerator {
  private worksheet: Worksheet;

  private lineOffset = 20;

  private fixedOffset = 7;

  doc: jsPDF;

  constructor(worksheet: Worksheet) {
    this.worksheet = worksheet;

    // eslint-disable-next-line new-cap
    this.doc = new jsPDF();

    this.createPDF();
  }

  createPDF(): void {
    for (let i = 0; i < this.worksheet.tasks.length; i += 1) {
      this.addTask(this.worksheet.tasks[i], i);
    }
  }

  addTask(task: Task, line: number): void {
    const y = line * this.lineOffset + this.fixedOffset;
    this.doc.text(task.heading, 10, y);
    this.doc.text(task.question, 10, y + 5);
    this.doc.line(5, y + 6, 200, y + 6);
  }

  getPDF(): void {
    this.doc.save(this.worksheet.heading);
  }
}
