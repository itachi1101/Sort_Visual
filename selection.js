const element = document.getElementById("one");
element.addEventListener("click", () => {
  console.log("chick");
  SelectionSort();
});
async function SelectionSort(delay = 300) {
  let bars = document.querySelectorAll(".bar");
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
    min_idx = i;
    bars[i].style.backgroundColor = " #a40606";
    bars[i].style.backgroundImage =
      "linear-gradient(315deg, #a40606 0%, #d98324 74%)";
    //       background-color: #4158d0;
    // background-image: linear-gradient(43deg, #4158d0 0%, #6650c8 46%, #FFCC70 100%);

    for (var j = i + 1; j < bars.length; j += 1) {
      bars[j].style.backgroundColor = "red";
      bars[j].style.backgroundImage =
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
      //       background-color: #4158D0;
      // background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
          bars[min_idx].style.backgroundColor = "#0093E9";
          bars[min_idx].style.backgroundImage =
            "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
        }
        min_idx = j;
      } else {
        bars[j].style.backgroundColor = "#0093E9";
        bars[j].style.backgroundImage =
          "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
      }
    }
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

    bars[min_idx].style.backgroundColor = "#0093E9";
    bars[min_idx].style.backgroundImage =
      "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
    // background-color: #0093E9;
    // background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
    bars[i].style.backgroundColor = "#85FFBD";
    bars[i].style.backgroundImage =
      "linear-gradient(45deg, #85FFBD 0%, #33f372 25%, #fbf4f4 100%)";
    // background-color: #85FFBD;
    // background-image: linear-gradient(45deg, #85FFBD 0%, #33f372 25%, #fbf4f4 100%);
  }
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 1000)
  );
  for (let i = 0; i < bars.length; i += 1) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 30)
    );
    bars[i].style.backgroundColor = "#8EC5FC";
    bars[i].style.backgroundImage =
      "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 40%)";
  }
  for (let i = 0; i < bars.length; i += 1) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 30)
    );
    bars[i].style.backgroundColor = "#8EC5FC";
    bars[i].style.backgroundImage =
      "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)";
  }
}
