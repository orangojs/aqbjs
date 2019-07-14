import { QueryBase } from './core/query';

export class SeriesQuery extends QueryBase{
  push(aql: string | QueryBase): SeriesQuery {
    if (aql instanceof QueryBase) {
      aql = aql.toString();
    }
    this.query.push(aql);
    return this;
  }

  toString() {
    return this.query.join('\n').trim();
  }
}
