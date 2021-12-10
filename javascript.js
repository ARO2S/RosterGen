function RosterData() {
  // var mydata = JSON.parse(data);
  // console.log(mydata);
  const array = Array(10) // array size is 10
  				.fill()
  				.map(() => Math.floor(192 * Math.random()));

  console.log(array);
  fetch("https://aro2s.github.io/RosterGen/data.json")
  .then(response => {
     return response.json();
  })
  .then(data => (console.log(data),
document.getElementById("PG1").innerHTML = data[array[0]].NAME,
document.getElementById("PG2").innerHTML = data[array[1]].NAME,
document.getElementById("SG1").innerHTML = data[array[2]].NAME,
document.getElementById("SG2").innerHTML = data[array[3]].NAME,
document.getElementById("SF1").innerHTML = data[array[4]].NAME,
document.getElementById("SF2").innerHTML = data[array[5]].NAME,
document.getElementById("PF1").innerHTML = data[array[6]].NAME,
document.getElementById("PF2").innerHTML = data[array[7]].NAME,
document.getElementById("C1").innerHTML = data[array[8]].NAME,
document.getElementById("C2").innerHTML = data[array[9]].NAME
))
}
