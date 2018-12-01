import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitService } from './habit.service';
import { HabitController } from './habit.controller';
import { Habit } from './habit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Habit])],
  providers: [HabitService],
  controllers: [HabitController],
})
export class HabitModule { }
