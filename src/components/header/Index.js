import { Grid, Row, Col } from "rsuite";
import { Link } from "wouter";
import useUser from "../../hook/useUser";

export default function HeaderApp() {
  const { isLogged, logout } = useUser();

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <Grid fluid>
      <Row className="show-grid">
        <Col xs={6}>
          <Link to="/">
            <h1>My firts app</h1>
          </Link>
        </Col>
        <Col xs={6} xsPush={16}>
          {isLogged ? (
            <Link onClick={handleClick} href="#">
              Logout
            </Link>
          ) : (
            <Link to="/login">login</Link>
          )}
        </Col>
      </Row>
    </Grid>
  );
}
