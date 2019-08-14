var horiz = "-----------------------"
var blank = "       |       |       "
var s1 = "   O   "
var s2 = "   X   "
var s3 = "   X   "
var s4 = "   X   "
var s5 = "   O   "
var s6 = "   O   "
var s7 = "   X   "
var s8 = "   O   "
var s9 = "   X   "
console.log(" ");
console.log(blank)
console.log(`${s1}|${s2}|${s3}`)
console.log(blank);
console.log(horiz);
console.log(blank)
console.log(`${s4}|${s5}|${s6}`)
console.log(blank);
console.log(horiz);
console.log(blank)
console.log(`${s7}|${s8}|${s9}`)
console.log(blank)

if (s1 == s2 && s1 == s3) {
    console.log("You win.")
}
else {
    console.log("You don't win.")
}