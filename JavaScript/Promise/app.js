let promise = new Promise(function(resolve,reject){
    console.log("mujhe promise karo");
    setTimeout(function(){
        let data = "me tumhare paise dedunga";
        resolve(data);
        // let err = "mai paise nhi dunga";
        // reject(err);
    },4000)
});
// console.log(promise);
promise.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})
