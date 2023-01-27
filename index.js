const section_hero = document.querySelector(".section-lead");

const observer = new IntersectionObserver(
  (entries) =>{
  const ent = entries[0];
  console.log(ent);
  
},{
  root:null,
  rootMargin:"",
  threshold:0,
});

observer.observe(section-lead);