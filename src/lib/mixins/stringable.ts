import { QueryBase } from './../core/query';

export class Stringable extends QueryBase {
  toString(): string {
    return this.query.join(' ');
  }
}
