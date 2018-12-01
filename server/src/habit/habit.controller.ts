import { Controller, Post, Body } from '@nestjs/common';
import { Habit } from './habit.entity';
import { HabitService } from './habit.service';
import { CrudController } from '@nestjsx/crud';

@Controller('habit')
export class HabitController extends CrudController<Habit>{
    constructor(private readonly habitService: HabitService) {
        super(habitService);
    }
}
