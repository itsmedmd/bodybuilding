import React from "react";

export default function Chapter(props) {
  return (
      <article>
          <header>
            <h2>{`Chapter ${props.number}`}</h2>
            <h1>{props.title}</h1>
          </header>
          <section>
              {props.children}
          </section>
          <aside>
              <img src={props.src} alt={`${props.alt}`} />
          </aside>
      </article>
  );
}
