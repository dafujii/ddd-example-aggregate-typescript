import StudentId from "../student/StudentId";
import ClubId from "./ClubId";
import { ClubStatus } from "./ClubStatus";
import Student from "../student/Student";
import DomainException from "../DomainException";

export default class Club {
  static MINIMUM_APPROVE_STUDENT_STUDENT_NUMBER = 5;

  clubId: ClubId;
  name: string;
  clubStatus: ClubStatus;
  studentIds: StudentId[];

  constructor(name: string) {
    this.clubId = new ClubId();
    this.name = name;
    this.clubStatus = "NOT_APPROVED";
    this.studentIds = new Array<StudentId>();
  }

  /**
   * クラブに生徒を登録する
   *
   * @param {StudentId} studentId
   */
  addStudent(studentId: StudentId) {
    if (this.studentIds.includes(studentId)) {
      throw new DomainException("登録済みの生徒です");
    }
    this.studentIds.push(studentId);
  }

  /**
   * クラブの参加人数をチェックし、クラブを承認状態にする
   */
  approve() {
    if (this.studentIds.length < Club.MINIMUM_APPROVE_STUDENT_STUDENT_NUMBER) {
      throw new DomainException("生徒数が5人未満です");
    }
    this.clubStatus = "APPROVED";
  }

  /**
   * クラブから生徒を退部させる
   *
   * @param {StudentId} studentId
   */
  removeStudent(studentId: StudentId) {
    this.studentIds = this.studentIds.filter(x => {
      return x !== studentId;
    });

    if (this.studentIds.length < Club.MINIMUM_APPROVE_STUDENT_STUDENT_NUMBER) {
      this.clubStatus = "NOT_APPROVED";
    }
  }
}
