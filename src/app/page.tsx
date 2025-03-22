import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  UserGroupIcon,
  PlayIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      {/* 顶部横幅 */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="/images/church-bg.png"
            alt="教会外观"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 sm:mb-6">
            歡迎來到
            <br />
            神召會仁愛福音教會
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mx-auto">
            在這裡，我們一同敬拜、成長、服事
          </p>
        </div>
      </div>

      {/* 新按钮区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              我第一次來
            </h3>
            <a
              href="/join/birmingham"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              我想在英國伯明翰聚會
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              我在香港聚會
            </h3>
            <a
              href="/join/birmingham"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              為下一代找到適合的聚會
            </a>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              兒童及青少年
            </h3>
            <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/join/birmingham"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                伯明翰兒童主日
              </a>
              <a
                href="/join/birmingham"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                伯明翰青少年團契
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 最新講道 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          最新講道
        </h2> */}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 这里可以添加实际的讲道视频/音频卡片 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">主日講道</h3>
              <p className="mt-2 text-gray-600">2024年3月17日</p>
              <div className="mt-4">
                <a
                  href="https://www.facebook.com/share/g/17vYRX57Q8/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  觀看講道
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 近期活動 */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">近期活動</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 这里可以添加实际的活动卡片 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                復活節崇拜
              </h3>
              <p className="mt-2 text-gray-600">2025年4月18日</p>
              <p className="mt-2 text-gray-600">上午10:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* 關於我們 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">關於我們</h2>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            神召會仁愛福音教會位於英國伯明翰，我們致力於：
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>• 傳揚耶穌基督的福音</li>
            <li>• 建立充滿愛的信仰群體</li>
            <li>• 服務當地社區</li>
            <li>• 培養門徒成長</li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
