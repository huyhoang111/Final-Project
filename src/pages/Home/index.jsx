// Function Name : Home Page
import PropTypes from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";
import { Container, Row } from "reactstrap";
import Breadcrumb from "../../components/Common/Breadcrumb";

const Home = (props) => {
  const path = useLocation();
  document.title = "Home | Final Project";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Calendar" breadcrumbItem="" />
          <Row>
            <h1>Home Page</h1>

            <div>
              <Link to="/dashboard"> go Dashboard</Link>
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Home.propTypes = {
  history: PropTypes.object,
};
export default withRouter(Home);
