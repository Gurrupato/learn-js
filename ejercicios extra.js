array = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
result = {};
for (var i = 0; i < array.length; ++i) {
  if (!result[array[i]]) result[array[i]] = 0;
  ++result[array[i]];
}
console.log(result);
