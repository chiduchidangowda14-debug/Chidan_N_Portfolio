// Small reveal-on-scroll effect — intentionally lightweight.
const items = document.querySelectorAll('.section, .project, .skill-grid article, .edu-card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
items.forEach(el=>{el.classList.add('reveal');observer.observe(el);});
