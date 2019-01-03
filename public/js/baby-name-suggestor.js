// form validation for baby-name-suggestor view button
function validate_form() {
  let first = document.forms["suggest"]["first_name"].value
  let middle = document.forms["suggest"]["middle_name"].value
  let last = document.forms["suggest"]["last_name"].value
  if (first === "" || !(/^[a-zA-Z-]+$/.test(first)) || (middle !== "" && !(/^[a-zA-Z-]+$/.test(middle))) || first.length > 25 || middle.length > 25) {
    // console.log("invalid name")
    alert("Invalid name\nFirst name must be included\nNames can only include letters or hyphens\nLimited to 20 characters per name")
    return false
  }
  else {
    // console.log("valid name")
    // console.log(first + " " + middle + " " + last)
    if (middle === "") {
      alert(first + " " + last + " suggested")
    }
    else {
      alert(first + " " + middle + " " + last + " suggested")
    }
  }
}