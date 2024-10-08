function promisify<T>(
  func: (...args: any[]) => void,
): (this: any, args: any[]) => Promise<T> {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (err: any, result: T) => {
        err ? reject(err) : resolve(result);
      });
    });
  }
}

// example
/*
function foo(url, options, callback) {
  apiCall(url, options)
    .then((data) => callback(null, data))
    .catch((err) => callback(err));
}

const promisifiedFoo = promisify(foo);
const data = await promisifiedFoo('example.com', { foo: 1 });
*/