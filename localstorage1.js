

// Function to store form details in local storage

function storeFormDetails(event) {

    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // Retrieve existing details from local storage
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];


    // Add new details
    storedDetails.push({ name: name, email: email, phone: phone });

    // Save updated details to local storage
    localStorage.setItem("formDetails", JSON.stringify(storedDetails));

    // Clear form fields

    document.getElementById("myForm").reset();

    // Reload table

    displayDetails();

}

// Function to display stored details in a table
function displayDetails() {
    var detailsTable = document.getElementById("detailsTable");
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];
    detailsTable.innerHTML = "";
    for (var i = 0; i < storedDetails.length; i++) {
        var row = detailsTable.insertRow();
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var phoneCell = row.insertCell(2);
        var actionCell = row.insertCell(3);
        nameCell.innerHTML = storedDetails[i].name;

        emailCell.innerHTML = storedDetails[i].email;

        phoneCell.innerHTML = storedDetails[i].phone;
        // Add buttons for view, edit, and delete

        var viewButton = document.createElement("button");
        viewButton.style.borderColor = "palevioletred";
        viewButton.style.color = "rgb(82, 3, 27)"
        viewButton.style.padding = "10px 25px";
        viewButton.style.cursor = "pointer";
        viewButton.style.marginLeft = "10px";
        viewButton.style.borderRadius = "5px";
        viewButton.innerHTML = "View";

        viewButton.onclick = (function (index) {
            return function () {
                viewDetails(index);
            };
        })(i);

        var editButton = document.createElement("button");
        editButton.style.color = "blue";
        editButton.style.borderColor = "powderblue";
        editButton.style.borderRadius = "5px";
        editButton.style.padding = "10px 25px";
        editButton.style.cursor = "pointer";
        editButton.style.marginLeft = "10px";
        editButton.innerHTML = "Edit";
        editButton.onclick = (function (index) {
            return function () {
                editDetails(index);
            };
        })(i);

        var deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor = "rgb(135, 38, 56)";
        deleteButton.style.color = "#ffffff";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.padding = "10px 20px";
        deleteButton.style.border = "none";
        deleteButton.style.cursor = "pointer";
        deleteButton.innerHTML = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = (function (index) {
            return function () {
                deleteDetails(index);
            };
        })(i)

        actionCell.appendChild(viewButton);
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

    }

}

// Function to view details
function viewDetails(index) {
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];
    var detail = storedDetails[index];
    // Display the details using alert or any other preferred method
    alert("Name: " + detail.name + "\nEmail: " + detail.email + "\nPhone: " + detail.phone);
}

function editDetails(index) {
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];
    var detail = storedDetails[index];



    // Populate the form fields with the details for editing
    document.getElementById("name").value = detail.name;
    document.getElementById("email").value = detail.email;
    document.getElementById("phone").value = detail.phone;



    // Remove the existing detail from the stored details array
    storedDetails.splice(index, 1);



    // Save the updated details to local storage
    localStorage.setItem("formDetails", JSON.stringify(storedDetails));



    // Reload table
    displayDetails();
}



// Function to delete details
function deleteDetails(index) {
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];



    // Remove the detail from the stored details array
    storedDetails.splice(index, 1);



    // Save the updated details to local storage
    localStorage.setItem("formDetails", JSON.stringify(storedDetails));



    // Reload table
    displayDetails();
}




// Function to search for details matching the search query

function search() {

    var input = document.getElementById("searchInput").value.toLowerCase();

    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];

    var filteredDetails = storedDetails.filter(function (detail) {

        return (

            detail.name.toLowerCase().includes(input) ||

            detail.email.toLowerCase().includes(input) ||

            detail.phone.toLowerCase().includes(input)

        );

    });



    // Display filtered details

    var detailsTable = document.getElementById("detailsTable");

    detailsTable.innerHTML = "";



    for (var i = 0; i < filteredDetails.length; i++) {
        var row = detailsTable.insertRow();
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var phoneCell = row.insertCell(2);

        nameCell.innerHTML = filteredDetails[i].name;
        emailCell.innerHTML = filteredDetails[i].email;
        phoneCell.innerHTML = filteredDetails[i].phone;
    }
}



// Function to sort details by name
function sortByName() {
    var storedDetails = JSON.parse(localStorage.getItem("formDetails")) || [];
    storedDetails.sort(function (a, b) {
        return a.name.localeCompare(b.name);
        
    });

    // Display sorted details
    var detailsTable = document.getElementById("detailsTable");
    detailsTable.innerHTML = "";



    for (var i = 0; i < storedDetails.length; i++) {
        var row = detailsTable.insertRow();
        var nameCell = row.insertCell(0);
        var emailCell = row.insertCell(1);
        var phoneCell = row.insertCell(2);
        var actionCell = row.insertCell(3);

        nameCell.innerHTML = storedDetails[i].name;
        emailCell.innerHTML = storedDetails[i].email;
        phoneCell.innerHTML = storedDetails[i].phone;

        // Add buttons for view, edit, and delete
        var viewButton = document.createElement("button");
        viewButton.style.borderColor = "palevioletred";
        viewButton.style.color = "rgb(82, 3, 27)"
        viewButton.style.padding = "10px 25px";
        viewButton.style.cursor = "pointer";
        viewButton.style.marginLeft = "10px";
        viewButton.style.borderRadius = "5px";
        viewButton.innerHTML = "View";
        viewButton.onclick = (function (index) {
            return function () {
                viewDetails(index);
            };
        })(i);

        var editButton = document.createElement("button");
        editButton.style.color = "blue";
        editButton.style.borderColor = "powderblue";
        editButton.style.borderRadius = "5px";
        editButton.style.padding = "10px 25px";
        editButton.style.cursor = "pointer";
        editButton.style.marginLeft = "10px";
        editButton.innerHTML = "Edit";
        editButton.onclick = (function (index) {
            return function () {
                editDetails(index);
            };
        })(i);

        var deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor = "rgb(135, 38, 56)";
        deleteButton.style.color = "#ffffff";
        deleteButton.style.borderRadius = "5px";
        deleteButton.style.padding = "10px 20px";
        deleteButton.style.border = "none";
        deleteButton.style.cursor = "pointer";
        deleteButton.innerHTML = "Delete";
        deleteButton.style.marginLeft = "10px";
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = (function (index) {
            return function () {
                deleteDetails(index);
            };
        })(i);
        actionCell.appendChild(viewButton);
        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);


    }
}

// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", storeFormDetails);

// Display stored details on page load
displayDetails();
