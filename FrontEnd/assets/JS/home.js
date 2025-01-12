const signup = document.querySelector(".sign");
const log = document.querySelector(".log");
const main = document.getElementById("main")
const Galleries = document.querySelector(".Galleries");
const myfooter = document.querySelector(".myfooter");
const mountain = document.querySelector(".mountain");
const style = document.createElement("style");
style.textContent = " #main{ display:flex; justify-content: center; background-color: #A4B3C5; }";

function signUp() {
    mountain.style.display = "none";
    Galleries.style.display = "none";
    myfooter.style.display = "none";
    document.head.appendChild(style);
    const newAccount = document.createElement('div');
    newAccount.className = 'signup-div';
    main.append(newAccount);

    const xBtn = document.createElement('buttton');
    xBtn.className = "xBtn";
    xBtn.textContent = "X";
    main.appendChild(xBtn);

    xBtn.addEventListener('click', returnHome);

    const createText = document.createElement('div');
    createText.textContent = "Create New Account";
    createText.className = "create-text";
    newAccount.appendChild(createText);

    const haveAccount = document.createElement('div');
    haveAccount.textContent = "Already have an account?";
    haveAccount.className = "have-account";
    newAccount.appendChild(haveAccount);

    const signLink = document.createElement('a');
    signLink.textContent = "LogIn";
    signLink.style.cursor = "pointer";
    signLink.className = "have-account log";
    haveAccount.appendChild(signLink);
    signLink.addEventListener('click', function (
    ) {
        newAccount.remove();
        logIn();
    });

    const name = document.createElement('div');
    name.textContent = "First Name";
    name.className = "name";
    newAccount.appendChild(name);

    const box = document.createElement('input');
    box.className = "box";
    box.type = "text";
    box.placeholder = "John"
    newAccount.appendChild(box);

    const name2 = document.createElement('div');
    name2.textContent = "Last Name";  
    name2.className = "name";
    newAccount.appendChild(name2);

    const box2 = document.createElement('input');
    box2.className = "box";
    box2.type = "text";
    box2.placeholder = "Doe"    
    newAccount.appendChild(box2);  
    
    const name3 = document.createElement('div');
    name3.textContent = "User Name";
    name3.className = "name";
    newAccount.appendChild(name3);

    const box3 = document.createElement('input');
    box3.className = "box";
    box3.type = "text";
    box3.placeholder = "johndoe22"    
    newAccount.appendChild(box3);

    const name4 = document.createElement('div');
    name4.textContent = "Email";
    name4.className = "name";
    newAccount.appendChild(name4);

    const box4 = document.createElement('input');
    box4.className = "box";
    box4.type = "text";
    box4.placeholder = "Johndoe@example.com"    
    newAccount.appendChild(box4);
    
    const name5 = document.createElement('div');
    name5.textContent = "password";
    name5.className = "name";
    newAccount.appendChild(name5);

    const box5 = document.createElement('input');
    box5.className = "box";
    box5.type = "text";
    box5.placeholder = "Use Strong Password"    
    newAccount.appendChild(box5);  
    
    const createBtn = document.createElement('button');
    createBtn.textContent = "Create Account";
    createBtn.className = "box create-btn";
    newAccount.appendChild(createBtn);
};

function logIn() {
    mountain.style.display = "none";
    Galleries.style.display = "none";
    myfooter.style.display = "none";
    document.head.appendChild(style);
    const newAccount = document.createElement('div');
    newAccount.className = 'login-div';
    main.append(newAccount);

    const xBtn = document.createElement('buttton');
    xBtn.className = "xBtn";
    xBtn.textContent = "X";
    main.appendChild(xBtn);

    xBtn.addEventListener('click', returnHome);

    const createText = document.createElement('div');
    createText.textContent = "Log In";
    createText.className = "create-text";
    newAccount.appendChild(createText);

    const haveAccount = document.createElement('div');
    haveAccount.textContent = "Welcome back please log in to your account!!";
    haveAccount.className = "have-account";
    newAccount.appendChild(haveAccount);

    const name = document.createElement('div');
    name.textContent = "User Name";
    name.className = "name";
    newAccount.appendChild(name);

    const box = document.createElement('input');
    box.type = "text";
    box.className = "box";
    newAccount.appendChild(box);

    const name2 = document.createElement('div');
    name2.textContent = "Password";
    name2.className = "name";
    newAccount.appendChild(name2);

    const box2 = document.createElement('input');
    box2.className = "box";
    box.type = "text";
    newAccount.appendChild(box2);  
    
    const linkForgot = document.createElement('a');
    linkForgot.href = "home.html";
    linkForgot.textContent = "Forgot password?";
    linkForgot.className = "forgot forgot-pass";
    newAccount.appendChild(linkForgot);

 
    
    const createBtn = document.createElement('button');
    createBtn.textContent = "Login";
    createBtn.className = "box create-btn";
    newAccount.appendChild(createBtn);

    const name4 = document.createElement('div');
    name4.textContent = "New User?";
    name4.className = "forgot";
    newAccount.appendChild(name4);

    const signLink = document.createElement('a');
    signLink.textContent = "SignUp";
    signLink.style.cursor = "pointer";
    signLink.className = "forgot";
    name4.appendChild(signLink);
    signLink.addEventListener('click', function (
    ) {
        newAccount.remove();
        signUp();
    });
};

function returnHome() {
    window.location.href = "home.html";
};

signup.addEventListener('click', signUp);
log.addEventListener('click', logIn);

