function weightedRand(spec) {
    var i, sum=0, r=Math.random();
    for (i in spec) {
      sum += spec[i];
      if (r <= sum) return i;
    }
}


module.exports = {
    weightedRand
}