import { QueryOperations } from './../operations';
import { QueryBase } from '../core/query';

export class Collectable extends QueryBase {
  COLLECT(variableName: string, expression): QueryOperations {
    console.log(variableName, expression);
    return new QueryOperations(this.query);
  }

  COLLECT_INTO(): QueryOperations {
    return new QueryOperations(this.query);
  }

  COLLECT_AGGREGATE(
    variableName: string,
    expression: String,
    options?: any
  ): QueryOperations {
    console.log(variableName, expression, options);
    return new QueryOperations(this.query);
  }
}