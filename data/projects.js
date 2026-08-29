export const projects = [
  {
    id: 1,
    title: "CityBus Tracker",
    slug: "citybus-tracker",
    category: "وب",
    description:
      "سامانه مدیریت و پایش هوشمند حمل‌ونقل شهری با قابلیت مشاهده موقعیت اتوبوس‌ها روی نقشه.",
    longDescription:
      "CityBus Tracker یک سامانه مدیریت حمل‌ونقل شهری است که با هدف بهبود تجربه مسافران و مدیریت بهتر ناوگان طراحی شده است. این پروژه امکان مشاهده موقعیت اتوبوس‌ها روی نقشه، بررسی مسیرها و ارائه اطلاعات کاربردی درباره ناوگان را فراهم می‌کند.",
    technologies: ["Next.js", "React", "JavaScript", "Leaflet"],
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/citybus.jpg`,
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "فروشگاه اینترنتی",
    slug: "ecommerce",
    category: "وب",
    description:
      "یک فروشگاه اینترنتی مدرن با تمرکز بر طراحی رابط کاربری و تجربه کاربری.",
    longDescription:
      "این پروژه یک فروشگاه اینترنتی با رابط کاربری مدرن است که با تمرکز بر ساختار مناسب صفحات، نمایش محصولات و تجربه کاربری طراحی شده است.",
    technologies: ["React", "JavaScript", "CSS"],
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/store.jpg`,
    featured: true,
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "وبلاگ شخصی",
    slug: "personal-blog",
    category: "وب",
    description: "وبلاگی ساده و مدرن برای انتشار مطالب و مدیریت محتوای شخصی.",
    longDescription:
      "یک وبلاگ شخصی با طراحی مینیمال که برای انتشار و دسته‌بندی مطالب و ایجاد یک تجربه مطالعه مناسب ساخته شده است.",
    technologies: ["Next.js", "React", "CSS"],
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/projects/blog.jpg`,
    featured: true,
    github: "#",
    demo: "#",
  },
];
