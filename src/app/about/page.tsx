import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      {/* 背景图片区域 */}
      <div className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/church-bg.png"
          alt="教会背景"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            關於我們
          </h1>
        </div>
      </div>

      {/* 教会介绍 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            神召會仁愛福音教會於2000年由林春和牧師創立。在過去的二十多年裡，我們從一個小型聚會發展成為擁有五個分堂的教會群體。我們相信禱告的力量，並致力於在社區中傳揚福音，建立充滿愛的信仰群體。
          </p>
        </div>
      </div>

      {/* 牧师介绍 */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/images/pastor.jpg"
                alt="林春和牧師"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                林春和牧師
              </h2>
              <p className="text-xl text-gray-600 mb-4">主任牧師</p>
              <p className="text-gray-600 leading-relaxed">
                林春和牧師自2000年創立教會以來，一直致力於帶領教會成長和發展。他相信教會應該是一個充滿愛與關懷的群體，並致力於在社區中傳揚福音，建立門徒。
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
