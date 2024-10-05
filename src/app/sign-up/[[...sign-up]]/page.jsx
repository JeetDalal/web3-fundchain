'use client'
import { SignUp, useAuth,useUser } from '@clerk/nextjs'
import { useEffect } from 'react';
import {useRouter} from 'next/navigation'

export default function Page() {

    const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Redirect user based on authentication status
    if (isSignedIn) {
      router.replace('/home'); // Redirect to /home if logged in
    } else {
      router.replace('/sign-up'); // Redirect to /auth if not logged in
    }
  }, [isSignedIn, router]);

  return (
   <div className="relative flex flex-row items-center justify-around h-screen w-full bg-white">
  {/* Blurred Background Image */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <img 
      src="/path-to-your-image.jpg" 
      alt="background" 
      className="w-full h-full object-cover blur-xl opacity-70"
    />
  </div>

  {/* Text and SignUp Components */}
  <div className="relative z-10 text-center animate-slide-in-left">
    <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text drop-shadow-lg animate-gradient-flow">
      <span className="block animate-fade-in-up delay-200">Welcome to</span> 
      <span className="block animate-bounce-in delay-500">FundChain</span>
    </h1>
    <p className="mt-6 text-lg text-gray-600 max-w-md mx-auto animate-fade-in-up delay-1000 text-center">
      FundChain is the future of global donations. We offer a secure, transparent, and decentralized way to contribute to causes worldwide.
    </p>
  </div>
  <div className="relative z-10 animate-fade-in-right delay-1500">
    <SignUp />
  </div>
</div>

  )
}