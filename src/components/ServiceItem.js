import { PeopleFill } from 'react-bootstrap-icons';

export default function ServiceItem() {
  return (
    <article className="col-md-4 mt-3">
      <div className="card bg-darker text-light card-radius shadow-lg">
        <div className="card-body">
          <PeopleFill className="my-4 ml-2" color="royalblue" size={40} />
          <h5 className="card-title">Accounts</h5>
          <p className="card-text font-weight-light h6">
            Manage an unlimited number of accounts from one place
          </p>
        </div>
      </div>
    </article>
  );
}
