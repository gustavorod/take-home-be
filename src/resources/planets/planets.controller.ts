import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { ApiBearerAuth, ApiOkResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlanetEntity } from './entities/planet.entity';
import { PageDto } from '@/db/prisma/dto/pagination.dto';
import { SimpleAuthGuard } from '@/core/auth/auth.guard';

@ApiTags('Planets')
@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @ApiQuery({ name: 'name', required: false, example: 'Tatooine'})
  @ApiQuery({ name: 'page', required: false, example: '1'})
  @ApiOkResponse({type: PlanetEntity, isArray: false})
  @Get()
  async findAll(@Query('name') name: string, @Query('page',) page: number) {
    const take: number = 5;
    const currentPage: number = (page) ? page: 1;
    const results =  await (name ? this.planetsService.findByName(name): this.planetsService.findAll(currentPage, take));

    return new PageDto(results, currentPage);
  }
  
  @ApiBearerAuth()
  @UseGuards(SimpleAuthGuard)
  @ApiOkResponse({type: PlanetEntity, isArray: false})
  @ApiResponse({ status: 404, description: 'Planet not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planetsService.findOne(+id);
  }

  @ApiBearerAuth()
  @ApiOkResponse({type: PlanetEntity, isArray: false})
  @ApiResponse({ status: 404, description: 'Planet not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planetsService.remove(+id);
  }
}
