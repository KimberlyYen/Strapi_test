import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        {/* SiteHeader 可以是靜態標題，並不依賴 documentId */}
        {/* <SiteHeader />  */}
        <Routes>
          {/* 各自路徑根據需要加載對應組件 */}
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:documentId" element={<ReviewDetails />} />
          <Route path="/category/:documentId" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
