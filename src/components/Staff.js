import React from "react";
import "./App.scss";
import "./Staff.scss";
import StaffCard from "./StaffCard";
import grace1 from "../images/grace1.jpg";
import grace2 from "../images/grace2.jpg";
import four1 from "../images/four1.jpg";
import four2 from "../images/four2.jpg";
import nonToxic from "../images/nonToxic.jpg";
import eliza from "../images/eliza.jpg";
import nefarius from "../images/nefarius.jpg";
import twinkle from "../images/twinkle.jpg";
const Staff = () => {
  // left and right pass values to translateX in StaffCard
  const left = "-100%";
  const right = "100%";

  return (
    <div className="staff-container" id="staff">
      <span className="staff-title blue-font creepy-font">
        <h1>Staff</h1>
      </span>
      <br />
      <br />
      <StaffCard
        cardClass="staff-card"
        direction={left}
        img={eliza}
        alt='Eliza'
        class="staff-card__image"
        title="Eliza"
        role="@The Disease"
        tag="Eliza#0069"
        desc="Ello Gamers, You have come to the right place! I am Eliza, 
        I am the owner of this madness and nothing happens here without my knowledge. 
        Gaming alone sucks, so don't do it alone silly, come on in!"
      />{" "}
      <StaffCard
        cardClass="staff-card__blue"
        direction={right}
        flex="row-reverse"
        img={nefarius}
        alt='Nefarius'
        border1={{ borderColor: "#9fb5db" }}
        border2={{ display: "none" }}
        class="staff-card__image"
        title="Nefarius"
        role="@Warden"
        tags={{ justifySelf: "left" }}
        titleColor={{ color: "#9fb5db" }}
        desc="It is I, Nefarius, the Avatar of the Asylum, maintainer of balance, 
        hoarder of booze, narcotics and camel milk, tech support, quencher of revolts, 
        arbiter of corruption-fuelled justice, possessor of several Ph.D.s in Nothing, 
        life coach if things are going too well and last but not least your average guy 
        who never should have been given any power or authority over more than himself 
        so naturally a perfect fit for 2nd in charge."
      />
      <StaffCard
        cardClass="staff-card"
        direction={left}
        img={grace2}
        img2={grace1}
        alt="Grace2"
        alt2="Grace"
        border2={{ display: "none" }}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="GraceTheGreat1"
        role="@Psychiatrist"
        desc="Hi, I'm Grace! I like games. I'm an American who moved to Norway for love. 
        You can find me playing Overwatch, working out, or just chilling with the server.
         My main job on Asylum 669 is coordinating game nights along with Feral and Dave. 
         JOIN US. Subscribe to my OnlyChairs."
      />
      <StaffCard
        cardClass="staff-card__blue"
        direction={right}
        flex="row-reverse"
        img={nonToxic}
        alt="NonToxic"
        border1={{ borderColor: "#9fb5db" }}
        border2={{ borderColor: "#9fb5db" }}
        class="staff-card__image"
        title="NonToxic"
        role="@Psychiatrist"
        tag="NonToxic#1809"
        tags={{ justifySelf: "left" }}
        titleColor={{ color: "#9fb5db" }}
        desc="A Smart person knows that a Tomato is a Fruit, but a wise person knows not to add into a fruit Salad. 
        I am known as NonToxic, I am Married for almost 15 years, I have 2 Children and I am a Gamer for Life.
         I Suffer from that disorder where I speak the truth and it pisses people off. If I have said something to offend you, please tell me. I may want to use it again.
        I will leave you with this wisdom: Before you ask why someones dislikes you, ask yourself why do you give a fuck?"
      />
      <StaffCard
        cardClass="staff-card__blue"
        direction={left}
        img={four1}
        img2={four2}
        alt="FoursAreLife"
        alt2="FoursAreLife2"
        border1={{ borderColor: "#9fb5db" }}
        border2={{ borderColor: "#9fb5db" }}
        class="staff-card__image--animated"
        class2="staff-card__image2--animated"
        title="FoursAreLife"
        role="@Psychiatrist"
        tag="FoursAreLife#4444"
        titleColor={{ color: "#9fb5db" }}
        desc="Hey, my name is Fours, or more commonly DAV / Dave. I'm an IT student from 
        Austria and spend way too much time on the internet, and playing Destiny. My job is 
        mostly recruiting and hosting server events.
        "
      />
      <StaffCard
        cardClass="staff-card__blue"
        direction={right}
        flex="row-reverse"
        img={twinkle}
        border1={{ borderColor: "#9fb5db" }}
        border2={{ borderColor: "#9fb5db" }}
        class="staff-card__image"
        title="Twinkle"
        alt="Twinkle"
        role="@Psychiatrist"
        tag="TwinkleToes#7587"
        tags={{ justifySelf: "left" }}
        titleColor={{ color: "#9fb5db" }}
        desc="Hey I'm Twinkle (Twonkle, Twonk, Twink, horni British mod or whatever you want to call me). I'm 19 and make sure everyone has a good time. I'm mainly responsible for recruiting and saying 'That's kinda hot'."
      />
    </div>
  );
};

export default Staff;
