import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}
  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getLesson(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getLessons();
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
