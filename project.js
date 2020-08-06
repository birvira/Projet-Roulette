var select = document.querySelector('select')
var valuese = 1000
text.innerHTML = valuese

for(var i = 0; i <= 36; i++)
{
    var option = document.createElement('option')
    option.innerHTML = i
    option.value = i;
    select.appendChild(option)
}




