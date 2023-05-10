let container = document.getElementById('container');
const header = document.createElement('header')

const navigation = document.createElement('nav');
header.append(navigation)
const logo = document.createElement('div')
logo.setAttribute('class','logo')
logo.innerHTML = "Logo"
navigation.append(logo)
const lists = document.createElement('ul')
lists.innerHTML = `
<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Service</a></li>
<li><a href="#">Contact</a></li>
`
navigation.append(lists)
container.append(header)


// function addnum(num1, num2){
//     return num1 + num2
// }

// function display(num3, num4){
//     let sum = addnum(num3, num4)
//     console.log(sum)
//     return sum
// }

// display(5,3)