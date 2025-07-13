import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cursos {
  constructor() {}

  cursosUdemy = [
    {
      titulo: "Git e GitHub do básico ao avançado",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFmyQ7Q4LNKzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275789079?e=1752966000&v=beta&t=7HkjrfFdbuqm1kd6LLYokGifnUd8EkQL8hUHMSlmoxw",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/typescript-do-basico-ao-avancado"
    },
    {
      titulo: "Cyber Security",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQH9qeoHVq3oAA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275673244?e=1752969600&v=beta&t=VdFDMH3Kd4krU_YvlMwOxzciJC79OpfghbVP08fZAPU",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "AI-Assisted ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFvA-9t_QXiTw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734558926088?e=1752969600&v=beta&t=SKco-N4WOcNiKNkFJrUdV9QHI94K-jBpVTY3DfPyhmQ",
      plataforma: "Compass.uol",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Gen AI Technical ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQHV_ZWzZYzEoQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734559117026?e=1752969600&v=beta&t=BmxgE-e_7J7YIZZpgkRtynvLL9gi4I5OCVPLCX1DYKU",
      plataforma: "Compass.oul",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Inteligência Artificial e Java ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFLRo-lL04WTQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735321619181?e=1752969600&v=beta&t=VUv0KPxAVSc7B0FqCCjZ7YKsii1di-j8GmycdV1eBIw",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Metodologias Ágeis",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQErgc5Yceg7pg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734275570271?e=1752969600&v=beta&t=erL1mtMd0LPmG5VJlEuMoo-VVSI46qyWl0iHxWQjUEM",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java Web: Spring Boot",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQEcb1qBV2aJyg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735320143926?e=1752969600&v=beta&t=SvNUilaOa7Os_idByh4q3ZPotm3ePqXztL9JE3vbF_k",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java e Spring Framework",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQETAsG7fwhRvw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735321427530?e=1752969600&v=beta&t=z0TH1b_ge7hZ9gtfWJCObC45pGxCILdg0TkCMz_urts",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java e Orientação a Objetos",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQHoPftyetYpMA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735319585825?e=1752969600&v=beta&t=MjG0iFp0_AyFkFjR9ckZMjk_kK-o5etWs7HN9oh-T2c",
      plataforma: "Alura",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Banckend com java ",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQEyN-1NEXuboQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723149725117?e=1752969600&v=beta&t=gSmbInfOkliLB4M9boHhMIoBLQTz_kCivfT6VKP6wcU",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Java AI Powered",
      imagem: "https://hermes.dio.me/certificates/cover/H0S57ARY.jpg",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Decola Tech 2024",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFlrq7ibYm3dg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1705185965993?e=1752969600&v=beta&t=v1diBsb0Lud74Zevt8n0OX1IJPDKB3dfldOdRvSYFfA",
      plataforma: "Dio",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "JavaScript Basics for Beginners ",
      imagem: "https://media.licdn.com/dms/image/v2/D4E2DAQHw6vjT0f6W_w/profile-treasury-document-images_800/B4EZdDUI15HcAo-/1/1749181043367?e=1753315200&v=beta&t=udq9AX_avL0GZjL4v27H-uIGFp7d0KU9LHVLqhaYIBI",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "NestJS_ The Complete",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQG8_A9FrhHGSA/profile-treasury-document-images_800/B4DZdDKkxIGUAo-/1/1749178536283?e=1753315200&v=beta&t=wliL5RXdZhxGRvH3UD5Yhy16lTaI2OEnw8RBNX3WS2k",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Node.js, Express, MongoDB",
      imagem: "https://media.licdn.com/dms/image/v2/D4E2DAQELFWxG1PHMRw/profile-treasury-document-images_800/B4EZdDUU2QG4Aw-/1/1749181092562?e=1753315200&v=beta&t=J66qw4RvAthwIqp1ML1CMC3HIyuQV6QurTIA3Da1x2w",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    },
    {
      titulo: "Understanding TypeScript",
      imagem: "https://media.licdn.com/dms/image/v2/D4D2DAQFN-SdA25WrFg/profile-treasury-document-images_800/B4DZdDLrMwH4Ak-/1/1749178824671?e=1753315200&v=beta&t=JIUL70RdZtdJSxzMF6cWM3936Cl46V_SE3kO8np0dV8",
      plataforma: "Udemy",
      link: "https://www.udemy.com/course/nestjs-fundamentos/"
    }
  ];

  getCursosUdemy() {
    return this.cursosUdemy;
  }
}
