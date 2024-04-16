const toggle = document.querySelector('.modalToggle');
const main = document.querySelector('.main');
const modal = document.querySelector('.form-card');

toggle.addEventListener('click', (e) => {
    e.preventDefault();
  
    modal.classList.toggle('active');
    main.classList.toggle('blur');
    toggle.style.display = "none";
});



// Function to handle form submission
function handleOnSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    const id = document.querySelector('.id').value;
    const name = document.querySelector('.name').value;
    const email = document.querySelector('.email').value;
    const contact = document.querySelector('.contact').value;

    // Create new row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${contact}</td>
        <td>
            <button class="btn-edit" onclick="editRow(this)">Edit</button>
            <button class="btn-delete" onclick="deleteRow(this)">Delete</button>
        </td>
    `;

    // Append new row to table body
    document.querySelector('tbody').appendChild(newRow);

    // Reset form fields
    document.querySelector('#myForm').reset();

    // const modal = document.querySelector('.form-card');
    modal.classList.toggle('active');
    main.classList.toggle('blur');
    toggle.style.display = "block";
}

// Function to edit a row
function editRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('td');
   
    // Populate form fields with row data
    document.querySelector('.id').value = cells[0].textContent;
    document.querySelector('.name').value = cells[1].textContent;
    document.querySelector('.email').value = cells[2].textContent;
    document.querySelector('.contact').value = cells[3].textContent;



        modal.classList.toggle('active');
        main.classList.toggle('blur');
        toggle.style.display = "none";


    // Remove the row
    row.remove()

}

// Function to delete a row
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

// Bind form submission event
document.querySelector('#myForm').addEventListener('submit', handleOnSubmit);
