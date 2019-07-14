import { QueryOperations } from './operations';
import { Collectable } from './mixins/collectable';
import { Stringable } from './mixins/stringable';
import { QueryBase } from './core/query';
import { applyMixins } from './helpers/applyMixins';
import { Returnable } from './mixins/returnable';

export class Query extends QueryBase implements Returnable, Stringable, Collectable {
  LET(variableName: string, expression: any): Stringable {
    this.query.length = 0;
    let value = expression instanceof QueryBase
      ? '(' + expression + ')'
      : JSON.stringify(expression);
    this.query.push(`LET ${variableName} = ${value}`);
    return new Stringable(this.query);
  }

  WITH(variableNames: string[]): Stringable {
    this.query = this.query.concat(variableNames);
    return new Stringable(this.query);
  }

  RETURN: (distinct, ...expression: any[]) => Stringable;

  COLLECT: (variableName: string, expression) => QueryOperations;
  COLLECT_INTO: () => QueryOperations;
  COLLECT_AGGREGATE: (
    variableName: string,
    expression: String,
    options?: any
  ) => QueryOperations;
}

applyMixins(Query, [Returnable, Stringable, Collectable]);
