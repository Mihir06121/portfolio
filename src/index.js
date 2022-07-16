// import React from 'react';
// import ReactDOM from "react-dom/client";
// import {
//   HashRouter,
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
//   <HashRouter>
//     <Routes>
//       <Route path="/" element={<App />}/>
//       <Route path="blogs" element={<Blogs />}>
//         <Route path="blog/:slug" element={<SingleBlog/>} />
//       </Route>
//     </Routes>
//   </HashRouter>
// );
import ReactDOM from "react-dom/client";
import {
  HashRouter,
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
  <HashRouter basename="https://mihirpanchal.com">
<Routes>
  <Route path="/" element={<App />}/>
    <Route path="expenses" element={<Expenses />} />
    <Route path="blogs" element={<Blogs />}>
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
    </Route>
      <Route path="blogs/:slug" element={<SingleBlog />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
</Routes>
  </HashRouter>
);