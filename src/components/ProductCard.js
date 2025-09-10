import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <Card className="product-card" sx={{ maxWidth: 345, margin: '1rem', backgroundColor: '#FFFFFF' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.title}
        loading="lazy"
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ color: '#000000' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#9E9E9E' }}>
          {product.description}
        </Typography>
        <Typography variant="h6" sx={{ color: '#000000', mt: 1 }}>
          ${product.price}
        </Typography>
        <Button
          variant="contained"
          onClick={() => dispatch(addToCart(product))}
          sx={{ backgroundColor: '#000000', mt: 1, color: '#FFFFFF' }}
        >
          إضافة إلى السلة
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;