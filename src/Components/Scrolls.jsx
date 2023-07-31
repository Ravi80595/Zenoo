import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToFAQLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    window.scrollTo(2000, 1800);
  };

return (
<Link to={to} onClick={handleClick} {...rest}>
    {children}
</Link>
);
};

export default ScrollToFAQLink;
