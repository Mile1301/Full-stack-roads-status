import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { RoadsService } from './road.service';
import { CreateRoadDto } from './dtos/create-road.dto';
import { UpdateRoadDto } from './dtos/update-road-dto';
import { RoadFilters } from './interfaces/road-filters.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@UseGuards(AuthGuard)
@UseInterceptors(SerializeInterceptor)
@Controller('roads')
export class RoadsController {
  constructor(private roadsService: RoadsService) {}
  @Get()
  getAllRoads(@Query() filters: RoadFilters) {
    return this.roadsService.getAllRoads(filters);
  }

  @Post()
  createRoad(@Body() roadsData: CreateRoadDto) {
    return this.roadsService.createRoad(roadsData);
  }

  @UseGuards(AdminGuard)
  @Get('/:id')
  findRoadById(@Param('id') id: string) {
    return this.roadsService.findRoadById(Number(id));
  }

  @Patch('/:id')
  updateRoad(@Param('id') id: string, @Body() updateData: UpdateRoadDto) {
    return this.roadsService.updateRoad(Number(id), updateData);
  }

  @Delete('/:id')
  deleteRoad(@Param('id') id: string) {
    return this.roadsService.deleteRoad(Number(id));
  }
}
