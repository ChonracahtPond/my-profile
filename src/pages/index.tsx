import RootLayout from '@/components/layout'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <RootLayout>
   <div>
   <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr to-blue-700 from-indigo-900 p-10">
  <div className="w-max">
    <h1
      className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">
       Hello World 
    </h1>
  </div>
</div>
   </div>

    </RootLayout>
    </>
  )
}
