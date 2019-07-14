import { Query } from './query';
import test from 'ava';
import { SeriesQuery } from './series';

test('series push to string', async t => {
  let series = new SeriesQuery();
  series.push(new Query().LET('foo', 'bar'))
  series.push(new Query().RETURN(false, 'foo'))
  t.true(series.toString() === `LET foo = "bar"\nRETURN foo`);
});
