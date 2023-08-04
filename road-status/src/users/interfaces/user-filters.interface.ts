export interface UserFilters {
  firstName?: string;
  lastName?: string;
  email?: string;
  orderBy?: 'age';
  sortOrder: 'ASC' | 'DESC';
}
