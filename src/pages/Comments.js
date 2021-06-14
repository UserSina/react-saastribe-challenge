import axios from 'axios';

import { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import { baseURL } from '../api';
import { getComments } from '../api/CommentsAPI';

export default function Comments() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // To cancel api request if route is changed
    const signal = axios.CancelToken.source();

    setTimeout(() => {
      getComments(signal.token)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            return;
          }
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
    return () => {
      signal.cancel();
    };
  }, []);

  return (
    <Container className="mt-4">
      <header className="row flex-column d-flex align-items-center justify-content-center">
        <h2>Comments List </h2>
        <span className="text-muted h6">
          Fetched from{' '}
          <a target="_blank" rel="noreferrer" href={`${baseURL}/comments`}>
            {`${baseURL}/comments`}
          </a>
        </span>
      </header>

      {loading ? (
        <section>
          <div
            className="row flex-column justify-content-center"
            style={{ minHeight: 300 }}
          >
            <Spinner className="align-self-center mb-3" animation="grow" />
            <span className="text-light align-self-center">
              Fetching data...
            </span>
          </div>
        </section>
      ) : error !== null ? (
        <Alert className="mt-3" variant="danger">
          {error}
        </Alert>
      ) : (
        <Table striped bordered hover variant="dark" className="mt-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.map((comment) => (
              <tr key={comment.id}>
                <th>{comment.id}</th>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}
