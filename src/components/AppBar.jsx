import appLogo from "../assets/app-logo.png";

export default function AppBar() {
  return (
    <header>
      <a href="">
        <img src={appLogo} alt="" width="80" />
      </a>
    </header>
  );
}
