export interface RoadFilters {
  code?: number;
  title?: string;
  orderBy?: 'priority' | 'code';
  sortOrder: 'ASC' | 'DESC';
}
