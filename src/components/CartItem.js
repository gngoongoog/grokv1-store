import React from 'react';
import { ListItem, Typography, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value) || 1;
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <ListItem sx={{ display: 'flex', alignItems: 'center', color: '#333333' }}>
      <Typography sx={{ flexGrow: 1 }}>
        {item.title} - ${item.price} x 
        <TextField
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1 }}
          sx={{ width: '60px', mx: 2 }}
        />
      </Typography>
      <Typography sx={{ mr: 2 }}>${(item.price * item.quantity).toFixed(2)}</Typography>
      <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
        <DeleteIcon sx={{ color: '#9E9E9E' }} />
      </IconButton>
    </ListItem>
  );
}

export default CartItem;