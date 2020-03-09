const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  var sampleActivityNumber = parseFloat(sampleActivity);
  if (sampleActivityNumber <= 0 || sampleActivityNumber > MODERN_ACTIVITY || isNaN(sampleActivityNumber)) {
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / K);
};