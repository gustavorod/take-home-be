import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { PlanetsController } from './planets.controller';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '@/db/prisma/prisma.module';

@Module({
  imports: [HttpModule, PrismaModule],
  controllers: [PlanetsController],
  providers: [PlanetsService],
})
export class PlanetsModule {}
