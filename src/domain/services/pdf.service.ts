export interface PDFService {
  buildSchedule(data: any): Promise<Buffer>;
}
