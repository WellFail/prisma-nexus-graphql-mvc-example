import { uuid } from 'uuidv4';

export class UniqueEntityID {
  private readonly value: string;

  constructor(id?: string) {
    this.value = id || uuid();
  }

  equals(id?: UniqueEntityID): boolean {
    if (id === null || id === undefined) {
      return false;
    }

    return id.toValue() === this.value;
  }

  toString(): string {
    return String(this.value);
  }

  toValue(): string {
    return this.value;
  }
}
