import React from "react";

export default function Footer() {
  return (
      <footer className="animate-on-scroll" >
          <h1>
              'Zyzz is not a person. Zyzz is merely a personification of a way of life.'
              <span>-Aziz Sergeyevich Shavershian</span>
          </h1>
          <picture>
            <source media="(max-width: 1024px)" srcSet="quotes-clear.jpg" />
            <img className="lazyload" src="quotes-lowq.jpg" data-src="quotes.jpg" alt="A compilation of some of Zyzz's quotes" width="1338" height="893" />
          </picture>
      </footer>
  );
}