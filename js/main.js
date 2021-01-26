gsap.registerPlugin(CSSRulePlugin);

const tl = gsap.timeline({ defaults: { ease: Power2.easeout } });

btn = document.querySelector("button");

rule = CSSRulePlugin.getRule("button::before");

tl.to(".label", {
  opacity: 0,
  height: 0,
  position: "absolute",
  duration: ".2s",
})
  .to(
    "button",
    {
      borderRadius: "50%",
      width: "2.5em",
      height: "2.5em",
      ease: Elastic.easeOut.config(0.7, 0.3),
    },
    "-=.5s"
  )
  .to(rule, { borderRadius: "50%" }, "-=1s")
  .to("svg", { strokeDasharray: "100 100", duration: 0.3 }, "-=.3")
  .to(
    "svg",
    {
      strokeDasharray: "60 100",
      transform: "scale(0.7) translate(-26px, -24px) rotate(-90deg)",
    },
    "+=1"
  )
  .to("p", { clipPath: "circle(100% at 50% 50%)", duration: 0.3 }, "-=1");

tl.pause();

btn.addEventListener("click", () => tl.play());
