import { v4 as uuidv4 } from "uuid";

export default class ClubId {
  private value: string;

  constructor() {
    this.value = uuidv4();
  }

  stringValue(): string {
    return this.value;
  }
}
