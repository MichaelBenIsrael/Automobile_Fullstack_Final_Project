const navbar = document.getElementById("navbar");
const toggleNav = () => {
    if(navbar.className == "navbar")
    {
        navbar.className += " responsive";
    }else{
        navbar.className = "navbar";
    }
}