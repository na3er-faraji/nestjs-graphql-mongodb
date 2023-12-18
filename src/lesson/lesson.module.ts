import { Module } from '@nestjs/common';
import { LesseonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LesseonResolver, LessonService],
})
export class LessonModule {}
