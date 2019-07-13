import { ReturnQuery, StringQuery } from './query';

export class DocumentQuery {
  query: string[];
  constructor(query: string[] = []) {
    this.query = query;
  }

  FOR(name: string): DocumentQueryBase {
    this.query.push(name);
    return new DocumentQueryBase(this.query);
  }
}

class DocumentQueryBase extends ReturnQuery {
  RETURN(...expression: any[]): StringQuery {
    this.query.push('RETURN');
    this.query = this.query.concat(expression);
    return new StringQuery(this.query);
  }

  LIMIT(limit?: Number, skip?: Number): DocumentQueryBase {
    if (skip !== undefined && limit !== undefined) {
      this.query.push(`LIMIT ${skip},${limit}`);
    } else if (limit !== undefined && skip === undefined) {
      this.query.push(`LIMIT ${limit}`);
    } else if (limit === undefined && skip !== undefined) {
      throw new Error(`"limit" cannot be undefined when "skip" is defined`);
    } else {
      throw new Error(`missing value for "limit" param`);
    }
    return this;
  }

  SORT(...expression: string[]): DocumentQueryBase {
    this.query.push(`SORT ${expression.join(', ')}`);
    return this;
  }

  FILTER(): DocumentQueryBase {
    // TODO: Not implemented
    throw new Error('Not implemented');
    return this;
  }

  // SET(key: string, value: any): GraphQueryBase {
  //   console.log(key, value);
  //   return this;
  // }

  toString() {
    return this.query.join('');
  }
}
