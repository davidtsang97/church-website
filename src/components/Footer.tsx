import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 外部链接 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">英國伯明翰堂</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">聚會地點：</p>
                <p className="text-gray-300">
                  Connection Church Centre, Cooks Lane, B37 6NP
                </p>
              </div>
              <div>
                <p className="font-medium">聚會時間：</p>
                <p className="text-gray-300">星期日 下午1時半至3時 (粵) </p>
              </div>
            </div>
          </div>

          {/* 元朗堂和屯门堂 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">元朗堂 & 屯門堂</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">聚會地點：</p>
                <p className="text-gray-300">
                  屯門新安街2號富益商業大廈11字樓1-2室
                </p>
              </div>
              <div>
                <p className="font-medium">聚會時間：</p>
                <p className="text-gray-300">元朗堂：星期日 下午二時正</p>
                <p className="text-gray-300">屯門堂：星期日上午十時半</p>
              </div>
            </div>
          </div> */}

          {/* 旺角堂和上水堂 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">旺角堂 & 上水堂</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">旺角堂：</p>
                <p className="text-gray-300">
                  聚會地點：九龍盱角道11-13號藝旺商業大廈12字樓全層
                </p>
                <p className="text-gray-300">聚會時間：星期日上午十時半</p>
              </div>
              <div>
                <p className="font-medium">上水堂：</p>
                <p className="text-gray-300">副堂地址：上水新豐路43號1-2樓</p>
                <p className="text-gray-300">青少年活動Party地點：上水副堂</p>
                <p className="text-gray-300">查詢電話：2470 0587</p>
              </div>
            </div>
          </div> */}

          {/* 观塘堂 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">觀塘堂</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">聚會地點：</p>
                <p className="text-gray-300">
                  九龍牛頭角定業街52號安德大廈地下B舖
                </p>
              </div>
              <div>
                <p className="font-medium">聚會時間：</p>
                <p className="text-gray-300">星期六、日（分時段進行）</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} 神召會仁愛福音教會. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
