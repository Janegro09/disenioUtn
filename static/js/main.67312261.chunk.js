(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,r){},18:function(e,a,r){"use strict";r.r(a);var t=r(1),n=r.n(t),l=r(6),c=r.n(l),i=r(3),o=r(0),s=function(){var e=Object(o.g)();return n.a.createElement("div",{className:"container mt-5"},n.a.createElement("h1",null,"Login"),n.a.createElement("hr",null),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){e("/",{replace:!0})}},"Login"))},u=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],m=function(e){var a=function(e){var a=[];if(!(a=(a=u.map(function(e){return e.publisher})).filter(function(e,r){return a.indexOf(e)===r})).includes(e))throw new Error("".concat(e," is not a valid publisher"));return u.filter(function(a){return a.publisher===e})}(e.publisher);return n.a.createElement("ul",null,a.map(function(e){return n.a.createElement("li",{key:e.id},e.superhero)}))},p=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Registrar Medicion"),n.a.createElement("hr",null),n.a.createElement(m,{publisher:"DC Comics"}))},h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Visualizar Reporte"),n.a.createElement("hr",null),n.a.createElement(m,{publisher:"Marvel Comics"}))},d=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Ejecutar el calculo de la huella de carbono"),n.a.createElement("hr",null))},v=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Vincular Trabajador"),n.a.createElement("hr",null))},b=function(){var e=Object(o.g)();return n.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark p-2"},n.a.createElement(i.b,{className:"navbar-brand",to:"/"},"Asociaciones"),n.a.createElement("div",{className:"navbar-collapse w-100"},n.a.createElement("div",{className:"navbar-nav"},n.a.createElement(i.c,{className:function(e){var a=e.isActive;return"nav-item nav-link ".concat(a?"active":"")},to:"/calculoHC"},"Calculo de HC"),n.a.createElement(i.c,{className:function(e){var a=e.isActive;return"nav-item nav-link ".concat(a?"active":"")},to:"/registrarMedicion"},"Registrar Medicion"),n.a.createElement(i.c,{className:function(e){var a=e.isActive;return"nav-item nav-link ".concat(a?"active":"")},to:"/vincularTrabajador"},"Vincular Trabajador"),n.a.createElement(i.c,{className:function(e){var a=e.isActive;return"nav-item nav-link ".concat(a?"active":"")},to:"/visualizarReporte"},"Visualizar Reporte"))),n.a.createElement("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end"},n.a.createElement("ul",{className:"navbar-nav ml-auto"},n.a.createElement("span",{className:"nav-item nav-link text-info"},"Javier"),n.a.createElement("button",{className:"nav-item nav-link btn",onClick:function(){e("/login",{replace:!0})}},"Logout"))))},E=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"container"},n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"calculoHC",element:n.a.createElement(d,null)}),n.a.createElement(o.b,{path:"registrarMedicion",element:n.a.createElement(p,null)}),n.a.createElement(o.b,{path:"vincularTrabajador",element:n.a.createElement(v,null)}),n.a.createElement(o.b,{path:"visualizarReporte",element:n.a.createElement(h,null)}),n.a.createElement(o.b,{path:"/",element:n.a.createElement(o.a,{to:"/calculo"})}))))},C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"login",element:n.a.createElement(s,null)}),n.a.createElement(o.b,{path:"/*",element:n.a.createElement(E,null)})))},f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C,null))};r(16);c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i.a,null,n.a.createElement(f,null))))},7:function(e,a,r){e.exports=r(18)}},[[7,2,1]]]);
//# sourceMappingURL=main.67312261.chunk.js.map