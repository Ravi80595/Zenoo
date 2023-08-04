import React from 'react';
import { Link } from 'react-router-dom';

export const ScrollToFAQLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    window.scrollTo(2000, 1800);
  };

return (
<Link to={to} onClick={handleClick} {...rest}>
    {children}
</Link>
);
};




export const ScrollToReviewLink = ({ to, children, ...rest }) => {
  const handleClick = () => {
    window.scrollTo(4700, 4000);
  };

return (
<Link to={to} onClick={handleClick} {...rest}>
    {children}
</Link>
);
};



