import React from "react";

export default function Header() {
  return (
      <header className="page-header animate-on-scroll" >
          <img src="golden-angel.jpg" alt="Golden Zyzz with wings" />
          <h2>Азиз Сергеевич <span>ZYZZ</span> Шавершян</h2>
          
          <h3 className="death-date" >
            1989 - 2011
            <span className="invisible"> -
              <span className="infinity-symbol" > ∞</span>
            </span>
          </h3>

          <h3 className="death-date-infinity" >
            1989 - <del>2011</del> -
            <span className="infinity-symbol" > ∞</span>
          </h3>

          <div></div>
      </header>
  );
}
