function RosterData() {
  fetch("NBARoster.json")
  .then(response => {
     return response.json();
  })
  .then(data => console.log(data));
}
