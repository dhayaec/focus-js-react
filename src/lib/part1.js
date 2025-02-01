export function eventLoop() {
  console.log("Start");
  setTimeout(() => {
    console.log("Time Out!");
  }, 0);
  console.log("End");
}

eventLoop();

// TODO use debounce and throttle functions in real world react components
export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function throttle(fn, interval) {
  let lastCall = 0;
  return function (...args) {
    const now = Date().now();
    if (now - lastCall >= interval) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
// this
export const thisWorks = () => {
  const obj = {
    name: "John",
    regularFn: function () {
      return `Hello ${this.name}!`;
    },
    arrowFn: () => `Hello ${this.name}`,
  };

  console.log(obj.regularFn()); // Hello John!
  console.log(obj.arrowFn()); // Hello undefined

  const extractedFn = obj.regularFn;
  console.log(extractedFn()); // Cannot read properties of undefined
};
// closures
function outer(outerValue) {
  return function (innerValue) {
    return `Hello ${outerValue}, Welcome ${innerValue}`;
  };
}

const greeting = outer("John");
console.log(greeting("Home"));

// call,apply and bind

export function callApplyBind() {
  function greet(greeting, punctuation) {
    return `${greeting}${punctuation}`;
  }

  const person = {
    name: "Alice",
  };

  console.log(greet.call(person, "Hello", "!"));
  console.log(greet.apply(person, ["Hello", "!"]));

  const bounded = greet.bind(person, "Hey");

  console.log(bounded("!"));
}

// weak Map & Set

export function weakMapSet() {
  let obj = { key: "value" };
  const weakMap = new WeakMap();
  weakMap.set(obj, "Test");
  console.log(weakMap);
  obj = null;
  console.log(weakMap);
}

export function* generatorFn() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generatorFn();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

export function* printNumbers() {
  for (let i = 0; i < 3; i++) {
    yield i;
  }
}
const numbers = printNumbers();
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);
console.log(numbers.next().value);

// deepClone
export function deepClone() {
  const obj = { id: 1, name: "name" };
  const clone = structuredClone(obj);
  clone.name = "structured";

  console.log({ clone, obj });
}

// deepClone();

// prototype

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

const person = new Person("Mark");
console.log(person.greet());
console.log(person.__proto__ === Person.prototype);
console.log(person instanceof Person);

// curry
export function curry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// TODO should add practical application example
console.log(curry(1)(2)(3));

// Singleton

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);

// Memoization
export function memo(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

// freeze & seal
const obj = {
  id: 1,
  name: "one",
};

Object.freeze(obj);
// obj.name = "two";
console.log(obj);
const obj1 = { id: 1, name: "two" };
Object.seal(obj1);
obj1.name = "three";
console.log(obj1);
