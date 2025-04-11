import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BirminghamPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* 顶部背景图片区域 */}
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
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              英國伯明翰分部
            </h1>
            <p className="text-xl text-white">歡迎來到我們的屬靈家園</p>
          </div>
        </div>
      </div>

      {/* 主题横幅 */}
      {/* <div className="bg-[#FFCB32] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              今年2025主題
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <span className="text-3xl md:text-4xl font-bold text-gray-800">
                愛神
              </span>
              <span className="text-3xl md:text-4xl font-bold text-gray-800">
                愛人
              </span>
              <span className="text-3xl md:text-4xl font-bold text-gray-800">
                數靈魂
              </span>
            </div>
          </div>
        </div> */}

      {/* 核心价值 */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300">
          <div className="text-xl text-gray-700 leading-relaxed">
            我們相信禱告、讀經、傳福音，以及神的醫治與釋放！
          </div>
        </div>
      </div> */}

      {/* 仁愛主日介绍 */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              什麼是仁愛主日？
            </h2>

            {/* 仁愛主日主题 */}
            {/* <div className="bg-[#FFCB32] py-12 mb-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-8 tracking-wide">
                  仁愛主日
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800 mb-2">
                      敬拜
                    </span>
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800 mb-2">
                      禱告
                    </span>
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-gray-800 mb-2">
                      講道
                    </span>
                    <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* 仁愛主日描述 */}
            <div className="prose max-w-none text-center text-gray-700 mb-12">
              <p className="text-lg leading-relaxed">
                在仁愛主日，我們一起敬拜神、彼此代禱，並特別為來自香港、移居英國的朋友提供一個溫暖的屬靈家園。
                這裡不只是聚會的地方，更是讓你認識新朋友、彼此扶持、共同經歷神改變生命的大能的家。
              </p>
            </div>

            {/* 行动按钮 */}
            <div className="flex justify-center">
              <a
                href="https://wa.me/85251610604?text=你好%20我想參與英國伯明翰主日聚會"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-800 bg-[rgb(255,203,50)] hover:bg-[rgb(255,203,50,0.9)] transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                參與英國伯明翰主日聚會
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 地址和地图 */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">聚會地點</h2>
            <p className="text-lg text-gray-600">
              英國伯明翰分部
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

      <Footer />
    </main>
  );
}
