import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg container bg-opacity-10">
      <div class="container-fluid">
        <a class="navbar-brand logo fw-fold text-warning" href="/">
          M.
        </a>
        <button
          class="navbar-toggler bg-warning"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon bg-danger"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav ">
            <a
              class="nav-link active text-white ms-5 a1"
              aria-current="page"
              href="/"
            >
              Home
            </a>

            <a class="nav-link text-white ms-5 a1" href="/Projects">
              Projects
            </a>
            <a class="nav-link text-white ms-5 a1" href="/Contact">
              Contact
            </a>
            <a
              class="nav-link border border-2 a2 px-3 border-danger btn rounded-pill text-white ms-5"
              href="https://drive.google.com/file/d/1ivBVTcLtunrWEqL8X99D6oFb_Ou79-WC/view?usp=share_link"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
