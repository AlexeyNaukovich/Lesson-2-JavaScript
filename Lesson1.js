checkAge(17)
checkAge(18)

console.log(true || true)
console.log(true || false)
console.log(false || true)


console.log(true && true)
console.log(false && true)

let item_1 = 5
let item_2 = 100

if (item_1 > 3 || item_2 < 15)
{
    console.log("Privet")
}
else
{
    console.log("Molodec")
}


if (item_1 > 3 && item_2 < 15)
{
    console.log("Privet")
}
else
{
    console.log("Molodec")
}
//-----------------------------------------------------------------



let item_1 = 5
let item_2 = 100
let item_3 = (item_2 > 50)? console.log("golodny") : console.log("golodny")

console.log(item_3)
20 = 10 +5 * 2
if (item_1 > 3 || item_2 < 15 && item_3 == 50)
{
    console.log("idi kuhat")
}
else
{
    console.log("golodny")
}
//--------------------------------------------------------------------


let item_1 = 0
let item_2 = 20
while(item_1 < 20 && item_2 <30) 
{
    console.log(item_1, "idi kuhat")
    console.log(item_2, "= -------")
    item_1++
    item_2++
}


for (let i = 0; i < 10; i++){

console.log(i , "= FOR")

}

let names =  ['Kate' ,
            'Andrew'
            'Vadim'
            'Gleb]

let (let item_1 in names){
console.log(item_1, names [item_1])}