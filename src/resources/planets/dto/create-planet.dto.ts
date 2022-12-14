import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanetDto {
  @ApiProperty()
  name = '';

  @ApiProperty()
  diameter = '';

  @ApiProperty()
  gravity = '';

  @ApiProperty()
  terrain = '';
}
