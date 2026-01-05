// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Passenger Bird';
export const SITE_DESCRIPTION = 'Personal portfolio website hosted on GitHub Pages.';

export const SOCIAL_LINKS = {
    github: 'https://github.com/username',
    LinkedIn: 'https://linkedin.com/in/username',
    email: 'nggmobile223@gmail.com',
};

// Navigation items
export const NAV_ITEMS = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
];

// Profile data for About page
export const AUTHOR_PROFILE = {
    name: 'A.O.',
    role: 'Mechanical Engineer & Maker',
    bio: 'ものを作ることが好きです。自宅に3Dプリンターを置いて日々遊んでいます',
    skills: [
        'Mechanical design: CATIA, Fusion',
        'Linear structural analysis: CATIA',
        'Non-linear structural analysis: FEBio',
        'Vibe coding: Google Antigravity + Python',
        '3D printing: BBL P1S',
        'DFM and supplier management',
        'Patent idiation',
    ],
    qualifications: [
        'TOEIC 885',
    ],
    awards: [
        '2017年 日本金属学会 東海支部 優秀ポスター賞',
        '特許出願: 12 (登録済みを含む、国別）',
        '特許登録: 5',
    ],
    education: [
        { period: '2010.04 - 2015.03', school: '神戸市立工業高等専門学校', department: '機械工学科' },
        { period: '2015.04 - 2017.03', school: '豊橋技術科学大学', department: '工学部機械工学科' },
        { period: '2017.04 - 2019.03', school: '豊橋技術科学大学大学院', department: '工学研究科機械工学専攻' },],
    workExperience: [
        { period: '2019.04 - 2019.09', company: 'Lenovo Japan LLC', role: 'Associate Mechanical Engineer, subsystem mechanical development' },
        { period: '2019.10 - 2024.07', company: 'Lenovo Japan LLC', role: 'Mechanical Engineer, subsystem mechanical development' },
        { period: '2024.08 - Present', company: 'Lenovo Japan LLC', role: 'Mechanical Engineer, Team lead, TouchPad mechanical development' },
    ]
};
