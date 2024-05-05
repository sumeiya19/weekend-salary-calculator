// Create a form with five inputs
// Create the tables
// Styling?
// Make submit button work
// Make input from text go into the table (similar to group work)
    // The footer's total monthly cost should be updated.
    // The form inputs should be cleared out.
// Create a delete button 
// Work on total monthly cost
// Apply over-budget CSS class

// Create function for submit button

function handleSubmit(event){
    console.log('handleSubmit () works!');
    event.preventDefault();
let firstName = document.getElementById("firstName").value
console.log(`first name check ${firstName}`);
let lastName = document.getElementById("lastName").value
console.log(`last name check ${lastName}`);
let employeeNumber = document.getElementById("employeeNumber").value
console.log(`employee number check ${employeeNumber}`);
let jobTitle = document.getElementById("jobTitle").value
console.log(`job title check ${jobTitle}`);
let annualSalary = document.getElementById("annualSalary").value
console.log(`annual salary check ${annualSalary}`);


let employeeTable = document.getElementById("employeeTable")
console.log("current table", employeeTable);
employeeTable.innerHTML +=
`<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${employeeNumber}</td>
<td>${jobTitle}</td>
<td>${annualSalary}</td>
<td></td>
</tr>
`
}
