import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Road {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: number;

  @Column()
  title: string;

  @Column()
  priority: string;
}
