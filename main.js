let changer = 0
let clock = document.querySelector('.clock')
setInterval(() => {
    changer++
    console.clear()
    console.log('%cCLOCK IN CONSOLE :D','padding: 20px; background-color: red; margin-top: -30px; color: white; border-radius: 0 20px;')
    let data = new Date()
    let time = data.toLocaleTimeString()
    let date = data.toDateString().slice(0,10)
    if(changer % 10 == 0){
        time = date
    }
    if(changer == 5 || changer == 6){
        time = 'Please open console'
    }
    clock.textContent = time
    console.log(`%c${time}`,"color:#01e694; background: #030303; padding: 12px 20px; margin: 10px; border-radius: 10px;font-size: 20px; font-family: sans-serif; border: 1px solid #01e694; border-radius: 8px 0 8px 0")
}, 1000)
