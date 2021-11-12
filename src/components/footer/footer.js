import Card from 'react-bootstrap/Card'

function Header(props) {
  return (
    <Card>
      <Card.Footer className="text-info">by Sara Strasner | <a href ='https://github.com/sarastrasner' className="text-info">Find me on Github</a> | <a href ='https://www.linkedin.com/in/sarastrasner/' className="text-info">Find me on LinkedIn</a></Card.Footer>
    </Card>
  );
}

export default Header;
