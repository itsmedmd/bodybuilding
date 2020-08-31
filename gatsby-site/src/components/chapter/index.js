import React from "react";

export default function Chapter(props) {
  const images = props.transformation ?
    <>
      <img src="transformation-1.jpg" alt={`${props.alt}`} />
      <img src="transformation-2.jpg" alt={`${props.alt}`} />
      <img src="transformation-3.jpg" alt={`${props.alt}`} />
      <img src="transformation-4.jpg" alt={`${props.alt}`} />
    </>
    : <img src={props.src} alt={`${props.alt}`} />;

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
                {images}
            </aside>
          </section>
      </article>
  );
}
