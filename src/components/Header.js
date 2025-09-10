import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import DrawerMenu from './DrawerMenu.jsx';

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = ['accessories', 'headphones', 'screens', 'cables', 'chargers', 'electronics', 'other'];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Gn Store</Link>
        </Typography>
        <div className="nav-links">
          {categories.map(cat => (
            <Link key={cat} to={`/category/${cat}`} style={{ color: '#FFFFFF', margin: '0 1rem', textDecoration: 'none' }}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          ))}
        </div>
        <IconButton color="inherit" onClick={handleDrawerToggle} className="hamburger">
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <DrawerMenu categories={categories} onClose={handleDrawerToggle} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;