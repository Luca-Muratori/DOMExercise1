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

