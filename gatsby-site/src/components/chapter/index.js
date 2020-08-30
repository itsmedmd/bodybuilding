import React from "react";

export default function Chapter(props) {
  return (
      <article>
          <header className="animate-on-scroll">
            <h2>Chapter <span>{props.number}</span></h2>
            <h1>{props.title}</h1>
          </header>
          <section>
            <section>
                {props.children}
            </section>
            <aside>
                <img src={props.src} alt={`${props.alt}`} />
            </aside>
          </section>
      </article>
  );
}
