import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <main className="relative h-screen">
            <Image
                src="https://bit.ly/react-cover"
                alt="coffee"
                fill
                className="object-cover"
                sizes="(max-width: 480px) 100vw, (max-widh: 768px) 50vw, 33vw"
                quality={100}
                priority
            />
        </main>
    );
}
