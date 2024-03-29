import React from 'react';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import App from "./App";
// import Invoices from "./routes/invoices";
// import Invoice from './routes/invoice';
// import './App.css'
// import Blogs from './routes/Blogs';
// import SingleBlog from './routes/SingleBlog';
// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}/>
//       <Route path="blogs" element={<Blogs />}>
//         <Route path="blog/:slug" element={<SingleBlog/>} />
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Blogs from './routes/Blogs';
import SingleBlog from './routes/SingleBlog';
import './App.css'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);