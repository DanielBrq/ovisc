
export const menuItems = [
    {
        key: 'home',
        label: 'Home', //i18n
        icon: 'material-symbols:home-outline-rounded',
        to: '/'
    },
    {
        key: 'feed',
        label: 'Feed',
        icon: 'material-symbols:article-outline-rounded',
        subItems: [
            { label: 'Sub A', to: '/' },
            { label: 'Sub B', to: '/' },
            { label: 'Sub C', to: '/' },
            { label: 'Sub D', to: '/' },
        ]
    },
    {
        key: 'store',
        label: 'Store', //i18n
        icon: 'material-symbols:storefront-outline-rounded',
        subItems: [
            { label: 'Sub A', to: '/' },
            { label: 'Sub B', to: '/' },
            { label: 'Sub C', to: '/' },
        ]
    },
    {
        key: 'event',
        label: 'Event', //i18n
        icon: 'material-symbols:calendar-month-outline-rounded',
        subItems: [
            { label: 'Sub A', to: '/' },
            { label: 'Sub B', to: '/' },
            { label: 'Sub C', to: '/' },
        ]
    },
    {
        key: 'profile',
        label: 'Profile', //i18n
        icon: 'material-symbols:person-outline-rounded',
        subItems: [
            { label: 'Sub A', to: '/' },
            { label: 'Sub B', to: '/' },
            { label: 'Sub C', to: '/' },
        ]
    }
]
