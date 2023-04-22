// Adds given text value to the password text field
function addValueToPassword(button) {
    var currVal = $("#passcode").val();
    if (button=="bksp") {
        $("#passcode").val(currVal.substring(0, currVal.lenth - 1));
    } else {
        $("#passcode").val(currVal.concat(button));
    }
}

/* On the main page, after password entry, directs
 * user to the main page, legal disclaimer if they have not
 * yet aggred to it, or user entry page if they have not
 * yet completed their user info */
$("#btnEnter").click(function() {
    var password = getPassword();
    if (document.getElementById("passcode").value == password) {
        if (localStorage.getItem("agreedToLegal") == null) {
            $("#btnEnter").attr("href", "#legalNotice").button();
        } else {
            $("#btnEnter").attr("href", "#pageMenu").button();
        }
    } else {
        alert("Incorrect password, please try again.");
    }
});
 
/* Retrieves password from local storage if it
 * exists, otherwise returns the default password */
function getPassword() {
    if (typeof(Storage) == "undefined") {
        alert("Your browser does not support HTML5 localStorage. Try upgrading.");
    } else if (localStorage.getItem("user") != null) {
        return JSON.parse(localStorage.getItem("user")).NewPassword;
    } else {
        // Default password
        return "2345";
    }
}

/* Recrods that the user has agreed to the legal
 * disclaimer on this device/browser */
 $("#noticeYes").click(function() {
    localStorage.setItem("agreedToLegal", "true");
 })