const accountId = 1234567;
let accountEmail = "mansikumari@google.com"
var accountPassword = "Manas12"

/*
Prefer not to use var
Because of issue in block scope and the functional scope
*/

let accountState // by default it gives undefined value
accountCity = "Patna"

 //accountId = "81818181" // assignment not allowed in constants

accountEmail = "mansikumari123@gmail.com"
accountPassword = "999999"
accountCity = "Mohali"
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]) // create tables for the specified values
console.log(accountId);
