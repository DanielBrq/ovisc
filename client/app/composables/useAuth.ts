// Composable for authentication and user data
export const useAuth = () => {
    // TODO: Replace with actual authentication logic
    // This should come from your auth provider (NestJS + BetterAuth)

    const currentUser = ref({
        uuid: '12345678-1234-1234-1234-123456789012',
        name: 'Current User',
        role: 'player'
    });

    const isAuthenticated = computed(() => !!currentUser.value);

    return {
        currentUser,
        isAuthenticated
    };
};
