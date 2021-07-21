var reviews = [1, 2, 3, 8, -7, 9, -4, 2];
var total = 0;
for (var x = 0; x < reviews.length; x++) {
    total += reviews[x];
}
console.log("total " + total);
var average = total / reviews.length;
console.log("average: " + average);
var sports = ["Golf", "Soccer", "Boxing"];
// for(let i = 0; i < sports.length; i++) {
//     console.log(sports[i]);
// }
sports.push("Football");
sports.push("Basketball");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempsport = sports_1[_i];
    if (tempsport == 'Golf') {
        console.log('My Fav ' + tempsport);
    }
    console.log(tempsport);
}
