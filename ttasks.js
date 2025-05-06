//Check if a given string is palindrome

function checkPalindrone(str){
    //create a variable to store the lenght of the array
    let len = str.length;
    //divide the variable used to store the length of the array by 2
    for (let i=0; i<len/2; i++){
        //check if the right hand side is equal to the left hand side. 
        //len-1-i is used to check the index of the last item,because
        //to check the last index in an array you check the length den minus 1
        if(str[i] !== str[len-1-i]){
            console.log("it is not a palindrone")
            return
        }
    }
    console.log("it is a palindrome")
}
checkPalindrone("madam")
checkPalindrone("hopo")
checkPalindrone("level")

// //Print the max number from the array

let arrayNum =[1,2,100,3,-1]
function findMax(){
    let max=arrayNum[0]
    for(let i = 0; i<arrayNum.length; i++){
        if(arrayNum[i]>max){
            max=arrayNum[i]
        }
    }
    console.log(max)
}

findMax()

// //factorial of any number

function factorial(n){
    let result=1
    for(let i=2; i<=n; i++){
        result=result*i
    }
    return result
}
console.log(factorial(10))

//Sum of numbers in an array

let sumNumbersArr = [1,4,23,9,8,4,1,2]

function sumOfNumbers(){
    let result = 0
for (let i=0; i<sumNumbersArr.length; i++){
    result+=sumNumbersArr[i]
}
return result
}
console.log(sumOfNumbers())

//Count vowels

function checkVowels(str){
    let vowels="aeiouAEIOU"
    let result=[]
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if (str[i] === vowels[j]){
                result[result.length] = str[i]
            }
        }
        
    }
    return result;
}
console.log(checkVowels("Parelelogram"))




// //Prime number

function primeNum(n){
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
    }
    return true
}
console.log(primeNum(6))
console.log(primeNum(7))

//Multiples of a number

let sum = 0;
function multiplesOf3and5(number) {

  for(let i = 1; i < number; i++){
    if((i % 3 === 0 )||(i % 5 === 0)||(i % 3 === 0 && i % 5 === 0)){
      sum = sum + i;
    }
  }
  return sum;
}
multiplesOf3and5(10);
console.log(sum)



//find index of any number in the array
let arrNum=[3,2,5,20,12,80]

function findIndex(n){
    for(let i=0; i<arrNum.length; i++){
        if(arrNum[i] === n){
            return i
        }
    }
    return -1
}
console.log(findIndex(2))

//Merge 2 Arrays

let array = [[0,4,6],[1,3,2]]
let merge =[]

function mergedArray(){
    for(let i=0; i<array.length; i++){
       for(let j=0; j<array[i].length; j++){
        merge[merge.length] = array[i][j]
       }
    }
    console.log(merge)
    for(let i = 0; i < merge.length; i++){
        for(let j = 0; j < merge.length - 1 - i; j++){
            if(merge[j] > merge[j + 1]){
                let temp = merge[j];
                merge[j] = merge[j + 1];
                merge[j + 1] = temp;
            }
        }
    }
}
mergedArray()
console.log(merge)

//Adashe series

let members=[
    {
        name1:"Ella",
        amount:200,
    },
    {
        name1:"Joy",
        amount:500,
    },
    {
        name1:"Ester",
        amount:300,
    },
    {
        name1:"Mary",
        amount:400,
    }
]

function addMember(name1,amount){
    let member={
        name1:name1,
        amount:amount
    }
    members.push(member)
}
addMember("Hannah", 2000)
addMember("Joan", 1500)
console.log(members)

//Get member by name

function getMembersByName(member){
    for(member of members){
        if(member.name1 == "name1"){
            return member
        }

    }
    return null
}
getMembersByName()
console.log(getMembersByName())


//withdraw amount

function withdraw(){
    for(let i=0; i<members.length; i++){
        if(members[i].amount === 2000){
            members[i].amount -= 1000
            return members[i]
        }
    }
    return null
}
console.log(withdraw())
console.log(members)

//Remove a member

function removeMember(){
    return members.pop()
}
removeMember()
console.log(members)
