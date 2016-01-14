import assert from 'assert';
import App from './App';
import rct from 'react-component-tester';

const tester = rct.create().use(App);
const BASIC_TEST = tester.addFlavour('BASIC', {});

describe('the app should', () => {
  it('return hello universe', () => {
    const actual = BASIC_TEST.component.value;
    const expected = 'hello universe';

    assert.deepEqual(actual, expected);
  });
});
