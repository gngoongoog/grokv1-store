import axios from 'axios';

const SHEET_ID = 'YOUR_SHEET_ID'; // استبدل بمعرف ورقة Google Sheets
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(SHEET_URL);
    const data = response.data.split('\n').slice(1).map(row => {
      const [id, title, price, description, image, category] = row.split(',');
      return { id: parseInt(id), title, price: parseFloat(price), description, image, category };
    });
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductsByCategory = async (category) => {
  const products = await fetchProducts();
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};