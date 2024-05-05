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

let totalMonthlyCost = 0;

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
let totalMonthly=document.getElementById("footerText")
let monthlySalary = annualSalary / 12;
totalMonthlyCost += Number(monthlySalary)
totalMonthly.innerHTML = Number(totalMonthlyCost)




let employeeTable = document.getElementById("employeeTable")
console.log("current table", employeeTable);
employeeTable.innerHTML +=
`<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${employeeNumber}</td>
<td>${jobTitle}</td>
<td>${annualSalary}</td>
<td>
<button onClick="deleteRow(event)">Delete</button>
</td>
</tr>
`
document.getElementById("firstName").value = ""
document.getElementById("lastName").value = ""
document.getElementById("employeeNumber").value = ""
document.getElementById("jobTitle").value = ""
document.getElementById("annualSalary").value = ""
}

// Function to calculate total monthly cost
// sum all values in the annual salaries column and divide by 12

// Function to delete row

function deleteRow(event) {
    console.log("deleteRow() works...")
    let thisRow = event.target.parentElement.parentElement;
    console.log("Row to be deleted is...", thisRow)
    thisRow.remove()
}  