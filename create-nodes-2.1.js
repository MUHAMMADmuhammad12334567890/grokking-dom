const progLang = ['html', 'js', 'css']
const ulСycle = document.createElement('ul')
for (let i = 0; i < progLang.length; i++) {
const li = document.createElement('li')
li.textContent = progLang[i]
ulСycle.append(li)

}
console.log(ulСycle)