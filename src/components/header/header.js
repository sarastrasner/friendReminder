import './header.scss';

function Header(props) {
  return (
    <div className="header">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#news">Sign Out</a>
      <a href="#about">About</a>
    </div>
  );
}

export default Header;
