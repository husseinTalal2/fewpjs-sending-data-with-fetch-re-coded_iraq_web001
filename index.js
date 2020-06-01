// Add your code here




// fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object)
//   })
//   .catch(function(error) {
//   alert("Bad things! Ragnarők!");
//   console.log(error.message);})
const userName = document.getElementById('name').value;
const Email = document.getElementById('email').value;


function submitData(userName, Email){
  let formData = {
    dogName: userName,
    dogBreed: Email
  };
  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  return fetch("http://localhost:3000/users",configObj)
}
