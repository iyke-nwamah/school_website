// Import statements
import React, { useState } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./auth/Register";
import Login from "./auth/Login";
import { UserContext } from './utils/UserContext';
import { getCurrentUser } from './services/auth';


// Components
// import Header from './common/header/Header';
// import Footer from './common/footer/Footer';
// import Home from './home/Home';
// import About from './about/About';
// import CourseHome from './allcourses/CourseHome';
// import Pricing from './pricing/Pricing';
// import Blog from './blog/Blog';
// import Contact from './contact/Contact';

// Main App component
function App() {
  const getToken = () => {
    const token = localStorage.getItem("token");
    if (token){
        return true;
    } else {
        return false;
    }
};

const [isAuth, setisAuth] = useState(getToken());

  return (
    <Router>
      Ok This worked
       
      <div className="App">
        <Routes>
        <UserContext.Provider value={{ isAuth, setisAuth}}>
        {/*<PrivateRoute exact path="/" authed={isAuth} component={Home} />*/}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </UserContext.Provider>
        </Routes>
       
       
        {/* <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<CourseHome />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/journal" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer /> */}
      </div>
     
    </Router>
  );
}

export default App;
createRoot(document.getElementById("root")).render(<App />);
