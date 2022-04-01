const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const greeting = "Hello MindX";

// Method 1
module.exports = {
  sum,
  sub,
  greeting,
};

// Method 2
// module.exports.sum = sum;
// module.exports.sub = sub;

// Method 3
// exports.sum = sum;
// exports.sub = sub;

// exports = module.exports => alias for module.exports

// Wrong: new reference for exports
exports = {
  sum,
  sub,
};
