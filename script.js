// JavaScript source code
class Header extends HTMLElement {
    constructor() {
        super();
    }
}

connectedCallback() {
    this.innerHTML = `
     <nav class="lt">
        <ul>
            <li><img src="smiley.gif" alt="Smiley face" style="float:right;width:50px;height:50px;padding:5px;"></img></li>
            <li class="menu"><a href="home.html">Home</a></li>
            <div class="dropdown">
                <button class="dropbtn">Course</button>
                <div class="dropdown-content">
            <li><a href="https://www.w3schools.com/html/default.asp">HTML</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
            <li><a href="https://www.w3schools.com/js/default.asp">Javascript</a></li>
            <li><a href="https://www.w3schools.com/bootstrap5/index.php">Bootstrap</a></li>
            </div>
            </div>
            <li><a href="gallary.html">Gallary</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="aboutus.html">About us</a></li>
        </ul>
    </nav>
    `;
}
}

customElements.define('header-component', Header);