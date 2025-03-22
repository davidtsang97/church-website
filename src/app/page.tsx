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
      {/* 欢迎横幅 */}
      <div className="relative h-[600px] w-full">
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
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              歡迎來到神召會仁愛福音教會
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              我們是一個充滿愛與關懷的教會，致力於傳揚福音，建立信仰群體，並服務社區。
            </p>
          </div>
        </div>
      </div>

      {/* 最新講道 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">最新講道</h2>
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
              <p className="mt-2 text-gray-600">2024年3月31日</p>
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
