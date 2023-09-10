import { Module } from '@nestjs/common';
import { ProcurementController } from './procurement.controller';
import { ProcurementService } from './procurement.service';
import { HttpModule } from '@nestjs/axios';
// import PQueue from 'p-queue';

@Module({
  imports: [HttpModule],
  controllers: [ProcurementController],
  providers: [ProcurementService],
})
export class ProcurementModule {}
