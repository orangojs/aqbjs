// tslint:disable:no-expression-statement
import { GraphQuery } from './graph';
import test from 'ava';

test('basic no additional params ', t => {
  let aql = new GraphQuery()
    .FOR('user')
    .IN()
    .OUTBOUND('users/eddie', 'follows')
    .RETURN('user')
    .toAQL();

  t.true(aql === 'FOR user OUTBOUND "users/eddie" follows RETURN user');
});

// test('minimal ', t => {
//   let f = new QueryFunctions();

//   let graph = new GraphQuery()
//     .FOR('user', 'follow')
//     .IN()
//     .OUTBOUND('users/eddie', 'follows')
//     // .GRAPH('hello')
//     // .PRUNE('world')
//     // .OPTIONS('test')
//     .LIMIT(0, 10)
//     .SORT('user.firstName', 'user.lastName DESC', 'user.email')
//     // MERGE(user, {notify: follow.notify})
//     .RETURN(f.MERGE('user', `{notify:follow.notify}`))
//     .toAQL();

//   t.truthy(graph === '');
// });
