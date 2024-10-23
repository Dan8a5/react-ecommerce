import { Link, useRouteError } from 'react-router-dom';
import styles from './Error.module.css';

const ErrorPage = () => {
  // Get error details from React Router
  const error = useRouteError();

  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>Oops! Something went wrong.</h1>
      <p className={styles.errorMessage}>
        {/* Display specific error message if available, otherwise show default message */}
        {error?.message || "We're sorry, but the page you're looking for could not be found."}
      </p>
      <Link to="/" className={styles.errorButton}>
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;