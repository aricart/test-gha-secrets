const test = require('ava');

test("env test", async (t) => {
  t.plan(1);
  const token = process.env.HELLO ?? "";
  if (token.length === 0) {
    t.fail("no HELLO defined in the environment");
  } else {
    t.pass("found HELLO");
  }
});
