"use client";

import React, { useState, useEffect } from "react";
import {
 Code,
 Smartphone,
 Cloud,
 Database,
 Menu,
 X,
 Linkedin,
 Mail,
 ArrowRight,
 CheckCircle,
 Globe,
 Cpu
} from 'lucide-react';

// Función para manejar el desplazamiento suave
const smoothScroll = (event, targetId) => {
 event.preventDefault();
 const targetElement = document.querySelector(targetId);
 if (targetElement) {
   // Calcular la posición a desplazar, ajustando por la altura de la barra de navegación fija
   const offset = 80; // Ajuste para la altura de la navbar
   const bodyRect = document.body.getBoundingClientRect().top;
   const elementRect = targetElement.getBoundingClientRect().top;
   const elementPosition = elementRect - bodyRect;
   const targetPosition = elementPosition - offset;

   window.scrollTo({
     top: targetPosition,
     behavior: 'smooth'
   });
 }
};


const Navbar = ({ isScrolled }) => {
 const [isOpen, setIsOpen] = useState(false);

 const navLinks = [
   { name: 'Home', href: '#home' },
   { name: 'Services', href: '#services' },
   { name: 'About', href: '#about' },
   { name: 'Portfolio', href: '#portfolio' },
   // Eliminado el tab de Contact
 ];

 return (
   <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
     <div className="container mx-auto px-6 flex justify-between items-center">
       {/* LOGO: Componente React <Deivay /> */}
       <a
         href="#home" // El logo también usa smooth scroll para ir a #home
         className="flex items-center gap-1 text-indigo-600 cursor-pointer"
         onClick={(e) => smoothScroll(e, '#home')}
       >
         <span className="text-3xl font-light text-slate-400">&lt;</span>
         <span className="text-2xl font-bold">Deivay</span>
         <span className="text-3xl font-light text-slate-400">/&gt;</span>
       </a>

       {/* Desktop Menu */}
       <div className="hidden md:flex space-x-8 items-center">
         {navLinks.map((link) => (
           <a
             key={link.name}
             href={link.href}
             className={`text-sm font-medium hover:text-indigo-600 transition-colors cursor-pointer ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}
             onClick={(e) => smoothScroll(e, link.href)} // Aplicamos smooth scroll aquí
           >
             {link.name}
           </a>
         ))}
         {/* Main CTA: Renombrado a "Let's Connect" y apuntando a #contact */}
         <a
           href="#contact"
           className="bg-indigo-600 text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
           onClick={(e) => {smoothScroll(e, '#contact'); setIsOpen(false);}} // Aplicamos smooth scroll aquí
         >
           Let's Connect
         </a>
       </div>

       {/* Mobile Menu Button */}
       <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
         {isOpen ? <X /> : <Menu />}
       </button>
     </div>

     {/* Mobile Menu Overlay */}
     {isOpen && (
       <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
         {navLinks.map((link) => (
           <a
             key={link.name}
             href={link.href}
             className="text-slate-700 font-medium hover:text-indigo-600"
             onClick={(e) => {smoothScroll(e, link.href); setIsOpen(false);}} // Aplicamos smooth scroll y cerramos menú
           >
             {link.name}
           </a>
         ))}
         {/* CTA móvil: Renombrado y apuntando a #contact */}
         <a
           href="#contact"
           className="text-indigo-600 font-medium hover:text-indigo-700 pt-2 border-t border-slate-100"
           onClick={(e) => {smoothScroll(e, '#contact'); setIsOpen(false);}} // Aplicamos smooth scroll y cerramos menú
         >
           Let's Connect
         </a>
       </div>
     )}
   </nav>
 );
};

const Hero = () => {
 return (
   <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
     <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
     <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

     <div className="container mx-auto px-6 relative z-10">
       <div className="max-w-4xl mx-auto text-center">
         <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 font-semibold text-sm">
           🚀 Elevating Business Through Technology
         </div>
         <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
           Building the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Software</span>
         </h1>
         <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
           Deivay specializes in delivering high-performance software solutions tailored to your unique business needs. From scalable web apps to complex cloud architectures.
         </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* CTA "Start Your Project" ahora va a #contact (Let's Connect) */}
           <a href="#contact"
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2"
              onClick={(e) => smoothScroll(e, '#contact')}
           >
             Start Your Project <ArrowRight className="w-4 h-4" />
           </a>
           <a href="#portfolio"
              className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
              onClick={(e) => smoothScroll(e, '#portfolio')}
           >
             View Our Work
           </a>
         </div>
       </div>

       <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
         {/* Partner Logos / Tech Stack Placeholders */}
         {['React', 'Node.js', 'Python', 'AWS'].map((tech) => (
           <div key={tech} className="flex items-center justify-center gap-2 font-bold text-xl text-slate-400">
              <Cpu className="w-6 h-6" /> {tech}
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

const Services = () => {
 const services = [
   {
     icon: <Globe className="w-10 h-10 text-indigo-500" />,
     title: 'Web Development',
     description: 'Custom, responsive websites and web applications built with modern frameworks like React and Next.js.',
   },
   {
     icon: <Smartphone className="w-10 h-10 text-blue-500" />,
     title: 'Mobile Apps',
     description: 'Native and cross-platform mobile solutions for iOS and Android that provide seamless user experiences.',
   },
   {
     icon: <Cloud className="w-10 h-10 text-sky-500" />,
     title: 'Cloud Solutions',
     description: 'Scalable cloud infrastructure design, migration, and management using AWS, Azure, or Google Cloud.',
   },
   {
     icon: <Database className="w-10 h-10 text-violet-500" />,
     title: 'Backend & API',
     description: 'Robust server-side architecture and secure API development to power your digital ecosystem.',
   },
 ];

 return (
   <section id="services" className="py-24 bg-white">
     <div className="container mx-auto px-6">
       <div className="text-center mb-16">
         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
         <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
         <p className="text-slate-600 max-w-2xl mx-auto">
           We don't just write code; we build solutions. Our comprehensive suite of services ensures your digital presence is powerful, secure, and scalable.
         </p>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         {services.map((service, index) => (
           <div key={index} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
             <div className="mb-6 bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
               {service.icon}
             </div>
             <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
             <p className="text-slate-600 leading-relaxed text-sm">
               {service.description}
             </p>
           </div>
         ))}
       </div>
     </div>
   </section>
 );
};

const About = () => {
 return (
   <section id="about" className="py-24 bg-slate-50">
     <div className="container mx-auto px-6">
       <div className="flex flex-col lg:flex-row items-center gap-16">
         <div className="lg:w-1/2 relative">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <img
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
               alt="Team working"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-indigo-900/10 mix-blend-multiply"></div>
           </div>
           {/* Stats Card */}
           <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
             <div className="flex flex-col gap-4">
               <div className="text-center">
                 <span className="block text-4xl font-bold text-indigo-600">5+</span>
                 <span className="text-sm text-slate-500 font-medium">Years Experience</span>
               </div>
               <div className="w-full h-px bg-slate-100"></div>
               <div className="text-center">
                 <span className="block text-4xl font-bold text-indigo-600">100%</span>
                 <span className="text-sm text-slate-500 font-medium">Client Satisfaction</span>
               </div>
             </div>
           </div>
         </div>

         <div className="lg:w-1/2">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About Deivay</h2>
           <p className="text-slate-600 text-lg leading-relaxed mb-6">
             Deivay is a premier software development agency dedicated to helping businesses navigate the digital landscape. We believe in the power of code to solve real-world problems.
           </p>
           <p className="text-slate-600 leading-relaxed mb-8">
             Our approach is simple: understand the business goal first, then apply the technology. Whether you are a startup looking for an MVP or an enterprise needing a system overhaul, we bring the same level of passion and precision to every project.
           </p>
          
           <div className="space-y-4 mb-8">
             {['Agile Methodology', 'Clean & Maintainable Code', 'User-Centric Design'].map((item) => (
               <div key={item} className="flex items-center gap-3">
                 <CheckCircle className="w-6 h-6 text-green-500" />
                 <span className="font-medium text-slate-800">{item}</span>
               </div>
             ))}
           </div>

           {/* Link "Learn more about us" ya apunta a #contact */}
           <a href="#contact"
              className="text-indigo-600 font-bold hover:text-indigo-700 inline-flex items-center gap-2"
              onClick={(e) => smoothScroll(e, '#contact')}
           >
             Learn more about us <ArrowRight className="w-4 h-4" />
           </a>
         </div>
       </div>
     </div>
   </section>
 );
};

const Portfolio = () => {
 const projects = [
   {
     title: 'ClassWallet',
     category: 'Fintech & EdTech Platform',
     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     description: 'A leading digital wallet solution for public funds, enabling K-12 and state agencies to track spending and automate reimbursements.',
     link: 'https://classwallet.com/' // Added link
   },
   {
     title: 'City Furniture',
     category: 'Enterprise E-Commerce',
     image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     description: 'High-performance headless e-commerce architecture featuring real-time inventory, 3D visualization, and seamless omnichannel user journeys.',
     link: 'https://www.cityfurniture.com/' // Added link
   },
   {
     title: 'Nowports',
     category: 'Digital Freight Forwarding',
     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     description: 'Engineered the real-time container tracking module for LatAm\'s leading digital freight forwarder, providing automated visibility for global cargo shipments.',
     link: 'https://nowports.com/' // Added link
   }
 ];

 return (
   <section id="portfolio" className="py-24 bg-white">
     <div className="container mx-auto px-6">
       <div className="flex flex-col md:flex-row justify-between items-end mb-12">
         <div className="max-w-xl">
           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
           <p className="text-slate-600">
             A glimpse into the innovative solutions we've delivered for our partners across various industries.
           </p>
         </div>
         {/* CTA "Start a Project" ahora va a #contact (Let's Connect) */}
         <a href="#contact"
            className="hidden md:flex items-center gap-2 text-indigo-600 font-bold hover:underline mt-4 md:mt-0"
            onClick={(e) => smoothScroll(e, '#contact')}
         >
           Start a Project <ArrowRight className="w-4 h-4" />
         </a>
       </div>

       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {projects.map((project, index) => (
           <a
             key={index}
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             className="group relative overflow-hidden rounded-2xl shadow-lg bg-slate-900 block"
           >
             <img
               src={project.image}
               alt={project.title}
               // Opacidad base más baja (40%) en mobile para mejor contraste de texto.
               // Opacidad más alta (80%) en desktop, y se reduce en hover.
               className="w-full h-72 object-cover opacity-40 md:opacity-80 group-hover:opacity-40 transition-opacity duration-300"
             />
             <div
               // translate-y-0 en mobile para que el texto sea siempre visible.
               // translate-y-4 en desktop para ocultarse hasta el hover.
               className="absolute inset-0 flex flex-col justify-end p-8 translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
             >
               <span
                 // Ocultamos el category en mobile (hidden) y lo mostramos en desktop (md:block).
                 className="text-indigo-300 text-sm font-bold mb-2 uppercase tracking-wider hidden md:block"
               >
                 {project.category}
               </span>
               <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
               <p
                 // opacity-100 en mobile para que la descripción sea siempre visible.
                 // opacity-0 en desktop para ocultarse hasta el hover.
                 className="text-slate-300 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"
               >
                 {project.description}
               </p>
             </div>
           </a>
         ))}
       </div>
      
       <div className="mt-8 text-center md:hidden">
         {/* CTA "Start a Project" ahora va a #contact (Let's Connect) */}
         <a href="#contact"
            className="inline-flex items-center gap-2 text-indigo-600 font-bold"
            onClick={(e) => smoothScroll(e, '#contact')}
         >
           Start a Project <ArrowRight className="w-4 h-4" />
         </a>
       </div>
     </div>
   </section>
 );
};

const Contact = () => {
 return (
   <section id="contact" className="py-24 bg-slate-50">
     <div className="container mx-auto px-6 text-center">
       <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
       <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full mb-6"></div>
       <p className="text-slate-600 max-w-2xl mx-auto mb-12">
         We are always open to new projects and collaborations. Reach out to discuss your next big idea.
       </p>
      
       <div className="flex justify-center flex-wrap gap-12 sm:gap-16">
         {/* LinkedIn for David Paley - Founder */}
         <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
           <a href="https://www.linkedin.com/in/davidpaley11/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700 transition-colors">
             <Linkedin className="w-10 h-10 mb-2" />
           </a>
           <p className="font-semibold text-slate-800">David Paley</p>
           <p className="text-sm text-slate-500">Founder</p>
         </div>
        
         {/* Placeholder for Email */}
         <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
           <a href="mailto:info@deivay.com" className="text-indigo-600 hover:text-indigo-700 transition-colors">
             <Mail className="w-10 h-10 mb-2" />
           </a>
           <p className="font-semibold text-slate-800">Email Us</p>
           <p className="text-sm text-slate-500">info@deivay.com</p>
         </div>

         {/* Removed Placeholder for GitHub as requested */}
       </div>
     </div>
   </section>
 );
};


const Footer = () => {
 return (
   <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
     <div className="container mx-auto px-6">
       <div className="flex flex-col md:flex-row justify-between items-center">
         {/* LOGO: Componente React <Deivay /> */}
         <div className="flex items-center gap-1 mb-4 md:mb-0 text-white">
           <span className="text-xl font-light text-slate-400">&lt;</span>
           <span className="text-2xl font-bold">Deivay</span>
           <span className="text-xl font-light text-slate-400">/&gt;</span>
         </div>
         <div className="text-sm text-center md:text-right">
           &copy; {new Date().getFullYear()} Deivay Software Services. All rights reserved.
         </div>
       </div>
     </div>
   </footer>
 );
};

const HomePage = () => {
 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 20);
   };
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
   <div className="font-sans antialiased text-slate-800 selection:bg-indigo-100 selection:text-indigo-700">
     <Navbar isScrolled={isScrolled} />
     <Hero />
     <Services />
     <About />
     <Portfolio />
     <Contact />
     <Footer />
   </div>
 );
};

export default HomePage;
