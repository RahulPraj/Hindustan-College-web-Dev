async function some(a,b) {
    console.log(a);
    // let ans = fetch("https://api.tvmaze.com/search/shows?q=girls");
    let ans = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    console.log(b);
    console.log(ans);
}

console.log(some(10,20));