/**
 * Created by Lenovo on 12/19/2016.
 */
function validation(){
    var val1 = document.myform.fname;
    var val2 = document.myform.age;
    if(val1.value == "" )
    {
        document.getElementById("ful").innerHTML = "<font color='red'>enter the name</font>";
    }
    else
    {
        document.getElementById("ful").innerHTML = "<font color='green'>valid</font>";

    }
    if((val2.value == "") || (val2.value <= 18) )
    {
        document.getElementById("agVal").innerHTML = "<font color='red'>your not elgible for the operation</font>";
    }
    else
    {
        document.getElementById("agVal").innerHTML = "<font color='green'>your elgible for the operation</font>";

    }
}
function validate()
{
    var val1 = document.myform.fname;

    if(val1.value === "" )
    {
        alert("hello");
        document.getElementById('ful').innerHTML = '<font color="red">enter the name</p>';
    }
    else
    {
        alert("not null");

        document.getElementById('ful').innerHTML = '<font color="green">valid</p>';

    }
}
function agevalidate(){
    var val2 = document.myform.age;

    if((val2.value == "") || (val2.value <= 18) )
    {
        document.getElementById("agVal").innerHTML = "<font color='red'>your not elgible for the operation</p>";
    }
    else
    {
        document.getElementById("agVal").innerHTML = "<font color='green'>your elgible for the operation</p>";

    }
}