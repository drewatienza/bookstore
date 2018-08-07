import axios from 'axios';
import App from './components/App';

ReactDOM.hydrate (
  <App initialData={window.__initialData__} />,
  document.getElementById('root')
);
