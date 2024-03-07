console.log('number' + 3 + 3) // number33 - канкатенация
console.log(null + 3) // 3 - просто сложение, грубо говоря 0 + 3
console.log(5 && "qwerty")  // qwerty - оба операнда true, поэтому возвращает последний 
console.log(+'40' + +'2' + "hillel") // 42hillel - конкатенация текста
console.log('10' - 5 === 6) // false - текст минус число не равно числу
console.log(true + false) // 1 - равнозначно операции 1 + 0
console.log('4px' - 3) //  NaN - одино значение из выражения не число, в душках возле 4 есть буквы
console.log('4' - 3) // 1 - тут текст конвертнулся в число и произошло вычитание
console.log('6' + 3 ** 0) // 61  ** не совсем понимаю почему **
console.log(12 / '6') // 2 - тут текст конвертнулся в число и происходит деление
console.log('10' + (5 === 6)) // 10false - операция в скобках False, а потом конкатенация
console.log(null == '') // false - null и пустая строка разные типы данных
console.log(3 ** (9 / 3)) // 27 - сразу операция в скобках, а потом возведение в степень 
console.log(!!'false' == !!'true') // true - !! это знак приведения к булевому значению, с обеих сторон булевое значение
console.log(0 || '0' && 1) // 1 - сразу выполняется && а потм || 
console.log((+null == false) < 1) // false - унарный оператор преобразовывает НАЛ в 0 и и фолс = 0, получается 0 == 0 что есть тру, тоесть 1, а выражение 1 < 1  фолс 
console.log(false && true || true) // true - первое вычесление будет && - фолс, потом || что даст нам тру так как возвращает первый тру 
console.log(false && (false || true)) // false - сразу будет происходить операция в скобках || что даст нам тру, а потом && которая возвращает первый фолс 
console.log((+null == false) < 1 ** 5) // false - часть в скобках описана выше дает нам 1, а 1 в стпени 5 всеровно дает 1, и поэтому выражение 1 < 1 возвращает нам фолс