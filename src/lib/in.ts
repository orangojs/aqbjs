import { QueryOperations } from './operations';
import { QueryBase } from './core/query';

export class QueryIn extends QueryBase {
  IN(collection: string): QueryOperations {
    console.log(collection);
    return new QueryOperations(this.query);
  }
}

export class QueryInCollection extends QueryBase {
  IN(collection: string, options?: any): QueryOperations {
    console.log(collection, options);
    return new QueryOperations(this.query);
  }
}

export class QueryIntoCollection extends QueryBase {
  INTO(collection: string, options?: any): QueryOperations {
    console.log(collection, options);
    return new QueryOperations(this.query);
  }
}