import { QueryBase } from "../core/query";
import { Stringable } from "./stringable";

export class Returnable extends QueryBase {
  RETURN(distinct = false, ...expression: any[]): Stringable {
    this.query.push('RETURN');
    if (distinct) {
      this.query.push("DISTINCT")
    }
    this.query = this.query.concat(expression);
    return new Stringable(this.query);
  }
}