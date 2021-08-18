
function getRangeSum(min = 0, max = 1) {
    if (typeof (min + max) !== 'number') throw new Error('arguments should be numbers');
    if (max <= min) throw new Error('max value should be greater than min value');   

    const sum = max * (max + 1) / 2 - min * (min + 1) / 2 + min;

    if (Math.abs(sum) > Number.MAX_SAFE_INTEGER) throw new Error('sum abs value is out of range');
    
    return sum;
}

let memoGetRangeSum = (function(){
    const memo = {};

    return function(min, max) {
        let sum;
        memo[min] = memo[min] || {};

        if (min in memo && max in memo[min]) {
            sum = memo[min][max];
        }
        else {
            sum = getRangeSum(min, max);
            memo[min][max] = sum;
        }

        return sum;
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    const resultInput = document.querySelector('#result');
    const noticeP = document.querySelector('.note');
    document.querySelector('button').addEventListener('click', () => {
        try {
            noticeP.innerText = '';
            resultInput.value = memoGetRangeSum(+inputs[0].value, +inputs[1].value);
        }
        catch(e) {
            noticeP.innerText = e.message;
        }
    });
});