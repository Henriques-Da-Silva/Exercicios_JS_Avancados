const vector = [1,[2,[3,[4]]]]

let cont = 1

for (item of vector){
    if (Array.isArray(item)){
        cont++
    }
}

console.log(vector.flat(cont))