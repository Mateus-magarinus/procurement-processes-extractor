import { Controller, Get, Post } from '@nestjs/common';
import { ProcurementService } from './procurement.service';

@Controller('procurement')
export class ProcurementController {
  constructor(private readonly procurementService: ProcurementService) {}

  @Post('processExtraction')
  async processExtraction() {
    return this.procurementService.processExtraction();
  }

  @Get('extractedProcessesSearch')
  async extractedProcessesSearch() {
    // return this.procurementService.extractedProcessesSearch();
    return 'to be implemented';
  }
}
