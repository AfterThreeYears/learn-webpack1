const tapable = require('tapable');

const hook = new tapable.SyncHook(['a', 'b']);

const asyncHook = new tapable.AsyncSeriesHook(['a', 'b', 'c']);

const syncBailHook = new tapable.SyncBailHook(['a', 'b']);

hook.tap('testPlugin', (a, b) => {
  console.log('call testPlugin', a, b);
});

hook.tap('testPlugin1', (a, b) => {
  console.log('call testPlugin1', a, b);
});

asyncHook.tapPromise('promise testPlugin', (a, b, c) => {
  return new Promise((r) => {
    setTimeout(() => r(99), 1000);
  })
});

hook.call('a', 'b', 'c');

asyncHook.promise(1, 2, 3)
  .then(data => {
    console.log(data);
  });

syncBailHook.tap('syncBailHookPlugin', (a, b) => {
  console.log('call syncBailHookPlugin', a, b);
  return a;
});

syncBailHook.tap('syncBailHookPlugin1', (a, b) => {
  console.log('call syncBailHookPlugin1', a, b);
});

syncBailHook.call(1, 2);