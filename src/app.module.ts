import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { PlanetsModule } from './resources/planets/planets.module';

@Module({
  imports: [CoreModule, PlanetsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
