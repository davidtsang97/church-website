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
      {/* <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed">
            神召會基要信仰
          </p>
        </div>
      </div> */}

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
              {
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  伯明翰神召會仁愛福音教會
                </h2>
              }
              {/* <p className="text-xl text-gray-600 mb-4">主任牧師</p> */}
              <p className="text-gray-600 leading-relaxed">
                感謝神的帶領，我們在2025年開始了英國伯明翰聚會，每逄星期日，下午一時半至三時，在Connection
                Church Centre (B37
                6NP)，舉行廣東話主日崇拜，歡迎你來參加。（以上聚會資料，已上載英國號角，方便查詢。)
                我們帶領會眾以「禱告、讀經、傳福音」為根本，以現代詩歌敬拜，以小組教會牧養模式，建立榮神益人的教會。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      {/* 添加基本信仰部分 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">神召會</h2>
            <p className="text-xl text-gray-600">
              1914年，神召會先賢在美國亞肯色州熱泉市的創會會議上表明神召會的成立目的：
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. 闡述可被捍衛的五旬宗信仰立場；
              </h3>
              {/* <p className="text-gray-600">
                聖經──舊約和新約──是上帝逐字默示的，乃是上帝向人的啟示，是無謬誤的﹑具權威性的信仰和生活法則(帖前二13；提後三15-17；彼後一21)。
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2.
                促進五旬宗牧者的相交關係，彼此支持以致五旬宗的工作被鞏固與保存；
              </h3>
              {/* <p className="text-gray-600">
                獨一真神自我啟示為那位自有的「我是」、天地的創造主和人類的救贖主。祂更進一步具體地以父、子和聖靈來啟示自己是關係和聯合的源頭(申六4；賽四十三10，11；太廿八19；路三22)。
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. 設立中央化海外宣教組織支援前線的宣教士；
              </h3>
              {/* <p className="text-gray-600">
                主耶穌基督上帝永活之子。《聖經》宣示：祂由童貞女所生(太一23；路一31，35)。祂未有犯罪(來七26；彼前二22)。祂行神蹟(徒二22；十38)。祂在十架代死(林前十五3；林後五21)。祂從死裡復活(太廿八6；路廿四39；林前十五4)。祂高升坐在上帝右邊(徒一9，11；二33；腓二9-11；來一3)。
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. 開辦認可的聖經學院培訓未來的牧者與教會領袖；
              </h3>
              {/* <p className="text-gray-600">
                
              </p> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5.
                建立新的宗派組織作為新皮袋，致使聖經的新酒及五旬節復興的果子得以保存。
              </h3>
              {/* <p className="text-gray-600">
                上帝的兒子耶穌基督流出的寶血，是人類得救的惟一希望。向上帝認罪，並且信靠主耶穌基督，便可得救。借著重生的洗，和聖靈的更新。人本乎恩，因信稱義，借著永生的盼望，成爲上帝的後嗣(路廿四47；約三3；十13-15；弗二8；多二11；三5-7)。
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
