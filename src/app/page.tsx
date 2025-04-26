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
            伯明翰神召會仁愛福音教會
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white text-center max-w-2xl mx-auto">
            歡迎參與我們的主日崇拜！
          </p>
        </div>
      </div>

      {/* 新按钮区域 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              我第一次來
            </h3>
            <a
              href="/join/birmingham"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              我想在英國伯明翰堂聚會
            </a>
          </div>

          {/* <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              關於我們
            </h3>
            <a
              href="/join/birmingham/"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              想找到適合華人的聚會
            </a>
          </div> */}

          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              信仰
            </h3>
            <a
              href="/about/beliefs"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-gray-800 bg-[#FFCB32] hover:bg-[#FFCB32]/90 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              神召會基要信仰
            </a>
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
            {/* <div className="bg-white rounded-lg shadow-md p-6">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* 近期活動 */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">近期活動</h2> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                復活節崇拜
              </h3>
              <p className="mt-2 text-gray-600">2025年4月18日</p>
              <p className="mt-2 text-gray-600">上午10:00</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* 關於我們 */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* 地址和地图 */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                聚會地點
              </h2>
              <p className="text-lg text-gray-600">
                {/* 部 */}
                <br />
                地址：Connection Church Centre, Cooks Lane, B37 6NP
              </p>
            </div>

            {/* Google Maps 嵌入 */}
            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.4699578591076!2d-1.7456904878081334!3d52.488732071936475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b04565f36a6d%3A0x6851f4c3a224d3ae!2sConnection%20Church%20Centre%20-%20Kingshurst%20-%20Solihull%20-%20Birmingham!5e0!3m2!1sen!2shk!4v1744386640985!5m2!1sen!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
