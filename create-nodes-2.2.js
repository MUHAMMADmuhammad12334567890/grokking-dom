const string = ["html", "css", "js"]
function render(arg) {
    const ul = document.createElement('ul')
    for (let i = 0; i < string.length; i++){
const li = document.createElement('li')
li.textContent = string[i]
ul.append(li)
    }
    document.body.append(ul)
    console.log(ul)


}

render(string)