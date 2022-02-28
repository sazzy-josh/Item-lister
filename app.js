let textItem = document.getElementById('text');
let submit = document.getElementById('submit')
let itemList = document.getElementById('itemList')
let deleteBtn = document.querySelectorAll('.bi bi-x-lg')
let check = document.getElementById('checkbox')
let searchBox = document.forms[0]


//add item to list
function addItem(e){
  e.preventDefault();
  let itemValue = textItem.value 
  //create new li
   let li = document.createElement('li')
   li.append(itemValue)
  //create span
   let i = document.createElement('i')
   li.appendChild(i)
   i.className = "bi bi-x-lg"
   
   
  
   itemList.appendChild(li)
   textItem.value = ''
   

}

submit.addEventListener('click', addItem)


//delete item from List
function deleteItem(e){
    e.preventDefault();
    li = e.target.parentElement
    if(e.target.className == "bi bi-x-lg"){
        if(confirm('Are you sure you want to delete Item')){
            itemList.removeChild(li)
        }
    }
}
itemList.addEventListener('click',deleteItem)

function hideItems(e){
   if(check.checked){
       itemList.style.display = "none"
   }else{
       itemList.style.display = "block"
   }
 }
check.addEventListener('change',hideItems)

//filter items in searchbox
function searchItem (e){
let searchInput = e.target.value.toLowerCase();
let searchList = document.querySelectorAll('li')
   searchList.forEach((items) => {
    let searchText = items.innerText;
    if(searchText.toLowerCase().indexOf(searchInput) != -1){
        items.style.display = "block"
    } else{
        items.style.display = "none"
    }
 })

}






searchBox.addEventListener('keyup',searchItem)






 
//shalow and deep cloning
const objA = {
    name:"Joshua",
    birthYear : 1998,
    calcAge(){
      return 2022 - this.birthYear
    }
}  

let age = objA.calcAge()
console.log(age)

const objB = {
    name : "Osaze",
    birthYear : 2000
}


let a = objA.calcAge.apply(objB)
console.log(a)

//cloning an obj

const obj = {
    firstName : "Osaze",
    age : 1990,
    quote(){
        console.log(`I ${this.firstName} would never give up!!!`)
    }
}

 let clone = Object.assign({}, obj)
 let clone2 = {...obj}
 obj.age = 1991
 console.log(clone2)
 console.log(obj)
 clone.firstName = "Troubling"
 obj.quote.apply(clone)



