export default class UseCaseException extends Error {
  constructor(message: string) {
    super(message);
  }
}
