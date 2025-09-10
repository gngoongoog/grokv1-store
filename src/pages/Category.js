import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Container } from '@mui/material';
import { fetchProductsByCategory } from '../services/api';
import ProductCard from '../components/ProductCard';

function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsByCategory(category).then(setProducts);
  }, [category]);

  return (
    <Container sx={{ py: 4, backgroundColor: '#F5F5F5' }}>
      <Typography variant="h5" gutterBottom sx={{ color: '#000000' }}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Category;