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
                林春和牧師於二零零零年創立神召會仁愛福音教會，現時有五間分堂，分別於上水、屯門、旺角、觀塘及英國伯明翰地區，同工十多人，每週有超過一千二百信徒聚集參與崇拜。信徒以青年人為主。創會初期各堂時有不合，唯於二零零七年林牧師在聖靈引導下，參加訪韓禱告特會，領受未來帶領教會之方向異象，返港後便推動教會肢體組團參與，其後更自發組織晨更禱告會，早上四時三十分便開始禱告，成為教會事工一大動力。自此以後，教會迅速發展，聚會人數不斷加增，分堂之間少見分歧，大家同心興旺福音。現時每年恆常組織訪韓團隊，於不同月份出發前往禱告山學習。
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
