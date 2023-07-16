export const data = [
  {
    slug: 'ui-ux-design',
    banner: {
      title: 'UI/UX Design',
      subtitle:
        "Siz foydalanuvchilar uchun qulay veb-saytlar va ilovalarni ishlab chiqish va ularni turli qurilmalarga moslashtirishni o'rganasiz. Qanday qilib kuchli mahsulotlarni yaratishni tushuning.",
      // subtitle:
      //   'You will learn how to develop user-friendly websites and applications and adapt them to different devices. Understand how to create powerful products.',
      bannerBg: '/images/uiux_bg.png',
      bannerImage: '/images/banner_singlepage_uiux.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '4 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'yangi boshlovchilar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/blog1.png',
        title: "IT sohasiga ilk qadam qo'yayotganlar uchun",
        //title: 'Who is starting his career in IT',
        subtitle:
          "Agar IT sohasida boshlang'ich bilimga ega bo'lmasangiz ham, biz hammasini 0 dan o'rgatamiz."
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      // {
      //   id: 0,
      //   img: "/images/teachers_img1.png",
      //   name: "Azizbek Bahodirov",
      //   title: "Senior UI/UX dizayner, ish tajribasi 4 yil",
      //   projects: [
      //     { id: 0, img: "/images/teachers_logo_mytaxi.png" },
      //     { id: 1, img: "/images/teachers_logo_express24.png" },
      //   ],
      // },
      {
        id: 1,
        img: '/images/teacher_design.png',
        name: 'Dilorom Alieva',
        title: 'Senior UI/UX Designer, Ish tajriba 2 yil',
        subtitle:
          'Strong Middle UI/UX designer, more than 1 year of work experience. Successful projects: Iman, Astrum, Rasta, Tarnov, Ipotekauz, Zuzu.',
        projects: [
          { id: 0, img: '/images/teachers_logo_iman.png' },
          { id: 1, img: '/images/teachers_logo_astrum.png' },
          { id: 2, img: '/images/teachers_logo_rasta.png' },
          { id: 3, img: '/images/teachers_logo_tarnov.png' },
          { id: 4, img: '/images/teachers_logo_ipotekauz.png' },
          { id: 5, img: '/images/teachers_logo_zuzu.png' }
        ]
      }
    ],
    program: [
      {
        id: 0,
        title: 'Figma',
        types: [
          'UI/UX dizaynerning asosiy ish quroli bilan tanishish',
          'Figma boshqa instrumentlardan qanday farq qilishini bilib oling',
          "Dastur bo'yicha maslahatlarni qayerdan qidirish kerakligini aniqlang",
          'Geometrik jismlarni yaratish va tahrirlashni tushunish',
          "Tasvirlarni qayta ishlashni o'rganish",
          "Figmada qanday turdagi ob'ektlar borligini va komponentlar kutubxonasi nima ekanligini bilib oling",
          'Figmada Grid bilan ishlash',
          "Figma'da matn bilan ishlashni va qanday xatolardan qochish kerakligini bilib oling",
          "To'ldirish va chiziqdan qanday foydalanishni tushunish",
          'Birinchi ekraningizni chizing'
          // 'Introduction of the main working tools of a UI/UX designer',
          // 'Find out how Figma differs from other instruments',
          // 'Find out where to look for program guide',
          // 'Understand the creation and editing of geometric items',
          // 'Learning to process images',
          // 'Learn what types of objects are in Figma and what the component libraries are',
          // 'Working with the Grid in Figma',
          // 'Learn how to work with text and avoid mistakes in Figma',
          // 'Understanding how to use fill and dash',
          // 'Draw your first screen',
        ]
      },
      {
        id: 1,
        title: 'Dizayn asoslari',
        //title: 'Basics of design',
        typesGroup: [
          {
            id: 0,
            title: 'Tarkibi',
            //title: 'Content',
            subTypes: [
              'Kompozitsiya, uning qoidalari va texnikasi bilan tanishing',
              "To'rlarning qanday turlari ekanligini bilib oling",
              "Figmada grid o'rnatishni o'rganing",
              'Vazifangiz uchun optimal gridni qanday tanlashni tushuning',
              'Kompozitsiyadagi muvozanat va muvozanat tushunchalari bilan tanishish'
              // 'Introduction composition, its rules and techniques',
              // 'Find out what types of nets there are',
              // 'Learn how to set up a grid in Figma',
              // 'Understand how to choose the optimal grid for your task',
              // 'Introduction the concepts of balance and equilibrium in composition',
            ]
          },
          {
            id: 1,
            title: 'Ranglar',
            //title: 'Colors',
            subTypes: [
              "Ittenning rang g'ildiragi bilan tanishing",
              "Uyg'un ranglar kombinatsiyasini izlashni o'rganing",
              "RGB va CMYK farqlarini o'rganing",
              "Kompaniyalarning ko'rsatmalari bilan qanday ishlashni tushunish"
              // "Check out Itten's color wheel",
              // 'Learn to look for harmonious color combinations',
              // 'Learn difference between RGB and CMYK',
              // "Understanding how to work with companies' guidelines",
            ]
          },
          {
            id: 2,
            title: 'Tipografiya',
            //title: 'Typography',
            subTypes: [
              'Tipografiya bilan tanishing',
              'Qanday vazifalarni hal qilishini aniqlang',
              'Antikva va groteskni tushunish',
              "Shriftlarni tanlashni o'rganish",
              "Matnni formatlashning asosiy qoidalarini o'rganish"
              // 'Introduction typography',
              // 'Determine what tasks it will solve',
              // 'Understanding the antique and the grotesque',
              // "Shriftlarni tanlashni o'rganish",
              // 'Learning the basic rules of text formatting',
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'Karyera blogi',
        //title: 'Career blog',
        types: [
          "Frilanserlik va studiyada ishlash o'rtasidagi asosiy farqlar nimada ekanligini bilib oling",
          'Birinchi buyurtmalarni qanday va qayerda qidirishni tushunish',
          'Mijozlar bazasini yaratishning ahamiyatli usullari bilan tanishish',
          'Dizaynni boshlashdan oldin qanday tayyorgarlik bosqichlarini bajarish kerakligini tushunish',
          "Qanday narxlash modellari mavjudligini va o'zingiz uchun eng yaxshisini qanday tanlashni tushunish",
          "O'z-o'zini taqdim etish uchun asosiy talablar bilan tanishing",
          "Portfelingizni qanday yaratishni o'rganing",
          'Portfelni qanday qilib yangi mijozlar yoki orzu qilgan ishni olib kelishni aniqlang',
          "Ko'p tarqalgan xatolardan qanday qochish kerakligini tushuning",
          'Portfolioni qanday qilib yangi mijozlar yoki orzu qilgan ishni olib kelishni aniqlang',
          'Mijozlarning dizaynerlar portfeliga qanday qarashlarini bilish',
          'Loyiha topshirilganda mijozga nima va nima uchun taqdim etish kerakligini bilib oling',
          'Taqdimotni qanday qilish kerakligini va qanday taqdimot turlari mavjudligini tushunish',
          'Taqdimotlar dizaynerning hayotini qanday yaxshilashini tushuning'
          // 'Learn the main differences between freelancing and studio work',
          // 'Understanding how and where to look for first orders',
          // 'Getting to know important ways to build a customer base',
          // 'Understanding what preparatory steps you need to take before you begin designing',
          // 'Understanding what pricing models are available and how to choose the best one for you',
          // 'Get to know the basic requirements for self-presentation',
          // 'Learn how to build your portfolio',
          // 'Identify how your portfolio can bring you new clients or that dream job',
          // 'Understand how to avoid common mistakes',
          // 'Identify how your portfolio can land new clients or that dream job',
          // "Knowing how clients view a designer's portfolio",
          // 'Learn what and why to present to the client when the project is handed over',
          // 'Understanding how to make a presentation and what types of presentations are available',
          // "Understand how presentations can improve a designer's life",
        ]
      }
    ],
    certificate: '/images/certificate_uiux.svg',
    feedbacks: [
      {
        id: 0,
        img: '/images/feedback_abror_azizov.png',
        name: 'Abror Azizov',
        video: 'https://www.youtube.com/embed/AxkXS2LFuKQ'
      },
      {
        id: 1,
        img: '/images/feedback_zokirov_kamolliddin.png',
        name: 'Kamolliddin Zokirov',
        video: 'https://www.youtube.com/embed/eewW_1GMQDw'
      }
    ],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'foundation',
    banner: {
      title: 'Foundation BOOTCAMP',
      subtitle:
        '1 oy davomida siz dasturlash sohasida fundamental  bilimlarga ega bo’lib, mutaxassislik kurslarida o’qish imkoniyatiga ega bo’lasiz',
      // subtitle: 'You will learn the basics of HTML, CSS and JavaScript, learn to create websites and applications for any device, optimize code and work with animation.',
      bannerBg: '/images/frontend_bg.png',
      bannerImage: '/images/foundation_banner.png'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '1 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'Boshlangich bilimga ega bo’lmaganlar'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/found_blog1.png',
        title: "IT sohasiga ilk qadam qo'yayotganlar uchun",
        //title: 'Who is starting his career in IT',
        subtitle:
          'Agar siz IT sohasiga qiziqayotgan bo’lsangiz, foundation kurslaridan boshlab o’qishingizni tavsiya qilamiz.'
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/found_blog2.png',
        title: 'Dasturlash bo’yicha boshlangich bilimga ega bo’lmaganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Agar siz IT sohasiga qiziqayotgan bo’lsangiz, foundation kurslaridan boshlab o’qishingizni tavsiya qilamiz'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/found_blog3.png',
        title:
          'Dasturlash sohasida o’z yo’nalishini tanlashga ikkilanyotganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'Agar siz IT sohasiga qiziqayotgan bo’lsangiz, foundation kurslaridan boshlab o’qishingizni tavsiya qilamiz'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      {
        id: 0,
        img: '/images/found_teacher.png',
        name: 'Rustam Abdinazarov',
        title: 'Backend dasturchi, ish tajribasi 1 yil',
        subtitle:
          "Strong Middle Frontend dasturchi, ish tajribasi 3 yil. Muvaffaqatli loyihalar: Najot Ta'lim, Delever, Rasta, Oxbox, Iman.",
        projects: [
          { id: 0, img: '/images/teachers_logo_najottalim.png' },
          { id: 1, img: '/images/teachers_logo_delever.png' },
          { id: 2, img: '/images/teachers_logo_oxbox.png' },
          { id: 3, img: '/images/teachers_logo_iman.png' }
        ]
      }
    ],
    program: [
      {
        id: 0,
        title: 'HTML',
        types: ['Basics', 'Semantic HTML', 'SEO basics']
      },
      {
        id: 1,
        title: 'CSS',
        typesGroup: [
          {
            id: 0,
            title: 'Basics',
            subTypes: [
              'Floats',
              'Positioning',
              'Display',
              'Box Model',
              'CSS Grid',
              'Flex box'
            ]
          }
        ]
      },

      {
        id: 3,
        title: 'JavaScript',
        typesGroup: [
          {
            id: 0,
            title: 'Syntax'
          },
          {
            id: 1,
            title: 'Fundamentals',
            subTypes: [
              'Variables',
              'Data types',
              'Interaction (alert, prompt, confirm)',
              'Operators',
              'Comparisons',
              'If else / ? :',
              'Logical operators',
              'Loops (while and for)',
              'Switch / case',
              'Functions / arrow functions'
            ]
          },
          {
            id: 2,
            title: 'DOM manipulation'
          },
          {
            id: 3,
            title: 'Data types',
            subTypes: [
              'Numbers',
              'Strings',
              'Arrays',
              'Objects',
              'Date and time'
            ]
          },
          {
            id: 4,
            title: 'Ajax',
            subTypes: ['Promises', 'XMLHttpRequest', 'Fetch', 'JSON']
          },
          {
            id: 5,
            title: 'Class basics',
            subTypes: ['Syntax', 'Inheritance', 'Methods and properties']
          }
        ]
      },
      {
        id: 4,
        title: 'Nodejs va ExpressJS',
        typesGroup: [
          {
            id: 0,
            title: 'Basics'
            // subTypes: [
            //   'Virtual DOM',
            //   'JSX',
            //   'Class and Function components',
            //   'Props',
            //   'State and Lifecycle',
            //   'Handling events'
            // ]
          }
          // {
          //   id: 1,
          //   title: 'Hooks',
          //   subTypes: [
          //     'State and effect hooks',
          //     'Memoization with hooks',
          //     'Custom hooks'
          //   ]
          // },
          // {
          //   id: 2,
          //   title: 'React (react-router-dom)'
          // },
          // {
          //   id: 3,
          //   title: 'Global state',
          //   subTypes: ['Context', 'React-redux']
          // }
        ]
      }
    ],
    certificate: '/images/certificate_frontend.svg',
    feedbacks: [
      {
        id: 0,
        img: '/images/feedback_ilyosbek.png',
        name: 'Ilyosbek',
        video: 'https://www.youtube.com/embed/EqPcX8Goxic'
      }
    ],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'frontend',
    banner: {
      title: 'Frontend',
      subtitle:
        "Siz HTML, CSS va JavaScript asoslarini o'rganasiz, istalgan qurilma uchun veb-saytlar va ilovalar yaratishni, kodni optimallashtirishni va animatsiya bilan ishlashni o'rganasiz.",
      // subtitle: 'You will learn the basics of HTML, CSS and JavaScript, learn to create websites and applications for any device, optimize code and work with animation.',
      bannerBg: '/images/frontend_bg.png',
      bannerImage: '/images/banner_singlepage_frontend.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '3 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'Foundation bilimiga ega bo’lganlar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/front_blog1.png',
        title: 'Foundation imtihonidan o’tganlar uchun',
        //title: 'Who is starting his career in IT',
        subtitle:
          '1 oylik foundation kursida muvaffaqiyatli o’qib, mini project formatida imtihon topshirib muvaffaqiyatli o’tganlar uchun.'
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/front_blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/front_blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      {
        id: 0,
        img: '/images/teacher_front.png',

        name: 'Nurmatjon Abdullayev',
        title: 'Middle Frontend dasturchi, ish tajribasi 1 yil',
        subtitle:
          "Strong Middle Frontend dasturchi, ish tajribasi 3 yil. Muvaffaqatli loyihalar: Najot Ta'lim, Delever, Rasta, Oxbox, Iman.",
        projects: [
          { id: 0, img: '/images/teachers_logo_najottalim.png' },
          { id: 1, img: '/images/teachers_logo_delever.png' },
          { id: 2, img: '/images/teachers_logo_oxbox.png' },
          { id: 3, img: '/images/teachers_logo_iman.png' }
        ]
      }
      // {
      //   id: 1,
      //   img: '/images/teachers_img4.png',
      //   name: 'Namoz Ostonayev',
      //   title: 'Middle Frontend dasturchi, ish tajribasi 2 yil',
      //   subtitle:
      //     'Middle Frontend dasturchi, ish tajribasi 2 yil. Muvaffaqatli loyihalar: Safia, Rasta, Yerelektron, Anorbank, Delever.',
      //   projects: [
      //     { id: 0, img: '/images/teachers_logo_safia.png' },
      //     { id: 1, img: '/images/teachers_logo_rasta.png' },
      //     { id: 2, img: '/images/teachers_logo_yerelektron.png' },
      //     { id: 3, img: '/images/teachers_logo_anorbank.png' },
      //     { id: 4, img: '/images/teachers_logo_delever.png' }
      //   ]
      // }
    ],
    program: [
      {
        id: 0,
        title: 'HTML',
        types: ['Basics', 'Semantic HTML', 'SEO basics']
      },
      {
        id: 1,
        title: 'CSS',
        typesGroup: [
          {
            id: 0,
            title: 'Basics'
          },

          {
            id: 1,
            title: 'Layouts',
            subTypes: [
              'Floats',
              'Positioning',
              'Display',
              'Box Model',
              'CSS Grid',
              'Flex box'
            ]
          },
          {
            id: 2,
            title: 'Responsive design'
          },
          {
            id: 3,
            title: 'Animations'
          }
        ]
      },
      {
        id: 2,
        title: 'Sass / scss',
        typesGroup: [
          {
            id: 0,
            title: 'Basics',
            subTypes: ['sass/scss syntax', 'Nesting', 'Parent selector']
          },
          {
            id: 1,
            title: 'Variables'
          },
          {
            id: 2,
            title: 'Patials'
          },
          {
            id: 3,
            title: 'Mixins'
          },
          {
            id: 4,
            title: 'Extend'
          }
        ]
      },
      {
        id: 3,
        title: 'JavaScript',
        typesGroup: [
          {
            id: 0,
            title: 'Syntax'
          },
          {
            id: 1,
            title: 'Fundamentals',
            subTypes: [
              'Variables',
              'Data types',
              'Interaction (alert, prompt, confirm)',
              'Operators',
              'Comparisons',
              'If else / ? :',
              'Logical operators',
              'Loops (while and for)',
              'Switch / case',
              'Functions / arrow functions'
            ]
          },
          {
            id: 2,
            title: 'DOM manipulation'
          },
          {
            id: 3,
            title: 'Data types',
            subTypes: [
              'Numbers',
              'Strings',
              'Arrays',
              'Objects',
              'Date and time'
            ]
          },
          {
            id: 4,
            title: 'Ajax',
            subTypes: ['Promises', 'XMLHttpRequest', 'Fetch', 'JSON']
          },
          {
            id: 5,
            title: 'Class basics',
            subTypes: ['Syntax', 'Inheritance', 'Methods and properties']
          }
        ]
      },
      {
        id: 4,
        title: 'ReactJS',
        typesGroup: [
          {
            id: 0,
            title: 'Main concepts',
            subTypes: [
              'Virtual DOM',
              'JSX',
              'Class and Function components',
              'Props',
              'State and Lifecycle',
              'Handling events'
            ]
          },
          {
            id: 1,
            title: 'Hooks',
            subTypes: [
              'State and effect hooks',
              'Memoization with hooks',
              'Custom hooks'
            ]
          },
          {
            id: 2,
            title: 'React (react-router-dom)'
          },
          {
            id: 3,
            title: 'Global state',
            subTypes: ['Context', 'React-redux']
          }
        ]
      }
    ],
    certificate: '/images/certificate_frontend.svg',
    feedbacks: [
      {
        id: 0,
        img: '/images/feedback_ilyosbek.png',
        name: 'Ilyosbek',
        video: 'https://www.youtube.com/embed/EqPcX8Goxic'
      }
    ],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'backend-developer',
    banner: {
      title: 'Backend',
      subtitle:
        'Golangda zamonaviy texnologiyalar va eng yaxshi amaliyotlardan foydalangan holda REST API va mikroservislarni ishlab chiqish.',
      // subtitle:
      //   'Developing REST APIs and microservices using modern technologies and best practices in Golang.',
      bannerBg: '/images/backend_bg.png',
      bannerImage: '/images/banner_singlepage_backend.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '3 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'Foundation bilimiga ega bo’lganlar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/backend_blog1.png',
        title: 'Foundation imtihonidan o’tganlar uchun',
        //title: 'Who is starting his career in IT',
        subtitle:
          '1 oylik foundation kursida muvaffaqiyatli o’qib, mini project formatida imtihon topshirib muvaffaqiyatli o’tganlar uchun.'
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/backend_blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/backend_blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      {
        id: 0,
        img: '/images/teacher_backend.png',
        name: 'Asadbek Ergashev',

        title: 'Middle Backend dasturchi, ish tajribasi 1 yil',
        subtitle:
          "Strong Middle Backend developer, more than 3 years of work experience. Successful projects: AnorBank, Urecruit, Upm, Najot Ta'lim.",
        projects: [
          { id: 0, img: '/images/teachers_logo_anorbank.png' },
          { id: 1, img: '/images/teachers_logo_urecruit.png' },
          { id: 2, img: '/images/teachers_logo_upm.png' },
          { id: 3, img: '/images/teachers_logo_najottalim.png' }
        ]
      }
      // {
      //   id: 1,
      //   img: '/images/teachers_img6.png',
      //   name: 'Anvar Umarov',
      //   title: 'Strong Middle Backend dasturchi, ish tajribasi 1 yil',
      //   subtitle:
      //     'Strong Middle Backend developer, 1 year of work experience. Successful projects: Medion, Macbro, Upm.',
      //   projects: [
      //     { id: 0, img: '/images/teachers_logo_medion.png' },
      //     { id: 1, img: '/images/teachers_logo_macbro.png' },
      //     { id: 2, img: '/images/teachers_logo_upm.png' }
      //   ]
      // }
    ],
    program: [
      {
        id: 0,
        title: 'Learn the Basics',
        types: [
          'Basic syntax',
          'Variables and declaration',
          'Data types',
          'Conditionals',
          'For loop, range',
          'If, switch statements',
          'Errors, Panic, Recover',
          'Functions, multiple/named returns',
          'Packages, imports and exports',
          'Type Casting',
          'Type Inference',
          'Arrays',
          'Slices',
          'Maps',
          'make()',
          'Structs'
        ]
      },
      {
        id: 1,
        title: 'Going deeper',
        types: [
          'Marshalling & Unmarshalling JSON',
          'Types, Type Assertions, Switches',
          'Go Modules',
          'Interfaces',
          'Context',
          'Goroutines',
          'Channels',
          'Buffer',
          'Select',
          'Mutex'
        ]
      },
      {
        id: 2,
        title: 'Logging',
        types: ['Zap', 'Logrus']
      },
      {
        id: 3,
        title: 'Web',
        types: [
          'Gorilla',
          'Gin',
          'REST API',
          'Swagger',
          'Method & URL',
          'Error handling'
        ]
      },
      {
        id: 4,
        title: 'Database',
        types: [
          'PostgreSQL workspace',
          'DDL',
          'Migration',
          'SQLX',
          'DML',
          'DQL',
          'Joins',
          'Index',
          'Constraints',
          'Storage pattern with interface'
        ]
      },
      {
        id: 5,
        title: 'Microservices',
        types: [
          'Intro to Microservices',
          'gRPC',
          'Protobuf',
          'Docker',
          'Docker Compose'
        ]
      }
    ],
    certificate: '/images/certificate_backend.svg',
    feedbacks: [
      // {
      //   id: 0,
      //   img: '/images/feedback_diyor_shoumarov.png',
      //   name: 'Diyor Shoumarov',
      //   video: 'https://www.youtube.com/embed/bGnBaOHj0V0'
      // },
      {
        id: 1,
        img: '/images/feedback_tolib.png',
        name: 'Tolib',
        video: 'https://www.youtube.com/embed/yHRHU4Nx7uc'
      }
    ],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'qa',
    banner: {
      title: 'QA',
      subtitle:
        "Kursda IT loyihalari uchun web va mobil testlarni avtomatlashtirishni, API, Stress testlarni bajarishni o'rganamiz. Shuningdek quyidagi test dokumentlar bilan ishlashni ham o’rganamiz: Test plan, test case, bug report va hokazo.",
      // subtitle:
      //   'In the course, we will learn how to automate web and mobile tests for IT projects, perform API, Stress tests. We will also learn to work with the following test documents: test plan, test case, bug report, etc.',
      bannerBg: '/images/qa_bg.png',
      bannerImage: '/images/banner_singlepage_qa.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '3 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'Foundation bilimiga ega bo’lganlar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/qa_blog1.png',
        title: 'Foundation imtihonidan o’tganlar uchun',
        //title: 'Who is starting his career in IT',
        subtitle:
          '1 oylik foundation kursida muvaffaqiyatli o’qib, mini project formatida imtihon topshirib muvaffaqiyatli o’tganlar uchun.'
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/qa_blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/qa_blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      {
        id: 0,
        img: '/images/teacher_qa.png',
        name: 'Behruz Uzoqov',
        title: 'Middle Test Automation Engineer, ish tajribasi 1 yil',
        subtitle:
          'Middle Test Automation Engineer, 3 years of work experience. Successful projects: Goodzone, Frontline, Tashqi Mehnat Migrasiyasi Agentligi, Delever, Workly, GHX.',
        projects: [
          { id: 0, img: '/images/teachers_logo_goodzone.png' },
          { id: 1, img: '/images/teachers_logo_frontline.png' },
          { id: 2, img: '/images/teachers_logo_tmma.png' },
          { id: 3, img: '/images/teachers_logo_delever.png' },
          { id: 4, img: '/images/teachers_logo_workly.png' },
          { id: 5, img: '/images/teachers_logo_ghx.png' }
        ]
      }
    ],
    program: [
      {
        id: 0,
        title: 'Fundamentals',
        typesGroup: [
          {
            id: 0,
            title: 'Fundamentals of Testing',
            subTypes: [
              'What is Testing?',
              'Why is Testing Necessary? ',
              'Seven Testing Principles',
              'Test Process',
              'The Psychology of Testing'
            ]
          },
          {
            id: 1,
            title: 'Testing Throughout the Software Development Lifecycle',
            subTypes: [
              'Software Development Lifecycle Models',
              'Test Levels',
              'Test Types'
            ]
          },
          {
            id: 2,
            title: 'Static Testing',
            subTypes: ['Static Testing Basics', 'Review Process']
          },
          {
            id: 3,
            title: 'Test Techniques',
            subTypes: [
              'Categories of Test Techniques',
              'Black-box Test Techniques',
              'White-box Test Techniques',
              'Experience-based Test Techniques'
            ]
          },
          {
            id: 4,
            title: 'Test Management',
            subTypes: [
              'Test Organization',
              'Test Planning and Estimation',
              'Test Monitoring and Control',
              'Configuration Management',
              'Risks and Testing',
              'Defect Management'
            ]
          },
          {
            id: 5,
            title: 'Tool Support for Testing',
            subTypes: ['Test Tool Considerations ', 'Effective Use of Tools']
          }
        ]
      },
      {
        id: 1,
        title: 'Web Testing',
        types: [
          'What is a Web Application?',
          'What is GUI?',
          'DevTools',
          'Cookies vs Cache',
          'Main non-functional verifications of WEB application',
          'Common checks'
        ]
      },
      {
        id: 2,
        title: 'Mobile',
        types: [
          'Overview of Mobile World',
          'Mobile Application Testing Process & Techniques',
          'Tools and Automation',
          'Automation Testing	',
          'Main verifications of mobile application',
          'Difference between Responsive and Adaptive Design'
        ]
      },
      {
        id: 3,
        title: 'Databases',
        types: [
          'SQL: Be able to write a basic GET query (with specific columns)',
          'SQL: Basic knowledge about functions'
        ]
      },
      {
        id: 4,
        title: 'Web Services',
        typesGroup: [
          {
            id: 0,
            title: 'Basics'
          },
          {
            id: 1,
            title: 'Details'
          },
          {
            id: 2,
            title: 'Backend vs Frontend verifications'
          },
          {
            id: 3,
            title: 'Test Tools',
            subTypes: ['DevTools - Network', 'Postman', 'Swagger', 'Jmeter']
          }
        ]
      },
      {
        id: 5,
        title: 'Selenium',
        typesGroup: [
          {
            id: 0,
            title: 'XPath and CSS selectors',
            subTypes: [
              'Ability to generate simple CSS selectors',
              'Ability to generate simple relative XPath expressions',
              'Understanding the difference between XPaths and CSS selectors, and which is to choose'
            ]
          },
          {
            id: 1,
            title: 'Keyboard Actions'
          },
          {
            id: 2,
            title: 'Waits'
          },
          {
            id: 3,
            title: 'Popup and alerts'
          },
          {
            id: 4,
            title: 'Handling dropdown'
          },
          {
            id: 5,
            title: 'Uploading files'
          },
          {
            id: 6,
            title: 'Headless browsers'
          }
        ]
      },
      {
        id: 6,
        title: 'Appium',
        types: [
          'How Appium works?',
          'How to install Appium?',
          'Connecting real Android device',
          'Appium project',
          'How to find locators of Android app?'
        ]
      },
      {
        id: 7,
        title: 'Postman',
        types: ['Making a request', 'Variables', 'Test scripts', 'Collections']
      },
      {
        id: 8,
        title: 'JMeter',
        types: [
          'Listeners',
          'Assertions',
          'Recorder',
          'Config elements',
          'Reports',
          'Functions and Variables'
        ]
      }
    ],
    certificate: '/images/certificate_qa.svg',
    feedbacks: [
      {
        id: 0,
        img: '/images/feedback_arabbek_ilhomov.png',
        name: 'Arabbek Ilhomov',
        video: 'https://www.youtube.com/embed/cdYj6y4SMxk'
      },
      {
        id: 1,
        img: '/images/feedback_behruz_abdumalikov.png',
        name: 'Behruz Abdumalikov',
        video: 'https://www.youtube.com/embed/uolsGE_tlus'
      },
      {
        id: 2,
        img: '/images/feedback_ravshan.png',
        name: 'Ravshan',
        video: 'https://www.youtube.com/embed/XbkPYysMerA'
      },
      {
        id: 3,
        img: '/images/feedback_muhammadrasul.png',
        name: 'Muhammad Rasul',
        video: 'https://www.youtube.com/embed/BeiDAKOoH3s'
      }
    ],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'android-ios-developer',
    banner: {
      title: 'Mobile',
      subtitle:
        "Mobil ilovalarni ishlab chiquvchi mobil qurilmalarda ilovalarni yaratish, sinab ko'rish va ishlab chiqish ko'nikmalaridan foydalanadi. Ular iOS va Android kabi mashhur operatsion tizim muhitlarida ishlaydi va ilovalarni yaratishda ko'pincha UI va UX tamoyillarini hisobga oladi.",
      // subtitle:
      //   'A mobile application developer uses skills to create, test, and develop applications on mobile devices. They run on popular operating system environments such as iOS and Android, and often consider UI and UX principles when creating apps.',
      bannerBg: '/images/android_bg.png',
      bannerImage: '/images/banner_singlepage_androidios.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 5 marta 4 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '4 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'boshlangich bilimga ega bo’lmaganlar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/adroid_blog1.png',
        title: "IT sohasiga ilk qadam qo'yayotganlar uchun",
        //title: 'Who is starting his career in IT',
        subtitle:
          "Agar IT sohasida boshlang'ich bilimga ega bo'lmasangiz ham, biz hammasini 0 dan o'rgatamiz."
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/adroid_blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/adroid_blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      // {
      //   id: 0,
      //   img: "/images/teachers_img8.png",
      //   name: "Shahzod Atabayev",
      //   title: "Middle Android/iOS dasturchi, ish tajribasi 2 yil ortiq",
      //   projects: [
      //     { id: 0, img: "/images/teachers_logo_iman.png" },
      //     { id: 1, img: "/images/teachers_logo_astrum.png" },
      //     { id: 2, img: "/images/teachers_logo_rasta.png" },
      //     { id: 3, img: "/images/teachers_logo_tarnov.png" },
      //     { id: 4, img: "/images/teachers_logo_ipotekauz.png" },
      //     { id: 5, img: "/images/teachers_logo_zuzu.png" },
      //   ],
      // },
      {
        id: 1,
        img: '/images/teachers_img9.png',
        name: 'Sunnatilo Shavkatov',
        title: 'Middle Android/iOS dasturchi, ish tajribasi 2 yil',
        subtitle:
          'Middle Android/iOS developer, more than 1 year of work experience. Successful projects: Rasta, MaxWay, Billz, MacBro, AnorBank, Delever.',
        projects: [
          { id: 0, img: '/images/teachers_logo_rasta.png' },
          { id: 1, img: '/images/teachers_logo_maxway.png' },
          { id: 2, img: '/images/teachers_logo_billz.png' },
          { id: 3, img: '/images/teachers_logo_macbro.png' },
          { id: 4, img: '/images/teachers_logo_anorbank.png' },
          { id: 5, img: '/images/teachers_logo_delever.png' }
        ]
      }
    ],
    program: [
      {
        id: 0,
        title: 'Introduction Cross-Platform',
        types: ['What is Flutter']
      },
      {
        id: 1,
        title: 'Dart language',
        types: [
          'Variables',
          'Control flow statements',
          'Functions',
          'Classes',
          'Inheritance',
          'Mixins',
          'Interfaces',
          'Abstract classes',
          'Async',
          'Exceptions',
          'Typedefs'
        ]
      },
      {
        id: 2,
        title: 'User Interface',
        types: ['Introduction to widgets']
      },
      {
        id: 3,
        title: 'Building layouts',
        types: [
          'Assets and images',
          'Navigation & routing',
          'Animations',
          'Anvanced UI'
        ]
      },
      {
        id: 4,
        title: 'Storage',
        types: ['Shared Preference', 'File Storage', 'Sqlite (moor)']
      },
      {
        id: 5,
        title: 'State management',
        types: ['Provider', 'setState', 'BLoC / Rx', 'GetX']
      },
      {
        id: 6,
        title: 'Data & backend',
        types: [
          'Networking & http',
          'Dio',
          'Retrofit',
          'JSON and serialization',
          'Firebase'
        ]
      },
      {
        id: 7,
        title: 'Accessibility & Internationalizing',
        types: ['Accessibility', 'Internationalizing']
      },
      {
        id: 8,
        title: 'Platform integtarion',
        types: [
          'Supported platforms',
          'Writing custom platform-specific code',
          'Hosting native Android and iOS views in your Flutter app with Platform Views'
        ]
      },
      {
        id: 9,
        title: 'Packages & Plugins',
        types: ['Developing packages & plugins']
      },
      {
        id: 10,
        title: 'Deployment',
        types: [
          'Build and release an Android app',
          'Build and release an iOS app'
        ]
      }
    ],
    certificate: '/images/certificate_mobile.svg',
    feedbacks: [],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  },
  {
    slug: 'devops',
    banner: {
      title: 'DevOps',
      subtitle:
        "Bu dasturiy ta'minotni ishlab chiqish metodologiyasi bo'lib, uning vazifasi kompaniyada dasturchilar va tizim ma'murlari o'rtasidagi o'zaro aloqani o'rnatish va texnik jarayonlarni avtomatlashtirishdir.",
      // subtitle:
      //   'This is a software development methodology, the purpose of which is to establish interaction between programmers and system administrators in the company and to automate technical processes.',
      bannerBg: '/images/devops_bg.png',
      bannerImage: '/images/banner_singlepage_devops.svg'
    },
    stepInfo: [
      {
        id: 0,
        title: 'Dars jadvali',
        //title: 'Lesson schedule ',
        subtitle: 'haftada 3 marta 2~3 soatdan'
        //subtitle: '5 times a week for 4 hours',
      },
      {
        id: 1,
        title: 'Kurs muddati',
        //title: 'Course duration',
        subtitle: '6 oy'
        //subtitle: '4 months',
      },
      {
        id: 2,
        title: "Boshlang'ich daraja",
        //title: 'Primary level',
        subtitle: 'Foundation bilimiga ega bo’lganlar uchun'
        //subtitle: 'for beginners',
      },
      {
        id: 3,
        title: "O'quv formati",
        //title: 'Study format',
        subtitle: 'offlayn'
        //subtitle: 'offline',
      }
    ],
    blog: [
      {
        id: 0,
        icon: '/images/devops_blog1.png',
        title: 'Foundation imtihonidan o’tganlar uchun',
        //title: 'Who is starting his career in IT',
        subtitle:
          '1 oylik foundation kursida muvaffaqiyatli o’qib, "mini project" formatida imtihon topshirib muvaffaqiyatli o’tganlar uchun.'
        //subtitle:"Even if you don't have basic IT knowledge, we teach everything from zero.",
      },
      {
        id: 1,
        icon: '/images/devops_blog2.png',
        title: 'Boshlang’ich bilimga ega bo’lganlar uchun',
        //title: 'Who wants to deep dive to IT with modern technologies',
        subtitle:
          'Biz sizga hozirda dolzarb va kerakli bo’lgan sohalarni eng qisqa muddatda o’rgatamiz. Eng yaxshi o’quvchilarni Udevs kompaniyasiga ishda olib qolamiz.'
        //subtitle: 'We will teach you the areas that are currently relevant and necessary in the shortest possible time. We hire best students to work at Udevs.',
      },
      {
        id: 2,
        icon: '/images/devops_blog3.png',
        title: 'IT sohasida o’z bilimini rivojlantirmoqchi bo’lganlar uchun',
        //title: 'Who wants to change their career path',
        subtitle:
          'IT sohasida oʻrganish maqsadida asosiy va eng muhim bilimlani egallamoqchi boʻlganlar uchun.'
        // subtitle: 'For those who want to acquire the basic and most important knowledge in order to study IT.',
      }
    ],
    teachers: [
      {
        id: 0,
        img: '/images/teachers_img10.png',
        name: 'Abdulqodir Yusupov',
        title: 'Tech lead, ish tajribasi 2 yil',
        subtitle:
          'Tech lead, more than 2 years of work experience. Successful projects: Safia, Medion, Uzdigital, Car24, Rasta, Sharq.',
        projects: [
          { id: 0, img: '/images/teachers_logo_safia.png' },
          { id: 1, img: '/images/teachers_logo_medion.png' },
          { id: 2, img: '/images/teachers_logo_uzdigital.png' },
          { id: 3, img: '/images/teachers_logo_superdispatch.png' },
          { id: 4, img: '/images/teachers_logo_rasta.png' },
          { id: 5, img: '/images/teachers_logo_uniconsoft.png' }
        ]
      }
      // {
      //   id: 1,
      //   img: "/images/teachers_img11.png",
      //   name: "Jamshid Erzakov",
      //   title: "Middle DevOps, ish tajribasi 2 yildan ortiq",
      //   projects: [
      //     { id: 0, img: "/images/teachers_logo_billz.png" },
      //     { id: 1, img: "/images/teachers_logo_najottalim.png" },
      //     { id: 2, img: "/images/teachers_logo_iman.png" },
      //     { id: 3, img: "/images/teachers_logo_delever.png" },
      //     { id: 4, img: "/images/teachers_logo_e.png" },
      //     { id: 5, img: "/images/teachers_logo_goodzone.png" },
      //   ],
      // },
    ],
    program: [
      {
        id: 0,
        title: 'Linux administration',
        types: [
          'Introduction to Linux',
          'Users, Groups, Permissions',
          'Regular operations',
          'Introduction to networking',
          'Package management',
          'Remote connection (SSH)',
          'Disk and volumes',
          'Scripting'
        ]
      },
      {
        id: 3,
        title: 'Container - Docker',
        types: [
          'Virtualization vs containerization',
          'Docker engine, docker client',
          'Dockerfile (multistaging), image',
          'Dind',
          'Docker registry',
          'Docker system',
          'Docker networks',
          'Docker volume',
          'Docker-compose, multi containers management',
          'Docker Swarm, orchestration basics'
        ]
      },
      {
        id: 9,
        title: 'Kubernetes',
        types: null
      },
      {
        id: 5,
        title: 'CI/CD - Gitlab-CI',
        types: [
          'Introduction to CI/CD',
          'GitLab-CI as a DevOps Platform',
          'Gitlab-Runners',
          'Executors',
          'Stage and jobs in CI script',
          'Environment variables in CI'
        ]
      },
      {
        id: 1,
        title: 'Networking',
        types: [
          'Introduction to networking basics',
          'OSI Model',
          'Internet Protocol',
          'Network management commands'
        ]
      },
      {
        id: 7,
        title: 'Infrastructure as a Code - Terraform',
        types: [
          'Introduction to IaaC',
          'Ansible as a Configuration tool',
          'How to structure playbook',
          'Types of modules',
          'Ansible galaxy or Role',
          'Terraform resources'
        ]
      },
      {
        id: 2,
        title: 'Automation Management - Ansible',
        types: null
      },
      {
        id: 4,
        title: 'Project Architecture',
        types: null
      },
      {
        id: 6,
        title: 'GitOps',
        types: null
      },
      {
        id: 8,
        title: 'Security Basics',
        types: null
      },
      // {
      //   id: 4,
      //   title: 'Database and storage management',
      //   types: ['Postgresql', 'MongoDB', 'MinIO']
      // },
      // {
      //   id: 6,
      //   title: 'Cloud Technology (AWS)',
      //   types: [
      //     'Introduction to cloud technologies',
      //     'Difference between cloud and on-premise'
      //   ]
      // },
      // {
      //   id: 8,
      //   title: 'Monitoring (Prometheus, Loki, Grafana)',
      //   types: [
      //     'Introduction to monitoring and logging',
      //     'Prometheus scrapes everything',
      //     'Loki, Promtail',
      //     'Grafana Dashboard'
      //   ]
      // },
      // {
      //   id: 2,
      //   title: 'Web server',
      //   types: ['Nginx (proxy, reverse proxy, config)', 'Load Balancer', 'SSL']
      // },
    ],
    certificate: '/images/certificate_devops.svg',
    feedbacks: [],
    questions: [
      {
        id: 0,
        title:
          "Bu sohada mening bilimim va tajribam yo'q. Darslarni o'zlashtirishda menda qiyinchilik bo'lmaydimi?",
        subtitle:
          "O'quv dasturlarimiz 0 dan boshlab o'rgatilinadi. Sizga ingliz tilida Pre Intermediate darajasi yetarli."
      },
      {
        id: 1,
        title: "Kursda o'qish uchun kompyuterim bo'lishi kerakmi?",
        subtitle:
          "Dars jarayoni noutbuk orqali amaliy vazifalarni o'rgatish orqali o'rgatiladi. Shuning uchun sizga noutbuk albatda kerak bo'ladi."
      },
      {
        id: 2,
        title: "Kurs uchun to'lovni qanday amalga oshirish mumkin?",
        subtitle:
          "Kurs uchun to'lovlar oyma oy, oyning boshida amalga oshiriladi. Kurs uchun to'lovni naqd yoki plastik karta orqali amalga oshirshingiz mumkin."
      },
      {
        id: 3,
        title: 'Kursdan foyda olmasam, pulim qaytarilib beriladimi?',
        subtitle:
          "2 hafta ichida siz to'lovga oshirilgan pulni toliq qaytarib olishingiz mumkin."
      }
    ]
  }
]
