module.exports = function transform(arr) {
    if (!(Array.isArray(arr))) {
        throw 'Error';
    }
    if (arr.length <= 1) {
        return arr;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '--discard-next') {
            if (i == arr.length - 1) {
                return arr.splice(-1, 1)
            }
            arr.splice(i, 2);
            return arr;
        }
        if (arr[i] == '--discard-prev') {
            arr.splice((i - 1), 2);
            return arr;
        }
        if (arr[i] == '--double-next') {
            arr.splice(i, 1, (arr[i + 1]));
            return arr;
        }
        if (arr[i] == '--double-prev') {
            arr.splice(i, 1, (arr[i - 1]));
            return arr;
        }

    };
    return arr;
}

/*console.log(transform([1, 2, 3, '--double-next', 4, 5]));*/