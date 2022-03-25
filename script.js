let calContainer = document.querySelector('.container')

let dailyHours = [

    {
        block:'0',
        time:"10",
        ampm:'am',
        message:''
    },
    {
        block:'1',
        time:"11",
        ampm:'am',
        message:''
    },
    {
        block:'2',
        time:"12",
        ampm:'pm',
        message:''
    },
    {
        block:'3',
        time:"01",
        ampm:'pm',
        message:''
    },
    {
        block:'4',
        time:"02",
        ampm:'pm',
        message:''
    },
    {
        block:'5',
        time:"03",
        ampm:'pm',
        message:''
    },
    {
        block:'6',
        time:"04",
        ampm:'pm',
        message:''
    },
    {
        block:'7',
        time:"5",
        ampm:'pm',
        message:''
    }

]

console.log(dailyHours.length)
for (i = 0; i < dailyHours.length; i++) {
    let formRow = document.createElement('form');
    formRow.setAttribute("class", 'row')
    calContainer.append(formRow);

    let actualTime = document.createElement('div')
    actualTime.textContent = dailyHours[i].time + dailyHours[i].ampm
    calContainer.append(actualTime)
    actualTime.setAttribute('class', 'col-md-2 hour')
}
