first install routes, fontawasome,bootstarp,swiper-slider using the commonds:
- npm i react-router-dom
for fontawasome
- npm i --save @fortawesome/fontawesome-svg-core
- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/free-regular-svg-icons
- npm i --save @fortawesome/free-brands-svg-icons
- npm i --save @fortawesome/react-fontawesome@latest
  
then import some commond in app.js
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { fab } from '@fortawesome/free-brands-svg-icons'
    import { fas } from '@fortawesome/free-solid-svg-icons'
    import { far } from '@fortawesome/free-regular-svg-icons'

then in the last in app.js 
    export default App;
    library.add(fab, fas, far)

for bootstrap 
- npm install bootstrap
  
and import the commond in index.js in src file in the frontend
    import 'bootstrap/dist/css/bootstrap.min.css';
    import 'bootstrap/dist/js/bootstrap.bundle.min';

for swiper slider 
- npm install swiper

install npm install jquery fancybox
 for gallery in the about section

install toast
npm install react-toastify

