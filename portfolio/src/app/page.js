"use client"
import CanvasPage from "@/components/CanvasPage";
import HomePage from "@/components/HomePage";
import { useState } from "react";



export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  return (
   <>
   <CanvasPage />

{!isStarted && (
        <div className="absolute top-0 left-0 w-full h-screen z-50">
          <HomePage onComplete={() => setIsStarted(true)} />
        </div>
      )}
   </>

  );
}
