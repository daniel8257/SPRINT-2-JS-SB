
const incomeTaxRate = 0.15;

fetch("./qap.json")
  .then(response => response.json())
  .then(people => {
    // Create a container to hold the people data
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    // Loop through an array in the JSON data
    people.forEach(student => {
      // Create a new div for each student
      const studentDiv = document.createElement('div');
      studentDiv.className = 'student';

      // Add the student's data to the div
      studentDiv.innerHTML = `
        <h2>${getFullName(student)}</h2>
        <p>Birthday: ${getBirthday(student)}</p>
        <p>Age: ${getAge(student)}</p>
        <p>Gender: ${getGender(student)}</p>
        <p>Address: ${getAddress(student)}</p>
        <p>Phone: ${getPhone(student)}</p>
        <p>Course: ${getStudy(student)}</p>
        <p>Method of Study: ${getStudyMethod(student)}</p>
        <p>Scholarship: ${Scholarship(student)}</p>
        <p>Scholarship Amount: ${getScholarshipAmount(student)}</p>
        <p>Teacher Comments: ${TeacherComments(student)}</p>
        <p> Student Locality: ${Nationality(student)}</p>
        <p> student Stay: ${Residence(student)}</p>
      `;

      // Also log the data to the console
      console.log(getFullName(student));
       console.log(getBirthday(student));
       console.log(getAge(student));
       console.log(getGender(student));
       console.log(getAddress(student));
       console.log(getPhone(student));
       console.log(getStudy(student));
       console.log(getStudyMethod(student));
       console.log(Scholarship(student));
       console.log(getScholarshipAmount(student));
       console.log(TeacherComments(student));
       console.log(Nationality(student));
       console.log(Residence(student));
       

       



      // Add the student's div to the container
      container.appendChild(studentDiv);
    });

    // Append the container to the body of the document
    document.body.appendChild(container);
  })
    .catch(error => {
    // Handle any errors that occur while fetching the file
    console.error(error);
  });

function getFullName(student) {
  return student.firstName + " " + student.lastName;
}

function getBirthday(student) {
  return student.birthDate;
}

function getAge(student) {    
  return `${new Date().getFullYear() - new Date(student.birthDate).getFullYear()} years old.`;
}

function getGender(student) {
  return student.gender;
}

function getAddress(student) {
  return student.address.street + ", " + student.address.city + ", " + student.address.province + " ," + student.address.postalCode + ", " + student.address.country;
}

function getPhone(student) {
  return student.phone;
}
function getStudy(student) {
  return student.study;
}
function getStudyMethod(student) {
  return student.studyMethod;
}

// function getScholarship(student) {
//   return student.scholarship;
// }
function getScholarshipAmount(student) {
  return student.scholarshipAmount;
}
// function getMarks(student) {
//   return student.marks;
// }

function TeacherComments(student) {
  if (student.marks >= 90) {
    return "The student got '" + student.marks + "' marks and the study level is Excellent.";
  }
  else if (student.marks >= 80) {
    return "The student got '" + student.marks + "' marks and the study level is Good.";
  }
  else if (student.marks >= 70) {
    return "The student got '" + student.marks + "' marks and the study level is Average.";
  }
  else {
    return "The student got '" + student.marks + "' marks and the study level is Below Average.";
  }
}

function Scholarship(student) {
  switch (true) {
    case student.marks >= 90:
      return "The student got Excellent marks, so the scholarship is available for the student.";
    case student.marks >= 80:
      return "The student got Good marks, so the scholarship is available for the student.";
    case student.marks >= 70:
      return "The student got Average marks, so the scholarship is available for the student.";
    default:
      return "The student got Below Average marks, so the scholarship is not available for the student.";
  }
}

function Nationality(student) {
  if (student.Nationality == "Canadian") {
    return "The student is Local";
  }
  else if (student.Nationality == "American") {
    return "The student is from USA";
  }
  else {
    return "The student is from other country";
  }
}



function Residence(student) {
  switch (student.Stay) {
    case "In Campus":
      return "The student is Campus Resident";
      break;
    case "Off Campus":
      return "The student is Not a Campus Resident";
      break;
  }
}
  