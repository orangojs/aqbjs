export class QueryFunctions {
  query: string[];
  constructor() {
    this.query = [];
  }

  MERGE(...expression: string[]): QueryFunctions {
    this.query.push(`MERGE(${expression.join(',')})`);
    return this;
  }

  toString() {
    return this.query.join('');
  }
}
