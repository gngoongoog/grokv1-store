import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { fetchProducts } from '../services/api';
const ProductCard = lazy(() => import('../components/ProductCard'));

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <Container sx={{ py: 4, backgroundColor: '#F5F5F5' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#000000' }}>
        مرحبا بك في Gn Store
      </Typography>
      <Grid container spacing={3}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Suspense fallback={<div>جاري التحميل...</div>}>
              <ProductCard product={product} />
            </Suspense>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;