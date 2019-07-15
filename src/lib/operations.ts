import { Letable } from './mixins/letable';
import { DocumentQueryInsert } from './document';
import { QueryInCollection, QueryIntoCollection } from './in';
import { QueryBase } from './core/query';
import { Returnable } from './mixins/returnable';
import { Stringable } from './mixins/stringable';
import { applyMixins } from './helpers/applyMixins';

export class QueryOperations extends QueryBase implements Letable, Returnable {
  
  LET: (variableName: string, expression: any) => Stringable

  RETURN: (distinct, ...expression: any[]) => Stringable

  FILTER(condition: string): QueryOperations {
    this.query.push('FILTER', condition);
    return this;
  }

  SORT(...expression: string[]): QueryOperations {
    this.query.push(`SORT ${expression.join(', ')}`);
    return this;
  }

  LIMIT(limit?: Number, skip?: Number): QueryOperations {
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

  REMOVE(keyExpression: string): QueryInCollection {
    console.log(keyExpression);
    return new QueryInCollection(this.query);
  }

  UPDATE(keyExpression: string): QueryInCollection {
    console.log(keyExpression);
    return new QueryInCollection(this.query);
  }

  UPDATE_WITH(keyExpression: string, document: string): QueryInCollection {
    console.log(keyExpression, document);
    return new QueryInCollection(this.query);
  }

  REPLACE(keyExpression: string): QueryInCollection {
    console.log(keyExpression);
    return new QueryInCollection(this.query);
  }

  REPLACE_WITH(keyExpression: string, document: string): QueryInCollection {
    console.log(keyExpression, document);
    return new QueryInCollection(this.query);
  }

  INSERT(document: string): QueryIntoCollection {
    console.log(document);
    return new QueryIntoCollection(this.query);
  }

  UPSERT(
    searchExpression: string,
    insertExpression: string,
    updateExpression: string
  ): DocumentQueryInsert {
    console.log(searchExpression, insertExpression, updateExpression);
    return new DocumentQueryInsert(this.query);
  }

}

applyMixins(QueryOperations, [Letable, Returnable])
