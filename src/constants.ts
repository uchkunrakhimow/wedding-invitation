export const weddingConstants = {
  // Couple's information
  couple: {
    groom: {
      name: "Uchqun Rahimov",
      family: "Rahimovlar oilasining o'g'li",
      image: "/boy.png",
    },
    bride: {
      name: "Durdona Olimova",
      family: "Olimovlar oilasining qizi",
      image: "/girl.png",
    },
  },

  // Wedding date and time
  date: {
    full: "15-iyun, 2025-yil, Yakshanba",
    time: "Soat 16:00 dan 22:00 gacha",
    dateObject: new Date("2025-06-15T16:00:00"),
    rsvpDeadline: "1-iyun, 2025-yil",
  },

  // Venue information
  venue: {
    name: '"Sharq Saroyi" to\'y saroyi',
    address: "Toshkent sh., Yunusobod tumani",
    mapLink: "https://maps.app.goo.gl/YiPHj8piSpofR7t57",
  },

  // Wedding program/schedule
  program: [
    {
      time: "16:00",
      event: "Mehmonlar tashrifi",
      icon: "Clock",
    },
    {
      time: "17:00",
      event: "Kelin-kuyov tashrifi",
      icon: "Users",
    },
    {
      time: "18:30",
      event: "Konsert dasturi",
      icon: "Music",
    },
    {
      time: "20:00",
      event: "To'y tortini kesish",
      icon: "Cake",
    },
  ],

  // Contact information
  contact: {
    phone: "+998 95 009 99 45",
    email: "uchkunrakhimov@gmail.com",
  },

  // UI text messages
  messages: {
    invitation: "sizni to'yimizga taklif qilamiz",
    countdown: "To'y kunigacha:",
    timeUnits: {
      days: "Kun",
      hours: "Soat",
      minutes: "Daqiqa",
      seconds: "Soniya",
    },
    weddingInfo: "To'y marosimi",
    weddingProgram: "To'y dasturi",
    rsvpQuestion: "Ishtirok etasizmi?",
    rsvpButton: "Javob berish",
    submittedThankYou: "Rahmat, qadrli mehmon!",
    attendingMessage: "Sizning tashrif buyurishingizni kutib qolamiz.",
    notAttendingMessage: "Javobingiz uchun rahmat.",
    contactTitle: "Qo'shimcha savollar uchun",
    footerMessage: "Sizni to'yimizda ko'rishdan xursand bo'lamiz!",
    formLabels: {
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      attending: "Tashrif buyurasizmi?",
      guests: "Mehmonlar soni",
      wishes: "Tilaklaringiz",
      submit: "Yuborish",
    },
    attendanceOptions: {
      yes: "Ha, albatta",
      no: "Afsuski, yo'q",
    },
    toasts: {
      chooseOption: "Iltimos, qatnashish yoki qatnashmaslikni tanlang",
      thankYouAttending: "Javobingiz uchun rahmat! To'yda ko'rishguncha!",
      thankYouNotAttending: "Javobingiz uchun rahmat!",
    },
  },
};
