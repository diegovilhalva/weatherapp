
export const weekDayNames = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
    
]

export const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
] 


export const getDate = function(dateUnix,timezone) {
    const date = new Date((dateUnix +  timezone) * 1000)
    const weekDayName = weekDayNames[date.getUTCDay()]
    const monthName = monthNames[date.getUTCMonth()]

    return `${weekDayName} ${date.getUTCDate()} ${monthName}`
}

export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}h`;
}


export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();

   
    return `${hours.toString().padStart(2, '0')}h`;
}

export const mph_to_kmh = mps => {
    const mph = mps * 3600
    return mph / 1000

}

export const aqiText = {
    1:{
        level:"Ótima",
        message:"Qualidade do ar satifatória, baixa poluição e baixo risco"
    },
    2:{
        level:"Boa",
        message:"Qualidade do é boa,no entanto, pode conter riscos a pessoas com problemas respiratórios"
    },
    3:{
        level:"Moderada",
        message:"Pode afetar idosos e crianças de colo"
    },
    4:{
        level:"Ruim",
        message:"A maioria da população poderá ser afetada, risco de casos mais extremos"
    },
    5: {
        level:"Péssima",
        message:"Alto risco para toda a população"
    }


}
