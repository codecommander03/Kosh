import SiderBar from "@/components/SiderBar";
import Image from "next/image";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = { firstName: "Aditya", lastName: "Gupta" }; 
    return (
        <main className="flex h-screen w-full font-inter">
            <SiderBar user={loggedIn} />

            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image
                        src="/icons/logo.svg"
                        width={30}
                        height={30}
                        alt="menu icon"
                    />
                    <div></div>
                </div>
            </div>
            {children}
        </main>
    );
}
