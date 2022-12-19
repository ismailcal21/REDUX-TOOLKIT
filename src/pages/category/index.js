import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb";
import useApi from "../../components/hooks/useApi";
import SideBbarSearch from "../../components/side-bar-search";
import ProductList from "../components/product-list";

function Category(props) {
  const params = useParams();
  const api = useApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlQueryData = {};
    urlQueryData["productTaxons.taxon.code"] = params.taxon_code;
    urlQueryData["order[code]"] = "asc";
    urlQueryData["order[createdAt]"] = "asc";

    console.log(">>URL QUERY DATA", urlQueryData);
    api
      .get("shop/products", { params: urlQueryData })
      .then((response) => {
        console.log(">>>PRODUCT RESPONSE", response);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(">>>PRODUCT ERR", err);
      });
  }, []);

  const breadCrumb = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Category",
      href: "/category",
    },
    {
      title: params.taxon_code,
      href: "/category" + params.taxon_code,
    },
  ];

  return (
    <>
      <BreadCrumb items={breadCrumb} />
      <div className="content">
        <div className="container">
          <div className="row">
            <SideBbarSearch />
            <ProductList products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
