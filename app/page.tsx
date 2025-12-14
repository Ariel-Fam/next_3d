'use client'




import dynamic from "next/dynamic"



import { Card, CardContent, CardTitle } from "@/components/ui/card"


import Image from "next/image"



const Scene = dynamic(() => import("@/components/Scene"), {ssr:false})


export default function Home() {
  return (



    <main className="flex flex-col items-center justify-center">

      <div className="text-9xl text-center mt-{200}">
        0110
      </div>

      <div className="text-2xl text-center mt-10 text-black">
        model loads in 5 seconds....
      </div>

      <div className="text-2xl text-center mt-10">
        Scroll down to animate the 3D model 
      </div>

      <div className="mt-[-250px]">

        <Scene />
      </div>


    <Card className="flex flex-col items-center justify-center p-7 border border-black mb-40">
  
      <CardTitle className="text-center">Remember to have fun with the software !</CardTitle>
  
        
      <CardContent>

        <Image src="/softwareLogo.png" alt="sphere_bot" width={100} height={100} />
       
      </CardContent>
    </Card>



      

    </main>
   
    
  );
}
