import { Module } from '@nestjs/common';
import { RoadsController } from './road.controller';
import { RoadsService } from './road.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Road } from './road.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Road]), UsersModule],
  controllers: [RoadsController],
  providers: [RoadsService],
})
export class RoadModule {}
