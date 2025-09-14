// // const /*we can also use new insted of const*/ promiseONe = new Promise(
// //     function (resolve, reject) {
// //       setTimeout(function () {
// //         console.log("async task completed");
// //         resolve();
// //       }, 1000);
// //     }
// //   );
// // promiseONe.then(function () {
// //   console.log("promise completed");
// // });

// // const promisETwo = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     resolve({ username: "syntaxsaurabh", email: "saurabhsinngh.com" });
// //   }, 1000);
// // });

// // promisETwo.then(function (user) {
// //   //how to get data
// //   console.log(user);
// // });

// // const promiseThree = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     let error = true;
// //     if (!error) {
// //       resolve({ username: "saurabh", password: "@saur9bh01" });
// //     } else {
// //       reject("ERROR:kuch gadbad ahy");
// //     }
// //   }, 1000);

// //   resolve();
// // });
// // promiseThree.then(()=>{
// //   console.log(user);
// //   return user.username
  

// // }).then((username)=>{

// // }).catch(function(error){
// //   console.log(error);
  
// // })
 

// const promiseFive = new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     let error = true;

//     if (!error) {
//       resolve({
//         username: "saurabh",
//         mail: "xwdsaurabh@gmail.com"
//       });
//     } else {
//       reject("Something went wrong");
//     }
//   }, 1000);
// });

