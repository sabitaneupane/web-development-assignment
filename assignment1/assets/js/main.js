function validateform() {
    event.preventDefault();
    const fullname = document.myform.fullname.value;
    const email = document.myform.email.value;
    const message = document.myform.message.value;

    const fullnameErr = document.getElementById("fullname-error-msg");
    const emailErr = document.getElementById("email-error-msg");
    const messageErr = document.getElementById("message-error-msg");

    if (fullname == null || fullname == "") {
        fullnameErr.innerHTML = "Fullname cannot be blank.";
        emailErr.innerHTML = "";
        messageErr.innerHTML = "";
    } else if (email == null || email == "") {
        fullnameErr.innerHTML = "";
        emailErr.innerHTML = "Email cannot be blank.";
        messageErr.innerHTML = "";
    } else if (message == null || message == "") {
        fullnameErr.innerHTML = "";
        emailErr.innerHTML = "";
        messageErr.innerHTML = "Message cannot be blank.";
    } else {
        fullnameErr.innerHTML = "";
        emailErr.innerHTML = "";
        messageErr.innerHTML = "";

        const data = {
            "fullname": fullname,
            "email": email,
            "message": message
        }
        console.log("Contact Information Submitted Succesfully", data);
    }
}
