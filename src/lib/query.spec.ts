// tslint:disable:no-expression-statement
import test from 'ava';
import { Query } from './query';
// import { SeriesQuery } from './series';

test('api workflow ', t => {
  let query = new Query();
  let aql:string
  // let series = new SeriesQuery();
  // let aql = series.APPEND(query.LET('foo', 'bar')).toAQL();
  aql = query.LET('foo', 'bar').toString();
  t.true(aql === 'LET foo = "bar"');

  aql = query.LET('foo', { bar: 'baz' }).toString();
  t.true(aql === 'LET foo = {"bar":"baz"}');
});
