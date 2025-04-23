import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Beliefs() {
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
            基本信仰
          </h1>
        </div>
      </div>

      {/* 基本信仰内容 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              神召會基要信仰十六條
            </h2>
            <p className="text-xl text-gray-600">我哋嘅核心信仰同價值觀</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. 權威法則
              </h3>
              <p className="text-gray-600">
                聖經──舊約同新約──係上帝逐字默示嘅，係上帝向人嘅啟示，係無謬誤嘅、具權威性嘅信仰同生活法則(帖前二13；提後三15-17；彼後一21)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. 獨一真神
              </h3>
              <p className="text-gray-600">
                獨一真神自我啟示為那位自有嘅「我是」、天地嘅創造主同人類救贖主。佢更進一步具體地以父、子同聖靈來啟示自己係關係同聯合嘅源頭(申六4；賽四十三10，11；太廿八19；路三22)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. 主耶穌基督嘅神性
              </h3>
              <p className="text-gray-600">
                主耶穌基督係上帝永活之子。《聖經》宣示：佢由童貞女所生(太一23；路一31，35)。佢未有犯罪(來七26；彼前二22)。佢行神蹟(徒二22；十38)。佢喺十架代死(林前十五3；林後五21)。佢從死裡復活(太廿八6；路廿四39；林前十五4)。佢高升坐喺上帝右邊(徒一9，11；二33；腓二9-11；來一3)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. 人嘅墮落
              </h3>
              <p className="text-gray-600">
                上帝造人係良善正直嘅，佢話：「我哋要照住我哋嘅形像、按住我哋嘅樣式造人」。然而，人竟然故意犯罪，以致墮落，從此唔只肉身死亡，靈性亦同時死亡，就係同上帝隔絕(創一26-27，二17，三6；羅五12-19)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. 人嘅救恩
              </h3>
              <p className="text-gray-600">
                上帝嘅兒子耶穌基督流出嘅寶血，係人類得救嘅唯一希望。向上帝認罪，並且信靠主耶穌基督，就可以得救。藉住重生嘅洗，同聖靈嘅更新。人本乎恩，因信稱義，藉住永生嘅盼望，成為上帝嘅後嗣(路廿四47；約三3；十13-15；弗二8；多二11；三5-7)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                6. 教會禮儀
              </h3>
              <p className="text-gray-600">
                全身浸入水中嘅洗禮係聖經吩咐嘅。凡信基督係救主同主嘅，都要受洗。咁樣，佢哋就向世人宣告已經同基督同死，並且同佢一齊復活，一舉一動有新嘅樣式(太廿八19；可十六16；徒十47-48；羅六4)。主餐包括餅同葡萄汁，象徵我哋分享主耶穌基督嘅神性(彼後一4)。呢個係記念佢嘅死(林前十一26)，同埋係預言佢嘅再來(林前十一26)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                7. 聖靈洗
              </h3>
              <p className="text-gray-600">
                信徒應該按主嘅吩咐，渴慕同殷切追求父所應許嘅聖靈同火嘅洗，呢個係信徒嘅權利。聖靈洗係初期教會嘅正常經歷。隨之而來嘅係得能力生活同事奉，又得着恩賜來事奉(路廿四49；徒一4、8；林前十二1-31)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                8. 聖靈浸嘅起初嘅實質憑據
              </h3>
              <p className="text-gray-600">
                信徒受聖靈浸有起初可見嘅憑據，就係按聖靈所賜嘅口才講方言(徒二4)。咁樣嘅方言，同方言嘅恩賜(林前十二10，28)，本質相同，只係目的同功用有異。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                9. 成聖
              </h3>
              <p className="text-gray-600">
                成聖係脫離罪惡，並且獻身上帝嘅行動(羅十二1-2；帖前五23；來十三12)。聖經教導人要過聖潔生活；「非聖潔冇人能夠見主」(來十二14)。藉住聖靈嘅力量，我哋能夠遵從呢個命令：「你哋要聖潔，因為我係聖潔嘅」(彼前一15-16)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                10. 教會同埋佢嘅使命
              </h3>
              <p className="text-gray-600">
                教會係基督嘅身體，係上帝藉住聖靈居住嘅地方，蒙上帝差遣完成大使命。聖靈重生嘅信徒都係教會其中嘅一份子，佢哋嘅名字錄喺天上諸長子共聚嘅總會中(弗一22-23，二22；來十二23)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                11. 職事
              </h3>
              <p className="text-gray-600">
                我哋嘅主預備咗一種出於上帝呼召，而且喺《聖經》中規定嘅職事，俾能夠照以下三個目的帶領教會：(一)普世歸主(可十六15-20)，(二)敬拜上帝(約四23-24)，同埋(三)建立一群效法佢兒子模樣嘅聖徒(弗四11-16)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                12. 神嘅醫治
              </h3>
              <p className="text-gray-600">
                神嘅醫治係福音嘅完整部份。代贖包括從病中得釋放，呢個係一切信主者嘅權利(賽五十三4-5；太八16-17；雅五14-16)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                13. 有福嘅盼望
              </h3>
              <p className="text-gray-600">
                教會有福嘅盼望，就係嗰啲喺基督裡瞓咗嘅人，喺主突然再來嘅時候要復活，並且同仍然活着等候主降臨嘅人，一齊被提升天(羅八23；林前十五51-52；帖前四16-17；多二13)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                14. 基督作王一千年
              </h3>
              <p className="text-gray-600">
                基督第二次降臨，其中包括聖徒被提，呢個係我哋有福嘅盼望。接着係主偕同眾聖徒親自降臨，喺世上作王一千年(亞十四5；太廿四27，30；啟一7；十九11-14；廿1-6)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                15. 最後審判
              </h3>
              <p className="text-gray-600">
                日後將有最後審判，嗰時作惡嘅人要從死裡復活，並且按所行嘅受審判。名字未有記喺生命冊嘅，將要同嗰個惡者同埋佢嘅使者、獸同假先知，一齊被扔喺火湖裡，受永遠嘅懲罰。呢個火湖就係第二次嘅死(太廿五46；可九43-48；啟十九20；廿11-15；廿一8)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                16. 新天新地
              </h3>
              <p className="text-gray-600">
                「但我哋照佢嘅應許，盼望新天新地，有義居喺其中」(彼後三13；啟廿一、廿二章)。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
