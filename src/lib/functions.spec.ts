// tslint:disable:no-expression-statement
import { QueryFunctions } from './functions';
import test from 'ava';

test('merge ', t => {
  let f = new QueryFunctions();
  let q = f.MERGE('user', `{notify:follow.notify}`).toString()
  t.true(q === 'MERGE(user,{notify:follow.notify})');
});
