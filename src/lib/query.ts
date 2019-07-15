import { Letable } from './mixins/letable';
import { QueryOperations } from './operations';
import { Collectable } from './mixins/collectable';
import { Stringable } from './mixins/stringable';
import { QueryBase } from './core/query';
import { applyMixins } from './helpers/applyMixins';
import { Returnable } from './mixins/returnable';

export class Query extends QueryBase implements Letable, Returnable, Stringable, Collectable {

  WITH(variableNames: string[]): Stringable {
    this.query = this.query.concat(variableNames);
    return new Stringable(this.query);
  }

  LET: (variableName: string, expression: any) => Stringable;

  RETURN: (distinct, ...expression: any[]) => Stringable;

  COLLECT: (variableName: string, expression) => QueryOperations;

  COLLECT_INTO: () => QueryOperations;
  
  COLLECT_AGGREGATE: (variableName: string, expression: String, options?: any) => QueryOperations;

}

applyMixins(Query, [Letable, Returnable, Stringable, Collectable]);
