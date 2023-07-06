import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";

//theme
    import "primereact/resources/themes/lara-light-indigo/theme.css";   
    // import "primereact/resources/themes/lara-dark-indigo/theme.css";
    
//core
import "primereact/resources/primereact.min.css";     

import 'primeicons/primeicons.css';

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>
);
