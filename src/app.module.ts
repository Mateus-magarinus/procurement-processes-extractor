import { Module } from '@nestjs/common';
import { ProcurementModule } from './procurement/procurement.module';
import { PrismaModule } from './prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [PrismaModule, ProcurementModule, ScheduleModule.forRoot()],
})
export class AppModule {}
