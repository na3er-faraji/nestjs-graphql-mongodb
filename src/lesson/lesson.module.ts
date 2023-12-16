import { Module } from '@nestjs/common';
import { LesseonResolver } from './lesson.resolver';

@Module({
  providers: [LesseonResolver],
})
export class LessonModule {}
