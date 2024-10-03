const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

signUpButton.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
})
signInButton.addEventListener('click', function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
})

{
    setTimeout(function() {
    document.getElementById('signup').style.display = 'none';
}, 3000);
    
    // Show the sign-in div
    setTimeout(function() {
        document.getElementById('signIn').style.display = 'block';
    }, 3000);
}