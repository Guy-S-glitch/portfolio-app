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
      description:
        'personal portfolio built with Angular. Designed to showcase projects, skills, and experience with a minimalist layout.',
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
    {
      name: 'Smart Home System',
      description:
        'A smart home project with multiple sensors and a web interface for remote control, real-time monitoring, and chat-based interaction. detects hazards like gas leaks, fire, and break-ins, sending instant alerts to enhance safety.',
      technologies: [
        'Sensors',
        'Arduino',
        'C',
        'PHP',
        'Xampp',
        'HTML',
        'CSS',
        'JavaScript',
        'Python',
      ],
      image: 'assets/images/smart-home.png',
      previewUrl: '',
      sourceUrl: 'https://github.com/yourusername/smart-home-system',
    },
    {
      name: 'Facial Expression & Behavior Analysis',
      description:
        "A Python-based project that processes an interview video to analyze the subject's facial expressions, movements, and eye contact.",
      technologies: [
        'Python',
        'OpenCV',
        'HTML',
        'CSS',
        'Facial Recognition',
        'PHP',
        'Xampp',
      ],
      image: 'assets/images/facial-analysis.png',
      previewUrl: '',
      sourceUrl: 'https://github.com/yourusername/facial-expression-analysis',
    },
    {
      name: 'Electronics Lab Projects',
      description:
        'Hands-on lab projects including circuit analysis, Arduino prototyping, and Multisim simulations. Documented with progress reports and multimeter measurements.',
      technologies: ['Arduino', 'Multisim', 'Circuit Design', 'Electronics'],
      image: 'assets/images/electronics_lab.jpg',
      previewUrl: '',
      sourceUrl: '',
    },
    {
      name: 'Python Numeric Input Utilities',
      description:
        'A collection of Python scripts designed to practice input validation and perform basic mathematical operations on user-provided numbers.',
      technologies: ['Python', 'Input Validation', 'Control Flow'],
      image: 'assets/images/python_experiences.jpg',
      previewUrl: '',
      sourceUrl: 'https://github.com/yourusername/python-experiences',
    },
    {
      name: '4-to-1 Multiplexer in VHDL',
      description:
        'A simple 4-to-1 multiplexer implemented in VHDL using behavioral architecture with select signals and conditional assignment.',
      technologies: ['VHDL', 'Quartus', 'FPGA'],
      image: 'assets/images/vhdl_design.jpg',
      previewUrl: '',
      sourceUrl: '',
    },
    {
      name: 'Signal Processing - Time-Domain Transformations',
      description:
        'A project focused on applying core signal processing techniques such as time shifting, time reversal, and time scaling.',
      technologies: ['Signal Processing', 'MATLAB', 'Time-Domain Analysis'],
      image: 'assets/images/signal_processing.jpg',
      previewUrl: '',
      sourceUrl: '',
    },

    // Add more projects as needed
  ];

  ngOnInit() {}
}
