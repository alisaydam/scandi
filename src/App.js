import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import { CategoryName } from "./components/styles/CategoryName.styled";

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryName>Category Name</CategoryName>
      <Products />
    </div>
  );
}

export default App;
