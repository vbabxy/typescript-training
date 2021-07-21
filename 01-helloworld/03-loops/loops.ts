let reviews: number [] = [1,2,3,8,-7,9,-4,2];

let total: number = 0;

for(let x = 0; x < reviews.length; x++) {
   total += reviews[x];
}
console.log("total "+total);

let average: number = total/reviews.length;

console.log("average: "+average);

let sports: string [] = ["Golf","Soccer", "Boxing"];

// for(let i = 0; i < sports.length; i++) {
//     console.log(sports[i]);
// }

sports.push("Football");
sports.push("Basketball")

for(let tempsport of  sports) {
    if(tempsport == 'Golf') {
        console.log('My Fav '+tempsport);
    }
    console.log(tempsport)
}