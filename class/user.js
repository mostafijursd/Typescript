// class User{
//     name:'';
//     email:'';
//     addUser(user){
//         return ` ${user} is Add`
//     }
// }
//  let user1=new User;
//   let result=user1.addUser('babu' );
//   console.log(result);
var Users = /** @class */ (function () {
    function Users() {
        this.name = "";
    }
    return Users;
}());
var u1 = new Users();
u1.name = 'babu';
console.log(u1.name);
