import { Stringable } from './stringable';
import { QueryBase } from './../core/query';

export class Letable extends QueryBase {
  LET(variableName: string, expression: any): Stringable {
    this.query.length = 0;
    let value = expression instanceof QueryBase
      ? '(' + expression + ')'
      : JSON.stringify(expression);
    this.query.push(`LET ${variableName} = ${value}`);
    return new Stringable(this.query);
  }
}