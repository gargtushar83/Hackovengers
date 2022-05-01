const entry= document.querySelector('.bottom-left');
const display = document.querySelector('#display-content');

// create element & render cafe
function displayData(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let contact = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    contact.textContent = doc.data().contact;
    email.textContent = doc.data().email;

    li.appendChild(name);
    li.appendChild(contact);
    li.appendChild(email);

    display.appendChild(li);
}

// display data
db.collection('HOSTEL-EXHANGE-ENTRIES').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        displayData(doc);
    });
});


//Taking in entries

entry.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('HOSTEL-EXHANGE-ENTRIES').add({
        name : entry.name.value,
        email : entry.email.value,
        number : entry.contact.value
    });
});