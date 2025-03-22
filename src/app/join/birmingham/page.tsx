import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BirminghamPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* 顶部背景图片区域 */}
      <div className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/church-bg.png"
          alt="教会背景"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              英國伯明翰分部
            </h1>
            <p className="text-xl text-white">歡迎來到我們的屬靈家園</p>
          </div>
        </div>
      </div>

      {/* 主题横幅 */}
      <div className="bg-yellow-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center font-bold text-xl text-gray-800">
            今年2025主題：愛神、愛人、數靈魂
          </div>
        </div>
      </div>

      {/* 核心价值 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="text-xl text-gray-700 leading-relaxed">
            我們相信禱告、讀經、傳福音，以及神的醫治與釋放，都是建立信仰的核心價值！
          </div>
        </div>
      </div>

      {/* 仁愛主日介绍 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              什麼是仁愛主日？
            </h2>

            {/* 仁愛主日主题 */}
            <div className="bg-yellow-100 py-6 mb-8 rounded-lg">
              <div className="text-center font-bold text-xl text-gray-800">
                仁愛主日：敬拜、禱告、連結
              </div>
            </div>

            {/* 仁愛主日描述 */}
            <div className="prose max-w-none text-center text-gray-700 mb-12">
              <p className="text-lg leading-relaxed">
                在仁愛主日，我們一起敬拜神、彼此代禱，並特別為來自香港、移居英國的朋友提供一個溫暖的屬靈家園。
                這裡不只是聚會的地方，更是讓你認識新朋友、彼此扶持、共同經歷神改變生命的大能的家。
              </p>
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#join-sunday"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                參與主日
              </a>
              <a
                href="#location"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                我在英國伯明翰聚會
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
