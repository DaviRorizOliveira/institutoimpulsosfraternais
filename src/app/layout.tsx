import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/header/header.jsx';
// import Footer from '../components/footer/footer.jsx';

const geistSans = localFont({
    src: "../../public/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../../public/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Instituto Impulsos Fraternais",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Header/>
                {children}
                {/* <Footer/> */}
            </body>
        </html>
    );
}
