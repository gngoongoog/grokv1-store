import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

function DrawerMenu({ categories, onClose }) {
  return (
    <div style={{ width: 250, padding: '1rem', backgroundColor: '#F5F5F5' }}>
      <List>
        {categories.map(cat => (
          <ListItem key={cat} button component={Link} to={`/category/${cat}`} onClick={onClose}>
            <ListItemText primary={cat.charAt(0).toUpperCase() + cat.slice(1)} sx={{ color: '#333333' }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DrawerMenu;