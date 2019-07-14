import { QueryInCollection, QueryIn } from './in';
import { QueryBase } from './core/query';

export class DocumentQuery extends QueryBase {
  FOR(name: string): QueryIn {
    this.query.push(name);
    return new QueryIn(this.query);
  }
}

export class DocumentQueryInsert extends QueryBase {
  INSERT(expression: string): DocumentQueryUpdateReplace {
    console.log(expression);
    return new DocumentQueryUpdateReplace(this.query);
  }
}

export class DocumentQueryUpdateReplace extends QueryBase {
  UPDATE(expression: string): QueryInCollection {
    console.log(expression);
    return new QueryInCollection(this.query);
  }

  REPLACE(expression: string): QueryInCollection {
    console.log(expression);
    return new QueryInCollection(this.query);
  }
}
