import { DocumentQuery } from './document';
// tslint:disable:no-expression-statement
import test from 'ava';

test('document ', t => {
  let query = new DocumentQuery();
  query
    .FOR('user')
    .IN('users')
    .FILTER('user._key == 1')
    .RETURN(false, 'user');
  t.true(query.toString(), `FOR user IN users FILTER user._key == 1 RETURN user`)
  // query.FOR('user').IN('users').LET('foo', 'bar').LET('bar', 'baz').RETURN("you are here")
});
