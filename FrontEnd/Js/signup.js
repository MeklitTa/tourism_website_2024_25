async function handleSignup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");
  
    if (!email || !password || !name) {
      message.textContent = "Please fill out all fields.";
      return;
    }
  
    const payload = { name, email, password, role };
  
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        message.style.color = "green";
        message.textContent = "Signup successful! You can now sign in.";
      } else {
        message.style.color = "red";
        message.textContent = result.message || "Something went wrong.";
      }
    } catch (error) {
      console.error("Error:", error);
      message.style.color = "red";
      message.textContent = "An error occurred. Please try again.";
    }
  }