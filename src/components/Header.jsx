function Header() {
  const handleHamburger = () => {
    const hamburgerMenu = document.querySelector("header nav .hamburger-menu");
    const patty = document.querySelector("header nav .hamburger-menu .patty");
    const topBun = document.querySelector(
      "header nav .hamburger-menu .top-bun"
    );
    const bottomBun = document.querySelector(
      "header nav .hamburger-menu .bottom-bun"
    );
    const navContainer = document.querySelector("header nav ul");
    const footer = document.querySelector("footer");

    if (hamburgerMenu.classList.contains("active")) {
      patty.style.backgroundColor = "#fff";
      topBun.style.transform = "";
      bottomBun.style.transform = "";
      hamburgerMenu.classList.remove("active");
      navContainer.classList.remove("open");
      footer.style.display = "";
    } else {
      hamburgerMenu.classList.add("active");
      patty.style.backgroundColor = "transparent";
      topBun.style.transform = "rotate(45deg) translateX(18px)";
      bottomBun.style.transform = "rotate(-45deg) translateX(18px)";
      navContainer.classList.add("open");
      footer.style.display = "none";
    }
  };

  return (
    <header>
      <div className="logo">This Interior</div>
      <nav>
        <div className="hamburger-menu" onClick={handleHamburger}>
          <div className="top-bun"></div>
          <div className="patty"></div>
          <div className="bottom-bun"></div>
        </div>
        <ul className="">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
