interface Function {
  myBind(this: Function, thisArg: any, ...argArray: any[]): Function;
}

Function.prototype.myBind = function (thisArg, ...argArray) {
  const sym = Symbol();
  const wrapperObj = Object(thisArg);
  Object.defineProperty(wrapperObj, sym, {
    enumerable: false,
    value: this,
  });

  return function (...args) {
    return wrapperObj[sym](...argArray, ...args);
  }
};
