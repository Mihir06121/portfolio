// import { AnimatePresence } from "framer-motion";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import About from "./About";
import Section from "./Section";
// import SingleBlog from "./SingleBlog";
import './App.css'

const App = () => {
  return (
    <div>
      <Section />
    {/* <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Section />}/>
          <Route path="/about" exact element={<About />} />
          <Route path="/single-blog/:slug" exact element={<SingleBlog/>} />
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
