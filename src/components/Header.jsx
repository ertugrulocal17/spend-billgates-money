import React from "react";
const Header = () => {
  return (
    <>
      <div className="title">
        <img
          src="https://neal.fun/spend/billgates.jpg"
          alt=""
          className="header-img"
        />
        Spend Bill Gates' Money
      </div>
    </>
  );
};

export default React.memo(Header);
