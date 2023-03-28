function switchToRSVP() {
    window.location.href = "index.html"
}
function switchToInfo() {
    window.location.href = "../Info/index.html"
}
function switchTab() {
    window.location.href = "../index.html"
}
function  email() {
    window.location.href = "mailto:jrotten@earstudio.com"
}
function validateForm() {
    var x = document.getElementById("rsvpStatus").value;
    if (x == "") {
      alert("Please select a RSVP staus in the 'Will you attend' dropdown");
      return false;
    }
}