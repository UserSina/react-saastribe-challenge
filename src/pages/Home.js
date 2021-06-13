import { Container, Badge, Button } from 'react-bootstrap';
import ServiceItem from '../components/ServiceItem';

export default function Home() {
  return (
    <Container className="view-center">
      {/* <p>
        Add components while ignoring the shapes as a first step. <br /> Once
        The components are in place, try adding the shape as absolutes with view
        height property or something.
      </p> */}
      <section className="row">
        <div className="col-lg-5 col-12">
          <Badge
            className="mb-4"
            pill
            variant="light-alt"
            style={{ color: '#4579F5' }}
          >
            WELCOME
          </Badge>
          <h1>Ready to help you in your projects!</h1>
          <p className="mt-5 mb-4">
            Our sales team will get in touch to better understand your needs,
            and will help you with the sign-up process.
          </p>
          <Button variant="primary" className="mr-2 btn-radius">
            Start Now
          </Button>
          <Button variant="outline-primary" className="btn-radius">
            Contact Sales
          </Button>
        </div>
        <div className="col-lg-7 col-12">
          <div className="row">
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
            <ServiceItem />
          </div>
        </div>
      </section>
    </Container>
  );
}
