import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // para poder usar bucles en el HTML

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: '../styles.css'
})
export class App {
  // Datos del perfil
  storeName = '@TuEmprendimiento';
  storeBio = '✨ Diseños exclusivos | Showroom en Tandil 📍\nEnvíos a todo el país 🚀';

  // Lista dinámica de enlaces
  links = [
    {
      title: 'Pedir por WhatsApp (Atención Inmediata)',
      url: 'https://wa.me/tu-numero',
      icon: 'fa-brands fa-whatsapp',
      class: 'btn-whatsapp'
    },
    {
      title: 'Ver Catálogo de Productos',
      url: '#',
      icon: 'fa-solid fa-book-open',
      class: 'btn-catalog'
    },
    {
      title: 'Cómo llegar al Showroom',
      url: '#',
      icon: 'fa-solid fa-location-dot',
      class: 'btn-location'
    },
    {
      title: 'Link de Pago / Señas',
      url: '#',
      icon: 'fa-solid fa-credit-card',
      class: 'btn-mercadopago'
    }
  ];
  // Lista dinámica para el Feed de Productos (Estilo Instagram) con fotos ramdom para muestra
  products = [
    { title: 'Producto 1', imageUrl: 'https://picsum.photos/500/500?random=1', price: '$4.500' },
    { title: 'Producto 2', imageUrl: 'https://picsum.photos/500/500?random=2', price: '$6.200' },
    { title: 'Producto 3', imageUrl: 'https://picsum.photos/500/500?random=3', price: '$3.800' },
    { title: 'Producto 4', imageUrl: 'https://picsum.photos/500/500?random=4', price: '$7.500' },
    { title: 'Producto 5', imageUrl: 'https://picsum.photos/500/500?random=5', price: '$5.000' },
    { title: 'Producto 6', imageUrl: 'https://picsum.photos/500/500?random=6', price: '$8.900' }
  ];
}