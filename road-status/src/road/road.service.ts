import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Road } from './road.entity';
import { FindManyOptions, ILike, Repository } from 'typeorm';
import { CreateRoadDto } from './dtos/create-road.dto';
import { UpdateRoadDto } from './dtos/update-road-dto';
import { RoadFilters } from './interfaces/road-filters.interface';

@Injectable()
export class RoadsService {
  @InjectRepository(Road) private roadsRepo: Repository<Road>;

  async getAllRoads(filters: RoadFilters, pageNum, perPage) {
    const filterConfig: FindManyOptions<Road> = {
      take: perPage,
      skip: (pageNum - 1) * perPage,
    };

    if (filters.title) {
      filterConfig.where = {
        ...filterConfig.where,
        title: ILike(`%${filters.title}%`),
      };
    }

    if (filters.code) {
      filterConfig.where = { ...filterConfig.where, code: filters.code };
    }
    if (filters.priority) {
      filterConfig.where = {
        ...filterConfig.where,
        priority: filters.priority,
      };
    }

    if (filters.orderBy) {
      const sortOrder = filters.sortOrder || 'ASC';
      if (filters.orderBy === 'code') filterConfig.order = { code: sortOrder };
      if (filters.orderBy === 'priority')
        filterConfig.order = { priority: sortOrder };
    }
    const roads = await this.roadsRepo.find(filterConfig);
    const totalCount = await this.roadsRepo.count(filterConfig);
    return [roads, totalCount];
  }

  async createRoad(roadData: CreateRoadDto) {
    const newRoad = this.roadsRepo.create(roadData);
    await this.roadsRepo.save(newRoad);
    return newRoad;
  }

  async findRoadById(id: number) {
    const foundRoad = await this.roadsRepo.findOneBy({ id });
    if (!foundRoad) throw new NotFoundException('Road status not found');
    return foundRoad;
  }

  async updateRoad(roadId: number, roadData: UpdateRoadDto) {
    const foundRoad = await this.findRoadById(roadId);
    Object.assign(foundRoad, roadData);
    await this.roadsRepo.save(foundRoad);
  }

  async deleteRoad(roadId: number) {
    const foundRoad = await this.findRoadById(roadId);
    await this.roadsRepo.remove(foundRoad);
  }
}
