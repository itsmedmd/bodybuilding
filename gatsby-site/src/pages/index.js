import React from "react";
import "./style.css";
import Header from "../components/header";
import Chapter from "../components/chapter";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="page-content">
      <Header/>
      <main>
        <Chapter number="ONE" title="Introduction" src="arm-flex.jpg" alt="Zyzz flexing his bicep at a party" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="TWO" title="Transformation" src="transformation.jpg" alt="Zyzz's body transformation pictures" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="THREE" title="Inspiration" src="brothers.jpg" alt="Zyzz and his brother Chestbrah smiling" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="FOUR" title="The Legacy" src="bible.jpg" alt="Zyzz's bodybuilding bible cover" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
        <Chapter number="FIVE" title="Conclusion" src="gravestone.jpg" alt="Chestbrah next to Zyzz's gravestone" >
          <p>born on the steeping hills of mount olympus in a bed that he build with his own bare hands, a god among gods was born. he descended upon humanity where his inhumane physique was admired, he devoted his whole life to enlightening us mere mortals on how to become shredded cunts.</p>
        </Chapter>
      </main>
      <Footer/>
    </div>
  );
}
