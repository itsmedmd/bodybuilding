import React from "react";

export default function Chapter(props) {
  const images = props.transformation ?
    <>
      <img className="lazyload" src="transformation-1-lowq.jpg" data-src="transformation-1.jpg" alt={`${props.alt}`} />
      <img className="lazyload" src="transformation-2-lowq.jpg" data-src="transformation-2.jpg" alt={`${props.alt}`} />
      <img className="lazyload" src="transformation-3-lowq.jpg" data-src="transformation-3.jpg" alt={`${props.alt}`} />
      <img className="lazyload" src="transformation-4-lowq.jpg" data-src="transformation-4.jpg" alt={`${props.alt}`} />
    </>
    : <img className="lazyload" src={props.lazySrc} data-src={props.src} alt={`${props.alt}`} />;

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
