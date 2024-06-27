import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import NavBar from './navbar';
// import "./globals.css";

export const metadata = {
  title: "SpaceX Cargo",
  description: "Evolving cargo through delivery in space!",
};

export default async function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <header>
          <div>
          <SignedOut>
            <SignInButton mode="modal"/>
          </SignedOut>
          <SignedIn>
            <UserButton showName/>
          </SignedIn>
          </div>
        </header>
        <div >
          <NavBar />
          <div>
            {children}
          </div>
        </div>
      </body>
    </html>
  </ClerkProvider>
    
  )
}