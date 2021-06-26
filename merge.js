const merge = document.getElementById("two");
let nums = document.querySelectorAll(".bar");
merge.addEventListener('click', () => {
    console.log("clicked");
    mergeSort();
    // document.getElementById("two").style.pointerEvents = "none";
    // document.getElementById("generator").style.pointerEvents = "none";
});
async function mergehelper( left, middle, right) {
    var temp = [];
    let i = left;
    let j = middle + 1;
    // console.log(j);
    let k = 0;
    // nums[i].style.backgroundColor = "red";
    // nums[i].style.backgroundImage = "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    while (i <= middle && j <= right)
    {
        var val1 = parseInt(nums[i].childNodes[0].innerHTML);
        var val2 = parseInt(nums[j].childNodes[0].innerHTML);
        // console.log(val2);
        
        if (val1 <= val2) {
            temp[k] = nums[i];
            i += 1;
        }
        else {
            temp[k] = nums[j];
            j += 1;
        }
        k += 1;
    }
    while (i <= middle) {
        temp[k] = nums[i];
        i += 1;
        k += 1;
    }
    while (j <= right) {
        temp[k] = nums[j];
        j += 1;
        k += 1;
    }
     await new Promise((resolve) =>
       setTimeout(() => {
         resolve();
       }, 1000)
     );
    for (i = 0; i < k; i++){
        nums[left + i].style.height = temp[i].style.height;
        nums[left + i].childNodes[0].innerText = temp[i].childNodes[0].innerText;
        console.log(temp[i].childNodes[0].innerText);
        // nums[left + i].style.height = temp[i].style.height;
        // console.log(nums[left + 1].style.height,temp[i].style.height);
        // nums[left + i].childNodes[0].innerText = temp[i].childNodes[0].innerText;
        // nums[i].childNodes[0].innerText = temp2;

    }
    
}
function helper(left,right) {
    if (left < right) {
        var middle =Math.floor(left + (right - left) / 2);
        // console.log(middle);
        // console.log(left, right,middle);
        helper( left, middle);
        helper( middle + 1, right);
        mergehelper(left, middle, right);
    }
}

function mergeSort() {

    let n = nums.length;
    // console.log(n);
    // for (var i = 0; i < n; i++) {
    //     console.log(nums[i].childNodes[0].innerText);
//    }

    helper(0, n - 1);
    console.log("new");
    //   for (var i = 0; i < n; i++) {
    //         console.log(nums[i].childNodes[0].innerText);
    //   }


}