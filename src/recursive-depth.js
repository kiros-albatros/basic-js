module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var counter = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {

                this.calculateDepth(arr[i]);
                counter++;
            }
        }
        return counter;
    }
}