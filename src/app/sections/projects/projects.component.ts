import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollingModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  projects = [
    {
      name: 'Portfolio Website',
      description: 'A personal portfolio website built with Angular and SCSS.',
      technologies: ['Angular', 'CSS', 'HTML'],
      image: 'assets/images/portfolio.png',
      previewUrl: 'https://yourportfolio.com',
      sourceUrl: 'https://github.com/yourusername/portfolio',
    },
    {
      name: 'Shopping List - Recipe Book',
      description:
        'My first Angular project, focused on learning the framework fundamentals as a foundation for future independent projects.',
      technologies: ['Angular', 'CSS', 'HTML', 'Firebase'],
      image: 'assets/images/ecommerce.png',
      previewUrl: 'https://yourecommerceapp.com',
      sourceUrl: 'https://github.com/yourusername/ecommerce-app',
    },
    {
      name: 'House Finance Manager',
      description:
        'A C# WinForms application for managing family finances, featuring a virtual house with customizable residents, income, expenses, and visual financial insights.',
      technologies: ['C#', 'MySQL'],
      image: 'assets/images/ecommerce.png',
      previewUrl: 'https://yourecommerceapp.com',
      sourceUrl: 'https://github.com/yourusername/ecommerce-app',
    },
    {
      name: 'Bombs & Rockets game',
      description:
        'A C# console game inspired by Snakes and Ladders, featuring rockets that boost progress and bombs that cause setbacks.',
      technologies: ['C#'],
      image: 'assets/images/ecommerce.png',
      previewUrl: 'https://yourecommerceapp.com',
      sourceUrl: 'https://github.com/yourusername/ecommerce-app',
    },
    // Add more projects as needed
  ];

  ngOnInit() {}
}
