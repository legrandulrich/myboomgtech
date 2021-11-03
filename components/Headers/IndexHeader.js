import React from "react";
import Link from "next/link";
// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

function IndexHeader() {
  return (
    <>
      <div className="header bg-info pt-5 pb-7">
        <Container>
          <div className="header-body">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="pr-5">
                  <h1 className="display-2 text-white font-weight-bold mb-0">
                    BoomGTech Solutions For You
                  </h1>
                  <h2 className="display-4 text-white font-weight-light">
                    BoomGTech est une autoroute d’infrastructures technologiques pensée et construite pour votre quotidien.
                  </h2>
                  <p className="text-white mt-4">
                    Trouvez-le ou les produits qui vous conviennent et commencez à les utiliser des aujourd’hui!
                  </p>
                  <div className="mt-5">
                    <Link href="/admin/dashboard">
                      <Button className="btn-neutral my-2" color="default">
                        Commencer
                      </Button>
                    </Link>
                    <Button
                      className="my-2"
                      color="default"
                      href="#"
                    >
                      S'inscrire
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <Row className="pt-5">
                  <Col md="6">
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">BoomG Education</h5>
                        <ul>
                          <li>Global School</li>
                          <li>Parent Control</li>
                          <li>BoomG Academy</li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">BoomG Santé </h5>
                        <ul>
                          <li>BoomG Hospital</li>
                          <li>BoomG Health care Services</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col className="pt-lg-5 pt-4" md="6">
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">BoomG Commerce</h5>
                        <ul>
                          <li>MyBoomG Shop</li>
                          <li>BoomG Livraison</li>
                          <li>BoomG Location & Reservation</li>
                          <li>BoomG Wedding Planner</li>
                        </ul>
                      </CardBody>
                    </Card>
                    <Card className="mb-4">
                      <CardBody>
                        <div className="icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4">
                          <i className="ni ni-active-40" />
                        </div>
                        <h5 className="h3">BoomG Business</h5>
                        <ul>
                          <li>MyBoomG Wallet</li>
                          <li>BoomG Consulting</li>
                          <li>My Updated CV</li>
                          <li>BoomG Saving Activity</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-default" points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
