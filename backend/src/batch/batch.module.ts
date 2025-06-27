import { Module } from '@nestjs/common';
import { BatchService } from './batch.service';
import { BatchController } from './batch.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [BatchController],
  providers: [BatchService],
})
export class BatchModule {}
