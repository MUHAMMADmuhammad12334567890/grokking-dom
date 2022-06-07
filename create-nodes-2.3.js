const data = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]




function render(arg) {
 const ul = document.createElement('ul')
 for (let i = 0; i < data.length; i++){
     const li = document.createElement('li')
     const a = document.createElement('a')
     ul.append(li)
     li.append(a)
     a.href = arg[i].url
     a.textContent = arg[i].name
     document.body.append(ul)
 }

console.log(ul)

}

render(data)
