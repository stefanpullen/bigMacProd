export default function binner(arr) {
  let bins = [];
  let binCount = 0;
  let interval = .7;
  let numOfBuckets = 7;

  // Setup Bins

  for (let i = 0; i < numOfBuckets; i += interval) {
    bins.push({
      binNum: binCount,
      minNum: i,
      maxNum: i + interval,
      count: 0,
    });
    binCount++;
  }

  // Loop through data and add to bin's count
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = 0; j < bins.length; j++) {
      let bin = bins[j];
      if (item > bin.minNum && item <= bin.maxNum) {
        bin.count++;
        break; // An item can only be in one bin.
      }
    }
  }

  return bins;
}
