import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PDFService } from 'src/domain/services/pdf.service';
import * as pdf from 'pdfjs';
import helvetica from 'pdfjs/font/helvetica';

enum DayTurn {
  D = 'DIA',
  T = 'TARDE',
  N = 'NOCHE',
}

enum DayWeek {
  Monday = 'Lunes',
  Tuesday = 'Martes',
  Wednesday = 'Miercoles',
  Thursday = 'Jueves',
  Friday = 'Viernes',
}

@Injectable()
class PdfJsService implements PDFService {
  async buildSchedule(data: {
    trainings: Prisma.TrainingGetPayload<{
      include: { excersises: true; schedule: { include: { days: true } } };
    }>[];
    owner: string;
  }): Promise<Buffer> {
    const width = 27.94 * pdf.cm;
    const height = 21.59 * pdf.cm;
    const padding = 0.5 * pdf.cm;
    const border = { borderColor: 0x030303, borderWidth: 0.1 * pdf.mm };
    const doc = new pdf.Document({ font: helvetica, width, height });
    const black = 0x000000;
    const gray = 0xcccccc;

    const header = doc
      .header()
      .table({ widths: [14 * pdf.cm, null, null] })
      .row({ paddingBottom: 1 * pdf.cm });

    // header.cell().image(new pdf.Image(salaSituacional), { width: (6.425 * pdf.cm), height: 50, align: 'center' });
    header
      .cell({ paddingTop: 1 * pdf.cm })
      .text('HORARIO DE ENTRENAMIENTO', { fontSize: 16, color: black });
    header.cell({ paddingTop: 1 * pdf.cm }).text(null);
    header
      .cell({ paddingTop: 1 * pdf.cm })
      .text(new Date().toLocaleDateString(), {
        fontSize: 16,
        color: black,
        textAlign: 'right',
      });

    const profileHeader = doc
      .table({ widths: [14 * pdf.cm, null, null] })
      .row({ paddingBottom: 0.5 * pdf.cm });

    profileHeader.cell().text(data.owner, { fontSize: 14, color: black });

    const subHeader = doc
      .table({ widths: [6 * pdf.cm, 6 * pdf.cm, 6 * pdf.cm, null], ...border })
      .row();
    subHeader
      .cell('', { backgroundColor: gray, textAlign: 'center' })
      .text('ENTRENAMIENTO', {
        fontSize: 12,
        textAlign: 'center',
        color: black,
      });
    subHeader
      .cell('', { backgroundColor: gray, textAlign: 'center' })
      .text('EJERCICIO', { fontSize: 12, textAlign: 'center', color: black });
    subHeader
      .cell('', { backgroundColor: gray, textAlign: 'center' })
      .text('TURNO', { fontSize: 12, textAlign: 'center', color: black });
    subHeader
      .cell('', { backgroundColor: gray, textAlign: 'center' })
      .text('DÍAS', { fontSize: 12, textAlign: 'center', color: black });

    // const entrenamientosTable = doc
    //   .table({ widths: [3 * pdf.cm, 6 * pdf.cm, 8 * pdf.cm, null], ...border })
    //   .row()

    for (const training of data.trainings) {
      for (const excercise of training.excersises) {
        const row = doc
          .table({
            widths: [6 * pdf.cm, 6 * pdf.cm, 6 * pdf.cm, null],
            ...border,
          })
          .row({ padding });
        row.cell().text(training.name, { fontSize: 9, textAlign: 'center' });
        row.cell().text(excercise.name, { fontSize: 9, textAlign: 'center' });
        row.cell().text(DayTurn[training.schedule.turn], {
          fontSize: 9,
          textAlign: 'center',
        });
        row
          .cell()
          .text(
            training.schedule.days
              .map((day) => DayWeek[day.day_of_week])
              .join(', '),
            { fontSize: 9, textAlign: 'center' },
          );
      }
    }

    return doc.asBuffer();
  }
}

export default PdfJsService;
