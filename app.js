    function generateID() {


        let userFirstName =                 document.getElementById("firstName").value;

        let userLastName =                 document.getElementById("lastName").value;

        let firstLastName = userFirstName + " "
        + userLastName;

        let userAge = document.getElementById("age").value;

        let userPhoneNumber =
        document.getElementById("phoneNumber").value;

        let userAddress =
        document.getElementById("address").value;

        document.getElementById("postFirstLastName").innerHTML = firstLastName;

        document.getElementById("postAge").innerHTML = "Age: " + userAge;

        document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + userPhoneNumber;

        document.getElementById("postAddress").innerHTML = userAddress;

    }
