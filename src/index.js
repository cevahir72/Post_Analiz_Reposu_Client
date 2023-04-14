// React
import { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
//Router
import { store } from "./store";
import { Provider } from "react-redux";
//utils
import Spinner from "./utils/Spinner";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);


