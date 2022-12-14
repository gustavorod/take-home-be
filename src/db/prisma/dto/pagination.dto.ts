import { ApiProperty } from "@nestjs/swagger";
import { IsArray } from "class-validator";

export class PageDto<T> {
    @ApiProperty()
    private nextPage: number;

    @ApiProperty()
    private currentPage: number;

    @ApiProperty()
    private previousPage: number | null;

    @IsArray()
    @ApiProperty({ isArray: true })
    readonly data: T[];


    constructor(data: T[], page: number) {
        this.previousPage = (page - 1) > 0 ? (page - 1) : null;
        this.currentPage = page;
        this.nextPage = page + 1;
        this.data = data;
    }
}