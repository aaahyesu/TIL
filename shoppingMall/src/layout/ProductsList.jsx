import ListCard from "../components/ListCard";
import style from "../css/ProductsList.module.css";

export default function ProductsList({ products }) {
  return (
    <section className={style.ProductsList}>
      <h2>상품 리스트(6개)</h2>
      <a href="#">전체보기</a>
      <ul className={style.listCon}>
        {products.map((item) => {
          return <ListCard key={item.id} item={item} />;
        })}
      </ul>
      <p>싱픔리스트 내용</p>
    </section>
  );
}
