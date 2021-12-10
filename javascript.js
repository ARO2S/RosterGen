function RosterData() {
  const gArray = Array(4) // array size is 10
  				.fill()
  				.map(() => Math.floor(96 * Math.random()));
  const sfArray = Array(2) // array size is 10
  				.fill()
  				.map(() => Math.floor(Math.random() * (135-97 + 1) + 97));
  const fcArray = Array(2) // array size is 10
          .fill()
          .map(() => Math.floor(Math.random() * (198-135 + 1) + 135));
  const cArray = Array(2) // array size is 10
          .fill()
          .map(() => Math.floor(Math.random() * (198-169 + 1) + 169));
console.log(gArray,sfArray,fcArray,cArray);
  fetch("https://aro2s.github.io/RosterGen/tempData.json")
  .then(response => {
     return response.json();
  })
  .then(data => (console.log(data),
//Array for g, array for F, array for C
document.getElementById("PG1").innerHTML = data[gArray[0]].NAME + ' - ' + data[gArray[0]].TEAM,
document.getElementById("PG2").innerHTML = data[gArray[1]].NAME + ' - ' + data[gArray[1]].TEAM,
document.getElementById("SG1").innerHTML = data[gArray[2]].NAME + ' - ' + data[gArray[2]].TEAM,
document.getElementById("SG2").innerHTML = data[gArray[3]].NAME + ' - ' + data[gArray[3]].TEAM,
document.getElementById("SF1").innerHTML = data[sfArray[0]].NAME + ' - ' + data[sfArray[0]].TEAM,
document.getElementById("SF2").innerHTML = data[sfArray[1]].NAME + ' - ' + data[sfArray[1]].TEAM,
document.getElementById("PF1").innerHTML = data[fcArray[0]].NAME + ' - ' + data[fcArray[0]].TEAM,
document.getElementById("PF2").innerHTML = data[fcArray[1]].NAME + ' - ' + data[fcArray[1]].TEAM,
document.getElementById("C1").innerHTML = data[cArray[0]].NAME + ' - ' +  data[cArray[0]].TEAM,
document.getElementById("C2").innerHTML = data[cArray[1]].NAME + ' - ' +  data[cArray[1]].TEAM
))
}

function ATRosterData() {
  const gArray = Array(4) // array size is 10
  				.fill()
  				.map(() => Math.floor(106 * Math.random()));
  const sfArray = Array(2) // array size is 10
  				.fill()
  				.map(() => Math.floor(Math.random() * (107-74 + 1) + 74));
  const fcArray = Array(2) // array size is 10
          .fill()
          .map(() => Math.floor(Math.random() * (168-108 + 1) + 108));
  const cArray = Array(2) // array size is 10
          .fill()
          .map(() => Math.floor(Math.random() * (167-133 + 1) + 133));
console.log(gArray,sfArray,fcArray,cArray);
  fetch("https://aro2s.github.io/RosterGen/ATtempData.json")
  .then(response => {
     return response.json();
  })
  .then(data => (console.log(data),
//Array for g, array for F, array for C
document.getElementById("PG1").innerHTML = data[gArray[0]].Player + ' - ' + data[gArray[0]].Team,
document.getElementById("PG2").innerHTML = data[gArray[1]].Player + ' - ' + data[gArray[1]].Team,
document.getElementById("SG1").innerHTML = data[gArray[2]].Player + ' - ' + data[gArray[2]].Team,
document.getElementById("SG2").innerHTML = data[gArray[3]].Player + ' - ' + data[gArray[3]].Team,
document.getElementById("SF1").innerHTML = data[sfArray[0]].Player + ' - ' + data[sfArray[0]].Team,
document.getElementById("SF2").innerHTML = data[sfArray[1]].Player + ' - ' + data[sfArray[1]].Team,
document.getElementById("PF1").innerHTML = data[fcArray[0]].Player + ' - ' + data[fcArray[0]].Team,
document.getElementById("PF2").innerHTML = data[fcArray[1]].Player + ' - ' + data[fcArray[1]].Team,
document.getElementById("C1").innerHTML = data[cArray[0]].Player + ' - ' + data[cArray[0]].Team,
document.getElementById("C2").innerHTML = data[cArray[1]].Player + ' - ' + data[cArray[1]].Team
));

// if ((data[gArray[0]] || data[gArray[1]]) == (data[gArray[2]] || data[gArray[3]])) {
//   ATRosterData();
// },
// else if (data[sfArray[0]] == data[sfArray[1]]) {
//   ATRosterData();
// },
// else if ((data[pfArray[0]] || data[pfArray[1]]) == (data[cArray[0]] || data[cArray[1]])) {
//   ATRosterData();
// }

}
