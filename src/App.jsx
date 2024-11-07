import "./App.css";
import TodoList from "./components/TodoList";
import { Link, Route, Routes } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator";
// import { InputBox } from "./components";
import CurrencyConverter from "./components/CurrencyConverter";
// import Routing from "./components/Routing/Routing";
// import Routing from "./components/Routing/Routing";
import Layout from "./components/Routing/Layout";
function App() {
  return (
    <>
      <nav className="flex justify-center gap-5 py-6 bg-indigo-950">
        <Link to="/">Home</Link>
        {/* <Link to="/users">Users</Link> */}
        {/* <Link to="/counter">Counter</Link> */}
        <Link to="/todos">TodoList</Link>
        <Link to="/passwordGenerator">Password Generator</Link>
        <Link to="/currency">Currency</Link>
        <Link to="/routing">Routing</Link>
        {/* <Link to="/tabs">Tabs</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/passwordGenerator" element={<PasswordGenerator />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/routing" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
function Home() {
  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}
function NotFound() {
  return (
    <>
      <h3 className="text-red-600 ">404 Page Not Found</h3>
    </>
  );
}
