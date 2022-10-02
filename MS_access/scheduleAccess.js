import axios from "axios";

// Manage REST communication with microservice

// const getGroupGrades = async (courseCode, courseGroup) => {
//     const url = `http://93.188.164.106:8086/grades/${courseCode}/${courseGroup}`
//     return await fetch(url, {
//       method: 'GET'
//     })
//       .then((response) => {
//         const result = response.json()
//         return result
//       }
//       ).catch(error => console.log(error))
//   }

const getSchedule = async (userId) =>{
    const url = `http://35.193.226.159:8000/consulta_horario/${userId}`
    try{
        const data = await axios.get(url);

        console.log(data)
        return data

    }catch(error){
        console.log(error)
    }
}

const postSchedule = async (userId)=>{
    const url = `http://35.193.226.159:8000/consulta_horario/${userId}`
    try{
        const data = await axios.put(url);

        console.log(data)
        return data

    }catch(error){
        console.log(error)
    }

}
// try {
//     const { data } = await axios.get(
//       `${user_id_url}/${parseInt(localStorage.getItem("user"))}`
//     );
//     console.log("user: " + data["profile_picture"]);

//     setState({
//       profilePicture: data["profile_picture"],
//     });
//   } catch (error) {
//     console.log(error);
//   }
