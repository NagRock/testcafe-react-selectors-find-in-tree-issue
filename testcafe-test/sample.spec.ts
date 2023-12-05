import { fixture } from 'testcafe';
import { ReactSelector } from "testcafe-react-selectors";

fixture('Pizza Palace')
  .page('http://localhost:3000/');

test('Should find just two MyComponent`s', async t => {
  await t.expect(ReactSelector('MyWrapper').exists).ok();
  await t.expect(ReactSelector('MyWrapper MyComponent').count).eql(2);
  const myWrapper = ReactSelector('MyWrapper');
  await t.expect(myWrapper.findReact('MyComponent').count).eql(2);
  await t.expect(ReactSelector('MyComponent').count).eql(2);
});