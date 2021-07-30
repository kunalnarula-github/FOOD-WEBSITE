window.addEventListener('scroll',()=>{
    let contentPosition = document.getElementById('text1').getBoundingClientRect().top;
for(let i = contentPosition; contentPosition < 180;i++){
    if(document.getElementById('hidden') !== null){
        document.getElementById('hidden').id = 'navBar-bg'
        document.getElementById('home').id = 'home2'        
        document.getElementById('about').id = 'about3'        
        document.getElementById('menu').id = 'menu2'   
        document.getElementById('expert').id = 'expert2'    
        document.getElementById('testimonials').id = 'testimonials2'    
        document.getElementById('contact').id = 'contact2'
        document.getElementById('logo-text').id = 'logo-text2'
    }
    break;
}
for(let i = contentPosition; contentPosition >= 180;i++){
    if(document.getElementById('navBar-bg') !== null){
        document.getElementById('navBar-bg').id = 'hidden'; 
        document.getElementById('home2').id = 'home'        
        document.getElementById('about3').id = 'about'        
        document.getElementById('menu2').id = 'menu'   
        document.getElementById('expert2').id = 'expert'    
        document.getElementById('testimonials2').id = 'testimonials'    
        document.getElementById('contact2').id = 'contact'
        document.getElementById('logo-text2').id = 'logo-text'  
    }
    break;
}
})

function scrolldiv(element) {
    var elem = document.getElementById(element);
    elem.scrollIntoView();
}