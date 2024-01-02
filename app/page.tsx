import Image from 'next/image';

export default async function Home() {
    return (
        <main className="relative h-screen">
            <h1>Hello, World!</h1>
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
