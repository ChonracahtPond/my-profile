import RootLayout from "@/components/layout";
import Card from "@/container/card";
import Cardtext from "@/container/cardtext";

export default function MyProfile() {
  return (
    <>
      <RootLayout>
        
          <div className="wave"></div>
        

        <div className="relative">
          <div className=" sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b ">
            <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr p-10">
              <div className="w-max">
                <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
                  Hello World
                </h1>
                <p className="mt-2">Scroll Down for next slide</p>
              </div>
            </div>
            {/* <h2 className="text-4xl font-bold">My ProFile</h2> */}
            {/* <p className="mt-2">Scroll Down for next slide</p> */}
          </div>

          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b  text-white">
            {/* <h2 className="text-4xl font-bold">The Second slide2</h2> */}
            <Card />
            <p className="mt-2">Scroll Down for next slide</p>
          </div>

          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
            <h2 className="text-4xl font-bold">The Third slide3</h2>
            <Cardtext/>
            <p className="mt-2">Scroll Down</p>
          </div>

          <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
            <h2 className="text-4xl font-bold">The Fourth slide4</h2>
          </div>
        </div>
      </RootLayout>
    </>
  );
}
