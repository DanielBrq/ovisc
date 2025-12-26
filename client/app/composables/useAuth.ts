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
        role: Role.Player,
        image: "https://scontent.flio1-1.fna.fbcdn.net/v/t39.30808-1/541046971_122184467600319421_2819975215797422802_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=oBgaPATpdp0Q7kNvwFX8kwC&_nc_oc=AdlT0YySr1sDfONpPNFO7gQqMO_YyIVXhMvuS2imudy2zPT1LaHZmHJQ90_OJ0tt1wY&_nc_zt=24&_nc_ht=scontent.flio1-1.fna&_nc_gid=oSMui9Apwyhx0BdX9h3rsw&oh=00_AfkPYi5SWhMN81zp-KjdxSbz3Wow1bkaTyVhhDR_WxtDDw&oe=6953A3EA"
    }));

    const isAuthenticated = computed(() => !!User.value);

    return {
        User,
        isAuthenticated
    };
};
