var num = document.getElementById('num')
var btinc = document.getElementById('btinc')
var content = document.getElementById('content')
var num1 = 0
    function increase(){
        num1++
        num.innerHTML = num1
        if(num1 == 100){
            var newtitle = document.createElement('h1')
            newtitle.textContent = `Você chegou em 100!`
            newtitle.id = 'reach100'
            content.appendChild(newtitle)
            timeoutId = setTimeout(() => {
                content.removeChild(newtitle)
            }, 2000)
        }
    }
    function decrease(){
        if(num1 == 0){
            var advise = document.createElement('h3')
            advise.textContent = `Você não pode diminuir abaixo de 0`
            advise.style.color = 'red'
            content.appendChild(advise)
            timeoutId = setTimeout(() => {
                content.removeChild(advise)
            }, 2000)
        }else{
            num1--
            num.innerHTML = num1
        }
    }
    function reset(){
        if(num1 !== 0){
            num1 = 0
            num.innerHTML = num1
            var newtitle = document.getElementById('reach100');
            if (newtitle){
                content.removeChild(newtitle)
                clearTimeout(timeoutId)
            }
        }else{
            var advise = document.createElement('h3')
            advise.textContent = `É preciso ter um valor para efetuar o reset`
            advise.style.color = 'red'
            content.appendChild(advise)
            timeoutId = setTimeout(() => {
                content.removeChild(advise)
            }, 2000)
        }
    }