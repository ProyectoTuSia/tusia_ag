const fetch = require('node-fetch')
const requestpromisenative = require('request-promise-native')
const host = 'localhost'
const getCampus = async () => {
  const url = 'http://' + host + ':4325/models/campus/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getCampusById = async (Id_campus) => {
  const options = {
    uri: 'http://' + host + ':4325/models/campus/' + Id_campus,
    json: true
  }
  return await requestpromisenative(options)
}
const getFaculty = async () => {
  const url = 'http://' + host + ':4325/models/faculty/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getFacultyById = async (Id_faculty) => {
  const options = {
    uri: 'http://' + host + ':4325/models/faculty/' + Id_faculty,
    json: true
  }
  return await requestpromisenative(options)
}
const getCareer = async () => {
  const url = 'http://' + host + ':4325/models/career/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getCareerById = async (Id_career) => {
  const options = {
    uri: 'http://' + host + ':4325/models/career/' + Id_career,
    json: true
  }
  return await requestpromisenative(options)
}
const getSubject = async () => {
  const url = 'http://' + host + ':4325/models/subject/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getSubjectById = async (Id_subject) => {
  const options = {
    uri: 'http://' + host + ':4325/models/subject/' + Id_subject,
    json: true
  }
  return await requestpromisenative(options)
}
const getTypeTypology = async () => {
  const url = 'http://' + host + ':4325/models/typetypology/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getTypeTypologyById = async (Id_typology) => {
  const options = {
    uri: 'http://' + host + ':4325/models/typetypology/' + Id_typology,
    json: true
  }
  return await requestpromisenative(options)
}

const getGroup = async () => {
  const url = 'http://' + host + ':4325/models/group/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getGroupById = async (Id_group) => {
  const options = {
    uri: 'http://' + host + ':4325/models/group/' + Id_group,
    json: true
  }
  return await requestpromisenative(options)
}

const getPlace = async () => {
  const url = 'http://' + host + ':4325/models/place/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getPlaceById = async (Id_place) => {
  const options = {
    uri: 'http://' + host + ':4325/models/place/' + Id_place,
    json: true
  }
  return await requestpromisenative(options)
}

const getCondition = async () => {
  const url = 'http://' + host + ':4325/models/condition/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getConditionById = async (Id_condition) => {
  const options = {
    uri: 'http://' + host + ':4325/models/condition/' + Id_condition,
    json: true
  }
  return await requestpromisenative(options)
}

const getSchedule = async () => {
  const url = 'http://' + host + ':4325/models/schedule/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getScheduleById = async (Id_Schedule) => {
  const options = {
    uri: 'http://' + host + ':4325/models/schedule/' + Id_Schedule,
    json: true
  }
  return await requestpromisenative(options)
}

const getSubjectsconditions = async () => {
  const url = 'http://' + host + ':4325/models/subjectcondition/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getSubjectsconditionsById = async (Id_Subjectconditions) => {
  const options = {
    uri: 'http://' + host + ':4325/models/subjectcondition/' + Id_Subjectconditions,
    json: true
  }
  return await requestpromisenative(options)
}

const getTypeConditions = async () => {
  const url = 'http://' + host + ':4325/models/typecondition/'
  return await fetch(url, {
    method: 'GET'
  })
    .then((response) => {
      const result = response.json()
      return result
    }
    ).catch(error => console.log(error))
}
const getTypeConditionsById = async (Id_types) => {
  const options = {
    uri: 'http://' + host + ':4325/models/typecondition/' + Id_types,
    json: true
  }
  return await requestpromisenative(options)
}

const createOrUpdateGroup = async (group) => {
  const options = {
    uri: 'http://' + host + ':4325/models/group/',
    method: 'POST',
    body: {
      Id_group: group.Id_group,
      Modality: group.Modality,
      Teacher: group.Teacher,
      Date_start: group.Date_start,
      Date_finish: group.Date_finish,
      Duration: group.Duration,
      Working_day: group.Working_day,
      Slots: group.Slots,
      Id_faculty: group.Id_faculty,
      Id_subject:group.Id_subject,
    },

    json: true
  }
  return await requestpromisenative(options)
}

module.exports = {
  getCampus,
  getCampusById,
  getFaculty,
  getFacultyById,
  getCareer,
  getCareerById,
  getSubject,
  getSubjectById,
  getGroup,
  getGroupById,
  getPlace,
  getPlaceById,
  getTypeTypology,
  getTypeTypologyById,
  getSchedule,
  getScheduleById,
  getCondition,
  getConditionById,
  getSubjectsconditions,
  getSubjectsconditionsById,
  getTypeConditions,
  getTypeConditionsById,
  createOrUpdateGroup
}