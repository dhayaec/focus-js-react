export const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (hash.has(obj)) return obj.get(obj);

  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }

  return clone;
};

// console.log(deepClone({ id: 1, name: "Mark", subjects: ["English", "Maths"] }));

export const flattenArray = (arr = []) => {
  return arr.reduce(
    (a, c) => (Array.isArray(c) ? a.concat(flattenArray(c)) : a.concat(c)),
    []
  );
};

// console.log(flattenArray([1, 2, [3, [4, 5]]]));

export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache[key]) return -1;
    const value = this.cache.get(key);
    delete this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
// console.log(cache.get(1)); // Output: "A"
cache.put(3, "C");
// console.log(cache.get(1));
// console.log(cache.get(2));

export const firstNonRepeatingChar = (str = "") => {
  const map = {};
  for (let char of str) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let char of str) {
    if (map[char] === 1) return char;
  }
  return null;
};

// console.log(firstNonRepeatingChar("hello"));

export const permute = (str = "", prefix = "", result = []) => {
  if (!str.length) result.push(prefix);
  for (let i = 0; i < str.length; i++) {
    permute(str.slice(0, i) + str.slice(i + 1), prefix + str[i], result);
  }
  return result;
};

// console.log(permute("abcd"));

export const findMissingNumber = (numbers = []) => {
  const n = numbers.length + 1;
  const sum = (n * (n + 1)) / 2;
  const actualSum = numbers.reduce((a, c) => a + c, 0);
  return sum - actualSum;
};

// console.log(findMissingNumber([1, 2, 8]));

export const findDuplicates = (n = []) =>
  n.filter((item, i) => n.indexOf(item) !== i);

// console.log(findDuplicates([1, 2, 2, 8, 8, 3, 4]));

export const validParenthesis = (str = "") => {
  const stack = [];
  const map = { ")": "(", "]": "[", "}": "{" };
  for (let char of str) {
    if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

// console.log(validParenthesis("{[()]}"));

export const nthLargest = (arr = [], n = 2) => arr.sort((a, b) => b - a)[n - 1];

// console.log(nthLargest([1, 44, 5, 7, 22], 3));

export const twoSum = (numbers = [], target = 0) => {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const compliment = target - numbers[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    }
    map.set(numbers[i], i);
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

export const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

// console.log(factorial(5));

export const countVowels = (str = "") => {
  const matches = str.match(/[aeiou]/gi);
  return matches !== null ? matches.length : 0;
};
// console.log(countVowels("hellO"));

export const sumAll = (start = 0, end = 0) => {
  if (start > end) {
    [start, end] = [end, start];
  }
  return ((end - start + 1) * (start + end)) / 2;
};

console.log(sumAll(1, 5));
console.log(sumAll(5, 2));
