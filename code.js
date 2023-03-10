function rotate(arr, d, n) {
  d = d % n;
  var tmp = new Array(n);
  let k = 0;
  for (let i = d; i < n; i++) {
    tmp[k++] = arr[i];
  }

  for (let j = 0; j < d; j++) {
    tmp[k++] = arr[j];
  }

  for (let x = 0; x < n; x++) {
    console.log(tmp[x] + " ");
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = arr.length;
let d = 3;
rotate(arr, d, n);
