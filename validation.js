/**
 * Created by Lenovo on 12/19/2016.
 */
function validation(){
    var val1 = document.myform.fname;
    var val2 = document.myform.pwd;
    if(val1.value == "" )
    {
        alert("hello");
        document.getElementById('ful').innerHTML = '<font color="red">enter the name</p>';
    }
    if(val2.value == "" )
    {
        document.getElementById("agVal").innerHTML = "<font color='red'>your not elgible for the operation</p>";
    }
    else
    {

        alert("password   "+val2);
        document.getElementById("agVal").innerHTML = "<font color='green'>your elgible for the operation</p>";
        window.location.href = "registrationPage.html";
    }
    return false;
}
function validate()
{
    var val1 = document.myform.fname;

    if(val1.value == "" )
    {
        alert("hello");
        document.getElementById('ful').innerHTML = '<font color="red">enter the name</p>';
    }
    else
    {
        alert("not null");

        document.getElementById('ful').innerHTML = '<font color="green">valid</p>';

    }
    return false;
}
function agevalidate(){
    var val2 = document.myform.pwd;

    if(val2.value == "" )
    {
        document.getElementById("agVal").innerHTML = "<font color='red'>your not elgible for the operation</p>";
    }
    else
    {
        document.getElementById("agVal").innerHTML = "<font color='green'>your elgible for the operation</p>";

    }
    return false;

}