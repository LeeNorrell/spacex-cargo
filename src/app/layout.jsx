import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
// import './globals.css';

export const metadata = {
  title: "SpaceX Cargo",
  description: "Evolving cargo through delivery in space!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header>
          <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
        </header>
          {children}
      </body>
    </html>
  </ClerkProvider>
    
  )
}
