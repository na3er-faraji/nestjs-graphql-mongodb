import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async getLesson(id: string): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  async getLessons(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(createStudentInpput: CreateStudentInput) {
    const { firstName, lastName } = createStudentInpput;

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }
}
