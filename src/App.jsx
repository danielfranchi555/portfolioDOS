import './App.css'
import 'primeflex/primeflex.scss';
import foto from './images/foto.png'
import premier from './images/premier.png'
import ph from './images/photoshop.png'
import after from './images/after.png'
import ReactPlayer from 'react-player'
import videoUno from './videos/1.mp4'
import videoDos from './videos/1.mp4'
import videoTres from './videos/1.mp4'
import videoCuatro from './videos/1.mp4'
import videoCinco from './videos/1.mp4'
import {
  motion,
} from "framer-motion"
function App() {
  
  const containerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { duration: 3, type: 'spring', stiffness: 120 },
    },
  };
  const containerVariantsDos = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: { duration: 5, type: 'spring', stiffness: 120 },
    },
  };

  return (
    <>
      <header class="flex w-full fixed top-0 z-1">
        <nav class="flex justify-content-between w-full navbar">
          <span class="logo cursor-pointer" onclick="scrollToSection('home')">
          </span>
          <input type="checkbox" aria-label="Checkbox para mostrar y quitar hamburger menu"
            class="checkbox xl:hidden" />
          <div class="hamburger__lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>
          <div class="header__info flex align-items-center gap-3">
            <ul class="flex flex-column xl:flex-row list-none">
              <li onclick="scrollToSection('about')">Sobre mí</li>
              <li onclick="scrollToSection('services')">Proyectos</li>
            </ul>
            <div class="hireMe__button pt-4">
              <a href="mailTo:danielfranchi3@gmail.com" aria-label="Enviar mensaje al correo"
                class="cursor-pointer no-underline border-round-lg text-xl xl:text-sm">Contratame</a>
            </div>
          </div>
        </nav>
      </header>
      <div class="container" style={{background:'linear-gradient(#332B47, #000000)'}}>
        <section id="home"
          class="home__page flex align-items-center justify-content-center xl\:justify-content-between grid grid-nogutter gap-4">
          <motion.div 
             variants={containerVariantsDos}
             initial="hidden"
             animate="visible"
          class="left__content col-12 xl:col-6">
            <div class="message__bubble triangle mb-4 md:mb-2">
              <div class="message__text p-2 sm:p-3 text-center">
                <p>Hola, Yo soy</p>
              </div>
            </div>
            <h1 class="text-3xl sm:text-5xl md:text-7xl">Daniel Franchi</h1>
            <p class="text-gray-700" style={{fontSize:'20px'}}>
              Video Editor
            </p>
            <div class="home__buttons flex align-items-center gap-2 mt-6">

              <button onclick="scrollToSection('portfolio')" aria-label="Deslizar a sección portafolio para mostrar mis trabajos"
                class="cursor-pointer border-round-lg">Mi Trabajo</button>
            </div>
          </motion.div>
          <motion.div
             variants={containerVariants}
             initial="hidden"
             animate="visible"
          class="right__content col-9 sm:col-6 xl:col-5">
            <img src={foto} alt="Foto perfil" width="100" height="100" />
          </motion.div>
        </section>
      </div>
      <section id="portfolio" class="portfolio min-h-full w-full pb-8 pt-8" >
        <div class="portfolio__title flex flex-column gap-3 text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1 class="text-3xl md:text-5xl">Mi trabajo</h1>
          <p class="text-gray-100 text-sm md:text-base" style={{ maxWidth: '300px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum odit ab mollitia optio quod

          </p>
        </div>
        <div class="portfolio__gallery" >
          <div class="gallery__categories mb-5 mt-5">
            <ul class="flex list-none flex-wrap justify-content-center gap-3">
              <li class="filter-item active" data-filter="all">Todos</li>
              <li class="filter-item " data-filter="gym">Gimnasio</li>
              <li class="filter-item " data-filter="tours__Web">Tours web</li>
              <li class="filter-item " data-filter="world__Tours">Inmobiliaria web</li>
              <li class="filter-item " data-filter="e__commerce">E-commerce</li>
            </ul>
          </div>
          <div class="proyect__gallery flex justify-content-center align-items-center flex-wrap gap-3">
            <div class="project__card tours__Web" >

              <ReactPlayer url={videoTres}
                width='100%'
                height='100%'
                controls
              />

            </div>
            <div class="project__card tours__Web" >
              <ReactPlayer url={videoCinco}
                width='100%'
                height='100%'
                controls
              />

            </div>
            <div class="project__card tours__Web" >

              <ReactPlayer url={videoCuatro}
                width='100%'
                height='100%'
                controls
              />

            </div>
            <div class="project__card tours__Web" >

              <ReactPlayer url={videoCuatro}
                width='100%'
                height='100%'
                controls
              />

            </div>
            <div class="project__card tours__Web" >

              <ReactPlayer url={videoCinco}
                width='100%'
                height='100%'
                controls
              />

            </div>
            <div class="project__card tours__Web" >

              <ReactPlayer url={videoUno}
                width='100%'
                height='100%'
                controls
              />

            </div>
          </div>
        </div>
      </section>

      {/* <!--FREE LANCER SECTION --> */}
      <section class="freelancer mb-4 mt-4 min-w-full flex flex-column justify-content-center align-items-center" style={{background:'linear-gradient(#332B47, #000000)'}}>
        <p class="text-sm">Tienes un proyecto en mente?</p>
        <h1 class="text-center">Estoy disponible como freelancer</h1>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        class="hireMe__button pt-4">
           <a href="mailTo:john@email.com" aria-label="Enviar mensaje al correo"
            class="cursor-pointer no-underline border-round-lg">Escríbeme</a>
        </motion.div>
      </section>
      {/* <!--SERVICES --> */}
      <div class="container">
        <section id="services" class="services min-h-full w-full pb-7" >
          <div class="services__title flex flex-column gap-3 text-center">
            <h1 class="text-3xl md:text-5xl">Softwares Edition</h1>
          </div>
          <div class="services__card w-full grid grid-nogutter mt-7 gap-5">
            <div class="card flex align-items-center col-12 sm:col-6 lg:col-4 gap-3 p-2">
              <img src={ph} style={{ width: '50px' }} alt="" />
              <div class="service__name">
                <p>Photoshop</p>
              </div>
            </div>
            <div class="card flex align-items-center col-12 sm:col lg:col-4 gap-3 p-2">
              <img src={premier} style={{ width: '50px' }} alt="" />
              <div class="service__name">
                <p>Adobe premier</p>
              </div>
            </div>
            <div class="card flex align-items-center col-12 sm:col-6 md:col-3 lg:col gap-3 p-2">
              <img src={after} style={{ width: '50px' }} alt="" />
              <div class="service__name">
                <p>After Effects</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!--PORTFOLIO --> */}

        <footer id="contact" class="min-h-full w-full flex grid col-12 justify-content-center pb-8 pt-8 lg:text-center">
          <div class="social__media col-12 md:col-4 flex flex-column justify-content-between">
            <h3>Redes sociales</h3>
            <p>Auténtico e innovador</p>
            <p>Desarrollo lo que necesitas, con un enfoque en usabilidad y rendimiento</p>
            <div class="social__mediaIcons mt-5 flex lg:justify-content-center gap-3">
              <a href="https://www.facebook.com" target="_blank" aria-label="Ir a facebook">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" aria-label="Ir a instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" aria-label="Ir a linkedin">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div class="contact col-12 sm:col-6 sm:pt-0 md:pt-2 md:col-4 flex flex-column justify-content-between md:align-items-center">
            <h3>Contacto</h3>
            <div class="phone__number flex align-items-center gap-2">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="email flex align-items-center gap-2">
              <i class="fa-solid fa-envelope"></i>
              <p>danielfranchi3@email.com</p>
            </div>
            <a href="mailTo:john@email.com"
              class="cursor-pointer text-center col-4 sm:col-6 xl:col-4 mt-3 no-underline border-round-lg">
              <span>
                <i class="fa-solid fa-message"></i>
              </span>Escríbeme
            </a>
          </div>
          <div class="my__services col-12 sm:col-6 sm:p-0 md:col-4 md:pt-2 md:align-items-center flex flex-column justify-content-between">
            <h3>Mis Servicios</h3>
            <p>Edicion de video</p>
            <p>Diseño de Miniaturas</p>
            <p>Diseñador UI /UX</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App