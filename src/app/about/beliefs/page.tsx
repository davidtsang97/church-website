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
                1.權威法則
              </h3>
              <p className="text-gray-600">
                聖經──舊約和新約──是上帝逐字默示的，乃是上帝向人的啟示，是無謬誤的﹑具權威性的信仰和生活法則(帖前二13；提後三15-17；彼後一21)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. 獨一真神
              </h3>
              <p className="text-gray-600">
                獨一真神自我啟示為那位自有的「我是」、天地的創造主和人類的救贖主。祂更進一步具體地以父、子和聖靈來啟示自己是關係和聯合的源頭
                (申六4；賽四十三10，11；太廿八19；路三22)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. 主耶穌基督的神性
              </h3>
              <p className="text-gray-600">
                主耶穌基督上帝永活之子。《聖經》宣示：祂由童貞女所生
                (太一23；路一31，35)。祂未有犯罪 (來七26；彼前二22)。祂行神蹟
                (徒二22；十38)。祂在十架代死 (林前十五3；林後五21)。祂從死裡復活
                (太廿八6；路廿四39；林前十五4)。祂高升坐在上帝右邊
                (徒一9，11；二33；腓二9-11；來一3)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                4. 人的墮落
              </h3>
              <p className="text-gray-600">
                上帝造人是良善正直的，祂說：「我們要照著我們的形像﹑按著我們的樣式造人」。然而，人竟故意犯罪，以墮致落，從此不只肉身死亡，靈性亦同時死亡，就是與上帝隔絕
                (一26-27，二17三6羅五12-19)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                5. 人的救恩
              </h3>
              <p className="text-gray-600">
                上帝的兒子耶穌基督流出的寶血，是人類得救的惟一希望。
                甲、得救的條件
                向上帝認罪，並且信靠主耶穌基督，便可得救。借著重生的洗，和聖靈的更新。人本乎恩，因信稱義，借著永生的盼望，成爲上帝的後嗣
                (路廿四47；約三3；十13-15；弗二8；多二11；三5-7)。
                乙、得救的憑據 內在的憑據是聖靈親自見證
                (羅八16)。外在憑據乃是一個正直和真正聖潔的人生
                (弗四24；多二12)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                6. 教會禮儀
              </h3>
              <p className="text-gray-600">
                甲、水禮
                全身浸入水中的洗禮是聖經吩咐的。凡信基督是救主和主的，都要受洗。這樣，他們便向世人宣告己經與基督同死，並且與祂一同復活，一舉一動有新生的樣式
                (太廿八19；可十六16；徒十47-48；羅六4)。 乙、聖餐
                主餐包括餅和葡萄汁，象徵我們分享主耶穌基督的神性
                (彼後一4)。這是記念祂的死 (林前十一26)，且是預言祂的再來
                (林前十一26)。信徒受命要如此行，「直等到祂來﹗」。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                7. 聖靈洗
              </h3>
              <p className="text-gray-600">
                信徒應按主的吩咐，渴慕和殷切追求父所應許的聖靈和火的洗，這是信徒的權利。聖靈洗是初期教會正常的經歷。隨之而來的是得能力生活和事奉，又得著恩賜來事奉(路廿四49；徒一4﹑8；林前十二1-31)。這經歷異於重生，是重生以後發生的(徒八2-17；十44-46；十一14-16；十五7-9)。聖靈洗又使人滿有聖靈
                (約七37-39；徒四8)，深化對上帝的崇敬(徒二43；來十二28)，更樂意分別爲聖和專心事奉
                (徒二42)，並且更熱熾地愛基督﹑祂的道和失喪的人(可十六20)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                8. 聖靈浸的起初的實質憑據
              </h3>
              <p className="text-gray-600">
                信徒受聖靈浸有起初可見的憑據，就是按聖靈所賜的口才說方言
                (徒二4)。這樣的方言，與方言的恩賜
                (林前十二40-10，28)，本質相同，只是目的和功用有異。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                9. 成聖
              </h3>
              <p className="text-gray-600">
                成聖是脫離罪惡，並且獻身上帝的行動
                (羅十二1－2；帖前五23；來十三12)。聖經教導人要過聖潔生活；「非聖潔沒有人能見主」(來十二14)。藉聖靈的力量，我們能遵從這個命令：「你們要聖潔，因爲我是聖潔的」(彼前一15－16)。
                信徒實現成聖，要在基督的死和復活上與祂聯合，憑信天天認定這樣聯合的事實，不斷的把每個肢體獻上，讓聖靈管理
                (羅六1－11；八1－2，13；加二20；腓二12－13；彼前一5)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                10. 教會及其使命
              </h3>
              <p className="text-gray-600">
                教會是基督的身體，是上帝藉聖靈居住的地方，蒙上帝差遣完成大使命。聖靈重生的信徒都是教會其中的一份子，他們的名字錄在天上諸長子共聚的總會中
                (弗一22-23，二22；來十二23)。
                上帝在人間的計劃是要尋找和拯救失喪的人、受人敬拜，並且要建立一群信徒效法祂兒子的樣式，因此，神召會既是上帝教會的一份子，主要的存在理由是：
                作爲全球歸主的一個媒介 (太廿八19-20；可十六15-16；徒一8)。
                作爲讓人一起敬拜上帝的團體 (林前十二13)。
                作爲上帝心意的管道，祂要建立一個日漸活出基督樣式的聖徒群體
                (林前十二28；十四12；弗四11-16)。
                神召會的存在，旨在透過教導和鼓勵信徒經歷聖靈充滿，藉此維持新約使徒教會的模式。聖靈充滿的經歷是：
                使信徒得著聖靈的能力，有超自然的記號伴隨著傳福音
                (可十六15-20；徒四29-31；來二3-4)。
                在敬拜上帝的關係中加入不可或缺的成分
                (林前二10-16、十二、十三、十四)。
                像新約時代一般，幫助信徒透過結出果子、行使恩賜和事奉，回應聖靈全面的工作，從而叫教會得著建立(林前十二28；十四12；加五22-26；弗四11-12；西一29)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                11. 職事
              </h3>
              <p className="text-gray-600">
                我們的主預備了一種出於上帝呼召，且在《聖經》中規定的職事，俾能照以下三個目的帶領教會：(一)
                普世歸主 (可十六15-20)，(二) 敬拜上帝 (約四23-24)，和 (三)
                建立一群效法祂兒子模樣的聖徒 (弗四11-16)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                12. 神的醫治
              </h3>
              <p className="text-gray-600">
                神的醫治是福音的完整部份。代贖包括從病中得釋放，這是一切信主者的權利
                (賽五十三4-5；太八16-17；雅五14-16)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                13. 有福的盼望
              </h3>
              <p className="text-gray-600">
                教會有福的盼望，就是那在基督裏睡了的人，在主突然再來的時候要復活，並與仍然活著等候主降臨的人，一同被提升天
                (羅八23；林前十五51－52；帖前四16－17；多二13)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                14. 基督作王一千年
              </h3>
              <p className="text-gray-600">
                基督第二次降臨，其中包括聖徒被提，這是我們有福的盼望。接著是主偕同衆聖徒親自降臨，在世上作王一千年
                (亞十四5；太廿四27，30；啓一7；十九11－14；廿1－6)。千年統治帶來以色列全家得救
                (結卅七21－22；番三19－20；羅十一26－27)，與及天下太平
                (詩七十二3－8；賽十一6－9；彌四3－4)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                15. 最後審判
              </h3>
              <p className="text-gray-600">
                日後將有最後審判，那時作惡的人要從死裏復活，並按所行的受審判。名字未有記在生命冊的，將要與那惡者和他的使者﹑獸和假先知，一同被扔在火湖裏，受永遠的懲罰。這火湖就是第二次的死
                (太廿五46；可九43-48；啓十九20；廿11-15；廿一8)。
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                16. 新天新地
              </h3>
              <p className="text-gray-600">
                「但我們照祂的應許，盼望新天新地，有義居在其中」
                (彼後三13；啓廿一﹑廿二章)。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
