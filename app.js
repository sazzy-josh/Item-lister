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
   li.append('i')
   
  
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