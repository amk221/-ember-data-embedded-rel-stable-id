import { module, test } from 'qunit';
import { setupTest } from 'example/tests/helpers';
import pushPayload from 'example/utils/push';

module('Unit | Model | foo', function (hooks) {
  setupTest(hooks);

  let store;

  hooks.beforeEach(function () {
    store = this.owner.lookup('service:store');

    pushPayload(store, 'foo', {
      foo: {
        id: 1,
        bars: [
          {
            id: 1,
          },
        ],
      },
    });

    this.foo1 = store.peekRecord('foo', 1);
  });

  test('it can be unloaded', async function (assert) {
    assert.expect(1);

    this.foo1.unloadRecord();
  });
});
