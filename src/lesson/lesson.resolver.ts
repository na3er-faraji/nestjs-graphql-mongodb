import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './create-lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from 'src/student/student.service';

@Resolver(() => LessonType)
export class LesseonResolver {
  constructor(
    private readonly lessonService: LessonService,
    private readonly studentService: StudentService,
  ) {}
  @Query(() => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query(() => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(() => LessonType)
  creteLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(() => LessonType)
  async assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    return this.lessonService.assignStudentsToLessons(
      assignStudentsToLessonInput,
    );
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
