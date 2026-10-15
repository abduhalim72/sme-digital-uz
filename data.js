const bizneslar = {
  dokon: {
    telegram: "https://t.me/sotvoldiyev_abduhalim",
    uz: {
      nom: "Namuna Do'kon",
      tavsif: "Kundalik mahsulotlar mahallangizning o'zida.",
      bolim: "Mahsulotlar",
      ishVaqti: "[vaqtni yozing]",
      manzil: "[manzilni yozing]",
      mahsulotlar: [
        { nom: "Oziq-ovqat", tavsif: "Non, sut, don mahsulotlari" },
        { nom: "Ichimliklar", tavsif: "Suv, sharbat, choy" },
        { nom: "Maishiy buyumlar", tavsif: "Kundalik kerakli narsalar" }
      ]
    },
    ru: {
      nom: "Пример магазина",
      tavsif: "Товары повседневного спроса прямо в вашем районе.",
      bolim: "Товары",
      ishVaqti: "[укажите время]",
      manzil: "[укажите адрес]",
      mahsulotlar: [
        { nom: "Продукты", tavsif: "Хлеб, молоко, крупы" },
        { nom: "Напитки", tavsif: "Вода, соки, чай" },
        { nom: "Хозтовары", tavsif: "Нужные в быту вещи" }
      ]
    },
    en: {
      nom: "Sample Shop",
      tavsif: "Everyday goods right in your neighbourhood.",
      bolim: "Products",
      ishVaqti: "[add opening hours]",
      manzil: "[add address]",
      mahsulotlar: [
        { nom: "Groceries", tavsif: "Bread, milk, grains" },
        { nom: "Drinks", tavsif: "Water, juice, tea" },
        { nom: "Household items", tavsif: "Everyday essentials" }
      ]
    }
  },

  oquv: {
    telegram: "https://t.me/sotvoldiyev_abduhalim",
    uz: {
      nom: "Namuna O'quv markazi",
      tavsif: "Zamonaviy kurslar, tajribali o'qituvchilar.",
      bolim: "Kurslar",
      ishVaqti: "[vaqtni yozing]",
      manzil: "[manzilni yozing]",
      mahsulotlar: [
        { nom: "Ingliz tili", tavsif: "Boshlang'ich va o'rta daraja" },
        { nom: "Matematika", tavsif: "Maktab va olimpiada tayyorgarligi" },
        { nom: "Kompyuter savodxonligi", tavsif: "Office, internet, asosiy dasturlar" }
      ]
    },
    ru: {
      nom: "Пример учебного центра",
      tavsif: "Современные курсы, опытные преподаватели.",
      bolim: "Курсы",
      ishVaqti: "[укажите время]",
      manzil: "[укажите адрес]",
      mahsulotlar: [
        { nom: "Английский язык", tavsif: "Начальный и средний уровень" },
        { nom: "Математика", tavsif: "Подготовка к школе и олимпиадам" },
        { nom: "Компьютерная грамотность", tavsif: "Office, интернет, базовые программы" }
      ]
    },
    en: {
      nom: "Sample Learning Center",
      tavsif: "Modern courses with experienced teachers.",
      bolim: "Courses",
      ishVaqti: "[add opening hours]",
      manzil: "[add address]",
      mahsulotlar: [
        { nom: "English", tavsif: "Beginner and intermediate levels" },
        { nom: "Mathematics", tavsif: "School and olympiad preparation" },
        { nom: "Computer literacy", tavsif: "Office, internet, basic programs" }
      ]
    }
  },

  xizmat: {
    telegram: "https://t.me/sotvoldiyev_abduhalim",
    uz: {
      nom: "Namuna Xizmatlar",
      tavsif: "Sifatli va ishonchli xizmatlar.",
      bolim: "Xizmatlar",
      ishVaqti: "[vaqtni yozing]",
      manzil: "[manzilni yozing]",
      mahsulotlar: [
        { nom: "Konsultatsiya", tavsif: "Biznes va huquqiy maslahat" },
        { nom: "Yetkazib berish", tavsif: "Shahar bo'ylab tez yetkazib berish" },
        { nom: "Texnik yordam", tavsif: "Kompyuter va telefon ta'miri" }
      ]
    },
    ru: {
      nom: "Пример услуг",
      tavsif: "Качественные и надёжные услуги.",
      bolim: "Услуги",
      ishVaqti: "[укажите время]",
      manzil: "[укажите адрес]",
      mahsulotlar: [
        { nom: "Консультация", tavsif: "Бизнес и юридические советы" },
        { nom: "Доставка", tavsif: "Быстрая доставка по городу" },
        { nom: "Техподдержка", tavsif: "Ремонт компьютеров и телефонов" }
      ]
    },
    en: {
      nom: "Sample Services",
      tavsif: "Quality and reliable services.",
      bolim: "Services",
      ishVaqti: "[add opening hours]",
      manzil: "[add address]",
      mahsulotlar: [
        { nom: "Consultation", tavsif: "Business and legal advice" },
        { nom: "Delivery", tavsif: "Fast city-wide delivery" },
        { nom: "Tech support", tavsif: "Computer and phone repair" }
      ]
    }
  },

  ustaxona: {
    telegram: "https://t.me/sotvoldiyev_abduhalim",
    uz: {
      nom: "Namuna Ustaxona",
      tavsif: "Ta'mirlash va tikuv xizmatlari.",
      bolim: "Xizmatlar",
      ishVaqti: "[vaqtni yozing]",
      manzil: "[manzilni yozing]",
      mahsulotlar: [
        { nom: "Ta'mirlash", tavsif: "Maishiy buyumlar ta'miri" },
        { nom: "Tikuv", tavsif: "Kiyim tikish va o'zgartirish" },
        { nom: "Buyurtma", tavsif: "Maxsus buyurtmalar bo'yicha ishlar" }
      ]
    },
    ru: {
      nom: "Пример мастерской",
      tavsif: "Услуги ремонта и пошива.",
      bolim: "Услуги",
      ishVaqti: "[укажите время]",
      manzil: "[укажите адрес]",
      mahsulotlar: [
        { nom: "Ремонт", tavsif: "Ремонт бытовых вещей" },
        { nom: "Пошив", tavsif: "Пошив и переделка одежды" },
        { nom: "Заказы", tavsif: "Работы по индивидуальным заказам" }
      ]
    },
    en: {
      nom: "Sample Workshop",
      tavsif: "Repair and tailoring services.",
      bolim: "Services",
      ishVaqti: "[add opening hours]",
      manzil: "[add address]",
      mahsulotlar: [
        { nom: "Repairs", tavsif: "Repair of household items" },
        { nom: "Tailoring", tavsif: "Making and altering clothes" },
        { nom: "Custom orders", tavsif: "Work made to order" }
      ]
    }
  }
};