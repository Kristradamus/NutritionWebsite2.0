import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./productPage.css";

const ProductPage = () => {
  const { promotionName } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!promotionName) {
      setError("Invalid promotion name.");
      setLoading(false);
      return;
    }

    const fetchProductData = async () => {
      try {
        const url = `http://localhost:5000/products/${promotionName}`;
        
        if (!response.ok) {
          throw new Error(`Failed to fetch. Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched data:", data);
        setProductData(data);
      } catch (err) {
        console.error("Error fetching product data:", err);
        setError(`Failed to load product data: ${err.message || err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();

    // Cleanup in case of component unmount
    return () => {
      setLoading(false); // Stop loading if component is unmounted
      setProductData(null); // Clear any old data
    };
  }, [promotionName]); // Dependency on promotionName to refetch on change

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Product Page: {promotionName}</h1>
      {productData ? (
        <div>
          <h2>{productData.name}</h2>
          <p>Price: ${productData.price}</p>
          <p>{productData.description}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ProductPage;
