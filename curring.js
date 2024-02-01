function sample(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}

console.log(sample(12)(8)(20));
