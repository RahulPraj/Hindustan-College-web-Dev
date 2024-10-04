// fetch(" https://api.tvmaze.com/search/shows?q=girls")
// .then(function(data){
//     // console.log(data);
//     return data.json();
// })
// .then(function(res){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// })


axios.get("https://api.tvmaze.com/search/shows?q=girls")
.then(function(res){
    // console.log(res);
    console.log(res.data);
}).catch(function(err){
    console.log(err)
})