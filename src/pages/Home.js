import { Container, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceItem from '../components/ServiceItem';

import { kWrapperStyle } from '../constants/kStyles';

export default function Home() {
  return (
    <Container style={kWrapperStyle}>
      {/* <p>
        Add components while ignoring the shapes as a first step. <br /> Once
        The components are in place, try adding the shape as absolutes with view
        height property or something.
      </p> */}
      <section className="row text-center text-md-left">
        <div className="col-lg-4 col-12">
          <Badge
            className="mb-4"
            pill
            variant="light-alt"
            style={{ color: '#4579F5' }}
          >
            WELCOME
          </Badge>
          <h1>Ready to help you in your projects!</h1>
          <p className="lead mt-5 mb-4">
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process.
          </p>
          <Link to="/comments">
            <Button variant="primary" className="mr-2 btn-radius">
              Start Now
            </Button>
          </Link>
          <Button variant="outline-primary" className="btn-radius">
            Contact Sales
          </Button>
        </div>
        <div className="col-lg-8 col-12 d-flex align-items-center">
          <div className="row">
            <ServiceItem
              name="Accounts"
              description="Manage an unlimited number of accounts from one place"
            />
            <ServiceItem
              name="Roles &amp; Permissions"
              description="Full control with flexibleuser permissions for views and actions"
            />
            <ServiceItem
              name="Integration"
              description="Connect the tools you already use"
            />
            <ServiceItem
              name="Chat Bots"
              description="AI powered chatbots to improve your business and customer satisfaction"
            />
            <ServiceItem
              name="In-App Messaging"
              description="Build a better business with proactive messages."
            />
            <ServiceItem
              name="Knowledge Base"
              description="Create and publish answers for customers"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
