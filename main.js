 number_of_students = [];
function submit() {
   var name1 =  document.getElementById("Name_of_student_1").value;
   var name2 =  document.getElementById("Name_of_student_2").value;
   var name3 =  document.getElementById("Name_of_student_3").value;
   var name4 =  document.getElementById("Name_of_student_4").value;

   number_of_students.push(name1);
   number_of_students.push(name2);
   number_of_students.push(name3);
   number_of_students.push(name4);

   console.log(number_of_students);
   document.getElementById("display_name").innerHTML = number_of_students;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sort() {
    number_of_students.sort();
    console.log(number_of_students);
    document.getElementById("display_name").innerHTML = number_of_students;
}