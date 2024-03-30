// Fetch contact data from an API
fetch('https://api.example.com/contact')
.then(response => response.json())
.then(data => {
  const contactInfo = document.createElement('div');
  contactInfo.innerHTML = `
    <h3>${data.name}</h3>
    <p><i class="fa-solid fa-envelope"></i> ${data.email}</p>
    <p><i class="fa-solid fa-phone"></i> ${data.phone}</p>
    <p><i class="fa-solid fa-map-marker-alt"></i> ${data.address}</p>
  `;
  document.body.appendChild(contactInfo);
})
.catch(error => {
  console.error('Error fetching contact data:', error);
});

// Handle form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
e.preventDefault();

const formData = new FormData(form);
const data = {};
for (const [key, value] of formData.entries()) {
  data[key] = value;
}

// Construct the mailto URL with form data
const mailtoURL = `mailto:tanmoy5chanda@gmail.com?subject=New Message from ${data.name}&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AMessage: ${data.message}`;

// Open the default email client
window.open(mailtoURL);

// Reset the form
form.reset();
});


function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}





