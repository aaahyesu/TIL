import { useEffect, useState } from "react";
import "./css/App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import MainPage from "./pages/MainPage";
import { Route, Routes } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import OurPage from "./pages/OurPage";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      // let url = `http://localhost:8000/products`;
      let url = `http://localhost:8000/products?_page=1&_per_page=6&category=new`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.data);
      setProducts(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage products={products} />} />
        <Route path="/shop" element={<ShopPage products={products} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/our" element={<OurPage />}>
          <Route path="ceo" element={"CEO 페이지"} />
          <Route path="history" element={"History 페이지"} />
          <Route path="org" element={"Organization 페이지"} />
        </Route>
        <Route path="/search" element={"검색"} />
        <Route path="/cart" element={"장바구니"} />
        <Route path="/mypage" element={"마이페이지"} />
        <Route
          path="/*"
          element={
            <section
              style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgray",
              }}
            >
              내용이없어요
            </section>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
