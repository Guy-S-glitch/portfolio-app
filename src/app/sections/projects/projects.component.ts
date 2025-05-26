import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollingModule, SafeUrlPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  constructor() {}
  selectedPreviewUrl: string | null = null;

  projects = [
    {
      name: 'Portfolio Website',
      description:
        'personal portfolio built with Angular. Designed to showcase projects, skills, and experience with a minimalist layout.',
      technologies: ['Angular', 'CSS', 'HTML'],
      previewUrl: ' ',
      sourceUrl: 'https://github.com/Guy-S-glitch/portfolio-app',
    },
    {
      name: 'Shopping List - Recipe Book',
      description:
        'My first Angular project, focused on learning the framework fundamentals as a foundation for future independent projects.',
      technologies: ['Angular', 'CSS', 'HTML', 'Firebase'],
      previewUrl: 'assets/videos/shopping list.mp4',
      sourceUrl: 'https://github.com/Guy-S-glitch/Shoping-list-Recipe-Book',
    },
    {
      name: 'House Finance Manager',
      description:
        'A C# WinForms application for managing family finances, featuring a virtual house with customizable residents, income, expenses, and visual financial insights.',
      technologies: ['C#', 'MySQL'],
      previewUrl: ' ',
      sourceUrl: 'https://github.com/Guy-S-glitch/House-Finance-Manager',
    },
    {
      name: 'Bombs & Rockets game',
      description:
        'A C# console game inspired by Snakes and Ladders, featuring rockets that boost progress and bombs that cause setbacks.',
      technologies: ['C#'],
      previewUrl: ' ',
      sourceUrl: 'https://github.com/Guy-S-glitch/BombRocketGame',
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
      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/folders/1hfa5ezny00AOpq-23K9BCG1LlXaFHZIM?usp=drive_link',
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
      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1mBzDCJYQxKFqWNn0tdRIJKo0lkTNYlum',
    },
    {
      name: 'Electronics Lab Projects',
      description:
        'Hands-on lab projects including circuit analysis, Arduino prototyping, and Multisim simulations. Documented with progress reports and multimeter measurements.',
      technologies: ['Arduino', 'Multisim', 'Circuit Design', 'Electronics'],
      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/10nw01I4RCbZngE40G62oDGrdGkTsuk8G',
    },
    {
      name: 'Python Numeric Input Utilities',
      description:
        'A collection of Python scripts designed to practice input validation and perform basic mathematical operations on user-provided numbers.',
      technologies: ['Python', 'Input Validation', 'Control Flow'],

      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1VEa5b8ZsT38ycqIvzYDVJ_r3IrNCo079',
    },
    {
      name: '4-to-1 Multiplexer in VHDL',
      description:
        'A simple 4-to-1 multiplexer implemented in VHDL using behavioral architecture with select signals and conditional assignment.',
      technologies: ['VHDL', 'Quartus', 'FPGA'],
      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1ub4pHUlD_3hQP14_AsormRpCaxOUkbz_',
    },
    {
      name: 'Signal Processing - Time-Domain Transformations',
      description:
        'A project focused on applying core signal processing techniques such as time shifting, time reversal, and time scaling.',
      technologies: ['Signal Processing', 'MATLAB', 'Time-Domain Analysis'],
      previewUrl: '',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/16tQMRIS5TcbVeD84cauBC8oqbDFISOQ0',
    },

    // Add more projects as needed
  ];
  openPreview(url: string) {
    this.selectedPreviewUrl = url;
  }

  closePreview() {
    this.selectedPreviewUrl = null;
  }
  ngOnInit() {}
}
