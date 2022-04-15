function validate() {

    const userNamePattern=/^([A-Za-z0-9]{3,20})$/;

    const passwordPattern=/^(\w{5,15})$/;

    const emailPattern=/^[^@.]+@[^@]*\.[^@]*$/;

    let isFormValid=true;
    let isCompany=false;

    const submitBtn=document.getElementById('submit');

    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();

        const parent=e.target.parentElement;

        const userNameField=parent.querySelector('#username');

        if(userNamePattern.test(userNameField.value))
        {
            userNameField.style.border='none';
        }
        else{
            isFormValid=false;
            userNameField.style.border='';
            userNameField.style.borderColor = 'red';
        }

        const emailField=parent.querySelector('#email');

        if(emailPattern.test(emailField.value))
        {
            emailField.style.border='none';
        }
        else{
            isFormValid=false;
            emailField.style.border='';
            emailField.style.borderColor = 'red';
        }


        const passwordField=parent.querySelector('#password');
        const confirmPasswordField=parent.querySelector('#confirm-password');

        if(passwordPattern.test(passwordField.value) && passwordField.value == confirmPasswordField.value)
        {
            passwordField.style.border='none';
            confirmPasswordField.style.border='none';
        }
        else{
            isFormValid=false;
            passwordField.style.border='';
            confirmPasswordField.style.border='';
            passwordField.style.borderColor = 'red';
            confirmPasswordField.style.borderColor = 'red';
        }

        if(isCompany)
        {
            const companyNumber=parent.querySelector('#companyNumber');
            const companyNumberValue=Number(companyNumber.value);

            if(companyNumberValue >= 1000 && companyNumberValue <= 9999)
            {
                companyNumber.style.border='none';
            }
            else{
                isFormValid=false;
                companyNumber.style.border='';
                companyNumber.style.borderColor = 'red';
            }

        }


        const visibleDiv=document.querySelector('#valid');

        if(isFormValid)
        {
            visibleDiv.style.display='block';
        }
        else{
            visibleDiv.style.display='none';
        }

    });

     document.querySelector('#company').addEventListener('change',(e)=>{

        const companyInfo=document.querySelector('#companyInfo');

        if(e.target.checked)
        {
            isCompany=true;
            companyInfo.style.display='block';
        }
        else{
            isCompany=false;
            companyInfo.style.display='none';
        }

    });
    
}
