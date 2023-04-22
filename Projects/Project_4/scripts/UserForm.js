$("#frmUserForm").submit(function () {
    // Event: submitting the form
    saveUserForm();
    return true;
});

function checkUserForm() {
    // Check for empty fields in the form
    // for finding current date
    var d = new Date();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var year = d.getFullYear();
    var currentDate = year + '/' +
        (('' + month).length < 2 ? '0' : '') +
        month + '/' +
        (('' + date).length < 2 ? '0' : '') + date;

    if (($("#txtFirstName").val() != "") &&
        ($("#txtLastName").val() != "") &&
        ($("#txtHealthCardNumber").val() != "") &&
        ($("#datBirthdate").val() != "") &&
        ($("#datBirthdate").val() <= currentDate) &&
        ($("#slcCancerType option:selected").val() != "Select Cancer Type") &&
        ($("#slcCancerStage option:selected").val() != "Select Cancer Stage") &&
        ($("#slcTSHRange option:selected").val() != "Select TSH Range")) {
            return true;
        } else {
            return false;
        }
}