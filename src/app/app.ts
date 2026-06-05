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
}