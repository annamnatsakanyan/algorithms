// for each number nums[i], we are trying to find the longest subsequence of elements from the previous indexes

function longestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    const arr = new Array(nums.length).fill(1);
                                          
    for (let i = 1; i < nums.length; i++) { 
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                arr[i] = Math.max(arr[i], arr[j] + 1);
            }     
        }
    }
    
    return Math.max(...arr);
  }
  
  console.log(longestIncreasingSubsequence([1, 5, 2, 4, 7]))