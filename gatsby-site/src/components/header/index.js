import React from "react";

export default function Header() {
  return (
      <header className="page-header" >
          <img src="golden-angel.jpg" alt="Golden Zyzz with wings" />
          <h2>Азиз Сергеевич <span>ZYZZ</span> Шавершян</h2>
          <h3>1989 - <del>2011</del> - <span className="infinity-symbol" >∞</span></h3>
      </header>
  );
}
