// async function handleLogin() {
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     const role = document.getElementById("role").value;
//     const message = document.getElementById("message");
  
//     if (!email || !password) {
//       message.textContent = "Please fill out all fields.";
//       return;
//     }
  
//     const payload = { email, password, role };
  
//     try {
//       const response = await fetch("http://localhost:3000/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         message.style.color = "green";
//         message.textContent = "Signin successful! Welcome back.";
//         console.log("User token:", result.token);
//         localStorage.setItem("token", result.token);
//         window.location.href = "http://127.0.0.1:5500/group/pro.html"; // Adjust this URL as needed
//       } else {
//         message.style.color = "red";
//         message.textContent = result.message || "Something went wrong.";
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       message.style.color = "red";
//       message.textContent = "An error occurred. Please try again.";
//     }
//   }


async function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;
    const message = document.getElementById("message");

    if (!email || !password) {
        message.textContent = "Please fill out all fields.";
        return;
    }

    const payload = { email, password, role };

    try {
        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (response.ok) {
            message.style.color = "green";
            message.textContent = "Signin successful! Welcome back.";
            console.log("User token:", result.token);
            localStorage.setItem("token", result.token);
            window.location.href = "../FrontEnd/pro.html"; // Adjust this URL to match your server routing
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