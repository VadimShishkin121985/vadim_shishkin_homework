//------------- Параноя ----------------------

var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

var emailregvalidation = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

var trustedemails = arr.filter(function(item) {
    return emailregvalidation.test(item.email);
});

console.log(trustedemails);

// ---------------- Без А -------------------------------

const string = "fghkglka Aflghkfghk dfdfdafgfg AgdfgdfgdA Adfgghdgadfgdfg";


