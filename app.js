let celciusInput=document.querySelector('#celcius > input')
let FahrenheitInput=document.querySelector('#Fahrenheit > input')
let KelvinInput=document.querySelector('#Kelvin > input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
/*celcius to fahrenheit and kelvin */
celciusInput.addEventListener('input',function(){
    let cTemp=parseFloat(celciusInput.value)
    let fTemp=(cTemp*(9/5))+32
    let kTemp=cTemp+273.15

    FahrenheitInput.value=roundNumber(fTemp)
    KelvinInput.value=roundNumber(kTemp)

})

/*fahrenheit to celcius and kelvin */
FahrenheitInput.addEventListener('input',function(){
    let fTemp=parseFloat(FahrenheitInput.value)
    let cTemp=(fTemp-32)*(5/9)
    let kTemp=(fTemp-32)*(5/9)+273.15

    celciusInput.value=roundNumber(cTemp)
    KelvinInput.value=roundNumber(kTemp)

})

/*kelvin to  celcius and fahrenheit*/
KelvinInput.addEventListener('input',function(){
    let kTemp=parseFloat(KelvinInput.value)
    let cTemp=kTemp-273.15
    let fTemp=(kTemp-273.15)*(9/5)+32

    celciusInput.value=roundNumber(cTemp)
    FahrenheitInput.value=roundNumber(fTemp)

})

btn.addEventListener('click', ()=>{
    celciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""
})
