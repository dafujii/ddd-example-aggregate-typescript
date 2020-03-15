import StudentId from "./StudentId";

export default class Student {
  private studentId: StudentId;

  constructor(private studentName: string) {
    this.studentId = new StudentId();
    this.studentName = studentName;
  }
}
