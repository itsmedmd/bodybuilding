import React, { useEffect } from "react";
import "./style.css";
import Header from "../components/header";
import Chapter from "../components/chapter";
import Footer from "../components/footer";
import LazyLoad from "vanilla-lazyload";

export default function Home() {
  useEffect(function() {
    // Initialize lazyload one time for the entire application
    if (!document.lazyLoadInstance)
      document.lazyLoadInstance = new LazyLoad({elements_selector: ".lazyload"});

    const callback = function(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting)
          entry.target.classList.add("is-visible");
      });
    };
    
    const observer = new IntersectionObserver(callback);
    
    const targets = document.getElementsByClassName("animate-on-scroll");
    const targetsArray = [];
    for(let i = 0; i < targets.length; i++)
      targetsArray.push(targets[i]);

    targetsArray.forEach(function(target) {
      observer.observe(target);
    });
  }, []);

  return (
    <div className="page-content">
      <Header/>
      <main>
        <Chapter number="ONE" title="Introduction" src="arm-flex.jpg" lazySrc="arm-flex-lowq.jpg" alt="Zyzz flexing his bicep at a party" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="TWO" title="Transformation" src="transformation.jpg" lazySrc="transformation-lowq.jpg" alt="Zyzz's body transformation pictures" transformation="true" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="THREE" title="Inspiration" src="brothers.jpg" lazySrc="brothers-lowq.jpg" alt="Zyzz and his brother Chestbrah smiling" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="FOUR" title="The Legacy" src="bible.jpg" lazySrc="bible-lowq.jpg" alt="Zyzz's bodybuilding bible cover" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="FIVE" title="Conclusion" src="gravestone.jpg" lazySrc="gravestone-lowq.jpg" alt="Chestbrah next to Zyzz's gravestone" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
      </main>
      <Footer/>
    </div>
  );
}
