module.exports = function toReadable (number) {
    const zero = 'zero'
  const arrOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arrTeen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrTy = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';
  const thousand = 'thousand';
  let result = '';
  if (`${number}`.length === 1) {
    result = arrOne[number] 
    // from 1 to 9  
  } else if (`${number}`.length === 2 && number < 20) {
    result = arrTeen[number - 10];
    // from 10 to 19

    } else if (`${number}`.length === 2 && number > 19 && number < 100) {
         result = arrTy[Math.floor(number / 10)] + ' ' + arrOne[number % 10] ;
        // result = arrTy[Math.floor(number / 10)] + arrOne[((number / 10 - Math.floor(number/10)) * 10)] // there is special "%" exists for that, but your solution also works
    // from 20 to 99

    } else if (`${number}`.length === 3 && number > 99 && number < 1000 && (number % 100) < 10) {
        result = arrOne[Math.floor(number / 100)] + ' ' + hundred + ' ' + arrOne[(number % 100)];
    // like 208 407 908 

    } else if (`${number}`.length === 3 && number > 99 && number < 1000 && (number % 100) > 9 && (number % 100) < 20) {
        result = arrOne[Math.floor(number / 100)] + ' ' + hundred + ' ' + arrTeen[number % 10];
    // like 918 516 410

    } else if (`${number}`.length === 3 && number > 99 && number < 1000 && (number % 100) > 19) {
        result = arrOne[Math.floor(number / 100)] + ' ' + hundred + ' ' + 
        arrTy[Math.floor((number % 100 ) / 10)] + ' ' + arrOne[number % 10];
        //  result = arrOne[Math.floor(number / 100)] + ' ' + hundred + ' ' + 
        // arrTy[Math.floor((number / 100 - Math.floor(number / 100)) * 10)] + ' ' + arrOne[number % 100];
    // like 459 876 999

    } else {
        result = 'mistake'
    }

    
    if ( number == 0) {
    result = zero;
    // number === 0
    }

    return result.trim();
}
