/*import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';*/
import App from './App.tsx';
import './index.css';


/*createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);*/


import { HashRouter as Router } from "react-router-dom";

<Router>
    <App />
</Router>

/*ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
);*/

