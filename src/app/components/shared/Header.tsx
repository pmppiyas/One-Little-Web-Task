import React from 'react';

const Header = ({
  black,
  primary,
  sub,
}: {
  black: string;
  primary: string;
  sub: string;
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-foreground">
        {black} <span className="text-primary">{primary}</span>
      </h2>
      <p className="text-lg text-muted-foreground mt-2">{sub}</p>
    </div>
  );
};

export default Header;
