/******************
 * YOUR CODE HERE *
 ******************/
// calculate = (num,num2,oper) => {
// const error = `Sorry, that's not a mathematical operation!`
// if (oper === 'minus' || oper ==='subtracted from' || oper === '-'){
//   oper = '-'
// }if(oper === 'x' || oper === 'times'|| oper === 'X' || oper === 'multiplied by'){
//     oper = '*'
// }if(oper === 'plus'|| oper === 'added to'){
//   oper = '+'
// }if(oper === 'modulus' || oper === 'mod'){
//   oper = '%'
// }if (oper === 'divided by'){
//   oper = '/'
// }else if (oper !== '+' && oper !== '*' && oper !== '%' && oper !=='/' && oper !== '-'){
//   return error
// }

// const total = eval(num + oper + num2)
// const revTotal = num2 - num

// if (oper === 'x') {
//   return revTotal
// }if (typeof oper == 'string' ) {
//   return total
// }else {
//   return error
// }
// }



//CAUSE  EVAL() is evil SAID DONT USE




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
      total = Number(x) + Number(y)
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
    case 'x' :
      total = x * y
      break
    // case 'x' :
    //   total = y - x
    //   break
    case '%' :
    case 'modulus' :
    case 'mod' :
        total = x % y
        break
  }

// --------------------------------------------------


   if (typeof total === 'number' && typeof sign2 === 'string') {
    return x + ' ' + sign + ' ' + sign2 + ' ' + y + ' equals' + ' ' + total

  } else if (typeof total === 'number' && sign2 === undefined){
    return x + ' ' + sign +  ' ' + y + ' equals' + ' ' + total
  }

//-----------------------------------------------------


// if (typeof total === 'number') {
//     return total
//   }


//-------------------------------------------------------


  else{
    return `Sorry, that's not a mathematical operation!`
  }
}

// even if you make the return just numbers, it will still fail npm test. refer to line 93

/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;