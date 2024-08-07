import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import NavBar from "./navbar";
import "./globals.css";

export const metadata = {
  title: "SpaceX Cargo",
  description: "Evolving cargo through delivery in space!",
};

export default async function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          
          <header className="flex justify-evenly pt-4">
            <div>
              <h1 className="text-white text-2xl">SpaceX</h1>
            </div>
            <div>
              <NavBar />
            </div>
            <div className="text-white text-2xl">
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>
              <SignedIn>
                <UserButton
                  showName
                  appearance={{
                    elements: {
                      userButtonOuterIdentifier: "text-white",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </header>
          <div>{children}</div> 
        </body>
      </html>
    </ClerkProvider>
  );
}
