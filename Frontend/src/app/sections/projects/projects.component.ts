import { Component, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';
import { Project } from './Project';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollingModule, SafeUrlPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  constructor() {}

  sarcasticNote: string | null = null;
  typedNote: string = '';
  typingInterval: any;
  selectedImages: string[] = [];
  selectedVideo: string | null = null;
  currentImageIndex = 0;
  projects: Project[] = [
    {
      name: 'Portfolio Website',
      description:
        'personal portfolio built with Angular. Designed to showcase projects, skills, and experience with a minimalist layout.',
      technologies: ['Angular', 'CSS', 'HTML'],
      sourceUrl: 'https://github.com/Guy-S-glitch/portfolio-app',
      isSelf: true,
    },
    {
      name: 'Shopping List - Recipe Book',
      description:
        'My first Angular project, focused on learning the framework fundamentals as a foundation for future independent projects.',
      technologies: ['Angular', 'CSS', 'HTML', 'Firebase'],
      videoUrl: 'assets/videos/project videos/shopping list.mp4',
      sourceUrl: 'https://github.com/Guy-S-glitch/Shoping-list-Recipe-Book',
    },
    {
      name: 'House Finance Manager',
      description:
        'A C# WinForms application for managing family finances, featuring a virtual house with customizable residents, income, expenses, and visual financial insights.',
      technologies: ['C#', 'MySQL'],
      videoUrl: 'assets/videos/project videos/house finance managment.mp4',
      sourceUrl: 'https://github.com/Guy-S-glitch/House-Finance-Manager',
    },
    {
      name: 'Bombs & Rockets game',
      description:
        'A C# console game inspired by Snakes and Ladders, featuring rockets that boost progress and bombs that cause setbacks.',
      technologies: ['C#'],
      videoUrl: 'assets/videos/project videos/Bomb & Rocket gameplay.mp4',
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
      videoUrl: 'assets/videos/project videos/smart house.MOV',
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
      videoUrl: 'assets/videos/project videos/Facial Expression & Behavior Analysis.webm',
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1mBzDCJYQxKFqWNn0tdRIJKo0lkTNYlum',
    },
    {
      name: 'Electronics Lab Projects',
      description:
        'Hands-on lab projects including circuit analysis, Arduino prototyping, and Multisim simulations. Documented with progress reports and multimeter measurements.',
      technologies: ['Arduino', 'Multisim', 'Circuit Design', 'Electronics'],
      images: [
        'assets/images/projects images/Electrical Circuits/ammeter.webp',
        'assets/images/projects images/Electrical Circuits/Full-Wave Rectifier.webp',
        'assets/images/projects images/Electrical Circuits/Oscillator.webp',
        'assets/images/projects images/Electrical Circuits/Schmitt Trigger 1.webp',
        'assets/images/projects images/Electrical Circuits/Schmitt Trigger 1.webp',
      ],
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/10nw01I4RCbZngE40G62oDGrdGkTsuk8G',
    },
    {
      name: 'Python Input Utilities',
      description:
        'A collection of Python scripts designed to practice input validation and perform basic mathematical operations on user-provided numbers.',
      technologies: ['Python', 'Input Validation', 'Control Flow'],

      images: [
        'assets/images/projects images/python/employ management.webp',
        'assets/images/projects images/python/find average.webp',
        'assets/images/projects images/python/find max and min.webp',
        'assets/images/projects images/python/higher or lower than 50.webp',
      ],
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1VEa5b8ZsT38ycqIvzYDVJ_r3IrNCo079',
    },
    {
      name: '4-to-1 Multiplexer in VHDL',
      description:
        'A simple 4-to-1 multiplexer implemented in VHDL using behavioral architecture with select signals and conditional assignment.',
      technologies: ['VHDL', 'Quartus', 'FPGA'],
      images: [
        'assets/images/projects images/vhdl/code.webp',
        'assets/images/projects images/vhdl/design.webp',
        'assets/images/projects images/vhdl/output.webp',
      ],
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/1ub4pHUlD_3hQP14_AsormRpCaxOUkbz_',
    },
    {
      name: 'Signal Processing - Time-Domain Transformations',
      description:
        'A project focused on applying core signal processing techniques such as time shifting, time reversal, and time scaling.',
      technologies: ['Signal Processing', 'MATLAB', 'Time-Domain Analysis'],
      images: [
        'assets/images/projects images/signal prosessing/exponential function.webp',
        'assets/images/projects images/signal prosessing/sinc function.webp',
        'assets/images/projects images/signal prosessing/sine and cosine in different frequency.webp',
      ],
      sourceUrl:
        'https://drive.google.com/drive/u/0/folders/16tQMRIS5TcbVeD84cauBC8oqbDFISOQ0',
    },
  ];
  openPreview(project: Project) {
    this.selectedVideo = project.videoUrl || null;
    this.selectedImages = project.images || [];
    this.currentImageIndex = 0;
    const sarcasticMessages = [
      'Bold move. Previewing the portfolio app *inside* the portfolio app.',
      'This is peak recursion. Careful, you might break the internet.',
      "You're in the matrix now.",
      'Inception-level stuff. Portfolio within a portfolio?',
      "Preview the portfolio? You mean this thing you're looking at right now?",
      'Ah yes, preview the app... while using the app. Genius.',
      'Meta. You’re previewing the portfolio… from inside the portfolio.',
    ];

    if (project.isSelf) {
      this.sarcasticNote =
        sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
      this.typedNote = '';
      clearInterval(this.typingInterval);
      let index = 0;

      this.typingInterval = setInterval(() => {
        if (index < this.sarcasticNote!.length) {
          this.typedNote += this.sarcasticNote![index];
          index++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, 40); // Speed of typing (ms per character)
    } else {
      this.sarcasticNote = null;
      this.typedNote = '';
    }
  }

  closePreview() {
    this.selectedImages = [];
    this.selectedVideo = null;
    this.sarcasticNote = null;

    this.typedNote = '';
    clearInterval(this.typingInterval);
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.selectedImages.length;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.selectedImages.length) %
      this.selectedImages.length;
  }

  ngOnInit() {}
}
