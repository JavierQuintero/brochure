particlesJS('particles-js',
{
"particles": {
"number": {
"value": 30,
"density": {
  "enable": true,
  "value_area": 800
}
},
"color": {
"value": "#ffffff"
},
"shape": {
"type": ["circle","triangle","edge"],
"stroke": {
  "width": 0,
  "color": "#000000"
},
"polygon": {
  "nb_sides": 5
},
"image": {
  "src": "image/bg.jpg",
  "width": 100,
  "height": 100
}
},
"opacity": {
"value": 0.5,
"random": false,
"anim": {
  "enable": false,
  "speed": 0.3,
  "opacity_min": 0.1,
  "sync": false
}
},
"size": {
"value": 20,
"random": true,
"anim": {
  "enable": false,
  "speed": 80,
  "size_min": 0.1,
  "sync": false
}
},
"line_linked": {
"enable": true,
"distance": 500,
"color": "#ffffff",
"opacity": 0.06,
"width": 2
},
"move": {
"enable": true,
"speed": 5,
"direction": "none",
"random": true,
"straight": false,
"out_mode": "out",
"bounce": false,
"attract": {
  "enable": false,
  "rotateX": 800,
  "rotateY": 1200
}
}
},
"interactivity": {
"detect_on": "canvas",
"events": {
"onhover": {
  "enable": false,
  "mode": "repulse"
},
"onclick": {
  "enable": true,
  "mode": "push"
},
"resize": true
},
"modes": {
"grab": {
  "distance": 800,
  "line_linked": {
    "opacity": 1
  }
},
"bubble": {
  "distance": 800,
  "size": 80,
  "duration": 2,
  "opacity": 0.8,
  "speed": 3
},
"repulse": {
  "distance": 400,
  "duration": 0.4
},
"push": {
  "particles_nb": 4
},
"remove": {
  "particles_nb": 2
}
}
},
"retina_detect": true
}
)