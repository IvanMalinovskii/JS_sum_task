
function getRangeSum(min = 0, max = 1) {
    if (typeof (min + max) !== 'number') throw new Error('arguments should be numbers');
    if (max <= min) throw new Error('max value should be greater than min value');   

    const sum = max * (max + 1) / 2 - min * (min + 1) / 2 + min;

    if (Math.abs(sum) > Number.MAX_SAFE_INTEGER) throw new Error('sum abs value is out of range');
    
    return sum;
}

window.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input');
    const resultInput = document.querySelector('#result');
    const noticeP = document.querySelector('.note');
    document.querySelector('button').addEventListener('click', () => {
        try {
            resultInput.value = getRangeSum(+inputs[0].value, +inputs[1].value);
        }
        catch(e) {
            noticeP.innerText = e.message;
        }
    });
});