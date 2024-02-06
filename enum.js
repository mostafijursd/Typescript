"use strict";
// enum Role {
//     ADMIN,MANGER,USER
// }
//  console.log(Role.MANGER);
var Num;
(function (Num) {
    Num[Num["X"] = 10] = "X";
    Num[Num["Y"] = 11] = "Y";
    Num[Num["Z"] = 12] = "Z";
})(Num || (Num = {}));
console.log(Num.X);
