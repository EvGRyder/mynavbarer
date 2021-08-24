import './style.css' 

const navbarItems = [
  'Home',
  'About',
  'Blog',
  'Contact',
]

const MyNavbar = document.createElement('header')

const logo = document.createElement('h1')
logo.classList.add('logo')
logo.textContent = 'Logo'
MyNavbar.appendChild(logo)

const createNavItems = (list) => {
  const nav = document.createElement('nav')
  const itemList = document.createElement('ul')

  list.forEach((item) => {
    const myItem = document.createElement('li')
    const anchor = document.createElement('a')
    anchor.textContent = item
    myItem.appendChild(anchor)
    itemList.appendChild(myItem)
  })
  nav.appendChild(itemList)
  return nav
}

const input = document.createElement('input')
input.classList.add('nav-toggle')
input.type = 'checkbox'
input.id = 'nav-toggle'

const label = document.createElement('label')
label.classList.add('nav-toggle-label')
label.for = 'nav-toggle'

const checkbox = document.createElement('span')

label.appendChild(checkbox)

MyNavbar.appendChild(input)
MyNavbar.appendChild(label)

label.addEventListener('click', () => {
  const check = document.querySelector('.nav-toggle')
  check.checked = !check.checked
})

const obj = createNavItems(navbarItems)
MyNavbar.appendChild(obj)

export default MyNavbar
