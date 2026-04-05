function Calendar(){
    const today = new Date().toDateString();
    document.getElementById("date").innerHTML = today;
}
Calendar();
