const js_style = function () {
    const text = document.querySelector('#text');
    const btn = document.querySelector('#jsstyle');
    btn.addEventListener('click', function () {
        text.style.color = 'red';
        text.fontSize = '200px';
        text.style.fontFamily = "Comic Sans MS";
    })

}
js_style()


//exercise 2
const getFormvalue = function () {
    const name = document.querySelector("#form1 > input[type=text]:nth-child(1)").value
    const surname = document.querySelector("#form1 > input[type=text]:nth-child(3)").value
    console.log(name + ' ' + surname)
}

//exercise 3
const changeColor = function () {
    const p = document.querySelector('.ex3')
    const btn = document.querySelector('.ex3>button')
    btn.addEventListener('click', function () {
        p.style.backgroundColor = 'red'
    })
}
changeColor()

//exercise 4
const getAttributes = function () {
    const value = document.querySelector("#w3r")
    const href = value.href
    const rel = value.rel
    alert('the rel is ' + href + ' and the href is ' + rel)
}

//exercise 5
const insert_Row = function () {
    const table = document.querySelector('#sampleTable');
    const btn = document.querySelector("div.ex5 > input[type=button]")
    btn.addEventListener('click', function () {
        const newRow = table.insertRow(-1);
        const newCellLeft = newRow.insertCell(0);
        const newCellRight = newRow.insertCell(1);
        let newText1 = document.createTextNode('New bottom row');
        let newText2 = document.createTextNode('New bottom row');
        newCellLeft.appendChild(newText1);
        newCellRight.appendChild(newText2)
    })

}}


