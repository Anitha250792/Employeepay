function toggleVisibility(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// Sign up function
function registerUser() {
  const name = document.getElementById("signupName").value.trim();
  const password = document.getElementById("signupPassword").value;

  if (!name || !password) {
    alert("Please fill in all fields.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const userExists = users.find(u => u.name === name);
  if (userExists) {
    alert("Username already taken.");
    return;
  }

  users.push({ name, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}

// Login function
function loginUser() {
  const name = document.getElementById("loginName").value.trim();
  const password = document.getElementById("loginPassword").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const matchedUser = users.find(u => u.name === name && u.password === password);

  if (matchedUser) {
    alert("Login successful!");
    // Redirect or store login session
    window.location.href = "overview.html"; // example
  } else {
    alert("Invalid credentials!");
  }
}
