import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Habit } from './habit.entity';
import { Repository } from 'typeorm/repository/Repository';
import { CrudTypeOrmService } from '@nestjsx/crud/typeorm';

@Injectable()
export class HabitService extends CrudTypeOrmService<Habit>{
  constructor(
    @InjectRepository(Habit)
    private readonly habitRepository: Repository<Habit>
  ) { super(habitRepository); }
}
