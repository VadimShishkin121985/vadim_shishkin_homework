//----------- Своя функція NaN -------------

function myIsNaN(value) {
    return typeof value === 'number' && value !== value;
}
console.log(myIsNaN(NaN))

//----------- ДЗ 21. Теорія ймовірності-------------

function generateRandomNumbers(count) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
    const evenPercent = (even / count) * 100;
    const oddPercent = (odd / count) * 100;

    console.log("количество сгенерированых чисел:", count);
    console.log("парные числа:", even);
    console.log("не парные числа:", odd);
    
    const percentEven = (even / count) * 100;
    const percentOdd = (odd / count) * 100;
    console.log("отношение парных к непарным", percentEven.toFixed(2) + "% : " + percentOdd.toFixed(2) + "%");
}

generateRandomNumbers(100);

//------Свій padEnd/padStart---------------


function pad(string, char, length, isStart) {
    let padding = '';
    for (let i = 0; i < length - string.length; i++) {
        padding += char;
    }
    return isStart ? padding + string : string + padding;
}

let result = pad('simple', '+', 8, true);
console.log(result);  

result = pad('simple', '+', 8, false);
console.log(result);  