function calculate_age(){
    var dob_input = document.getElementById("dob").value;
    var dob = new Date(dob_input);
    var today = new(Date);
    var age = today.getFullYear()-dob.getFullYear();

    if(today.getMonth() < dob.getMonth()|| today.getMonth()==dob.getMonth() && today.getDate() < dob.getDate()){
        age--;
    }
    var resele = document.getElementById("result");
    resele.innerText = "your age is:" + age;
}  