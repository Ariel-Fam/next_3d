import Image from "next/image";
export default function Loading(){

    return(

        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col animate-spin items-center">
                <Image src="/galaxy2.png" alt="logo" width={100} height={100} />
            </div>

            <div className="text-2xl text-center mt-10">Loading...</div>
        </div>
    )
}