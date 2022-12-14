import { ApiProperty } from "@nestjs/swagger";

export class CreatePlanetDto {
  @ApiProperty()
  name: string = "";

  @ApiProperty()
  diameter: string = "";

  @ApiProperty()
  gravity: string = "";

  @ApiProperty()
  terrain: string = "";

}
