import "./App.css";
import Blog from "./blog/Components/Blog.js";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./about/Components/About";
import Projects from "./portfolio/Components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Article from "./blog/Components/Article";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div>Home!</div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route path="/blog/:articleId" component={Article} />
          <Route path="/portfolio">
            <Projects />
          </Route>
        </Switch>
        {/*<RecentPosts />*/}
        {/*<Social />*/}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
