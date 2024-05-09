// ProductData.jsx
import { db } from '../Config/Config';

const getProductsFromFirestore = async () => {
  try {
    const productsRef = db.collection("product"); // Corrected collection name
    const snapshot = await productsRef.get();
    const products = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    return [];
  }
};

export default getProductsFromFirestore;