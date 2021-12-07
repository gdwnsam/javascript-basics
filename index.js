// const factorial = (input) => {
//   let num = 1;
//   for (let i = input; i >= 1; --i) {
//     console.log(i);
//     num *= i;
//   }

//   return num;
// };

// // console.log(factorial(2));

// const test = "abcd";

// console.log(test);
// console.log(test.length);
// console.log(test[0]);

var pivotIndex = function (nums) {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;

  const totalSum = nums.reduce((acc, cur) => acc + cur);
  let leftSum = 0;

  let test = 0;
  for (j = 0; j < nums.length - 1; j++) {
    test += nums[j];
  }

  console.log("test :::", test);

  for (i = 0; i < nums.length; i++) {
    console.log("totalSum :::", totalSum);
    console.log("leftSum :::", leftSum);
    console.log("nums[i] :::", nums[i]);
    console.log(
      "totalSum - leftSum - nums[i] :::",
      totalSum - leftSum - nums[i]
    );
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 2, 3, 2, 1]));

// P[P.length - 1]

// P[5 - 1] = P[4]

// P[i] = nums[0] + nums[1] + ... + nums[i-1]
