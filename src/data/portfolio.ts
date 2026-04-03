// ============================================================
//  PORTFOLIO DATA — fuente única de verdad
//  Edita este archivo para actualizar el contenido del sitio
// ============================================================

// ------------------------------------------------------------
//  PERFIL PERSONAL
// ------------------------------------------------------------
export const personal = {
    name: {
        first: 'Nicolás',
        last: 'Beru',
        full: 'Nicolás Beru',
        initials: 'NB.',
    },
    role: 'Full Stack Developer',
    quote: 'Si lo puedes imaginar, lo puedo crear',
    bio: {
        /** Hero — debajo del nombre */
        tagline: 'Creo soluciones web a la medida para tus necesidades.',
        taglineSub: 'Desarrollo personalizado que convierte ideas en experiencias digitales únicas.',
        /** About — tarjeta de perfil */
        heading: 'Desarrollador enfocado en soluciones a la medida',
        description:
            'Me especializo en crear soluciones digitales personalizadas que se adaptan a tus objetivos únicos. Mi prioridad es entender a fondo las necesidades de cada cliente para entregar herramientas web eficientes, escalables y hechas a la medida.',
    },
    location: {
        city: 'Tolima',
        country: 'Colombia',
        badge: 'TOLIMA . COLOMBIA',
    },
    availability: {
        open: true,
        label: 'Disponible',
        sublabel: 'Para nuevos proyectos',
    },
    english: {
        level: 'B1',
        scale: 'EF SET',
        /** Porcentaje para la barra de progreso */
        progress: 95,
    },
}

// ------------------------------------------------------------
//  CONTACTO
// ------------------------------------------------------------
export const contact = {
    email: 'tecnologiacol03@gmail.com',
    phone: {
        /** Valor para el href tel: */
        raw: '+573025336266',
        /** Valor visible en pantalla */
        display: '+57 (323) 724-2744',
    },
    responseTime: '24 horas',
}

// ------------------------------------------------------------
//  LINKS EXTERNOS
// ------------------------------------------------------------
export const links = {
    cv: 'https://drive.google.com/file/d/1FXvOc4glXxrGcvUx0kiia9cnBVm2qZbB/view?usp=sharing',
    linkedin: 'https://www.linkedin.com/in/jhoan-nicolas-beru-alvarez-a30a61210',
    github: 'https://github.com/jackira01',
}

// ------------------------------------------------------------
//  IMÁGENES / ASSETS
// ------------------------------------------------------------
export const assets = {
    portrait:
        'https://res.cloudinary.com/dqojdssac/image/upload/v1770764435/Gemini_Generated_Image_tx6fpltx6fpltx6f_zbvliq.png',
    mapColombia:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCl3j1Nu2BQfTqyb9ECCQivX-D45MqC0n5HzBLVRSVNgGf0OsEvbSocXeqz04hMx3g6bjT47OHWn_qxsnaLrTSuNTC3yj-5tkMPY-hJJDE_aiK8owEgbxk6qGNB7reLJpAZ24JbzBUQU5nujV-ExcO4DXIYZtgt0Ib_ymq39d1DNWMSEjSzMrdFCa4_Dum4bxgOAadOXZKHeKxsrN5f6FXG6VRsQk7jy0va1OVCknjuMQ19oi7uCtodPqbZUF-unnQM_8N4JaMVY38',
}

// ------------------------------------------------------------
//  STACK TECNOLÓGICO (sección Sobre mí)
// ------------------------------------------------------------
export interface TechCategory {
    label: string
    /** Color Tailwind para el encabezado, ej: 'text-primary/80' */
    color: string
    items: string[]
}

export const techStack: TechCategory[] = [
    {
        label: 'Frontend',
        color: 'text-primary/80',
        items: ['React', 'Next.js', 'Vue', 'Vite', 'Tailwind', 'Bootstrap', 'SEO'],
    },
    {
        label: 'Backend & DB',
        color: 'text-cyan-400/80',
        items: ['Node.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'WordPress'],
    },
    {
        label: 'Infraestructura',
        color: 'text-orange-400/80',
        items: ['Linux', 'VPS', 'Docker', 'Pasarelas de pago', 'Auth0', 'NextAuth'],
    },
    {
        label: 'AI Productivity',
        color: 'text-violet-400/80',
        items: ['GitHub Copilot', 'Cursor', 'Prompts', 'N8N'],
    },
    {
        label: 'CMS',
        color: 'text-violet-400/80',
        items: ['WordPress', 'Shopify'],
    },
]

// ------------------------------------------------------------
//  PROYECTOS
// ------------------------------------------------------------
export interface Project {
    id: number
    title: string
    description: string
    images: string[]
    tags: string[]
    /** URL del proyecto. Usa '#' si aún no está publicado */
    url: string
    /**
     * true  → muestra botón "Visitar Proyecto" y navega al hacer clic
     * false → sin botón ni navegación (proyecto privado / en construcción)
     */
    active: boolean
    /** Si existe → muestra icono Play y reproduce al hacer hover */
    video?: string
}

export const projects: Project[] = [
    {
        id: 0,
        title: 'AriseXR',
        description:
            'AriseXR es una single page application moderna y visualmente atractiva, diseñada para mostrar los servicios de coaching de manera elegante, con animaciones fluidas y una interfaz inmersiva.',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1775196240/arise-page_honmxj.png',
        ],
        video:
            'https://res.cloudinary.com/dqojdssac/video/upload/v1775148727/2026-04-02_11-41-03_z81ecd.mp4',
        tags: ['Vue.js', 'TailwindCss', 'Motion', 'Single Page', 'N8N'],
        url: 'https://arisexr.vercel.app/',
        active: true,
    },
    {
        id: 1,
        title: 'PrepagoYa',
        description:
            'Scort Web Site es creada a peticion de un cliente. Una plataforma web moderna y segura diseñada para conectar proveedores de servicios de acompañantes premium con clientes potenciales.',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1770763255/Gemini_Generated_Image_vhgxvvvhgxvvvhgx_znubwu.png',
        ],
        video:
            'https://res.cloudinary.com/dqojdssac/video/upload/v1775147989/2026-04-02_11-35-55_itcjyo.mp4',
        tags: ['Next.js', 'TailwindCss', 'MongoDB', 'NextAuth', 'TypeScript'],
        url: 'https://www.prepagoya.com',
        active: true,
    },
    {
        id: 2,
        title: 'coopinem',
        description:
            'Coopinem es una cooperativa sin ánimo de lucro en el Tolima, dedicada al bienestar de docentes activos (nómina municipal y departamental) y pensionados del magisterio (Fopep y Fiduprevisora).',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1770767449/Screenshot_2026-02-10_185013_vwlzcu.png',
        ],
        tags: ['Wordpress', 'Elementor', 'WooCommerce'],
        url: 'https://coopinem.com.co/',
        active: false,
    },
    {
        id: 3,
        title: 'Catalogo de Portatiles',
        description:
            'Esta es una web desarrollada con el objetivo de ofrecer una variedad de productos a los usuarios para que puedan ver sus detalles, comentarios, poder comprarlos, ver su historial de vistas, entre otras funciones.',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1770762420/Screenshot_2026-02-10_172644_uqlxbu.png',
        ],
        video:
            'https://res.cloudinary.com/dqojdssac/video/upload/v1775148720/2026-04-02_11-43-15_v2fthu.mp4',
        tags: ['Next.js', 'TailwindCss', 'MongoDB', 'NextAuth', 'TypeScript'],
        url: 'https://catalogo.tecnologiacol.lat',
        active: true,
    },
    {
        id: 4,
        title: 'Taller Sag',
        description:
            'Desarrollé con mi grupo de trabajo una aplicación web para una empresa conocida en su sector con el objetivo de que los clientes tengan la posibilidad de contactar e interactuar con la empresa desde la comodidad de sus casas.',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1770763049/Screenshot_2026-02-10_172757_cuu5qw.png',
        ],
        video:
            'https://res.cloudinary.com/dqojdssac/video/upload/v1775148734/2026-04-02_11-47-57_qttidi.mp4',
        tags: ['Next.js', 'TailwindCss', 'MongoDB', 'Auth0', 'TypeScript'],
        url: 'https://taller-sag.vercel.app',
        active: true,
    },
    {
        id: 5,
        title: 'FisiomFulness',
        description:
            'FisiomFulness es una plataforma web integral de salud y bienestar diseñada principalmente para conectar a pacientes con fisioterapeutas.',
        images: [
            'https://res.cloudinary.com/dqojdssac/image/upload/v1770765724/Screenshot_2026-02-10_182123_jajg0z.png',
        ],
        tags: ['Next.js', 'Redux', 'Node.js', 'Bootstrap'],
        url: 'https://fisiom-front.vercel.app',
        active: true,
    },
]
