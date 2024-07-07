import Head from "next/head";
import StoreNavbar from "@/components/StoreNavbar";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    populatePostsTable(); // Call function to fetch and populate table on page load
  }, []);

  function populatePostsTable(id = null) {
    let url = id
      ? `https://fakestoreapi.com/products/${id}`
      : `https://fakestoreapi.com/products`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          setProducts([data]);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }

  function handleSearch(event) {
    event.preventDefault();// Prevents the default form submission behavior
    let id = document.querySelector("#id").value;
    populatePostsTable(id);
  }

  return (
    <>
      <Head>
        <title>Seneca Store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <StoreNavbar />
        </nav>
      </header>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <form className="d-flex" id="searchForm" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="ID (Number)"
                  id="id"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover" id="postsTable">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Rate</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((post) => (
                    <tr key={post.id} id={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.price}</td>
                      <td>{post.description}</td>
                      <td>
                        <img
                          src={post.image}
                          alt="Product Image"
                          style={{
                            maxWidth: "100px",
                            maxHeight: "100px",
                          }}
                        />
                      </td>
                      <td>{post.category}</td>
                      <td>{post.rating.rate}</td>
                      <td>{post.rating.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}