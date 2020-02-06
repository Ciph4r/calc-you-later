/******************
 * YOUR CODE HERE *
 ******************/

calculate = (x,y,sign,sign2) => {
  
  let total = ''
  let sign3 = ''
  if (sign2 === undefined) {
    sign3 = sign
  } else{
    sign3 = sign.concat(' ',sign2)
  }
  switch (sign3) {
    case '+' :
    case 'plus' :
    case 'added to' :
      total = x + y
      break
    case '-' :
    case 'minus' :
    case 'subtracted from' :
      total = x - y
      break
    case '/' :
    case 'divided by' :
      total = x / y
      break
    case '*' :
    case 'times' :
    case 'X' :
    case 'multiplied by' :
      total = x * y
      break
    case 'x' :
      total = y - x
      break
    case '%' :
    case 'modulus' :
    case 'mod' :
        total = x % y
        break
  } if (typeof total === 'number') {
    return x + ' ' + sign + ' ' + sign2 + ' ' + y + ' equals' + ' ' + total
  }else{
    return `Sorry, that's not a mathematical operation!`
  }
}

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;