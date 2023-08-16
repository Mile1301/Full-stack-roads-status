export interface RoadFilters {
  code?: number;
  title?: string;
  priority?: string;
  orderBy?: 'priority' | 'code';
  sortOrder: 'ASC' | 'DESC';
}
