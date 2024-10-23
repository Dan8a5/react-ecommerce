// Import the Routes component that defines the application's routing structure
import Routes from './routes/Routes';

/**
* Root component of the application
* Serves as the entry point and wraps the routing configuration
* 
* @component
* @example
* // In main.jsx or index.jsx
* ReactDOM.render(
*   <React.StrictMode>
*     <App />
*   </React.StrictMode>,
*   document.getElementById('root')
* );
*/
function App() {
 // Render the Routes component which contains all route definitions
 return <Routes />;
}

export default App;