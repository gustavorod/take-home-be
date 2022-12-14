import { HttpService } from '@nestjs/axios';
import { PrismaService } from '@/db/prisma/services/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Planet } from '@prisma/client';
import { lastValueFrom, map } from 'rxjs';
import { CreatePlanetDto } from './dto/create-planet.dto';

@Injectable()
export class PlanetsService {
  constructor(
    private prisma: PrismaService,
    private httpService: HttpService,
  ) {}

  create(planet: CreatePlanetDto): Promise<Planet> {
    return this.prisma.planet.create({ data: planet });
  }

  count() {
    return this.prisma.planet.count({ where: { deletedAt: null } });
  }

  findAll(skip: number, take: number) {
    return this.prisma.planet.findMany({
      where: {},
      orderBy: { name: 'asc' },
      skip,
      take,
    });
  }

  async findByName(planetName: string) {
    //Check if the planet name exists on the database first
    let planet = await this.prisma.planet.findFirst({
      where: { name: planetName },
    });
    const arr = [];

    //Search on SWAPI if the planet name does not exist in the database
    if (!planet) {
      const url = `https://swapi.dev/api/planets?search=${planetName}`;
      const request = this.httpService.get(url).pipe(map((res) => res.data));
      const response = await lastValueFrom(request);

      if (response.count) {
        const info = response.results[0];

        const newPlanet: CreatePlanetDto = {
          name: info.name,
          diameter: info.diameter,
          gravity: info.gravity,
          terrain: info.terrain,
        };

        planet = await this.create(newPlanet);
        arr.push(planet);
      }
    } else {
      arr.push(planet);
    }

    return arr;
  }

  async findOne(id: number) {
    const planet = await this.prisma.planet.findUnique({ where: { id } });

    if (!planet) {
      throw new NotFoundException();
    }

    return planet;
  }

  remove(id: number) {
    const planet = this.findOne(id);
    return this.prisma.planet.delete({ where: { id } });
  }
}
