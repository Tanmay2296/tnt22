<script>
function register(){

    var name=document.getElementById('first-name').value;
    var age=document.getElementById('age').value;
    var email=document.getElementById('email').value;

    var result= "";
    result= "Hi my first name is"+ name + "email is" + email +
        "& age is" + age;
    document.getElementById("results").innerHTML = result;
}
</script>