import { useTranslations } from 'next-intl'

// NAVIGATION
// Configuração dos links de navegação
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'Como a Hilink Funciona?' },
    { href: '/', key: 'services', label: 'Serviços' },
    { href: '/', key: 'pricing ', label: 'Preços' },
    { href: '/', key: 'contact_us', label: 'Contate-nos' },
];

// CAMP SECTION
// URLs das imagens das pessoas na seção de acampamento
export const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
];

// FEATURES SECTION
// Recursos oferecidos na seção de recursos
export const FEATURES = [
    {
        title: 'featuresMapsTitle',
        icon: '/map.svg',
        variant: 'green',
        description:
            'featuresMapsDescription',
    },
    {
        title: 'featuresTimelineTime',
        icon: '/calendar.svg',
        variant: 'green',
        description:
            'featuresTimelineDescription',
    },
    {
        title: 'featuresTechnologyTitle',
        icon: '/tech.svg',
        variant: 'green',
        description:
            'featuresTechnologyDescription',
    },
    {
        title: 'featuresLocationTitle',
        icon: '/location.svg',
        variant: 'orange',
        description:
            'featuresLocationDescription',
    },
];

// FOOTER SECTION
// Links e informações do rodapé
export const FOOTER_LINKS = [
    {
        title: 'Saiba Mais',
        links: [
            'Sobre a Hilink',
            'Comunicados de Imprensa',
            'Meio Ambiente',
            'Vagas',
            'Política de Privacidade',
            'Contate-nos',
        ],
    },
    {
        title: 'Nossa Comunidade',
        links: ['Escalada xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
];

// Informações de contato no rodapé
export const FOOTER_CONTACT_INFO = {
    title: 'Contate-nos',
    links: [
        { label: 'Oficial Administrativo', value: '123-456-7890' },
        { label: 'Email Oficial', value: 'hilink@akinthil.com' },
    ],
};

// Redes Sociais
export const SOCIALS = {
    title: 'Social',
    links: [
        '/facebook.svg',
        '/instagram.svg',
        '/twitter.svg',
        '/youtube.svg',
        '/wordpress.svg',
    ],
};
