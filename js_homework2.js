var a = 4 
if (a <= 0) {
    console.log('Возраст не может быть отрицательным')
} else if ( a % 10 === 1 && a % 100 != 11 ){
    console.log('Вам ' + a + ' рік' )
} else if ( a % 10 === 2 || a % 10 === 3 || a % 10 === 4 ){
    console.log('Вам ' + a + ' роки' )
} else {
    console.log('Вам ' + a + '  років' )
}

