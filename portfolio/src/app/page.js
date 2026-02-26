import CanvasPage from "@/components/CanvasPage";
import HomePage from "@/components/HomePage";



export default function Home() {
  return (
   <>
   <CanvasPage />


   <div className="absolute top-0 left-0  w-full h-screen home">

     <HomePage />
   </div>
   </>

  );
}
