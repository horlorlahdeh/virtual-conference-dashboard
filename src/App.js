import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Submenu from "./components/Submenu";
import Event from "./pages/Event";
import Analytics from "./pages/Analytics";
import CreateEvent from "./pages/CreateEvent";
import Blog from "./pages/Blog";
import CreateTicket from "./pages/CreateTicket";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Submenu />
        <Switch>
          <div className="mt-20 relative flex">
            <Sidebar />
            <Route exact path="/" component={Event} />
            <Route exact path="/analytics" component={Analytics} />
            <Route exact path="/create-event" component={CreateEvent} />
            <Route exact path="/create-ticket" component={CreateTicket} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;