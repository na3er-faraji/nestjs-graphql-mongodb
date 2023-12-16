import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LesseonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'someId',
      name: 'Physic class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
