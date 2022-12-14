import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export type PaginationType = {
  total: number;
  take: number;
  currentPage: number;
  nextPage: number | null;
};

export class PageDto<T> {
  @ApiProperty()
  private pagination: PaginationType | null;

  @IsArray()
  @ApiProperty({ isArray: true })
  readonly results: T[];

  constructor(data: T[], skip: number, take: number, total: number) {
    this.pagination = null;
    let currentPage: number;
    let nextPage: number | null;

    if (total > take) {
      currentPage = skip / take + 1;
      nextPage = skip + take < total ? currentPage + 1 : null;
    } else {
      currentPage = 1;
      nextPage = null;
    }

    this.pagination = {
      total,
      take,
      currentPage: currentPage,
      nextPage: nextPage,
    };

    this.results = data;
  }
}
