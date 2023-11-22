
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
        title: 'Mapas reais podem ser usados offline',
        icon: '/map.svg',
        variant: 'green',
        description:
            'Oferecemos uma solução para que você possa usar nosso aplicativo ao escalar, sim, mapas offline que você pode usar a qualquer momento quando não houver sinal no local',
    },
    {
        title: 'Defina um cronograma de aventuras',
        icon: '/calendar.svg',
        variant: 'green',
        description:
            'Agende uma aventura com amigos. Nas férias, há muitas ofertas interessantes da Hilink. Dessa forma, não há mais discussões',
    },
    {
        title: 'Tecnologia usando realidade aumentada',
        icon: '/tech.svg',
        variant: 'green',
        description:
            'A tecnologia utiliza realidade aumentada como guia para sua trilha de caminhada na floresta até o topo da montanha. Já é suportado pela tecnologia mais recente sem necessidade de conexão com a internet',
    },
    {
        title: 'Muitos novos locais todo mês',
        icon: '/location.svg',
        variant: 'orange',
        description:
            'Muitos novos locais todo mês, porque temos uma comunidade mundial de alpinistas que compartilham suas melhores experiências com escaladas',
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
