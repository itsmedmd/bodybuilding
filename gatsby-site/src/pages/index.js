import React, { useEffect } from "react";
import "./style.css";
import Header from "../components/header";
import Chapter from "../components/chapter";
import Footer from "../components/footer";
import LazyLoad from "vanilla-lazyload";
import { Link } from "gatsby";

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

    const targets = document.getElementsByClassName("animate-on-scroll");
    const targetsArray = [];
    for(let i = 0; i < targets.length; i++)
      targetsArray.push(targets[i]);

    // IntersectionObserver doesn't exist in IE so try...catch is needed
    try {
      const observer = new IntersectionObserver(callback);
      targetsArray.forEach(function(target) {
        observer.observe(target);
      });
    } catch(error) {
      targetsArray.forEach(function(target) {
        target.classList.add("is-visible");
      });
    }
  }, []);

  return (
    <div className="page-content">
      <Link to=".." className="go-back-to-homepage">GO BACK TO HOME PAGE</Link>
      <Header/>
      <main>
        <Chapter number="ONE" title="Introduction" src="arm-flex.jpg" lazySrc="arm-flex-lowq.jpg" alt="Zyzz flexing his bicep at a party" >
          <p>1989, March 24th, Russia. During the most violent thunderstorm recorded in thousands of years, in the heart of the country - Moscow, a baby is born. His name - Zyzz. To some he's just another regular man, to others - a God.</p>
          <br/>
          <p>This being descended upon humanity where his aesthetic body was instantly admired. After easily becoming the epitome of aesthetics, he devoted his life to teaching us mere mortals how to become gods themselves that we dream of. Even after many years, countless people continue his legacy and keep on mirin'.</p>
        </Chapter>
        <Chapter number="TWO" title="Transformation" src="transformation.jpg" lazySrc="transformation-lowq.jpg" alt="Zyzz's body transformation pictures" transformation="true" >
          <p>Being a God doesn't mean you're born perfect. Zyzz was born an ectomorph and was naturally very skinny with little muscle mass. For him to become the symbol of aesthetics, Zyzz had a long way to go. When he started training, Zyzz would spend three to four hours a day in the gym. He didn't know anything about bodybuilding but instead of reading information on the internet, he instead learned everything himself - in the gym.</p>
          <br/>
          <p>Zyzz naturally had amazing genetics and with years hard work you could see his transformation was complete - he had become a The God of aesthetics. Ater getting recognized on the internet, after some time he was starting to get so popular that he had established a clothing line and even his own protein label, Protein of the Gods.</p>
        </Chapter>
        <Chapter number="THREE" title="Genesis" src="brothers.jpg" lazySrc="brothers-lowq.jpg" alt="Zyzz and his brother Chestbrah smiling" >
          <p>But what started this bodybuilding journey? It was none other than Zyzz's bodybuilder brother known as Chestbrah. Zyzz began training in his local gym where he learned many things unknown to him about nutrition and training, applying it to his pursuit of becoming The God of aesthetics.</p>
          <br/>
          <p>His favourite professional bodybuilders were Arnold Schwarzenegger and Frank Zane. In an interview with bodybuilding website, Simplyshredded.com, Shavershian recalled that he originally wanted to become a bodybuilder to "impress girls."</p>
          <br/>
          <p>Almost four years into training, he stated that: "I can safely say that my motivation to train goes far beyond that of merely impressing people, it is derived from the feeling of having set goals and achieving them and outdoing myself in the gym. I absolutely love it, the feeling of pushing out that last rep, and getting skin tearing pumps is something I don't see myself without."</p>
          <br/>
          <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/6jg-PaQfyac"></iframe>
          </div>
        </Chapter>
        <Chapter number="FOUR" title="The Legacy" src="bible.jpg" lazySrc="bible-lowq.jpg" alt="Zyzz's bodybuilding bible cover" >
          <p>Zyzz's influence in bodybuilding and aesthetics communities has been so great that many people have been inspired by him to train, not give a fuck about what other people think and live life to the fullest.</p>
          <br/>
          <p>There are countless videos that people watch every single day of Zyzz doing just that. Watching those videos and seeing The God of aesthetics going around burning with confidence and not giving a fuck is a sight to behold.</p>
          <br/>
          <p>Although there are many videos of Zyzz from others' perspectives, there is one great bodybuilding resource that is written by Zyzz himself - Zyzz's Bodybuilding Bible. In this book Zyzz shares all his knowledge of bodybuilding that a bodybuilder should know - from diet, training and supplements to advanced training techniques and bodybuilder lifestyle.</p>
          <br/>
          <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/AdBoybKnzZw"></iframe>
          </div>
        </Chapter>
        <Chapter number="FIVE" title="Conclusion" src="gravestone.jpg" lazySrc="gravestone-lowq.jpg" alt="Chestbrah next to Zyzz's gravestone" >
          <p>“The flame that burns Twice as bright burns half as long.” ― Lao Tzu, Te Tao Ching</p>
          <br/>
          <p>Every journey, every story and every life has an end to it. Zyzz's came too early. During his trip in Thailand, Zyzz suffered a heart attack in a sauna, while on holiday in Pattaya.</p>
          <br/>
          <p>2011, August 5th. Aziz dies at age 22. He achieved something in less than 5 years what others fail to achieve in their lifetime. The legacy Aziz left will last indefinitely. Forever mirin' brah.</p>
        </Chapter>
      </main>
      <Footer/>
    </div>
  );
}
