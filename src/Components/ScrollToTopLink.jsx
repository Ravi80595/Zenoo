import React from 'react';
import { Link } from 'react-router-dom';

const ScrollToTopLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

return (
<Link to={to} onClick={handleClick} {...rest}>
    {children}
</Link>
);
};

export default ScrollToTopLink;
