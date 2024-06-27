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
  const { 
    primaryEmailAddress: {
      emailAddress,
    },
  } = await currentUser();
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
            <p>You are logged in as {emailAddress}</p>
            <UserButton />
          </SignedIn>
          </div>
        </header>
        <div style={{display: 'flex', border: 'solid red 1px'}}>
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