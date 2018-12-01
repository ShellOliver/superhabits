import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HabitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
