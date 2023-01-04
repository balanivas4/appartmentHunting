const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

function apartmentHunting(blocks, reqs) {
  let minSteps = [];
  for (let i = 0; i < blocks.length; i++) {
    minSteps[i] = getMinSteps(i, blocks, reqs);
  }
  return minSteps.indexOf(Math.min(...minSteps));
}

function getMinSteps(idx, blocks, reqs) {
  let minSteps = 0;
  let currItemObj = {};
  for (let key in blocks[idx]) {
    currItemObj[key] = blocks[idx][key];
  }

  let left = idx;
  let right = idx;
  while (left >= 0 || right < blocks.length) {
    let leftObj = left >= 0 ? blocks[left] : {};
    let rightObj = right < blocks.length ? blocks[right] : {};
    currItemObj = getCombinedObj(leftObj, rightObj, currItemObj, reqs);
    if (containsAllReq(currItemObj, reqs)) return minSteps;
    minSteps++;
    left--;
    right++;
  }
  return minSteps;
}

function getCombinedObj(leftObj, rightObj, currItemObj, reqs) {
  for (let eachReq of reqs) {
    currItemObj[eachReq] =
      leftObj[eachReq] || rightObj[eachReq] || currItemObj[eachReq]
        ? true
        : false;
  }
  return currItemObj;
}

function containsAllReq(currItemObj, reqs) {
  for (let i = 0; i < reqs.length; i++) {
    let ER = reqs[i];
    if (currItemObj[ER] === false) return false;
  }
  return true;
}

const result = apartmentHunting(blocks, ["gym","store"]);
console.log(result);
