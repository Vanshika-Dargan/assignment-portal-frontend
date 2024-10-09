import { Link } from 'react-router-dom'; 

function Four_O_Four() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={styles.homeLink}>Go Back to Homepage</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '5rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  message: {
    fontSize: '1.5rem',
    margin: '20px 0',
    color: '#fff',
  },
  homeLink: {
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    border: '1px solid transparent',
    padding: '0.6em 1.2em',
    fontSize: '1em',
    fontWeight: '500',
    fontFamily: 'inherit',
    backgroundColor: '#1a1a1a',
    cursor: 'pointer',
    transition: 'border-color 0.25s'
  },
};

export default Four_O_Four;
