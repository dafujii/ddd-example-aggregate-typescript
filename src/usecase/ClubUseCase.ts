import ClubId from "../domain/club/ClubId";
import StudentId from "../domain/student/StudentId";
import ClubRepository from "../domain/club/ClubRepository";

export default class ClubUseCase {
  private clubRepository: ClubRepository;

  /**
   * クラブに生徒を登録する
   *
   * @param {ClubId} clubId
   * @param {StudentId} studentId
   */
  addStudent(clubId: ClubId, studentId: StudentId) {
    const club = this.clubRepository.findById(clubId);
    club.addStudent(studentId);
    this.clubRepository.save(club);
  }

  /**
   * クラブの参加人数をチェックし、クラブを承認状態にする
   *
   * @param {ClubId} clubId
   */
  approveClub(clubId: ClubId) {
    const club = this.clubRepository.findById(clubId);
    club.approve();
    this.clubRepository.save(club);
  }

  /**
   * クラブから生徒を退部させる
   *
   * @param {ClubId} clubId
   * @param {StudentId} studentId
   */
  removeStudent(clubId: ClubId, studentId: StudentId) {
    const club = this.clubRepository.findById(clubId);
    club.removeStudent(studentId);
    this.clubRepository.save(club);
  }
}
