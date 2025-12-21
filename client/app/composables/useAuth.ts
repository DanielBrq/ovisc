import { Role } from "~/shared";

// Interface for user data
interface IUser {
    uuid: string;
    name: string;
    role: Role;
    image?: string; // Optional profile image URL
}

// Composable for authentication and user data
export const useAuth = () => {
    // TODO: Replace with actual authentication logic
    // This should come from your auth provider (NestJS + BetterAuth)

    // Use useState to create a shared reactive state across components
    const User = useState<IUser>('auth-user', () => ({
        uuid: '12345678-1234-1234-1234-123456789012',
        name: 'Daniel Barquero Cabrera',
        role: Role.Player
    }));

    const isAuthenticated = computed(() => !!User.value);

    return {
        User,
        isAuthenticated
    };
};
