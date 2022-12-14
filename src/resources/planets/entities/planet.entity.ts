import { Planet } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class PlanetEntity implements Planet {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  diameter: string;

  @ApiProperty()
  gravity: string;

  @ApiProperty()
  terrain: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date | null;

  constructor(
    id: number,
    name: string,
    diameter: string,
    gravity: string,
    terrain: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.diameter = diameter;
    this.gravity = gravity;
    this.terrain = terrain;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
