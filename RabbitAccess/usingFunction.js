const createSchedule = require('./inscriptionScheduleQueue')

schedule = {
    "userId": "jurinconor",
    "monday": [
        {
            "courseId":78278,
            "name" : "Calculo integral",
            "professor": "Santiago Rodriguez",
            "credits": 3,
            "building":"El viejo",
            "classroom":"410",
            "group":5,
            "type": "Optativa",
            "timetable": "16-18"
        }
    ],
    "tuesday": [
        {
            "courseId":7875,
            "name" : "Calculo Integral",
            "professor": "Ivan Morales",
            "credits": 3,
            "building":"Aulas de Ingenieria",
            "classroom":"76",
            "group":6,
            "type": "Obligatoria",
            "timetable": "9-11"
        }
    ],
    "wednesday": [
        {
            "courseId":78278,
            "name" : "Ingenieria de software 2",
            "professor": "Carlos Amaya",
            "credits": 3,
            "building":"El viejo",
            "classroom":"420",
            "group":5,
            "type": "Optativa",
            "timetable": "16-18"
        }
    ],
    "thursday": [
        {
            "courseId":7875,
            "name" : "Calculo Integral",
            "professor": "Ivan Morales",
            "credits": 3,
            "building":"Aulas de Ingenieria",
            "classroom":"79",
            "group":6,
            "type": "Obligatoria",
            "timetable": "9-11"
        }
    ],
    "friday": [],
    "saturday": [
        {
            "courseId":78278,
            "name" : "Astronomia para todos",
            "professor": "Triviño",
            "credits": 3,
            "building":"Postgrados",
            "classroom":"420",
            "group":5,
            "type": "Optativa",
            "timetable": "16-18"
        }
    ]
}
schedule = JSON.stringify(schedule)
createSchedule.createSchedule(schedule)