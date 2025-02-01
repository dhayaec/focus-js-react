// EventEmitter

export class EventEmitter {
  constructor() {
    this.events = [];
  }

  on(event, listeners) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listeners);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
}

const emitter = new EventEmitter();
emitter.on("greet", (name) => console.log(`Hello! ${name}`));
emitter.emit("greet", "John");

export const flatten = (arr) => {
  return arr.reduce((a, c) => {
    return Array.isArray(c) ? a.concat(flatten(c)) : a.concat(c);
  }, []);
};

const nested = [1, 2, [3, 4, [5, 6]]];

// console.log(flatten(nested));

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let res = [];
    let count = 0;

    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((value) => {
          res[i] = value;
          count++;
          if (promises.length === count) {
            resolve(res);
          }
        })
        .catch(reject);
    });
  });
}

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(30);
const p3 = new Promise((res) => setTimeout(() => res(20), 1000));

promiseAll([p1, p2, p3]).then(console.log);

Array.prototype.customMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i, this));
  }
  return res;
};

const myArray = [1, 2, 3];
// console.log(myArray.customMap((i) => i * 2));

Array.prototype.customReduce = function (cb, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

// console.log(myArray.customReduce((a, c) => a + c, 0));

// deepClone

export function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key]);
    }
  }

  return copy;
}

const myObj = {
  id: 1,
  name: "John",
  tags: ["user", "admin"],
};

// console.log(deepClone(myObj) === myObj);

const handler = {
  set(target, key, value) {
    if (key === "id" && typeof value !== "number")
      throw new Error("id should be number");
    target[key] = value;
    return true;
  },
};

const user = new Proxy({}, handler);
user.id = 1;

// fetchWithRetry
export async function fetchWithRetry(url, retries = 3, delay = 3000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      // console.log(`Retrying ${i + 1}...${error}`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}

// compose & pipe

export function compose(...fns) {
  return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
}

export function pipe(...fns) {
  return (arg) => fns.reduce((acc, fn) => fn(acc), arg);
}

export function currySum(a) {
  return function (b) {
    if (b !== undefined) return currySum(a + b);
    return a;
  };
}

// console.log(currySum(1)(2)(3)(4)());

// deepMerge

export function deepMerge(obj1, obj2) {
  let result = { ...obj1 };

  for (let key in obj2) {
    if (obj2[key] instanceof Object && key in obj1) {
      result[key] = deepMerge(obj1[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }
  return result;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

console.log(deepMerge(obj1, obj2));
