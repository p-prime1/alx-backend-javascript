function calculateNumber(type, a, b) {
    if (type === 'SUM') {
        return Math.round(a) + Math.round(b);
    }
    else if (type === 'SUBTRACT') {
        return Math.round(a) - Math.round(b);
    }
    else if (type === 'DIVIDE') {
        if (b === 0) {
            return 'Error';
        }
        const result = Math.round(a) / Math.round(b);
        return result;
    }
}
module.exports = calculateNumber;