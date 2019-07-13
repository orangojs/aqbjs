// tslint:disable:no-expression-statement
import test from 'ava';
import { SmartObject } from './sample';

test('basic no additional params ', async t => {
  let smartObj = new SmartObject();
  t.truthy(smartObj.isActive === false);
  smartObj.interact();
  t.truthy(smartObj.isActive === true);
});
