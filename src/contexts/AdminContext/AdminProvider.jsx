import React, { useState, useEffect } from "react";
import AdminContext from "./AdminContext";
import axios from "axios";

export function AdminProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [messages, sesMessages] = useState([]);
  const [blogs,setBlogs] = useState([]);
  const [products,setProducts]= useState([]);
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get("http://localhost:8090/api/user/getAllUsers");
        setCustomers(res.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

  useEffect(()=>{
      const fetchMessages=async ()=>{
        try {
          const res = await axios.get("http://localhost:8090/api/customers/all/1");
          sesMessages(res.data);
          
        } catch (error) {
          console.log("Error fetching messages:", error)
        }
      };
      fetchMessages();
  },[])
  useEffect(()=>{
      const fetchBlogs = async ()=>{
        try {
          const res = await axios.get("http://localhost:8090/api/blogs/getAllBlogs");
          setBlogs(res.data)
        } catch (error) {
          console.log("Error fetching blogs:",error)
        }
      }
      fetchBlogs()
  },[])
  useEffect(()=>{
      const fetchProducts = async ()=>{
        try {
          const res= await axios.get("http://localhost:8090/api/product/getAllProducts/1")
          setProducts(res.data)
          
        } catch (error) {
          console.log("Error Fetching Products"+error)
        }
      }
      fetchProducts()
  },[]);
  const DeleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:8090/api/blogs/1/deleteBlogPost/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const updatedBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(updatedBlogs);
        console.log('Blog  silindi!');
      }
    } catch (error) {
      console.error('Bir xeta oldu:', error);
    }
  };

  const DeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:8090/api/product/1/delete-product/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
        console.log('Product  silindi!');
      }
    } catch (error) {
      console.error('Bir xeta oldu:', error);
    }
  };
  const contextValue = {
    customers,
    messages,
    DeleteBlog,
    DeleteProduct,
    products,
    blogs,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
}
