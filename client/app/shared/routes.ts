//All routes
export const AppRoutes = {
    home: '/',
    user: {
        profile: '/user/profile',
    },
    feed: {
        index: '/feed',
    },
    store: {
        index: '/store',
    },
    event: {
        index: '/event',
    },
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        forgotPassword: '/auth/forgot-password',
        resetPassword: '/auth/reset-password',
        verifyEmail: '/auth/verify-email',
    },
} as const;

export const routeMyProfile = (profileId: string) => `${AppRoutes.user.profile}/${profileId}`;

export interface NavItem {
    key: string;
    label: string;
    icon: string;
    to: string;
    img?: string;
    subItems?: { label: string; to: string }[];
}

//Mobile routes
export const getBottomNavItems = (profileId: string): NavItem[] => [
    {
        key: 'home',
        label: 'Home', //i18n
        icon: 'material-symbols:home-outline-rounded',
        to: AppRoutes.home
    },
    {
        key: 'feed',
        label: 'Feed', //i18n
        icon: 'material-symbols:article-outline-rounded',
        to: AppRoutes.feed.index
    },
    {
        key: 'store',
        label: 'Tienda', //i18n
        icon: 'material-symbols:storefront-outline-rounded',
        to: AppRoutes.store.index
    },
    {
        key: 'event',
        label: 'Calendario', //i18n
        icon: 'material-symbols:calendar-month-outline-rounded',
        to: AppRoutes.event.index
    },
    {
        key: 'profile',
        label: 'Perfil', //i18n
        icon: 'material-symbols:person-outline-rounded',
        to: `${AppRoutes.user.profile}/${profileId}`
    }
];
