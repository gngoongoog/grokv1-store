import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography, Button, Container } from '@mui/material';
import CartItem from '../components/CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const WHATSAPP_PHONE = 'YOUR_PHONE_NUMBER'; // استبدل برقمك، مثل +966123456789

  const sendToWhatsApp = () => {
    const message = cartItems
      .map(item => `${item.title} - الكمية: ${item.quantity} - السعر: $${item.price}`)
      .join('\n') + `\nالإجمالي: $${total.toFixed(2)}\nالدفع: كاش عند الاستلام`;
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Container className="cart" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ color: '#000000', mb: 2 }}>سلة التسوق</Typography>
      {cartItems.length === 0 ? (
        <Typography sx={{ color: '#9E9E9E' }}>السلة فارغة</Typography>
      ) : (
        <>
          <List>
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2, color: '#000000' }}>
            الإجمالي: ${total.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            onClick={sendToWhatsApp}
            sx={{ backgroundColor: '#000000', mt: 2, color: '#FFFFFF' }}
          >
            إتمام الشراء عبر WhatsApp (كاش عند الاستلام)
          </Button>
        </>
      )}
    </Container>
  );
}

export default Cart;