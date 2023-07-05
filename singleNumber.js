//testcase 1: nums = [2, 2, 3, 2];
//testcase 2: nums = [0, 1, 0, 1, 0, 1, 99];

//task -> print non repeated number;

var case1 = [2, 2, 3, 2];
var case2 = [0, 1, 0, 1, 0, 1, 99];

var singleNumber = (nums) => {
    var repeated = [];
    var checkValue;

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            checkValue = nums[i];
            if(checkValue == nums[j]){
                repeated.push(nums[j]);
            }
        }
        if(repeated.length > 1){
            repeated = [];
        }
        if(repeated.length == 1){
            return repeated[0]
        }
    }
}

var result = singleNumber(case2);
console.log(result);