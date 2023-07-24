import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import { Login } from "./components/user/Login";
import { Register } from "./components/user/Register";

class App extends Component {
  state = {
    currentForm: "login",
    todoList: [],
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/authy/")
      .then((res) => this.setState({ mySchool: res.data }))
      .catch((err) => console.log(err));
  };

  handleAddOrUpdateItem = (item) => {
    if (item.id) {
      axios
        .put(`/api/authy/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;
    }
    axios.post("/api/authy/", item).then((res) => this.refreshList());
  };

  handleDeleteItem = (item) => {
    axios
      .delete(`/api/authy/${item.id}/`)
      .then((res) => this.refreshList());
  };

  toggleForm = (formName) => {
    this.setState({ currentForm: formName });
  };

  render() {
    const { currentForm, mySchool } = this.state;

    return (
      <Router>
        <Header />
        <Routes>
          {currentForm === "login" ? (
            <Route element={<Login onFormSwitch={this.toggleForm} />} />
          ) : (
            <Route element={<Register onFormSwitch={this.toggleForm} />} />
          )}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/pricing" element={<Pricing />} />
          <Route exact path="/journal" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
