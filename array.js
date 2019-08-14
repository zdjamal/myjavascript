let favouriteWebsite = ["Youtube", "Google", "BBC"];
console.log(favouriteWebsite);
favouriteWebsite.push("Yahoo", "Chordie")
console.log(favouriteWebsite);
favouriteWebsite.pop();
console.log(favouriteWebsite);
let someSongs = favouriteWebsite.slice(1, 2);
console.log(someSongs);
favouriteWebsite.splice(2, 1, "Facebook", "twitter");
console.log(favouriteWebsite);

