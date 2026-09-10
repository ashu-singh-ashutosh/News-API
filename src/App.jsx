import { useState } from "react";
import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"

function App() {
  const [category, setcategory] = useState("home");
  return (
    <>
    <Navbar setcategory={setcategory}/>
    <NewsBoard category={category}/>
    </>
  )
}

export default App