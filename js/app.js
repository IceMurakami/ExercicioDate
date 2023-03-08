const card = document.querySelector('#data')
const date = new Date();

function getDayNow(d){
let dayText
switch(d){
    case 0:
        dayText = 'domingo';
        return dayText;
    case 1:
        dayText = 'Segunda-Feira';
        return dayText;
    case 2:
        dayText = 'Terça-Feira'
        return dayText;
    case 3:
        dayText = 'Quarta-Feira'
        return dayText;
    case 4:
        dayText = 'Quinta-Feira'
        return dayText;
    case 5:
        dayText = 'Sexta-Feira'
        return dayText;
    case 7:
        dayText = 'Sabado'
        return dayText;
    default:
        dayText = ''
        return dayText;
    }
}

function getmonth(m){ // Retornando Mês
    const month =['Janeiro', 'Fevereiro', 'Abril', 'Março', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'
    , 'Outubro', 'Novembro','Dezembro',]
    return month[m]
}
function getYear(y){
    const dateYear = y.getFullYear()
    return dateYear
}

function dateDay(d){ //mostrando dia do mês
    const dateDay = d.getDate();
    return dateDay
}

//pegando dia da semana
function dayOfTheWeek (d){ //Pegando dia da semana
    const dayOfTheWeek = d.getDay()
    return dayOfTheWeek;
}

function getMonth(m){
    const dateMonth = m.getMonth() + 1
    return dateMonth
}
    
function getMin(m){
    const secDate = m.getMinutes();
    return secDate;
}

function getHrs(h){
    const hrsDate = h.getHours()
    return hrsDate
}


const dateText = dateDay(date)
const yearText = getYear(date)
const secText = getMin(date)
const hrsText = getHrs(date)
const dayText = getDayNow(dayOfTheWeek(date))
const monthText = getmonth(getMonth(date))

const msg = `${dayText}, ${dateText} de ${monthText} de ${yearText} <br/> ${hrsText}:${secText}`
card.innerHTML = msg


console.log(msg)



