const div4 = document.createElement('div')
const ul1 = document.createElement('ul')
const liA = document.createElement('li')
const liB = document.createElement('li')
const a = document.createElement('a')
const a1 = document.createElement('a')
div4.append(ul1)
ul1.append(liA, liB)
liA.append(a)
liB.append(a1)
a.href = 'https://instagram.com/intocode'
a.target = '_blank'
a.textContent = 'Наш инстаграм'
a1.href = 'https://intocode.ru'
a1.target = '_blank'
a1.textContent = 'Наш сайт'
document.body.append(div4)
console.log(div4)