document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Getting form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const image = document.getElementById('image').files[0];
  
    if (image) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profileImage').src = e.target.result;
      };
      reader.readAsDataURL(image);
    }
  
    // Setting the profile card content
    document.getElementById('Name').textContent = name;
    document.getElementById('Email').textContent = email;
    document.getElementById('Phone').textContent = phone;

    
    // Showing the profile card
    document.getElementById('profileCard').classList.remove('hidden');
  
    // Clearing the form inputs
    document.getElementById('profileForm').reset();
  });
  