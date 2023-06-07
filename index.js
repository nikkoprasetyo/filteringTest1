// 1
// a
// SELECT *
// FROM policy p
// JOIN client c ON p.client_number = c.client_number
// WHERE c.birth_date >= '1956-09-01' AND c.birth_date <= '2018-09-30'
//   AND p.policy_submit_date > '2018-01-15';

// b
// SELECT *
// FROM policy
// JOIN agent ON policy.agent_code = agent.agent_code
// WHERE policy.policy_status = 'INFORCE' AND agent.agent_office = 'JAKARTA';

// c
// UPDATE agent
// SET basic_commission = (policy.commission / policy.premium) * 100
// FROM policy
// WHERE policy.agent_code = agent.agent_code;

// d
// SELECT *
// FROM agent
// JOIN policy ON policy.agent_code = agent.agent_code
// WHERE (policy.premium - policy.discount) < 1000000;

// 2
function pattern(params) {
  let output = "";
  let num = 1;
  for (let i = 1; i <= params; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num + " ";
      num++;
    }
    output += row + "\n";
  }
  return output;
}
console.log(pattern(7));

// 3
function findTarget(array, target) {
  let output = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      output = i;
    }
  }
  return output;
}
console.log(findTarget([1, 2, 4], 4));
console.log(findTarget([-1, 2, 5, 6, 7], 6));

// 4
function addSum(array, target) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        output.push(i, j);
      }
    }
    if (output.length === 2) {
      break;
    }
  }
  return output;
}

console.log(addSum([2, 7, 11, 15], 9)); //[0,1]
console.log(addSum([3, 2, 3], 6)); //[0,2]
console.log(addSum([3, 2, 4], 6)); //[1,2]
console.log(addSum([3, 3], 6)); //[0,1]

//5
function sumZero(array) {
  if (!array.length) {
    return [];
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      for (let k = 2; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          return [array[i], array[j], array[k]];
        }
      }
    }
  }
}
console.log(sumZero([-1, 0, 1, 2, -1, 4])); //[-1,-1,2]
console.log(sumZero([2, 3, 4, -1, -2])); //[-1,-2,3]
console.log(sumZero([])); //[]

// 6
function plusOneDigit(array) {
  array = Number(array.join("")) + 1;
  let output = array.toString().split("");
  return output;
}
console.log(plusOneDigit([1, 2, 3]));
console.log(plusOneDigit([4, 3, 2, 1]));
console.log(plusOneDigit([9]));

// 7
const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];
function filter(array1, array2) {
  let tempSame = [];
  let tempDifferent = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      tempSame.push(array1[i]);
    } else {
      tempDifferent.push(array1[i]);
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      tempDifferent.push(array2[i]);
    }
  }

  // Menghilangkan duplicate
  function eliminate(theArray) {
    let output = theArray.reduce((result, current) => {
      if (!result.includes(current)) {
        result.push(current);
      }
      return result;
    }, []);
    return output;
  }
  let same = eliminate(tempSame);
  let different = eliminate(tempDifferent);
  return {
    same,
    different,
  };
}
console.log(filter(array1, array2));

// 8
function isPalindrome(input) {
  for (let i = 0; i < input.length / 2; i++) {
    input[i] = input[i].toLowerCase();
    if (input[i] !== input[input.length - (i + 1)]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(["asep", "budi", "-", "budi", "asep"])); //true
console.log(isPalindrome(["Tom", "Tim", "tim", "tom"])); //true
console.log(isPalindrome(["tik", "tok", "toko", "tik"])); //false

// 9
function minMaxArray(inputArray) {
  inputArray.sort((a, b) => a - b);
  return {
    min: inputArray[0],
    max: inputArray[inputArray.length - 1],
  };
}
console.log(minMaxArray([2, 3, 4, 5, 6, 7, 8, 9, 1, 10]));

// 10
function insert(array, target) {
  let output = [];
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++) {
    if (array[i] < target) {
      output.push(array[i]);
    } else if (array[i] > target && !output.includes(target)) {
      output.push(target);
      output.push(array[i]);
    } else {
      output.push(array[i]);
    }
  }
  if (!output.includes(target)) {
    output.push(target);
  }
  return output;
}
console.log(insert([4, 7, 1, 20], 9));
console.log(insert([3, 5, 2], 7));
console.log(insert([2, 14, 10, 1, 11, 12, 3, 4], 7));
