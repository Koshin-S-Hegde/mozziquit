import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f8f8f8' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/products" style={{ marginRight: '10px' }}>Products</Link>
      <Link to="/awards" style={{ marginRight: '10px' }}>Awards</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Navbar;
