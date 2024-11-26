import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaHome } from 'react-icons/fa';

interface TopicContent {
  title: string;
  content: React.ReactNode;
  animation?: React.ReactNode;
}

const topicContents: Record<string, TopicContent> = {
  'light-nature': {
    title: "Yorug'lik va uning tabiati",
    content: (
      <div className="space-y-6">
        <p>
          Yorug'lik - bu elektromagnit to'lqinlar va fotonlar oqimi sifatida namoyon bo'ladigan fizik hodisa. 
          U ikki xil tabiatga ega: to'lqin va korpuskular (zarracha).
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy xususiyatlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Vakuumda tarqalish tezligi: c ≈ 3×10⁸ m/s</li>
            <li>To'lqin uzunligi: 380-750 nm (ko'zga ko'rinadigan)</li>
            <li>Energiyasi: E = hν (Plank formulasi)</li>
          </ul>
          <ul className="list-disc list-inside space-y-2">
            <li>
Yorug'lik — bu atrofimizdagi dunyoni ko'rishimizga, hayotimizni davom ettirishimizga imkon beradigan eng muhim tabiiy hodisalardan biridir. U nafaqat ko'zni ochib, ranglarning mo'jizasini kashf etishga yordam beradi, balki inson psixikasiga ham katta ta'sir ko'rsatadi. Yorug'likni biz ko'pincha oddiy bir hodisa deb bilsak ham, uning tabiati va inson hayotidagi o'rni juda chuqur.

Yorug'lik, asosan, elektromagnit to'lqinlari shaklida bo'ladi. Bu to'lqinlar turli uzunliklarda bo'lib, ko'zimiz faqatgina muayyan to'lqin uzunliklarini, ya'ni ko'rinadigan spektrni sezadi. Ko'rinadigan yorug'likda qizil, yashil, ko'k ranglar va ularning turli o'zgarishlari mavjud. Shuning uchun ham, yorug'likni butunlay boshqacha qabul qilishimiz mumkin, lekin hamma odamlar bir xil ranglar va shakllarni ko'rishadi.

Yorug'lik faqat biologik va fiziologik jihatdan emas, balki madaniy va falsafiy jihatdan ham katta ahamiyatga ega. Masalan, qadim zamonlarda, yorug'lik va qorong'ulik insonlarning ruhiy holatini ifodalash uchun ishlatilgan. Yorug'lik faqat ko'rish imkonini berishdan tashqari, hayotga bo'lgan umid, ezgulik va halollikni anglatgan. Qorong'ulik esa, ko'pincha xavf-xatar va noma'lum holatlar bilan bog'lanadi. Insoniyat tarixida yorug'lik va qorong'ulik doimiy ravishda bir-biriga qarama-qarshi turgan kuchlar sifatida tasvirlangan.

Yorug'likning tabiati uning ilmiy o'rganilishi bilan ham qiziqarli. XVII asrda Sir Isaac Nyuton yorug'likni prizma yordamida tahlil qilib, uning turli ranglardan iborat ekanligini ko'rsatgan. Keyinchalik, yorug'likning to'lqin nazariyasi va zarracha nazariyasi o'rtasidagi munosabatlar kashf etildi. Bugungi kunda yorug'lik kvant mexanikasi nuqtai nazaridan ham o'rganilmoqda, va bu yondashuvlar bizga atomlar va molekulalar darajasida yorug'likning xulq-atvori haqida yangi bilimlar beradi.

Yorug'likning inson hayotidagi ahamiyatiga keladigan bo'lsak, u nafaqat ko'rishni ta'minlaydi, balki odamlarning kayfiyatini, energiya darajasini va sog'lig'ini ham o'zgartiradi. Yorug'likning yetarli darajada bo'lmasligi, masalan, kam yorug'likli muhitlar va vaqtlar, depressiya, uyqusizlik va boshqa sog'liq muammolariga olib kelishi mumkin. Aksincha, tabiiy yorug'likning ko'payishi, insonning umumiy farovonligini oshirishga yordam beradi. Shu sababli, ko'p mamlakatlarda arxitektura va dizayn sohalarida yorug'likni optimallashtirish muhim ahamiyat kasb etadi.

Xulosa qilib aytganda, yorug'lik faqat atrof-muhitni ko'rish uchun kerak bo'lgan oddiy bir vosita emas, balki u insoniyat tarixida va tabiiy dunyoda chuqur ma'nolarni o'z ichiga olgan hodisadir. Uning tabiati, ilmiy nuqtai nazardan, tabiiy hayotimizni yaxshilashda, bizni ilhomlantirishda va ba'zan ko'nglimizni tinchlantirishda ajralmas vosita bo'lib xizmat qiladi. Yorug'likni tushunish, nafaqat ilm-fan, balki insoniyatning ruhiy va madaniy rivojlanishida ham muhim o'rin tutadi.</li>
          </ul>
        </div>
        <div className="relative h-64 bg-gradient-to-r from-violet-600 via-blue-500 to-green-500 rounded-lg overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-white/30"
            animate={{
              x: [0, 100, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    )
  },
  'interference': {
    title: "Yorug'lik interferensiyasi",
    content: (
      <div className="space-y-6">
        <p>
          Interferensiya - bu ikki yoki undan ortiq yorug'lik to'lqinlarining o'zaro ta'siri natijasida 
          kuzatiladigan hodisa. Bu hodisa yorug'likning to'lqin tabiatini tasdiqlaydi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Interferensiya turlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Yung tajribasi</li>
            <li>Yupqa pardadagi interferensiya</li>
            <li>Ko'p nurli interferensiya</li>
          </ul>
          <ul className="bg-white/5 p-4 rounded-lg">
           <li>Yorug'lik interferensiyasi — bu yorug'lik to'lqinlarining o'zaro ta'sir qilishi natijasida yuzaga keladigan hodisa bo'lib, u fizikada to'lqinlarning xususiyatlari va ularning bir-biriga ta'siri haqidagi muhim tushunchalarni ifodalaydi. Bu hodisa, bir-biriga qarama-qarshi to'lqinlarning yig'ilishi yoki bekor qilinishi orqali yorug'likning yangi xususiyatlarini namoyon etadi. Yorug'lik interferensiyasi nafaqat fizika nuqtai nazaridan, balki kundalik hayotda ham turli-ilmiy va texnologik jarayonlarni tushunishda muhim ahamiyatga ega.

Yorug'lik interferensiyasining asosiy tushunchasi to'lqinlar orasidagi o'zaro ta'sirdir. Yorug'lik to'lqinlari elektromagnit to'lqinlar bo'lib, ular fazoviy va vaqtinchalik o'zgarishlarni o'z ichiga oladi. Interferensiya, asosan, ikki yoki undan ko'p to'lqinlarning bir nuqtada birlashishi yoki ajralishi jarayonida yuzaga keladi. Agar to'lqinlar bir-birini kuchaytirsa, bu konstruktsiv interferensiya deb ataladi; agar ular bir-birini yo'qotib, sustlashsa yoki to'liq yo'qolsa, bu destruktiv interferensiya deyiladi.

Yorug'lik interferensiyasining eng mashhur va ilmiy jihatdan muhim misoli Tomas Youngning ikki slitsali tajribasidir. 1801-yilda Young yorug'likning to'lqin xarakteristikasini isbotlash uchun ikki slitsali eksperimentni o'tkazdi. U yorug'likni ikkita tor teshikdan o‘tkazib, ekran ustida yorug‘likning yorqin va qorong‘u chiziqlardan iborat interferensiya tasvirini kuzatdi. Bu holat, yorug'likning nafaqat zarrachalar shaklida, balki to'lqinlar shaklida ham harakatlanishini ko'rsatdi. Shunday qilib, interferensiya fenomeni yorug'likning to'lqin tabiatini isbotlashga yordam berdi.

Yorug'lik interferensiyasining yana bir qiziqarli jihati — bu hodisaning mikroskopik va makroskopik miqyoslarda o'rganilishi. Mikroskopik miqyosda, interferensiya fenomeni ko'pincha optik qurilmalarda, masalan, interferometrlar va lazerlar kabi yuqori texnologik asboblardagi aniqlikni oshirishda qo'llaniladi. Makroskopik miqyosda esa, interferensiya tabiiy hodisalarda ham namoyon bo'lishi mumkin. Masalan, yog'ochdagi mozaika, masofadan ko'rinadigan ba'zi rangli soya va boshqa tabiiy effektlar interferensiyaning natijasi bo'lishi mumkin.

Bundan tashqari, yorug'lik interferensiyasi zamonaviy ilm-fanda va texnologiyada keng qo'llaniladi. Optik tolali kommunikatsiya tizimlarida, lazerlar va mikrosxemalar ishlab chiqarishda interferensiya prinsiplari ishlatiladi. Interferometrlar yordamida koinotdagi masofalarni aniqlash, astronomik kuzatuvlar o‘tkazish va hatto yer tebranishlarini o‘lchash imkoniyatlari mavjud. Shuningdek, interferensiya hodisasi, optik ekranlar va ko'zgularni ishlab chiqarishda ham qo'llaniladi.

Yorug'lik interferensiyasining inson hayotiga ta'siri kengdir. U faqat ilm-fan va texnologiyada, balki san’at va madaniyatda ham ko‘rinadi. Masalan, ba'zi rangli oynalar va badiiy yoritish texnikalari interferensiya fenomenini qo'llash orqali chiroyli va estetik ko'rinishlar yaratadi.

Xulosa qilib aytganda, yorug'lik interferensiyasi to'lqinlarning o'zaro ta'siri orqali nafaqat tabiiy hodisalar, balki zamonaviy ilm-fan va texnologiyalarning asosiy tamoyillarini ham ifodalaydi. Bu hodisa, yorug'likning tabiati va uning xususiyatlarini tushunishga yordam beradigan eng muhim ilmiy tajribalardan biri hisoblanadi. Yorug'lik interferensiyasi, shuningdek, bizning kundalik hayotimizdagi ko'plab texnologik yangiliklarga asos bo'lib xizmat qiladi.</li>
          </ul>
        </div>
        <div className="relative h-64 bg-black rounded-lg overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1 bg-blue-500"
              style={{ top: `${20 + i * 40}px` }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    )
  },
  'diffraction': {
    title: "Yorug'lik difraksiyasi",
    content: (
      <div className="space-y-6">
        <p>
          Difraksiya - yorug'lik to'lqinlarining to'siqlar chetidan o'tishda yoki tirqishlardan o'tishda 
          to'g'ri chiziqli yo'nalishdan og'ishi hodisasi. Bu hodisa Gyuygens-Frenel prinsipi asosida tushuntiriladi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Difraksiya turlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Fraungofer difraksiyasi (parallel nurlar)</li>
            <li>Frenel difraksiyasi (sferik to'lqinlar)</li>
            <li>Difraksion panjara</li>
            <li>Yorug'lik difraksiyasi - bu yorug'lik to'lqinlarining turli to'siqlar, teshiklar yoki cheklovlar atrofida tarqalishi hodisasidir. Difraksiya fenomeni, ayniqsa, to'lqin tabiatiga ega bo'lgan yorug'likni o'rganishda muhim ahamiyatga ega. Ushbu hodisa, ayniqsa, yorug'lik manbalari kichik teshiklardan yoki boshqa to'siqlardan o‘tib ketganda sezilarli darajada ko'zga tashlanadi. Yorug'likning difraksiya jarayoni ko'plab ilmiy tadqiqotlarda, shu jumladan optika, astronomiya va materialshunoslikda o'rganilmoqda.

Yorug'lik difraksiyasi 17-asrda ingliz olimi Robert Hooke tomonidan dastlab ta'riflangan va keyinchalik bu fenomenning to'liq tushunilishi Fransuz olimi Augustin-Jean Fresnel tomonidan amalga oshirilgan. Fresnel difraksiyasini tushunishda muhim o'rin tutgan, chunki u yorug'likning to'lqin tabiatini isbotlashga yordam berdi. Difraksiya hodisasi ko'proq to'lqin xususiyatlariga asoslanadi, ya'ni yorug'likning harakatlanuvchi energiya shakli sifatida tarqalishi va sochilishi.

Difraksiya hodisasini tushunishda, ayniqsa, yoshlar uchun bir qancha misollarni keltirish foydali bo'ladi. Masalan, biron-bir kichik teshikdan yorug'lik o'tib ketganda, bu yorug'lik teshikdan chiqib, uning atrofida kengayadi. Shu tarzda, yorug'lik teshikning o'lchamiga nisbatan teskari holatlarda, ya'ni kichik teshiklarda ko'proq difraksiya paydo bo'ladi. Ushbu hodisa, shuningdek, ko'pgina optik asboblar, masalan, mikroskoplar va teleskoplarda ham muhim rol o'ynaydi.

Yorug'lik difraksiyasining ko'rinishi yorug'likning to'lqin uzunligiga, to'siqning o'lchamiga va to'siqning shakliga bog'liq. Masalan, kengaygan teshiklardan yoki kesmalardan chiqqan yorug'lik, ya'ni difraksiya, juda kichik bo'lsa, yoki uzoq masofalarga tarqalsa, aniq chizilgan rasmlar hosil bo'ladi. Bunday hodisa, ayniqsa, mikroskopda yoki teleskopda kuzatilganda, ob'ektlarni yanada aniqroq ko'rishga yordam beradi.

Yorug'lik difraksiyasining ilmiy va amaliy ahamiyati ham juda katta. Optik asboblar, masalan, lazerlar va interferometrlar, aynan difraksiyaning xususiyatlarini hisobga olgan holda ishlab chiqilgan. Bu asboblar orqali ko'plab ilmiy tadqiqotlar, masalan, materiyaning tuzilishi, koinotdagi yulduzlarning va galaktikalarning o'rganilishi, muvaffaqiyatli amalga oshiriladi.

Bundan tashqari, yorug'lik difraksiyasining ba'zi texnologik qo'llanmalari ham mavjud. Masalan, zamonaviy telefonlar va boshqa elektron qurilmalarda ekranning o'lchamlari va tasvirlarni aniqlik bilan ko'rsatish uchun difraksiya va interferensiya hodisalari ishlatiladi. Shuningdek, difraksiyali mikroskopiya yordamida juda kichik strukturaviy xususiyatlar va modellarni tahlil qilish mumkin.

Xulosa qilib aytganda, yorug'lik difraksiyasi - bu yorug'likning tabiati, uning to'lqin xususiyatlari va bu xususiyatlarning amaliy qo'llanilishi haqida chuqur bilim olish imkonini beruvchi muhim ilmiy hodisadir. Bu fenomenni o'rganish orqali, insonlar yangi ilmiy kashfiyotlar qilish, texnologiyalarni takomillashtirish va tabiiy dunyoni yanada chuqurroq tushunish imkoniyatiga ega bo'lishadi.</li>
          </ul>
        </div>
        <p>
          Difraksion panjaraning asosiy formulasi: dsinφ = mλ, bu yerda d - panjara doimiysi, 
          φ - difraksiya burchagi, m - spektr tartibi, λ - to'lqin uzunligi.
        </p>
      </div>
    )
  },
  'dispersion': {
    title: "Yorug'lik dispersiyasi",
    content: (
      <div className="space-y-6">
        <p>
          Dispersiya - yorug'likning muhitda tarqalishida to'lqin uzunligiga qarab sinish ko'rsatkichining 
          o'zgarishi hodisasi. Bu hodisa prizmada oq yorug'likning spektrga ajralishini tushuntiradi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Dispersiya turlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Normal dispersiya</li>
            <li>Anomal dispersiya</li>
            <li>Spektral dispersiya</li>
            <li>Yorug'lik dispersiyasi — bu yorug'lik to'lqinlarining turli uzunliklaridagi to'lqinlar har xil tezliklarda harakatlanishi natijasida yuzaga keladigan hodisa bo'lib, u yorug'likning ranglar spektrining ajralib chiqishiga olib keladi. Bu fenomen, asosan, yorug'likning o'zaro aloqasi va uning moddalar bilan o'zaro ta'siri asosida yuzaga keladi. Dispersiya, ko'plab tabiiy va ilmiy jarayonlar uchun asosiy omil bo'lib, uning turli shakllari ko'plab fizik hodisalarni tushunishga yordam beradi.

Yorug'lik dispersiyasining asosiy sababi, yorug'lik to'lqinlarining turli uzunliklaridagi to'lqinlar har xil tezliklarda harakatlanishidir. Bu hodisa, asosan, yorug'lik moddalarga kiritilganida yuzaga keladi, ya'ni yorug'likni biron bir shaffof moddadan o‘tkazganimizda, uning ranglari bir-biridan ajralib chiqadi. Dispersiya hodisasini oddiy qilib tushuntirish uchun eng mashhur misol sifatida, shaffof prizmadan o‘tkazilgan yorug‘likni keltirish mumkin. Agar oddiy oq yorug'lik prizma orqali o‘tkazilsa, u bir nechta ranglarga ajraladi: qizil, sariq, yashil, ko'k, indigo va binafsha. Bunday ajralish natijasida yorug'likning spektri hosil bo'ladi. Bu holat dispersiyaning oddiy namunasi hisoblanadi.

Yorug'lik dispersiyasi ko'plab ilmiy va texnologik sohalarda katta ahamiyatga ega. Masalan, atmosferadagi yorug'likning dispersiyasi tufayli biz quyoshning botishida yoki chiqishida osmonning qizil rangga bo'yalishini ko'rishimiz mumkin. Buning sababi, qizil rangli to'lqinlarning atmosferada ko'proq tarqalishi, boshqa ranglardagi to'lqinlar esa qisqaroq masofaga tarqalishidir. Shuningdek, dispersiya, astronomiyada ham muhim rol o'ynaydi. Astronomik teleskoplar yordamida yulduzlar va boshqa osmon jismlarining spektral xususiyatlarini o'rganish dispersiya hodisasiga asoslanadi.

Fizikada dispersiyaning yana bir qiziqarli jihati, uni materiallarning turli xususiyatlariga qarab boshqarish imkoniyatidir. Masalan, ayniqsa yuqori texnologiyali optik materiallarda dispersiya tushunchasidan foydalanib, turli optik qurilmalar va asboblarni yaratish mumkin. Optik tolalar va lazer texnologiyalarida, dispersiyaning turli shakllari samarali qo'llaniladi. Shuningdek, dispersiyani aniqlash va tahlil qilish orqali materiallarning optik xususiyatlarini aniqlash, yangi materiallar ishlab chiqarish imkoniyatlarini kashf etish mumkin.

Yorug'lik dispersiyasining boshqa bir ahamiyatli jihati — uning rangli yoritishda qo'llanilishidir. Dispersiya orqali turli rangli yoritish tizimlari yaratiladi, masalan, kino va televizor ekranlarida, kompyuter monitorlarida va boshqa vizual texnologiyalarda dispersiya prinsiplaridan foydalaniladi. Rangli ko'rsatkichlar va ekranning yorug'lik spektrining boshqarilishi disperse moddalar orqali amalga oshiriladi. Shunday qilib, dispersiya nafaqat ilm-fan, balki kundalik hayotda ham keng qo'llaniladi.

Bundan tashqari, dispersiya tabiiy jarayonlarda ham ko‘rinadi. Misol uchun, yomg‘ir tomchilari orqali quyosh nurining tarqalishi natijasida ko‘zga ko‘rinadigan kamalakni hosil qiladi. Kamelakda yorug'lik spektrining barcha ranglari ajralib ko‘rinadi, bu dispersiyaning tabiatdagi namunasidir.

Xulosa qilib aytganda, yorug'lik dispersiyasi — bu yorug'likning turli ranglarga ajralishi va bu ajralishning turli materiallar bilan o'zaro ta'siri natijasida yuzaga keladigan hodisa bo'lib, u nafaqat ilm-fan, balki kundalik hayotda ham muhim o'rin tutadi. Yorug'lik dispersiyasi orqali biz ko'plab tabiiy hodisalarni tushunamiz, ilm-fan va texnologiyalarning rivojlanishida muhim rol o'ynaymiz, va yangi kashfiyotlar qilishda foydalanamiz. Dispersiya yorug'lik va uning tabiatini yanada chuqurroq o'rganishga imkon beradi va insoniyatning bilim doirasini kengaytirishda katta ahamiyatga ega.</li>
          </ul>
        </div>
        <p>
          Dispersiya natijasida ko'rinadigan yorug'lik spektri hosil bo'ladi: qizil (λ ≈ 700nm) dan 
          binafsha (λ ≈ 400nm) gacha. Har bir rangning o'z to'lqin uzunligi va chastotasi mavjud.
        </p>
      </div>
    )
  },
  'polarization': {
    title: "Yorug'lik polyarizatsiyasi",
    content: (
      <div className="space-y-6">
        <p>
          Polyarizatsiya - yorug'lik to'lqinlarining ma'lum yo'nalishda tebranishini ta'minlovchi hodisa. 
          Tabiiy yorug'lik polyarizatsiyalanmagan bo'lib, barcha tekisliklarda tebranadi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Polyarizatsiya usullari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Qaytishda polyarizatsiya (Bryuster qonuni)</li>
            <li>Ikki nurli sinishda polyarizatsiya</li>
            <li>Polyaroidlar yordamida</li>
            <li>Yorug'lik polyarizatsiyasi - bu yorug'lik to'lqinlarining tegishli yo'nalishda o'zgarishiga asoslangan fizik hodisadir. Yorug'likning polyarizatsiyasi fenomeni, to'lqinlarning bir yo'nalishda, ya'ni bir tekislikda harakat qilishiga imkon beradigan xususiyatdir. Bu hodisa, yorug'likni va boshqa elektromagnit to'lqinlarini tushunishda muhim ahamiyatga ega. Polyarizatsiya, asosan, yorug'likning to'lqin tabiatini o'rganish va bu xususiyatni turli sohalarda qo'llash uchun juda zarur.

Yorug'likni polyarizatsiyalash jarayoni, aslida, to'lqinlarning tebranish yo'nalishini cheklashni anglatadi. Har qanday elektromagnit to'lqin, shu jumladan yorug'lik, ikkita asosiy komponentdan iborat: elektr maydoni va magnit maydoni. Yorug'lik to'lqinining elektr maydoni, odatda, tasodifiy yo'nalishda tebranadi. Ammo, agar yorug'likni maxsus materiallar, filtrlash yoki optik asboblar yordamida o‘tkazsak, uning elektr maydonining yo'nalishini faqat bitta tekislikda harakatlanishga majbur qilamiz. Bu hodisa, ya'ni yo'nalishni faqat bir tekislikda cheklash, polyarizatsiya deb ataladi.

Polyarizatsiyaning eng oddiy va keng tarqalgan misoli, polarizatsiya filtrlari orqali yorug'likning o'tishini ko'rishdir. Masalan, quyosh nuri yoki boshqa manbalardan chiqqan yorug'lik ko'pincha tasodifiy yo'nalishlarda tarqaladi. Agar biz polarizatsiya filtrini o'rnatgan bo'lsak, faqat shu filterning yo'nalishiga mos keladigan elektr maydoniga ega bo'lgan to'lqinlar o'tadi, boshqa yo'nalishlardagi to'lqinlar esa bloklanadi. Shunday qilib, polarizatsiya filtrining yordamida biz yorug'likni faqat bitta yo'nalishda kuzata olamiz.

Polyarizatsiya ko'plab ilmiy va texnologik tadqiqotlarda muhim o‘rin tutadi. Masalan, polarizatsiya orqali biz yorug'likni aniqlash va kuzatishda qo'llanadigan asboblar, masalan, polarimetrlar, mikroskoplar va fotosensitometrlar ishlab chiqilgan. Ushbu asboblar, o‘z navbatida, materiallarning fizik va kimyoviy xususiyatlarini aniqlashda, shu jumladan kristallarning strukturasi, molekular tuzilishi va boshqa mikroskopik hodisalarni o'rganishda keng qo'llaniladi.

Shuningdek, polyarizatsiya kinematikada ham muhim ahamiyatga ega. Masalan, polaroid linzalari orqali biz ko‘zimizni quyosh nurining noqulay yoritishidan himoya qilishimiz mumkin. Bu linzalarning polarizatsion xususiyati, faqat ma'lum yo'nalishdagi yorug'likni o‘tkazish va boshqa yo‘nalishlardagi yorug'likni bloklashga asoslanadi. Bu texnologiya, shuningdek, ko‘plab tasvirni yaratish qurilmalari, masalan, televizor ekranlari va mobil telefonlarda ishlatiladi. Televizorlar yoki telefonlar ekranlaridagi LCD yoki OLED texnologiyasi, polyarizatsiyalangan yorug'likni boshqarish orqali tasvirlarni ko'rsatadi va optimal ko'rinishni ta'minlaydi.

Bundan tashqari, polyarizatsiya koinotdagi masalalarni o‘rganishda ham muhim rol o'ynaydi. Astronomiyada, masalan, yulduzlar va galaktikalarning xususiyatlarini o'rganishda polarizatsiya hodisasi yordamida yoritishning tahlili amalga oshiriladi. Koinotdagi yoritilgan ob'ektlarning polyarizatsiyasini o'rganish, ular haqidagi ko‘plab ma'lumotlarni olish imkonini beradi, chunki polarizatsiya yoritish manbalarining xususiyatlarini aks ettiradi. Bu esa astronomlar uchun yangi kashfiyotlar qilishda katta yordam beradi.

Xulosa qilib aytganda, yorug'lik polyarizatsiyasi nafaqat optikada, balki ilm-fan va texnologiyaning turli sohalarida muhim ahamiyatga ega hodisadir. Bu fenomen, yorug'likning to'lqin xususiyatlarini yanada chuqurroq tushunish va turli optik asboblar va texnologiyalarni takomillashtirish uchun keng qo'llaniladi. Polyarizatsiya, shuningdek, ilmiy tadqiqotlar, texnologik inshootlar va kundalik hayotdagi ko'plab qurilmalarning samarali ishlashini ta'minlashda asosiy omil bo'lib xizmat qiladi.</li>
          </ul>
        </div>
        <p>
          Bryuster qonuni: tgφᵦ = n₂/n₁, bu yerda φᵦ - Bryuster burchagi, 
          n₁ va n₂ - muhitlarning sindirish ko'rsatkichlari.
        </p>
      </div>
    )
  },
  'quantum': {
    title: "Kvant optikasi",
    content: (
      <div className="space-y-6">
        <p>
          Kvant optikasi - yorug'likning kvant tabiatini o'rganuvchi bo'lim. Bu yerda yorug'lik fotonlar 
          oqimi sifatida qaraladi. Har bir foton ma'lum energiya, impuls va spinga ega.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy tushunchalar:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Foton energiyasi: E = hν</li>
            <li>Fotoeffekt: E = hν - A</li>
            <li>Kompton effekti</li>
            <li>Kvant optikasi — bu yorug'lik va boshqa elektromagnit to'lqinlarning kvant mexanikasi asosida o'rganiladigan sohasi bo'lib, u yorug'likning zarracha sifatidagi xususiyatlarini, ya'ni fotonlar bilan bog'liq hodisalarni o'rganadi. Kvant optikasi XX asrning boshlarida, maxsus fizika nazariyalari va eksperimentlarning rivojlanishi bilan shakllana boshladi. Bu soha, yorug'lik va materiya o'rtasidagi murakkab munosabatlarni tushunishda, yangi texnologiyalar yaratishda va ilmiy yangiliklar kashf etishda muhim ahamiyatga ega.

Kvant optikasining paydo bo'lishi bilan bog'liq bo'lgan asosiy kashfiyotlardan biri — yorug'likning to'lqinlar va zarrachalar sifatida harakat qilishidir. Max Planckning 1900-yilda energiyaning kvantlashtirilganligini kashf etishi, Albert Eynshteynning 1905-yilda fotoelektrik effektni tushuntirishi va Niels Borning atom modellari bu sohaning rivojlanishiga katta hissa qo'shdi. Ularning ishlari, yorug'lik va materiyaning kvant xususiyatlarini ko'rsatgan va kvant optikasi nazariyasining asoslarini yaratgan.

Kvant optikasining eng muhim tushunchalaridan biri — fotonlarning dual tabiati. Fotonlar, ya'ni yorug'lik zarrachalari, nafaqat to'lqinlar sifatida, balki zarrachalar sifatida ham harakat qilishadi. Bu hodisa, klassik optika nazariyasida mavjud bo'lmagan, balki kvant mexanikasiga asoslangan yangi fikrlarni keltirib chiqardi. Fotonlar juda kichik zarrachalar bo'lib, ular fotonlar sifatida juda qisqa masofalar bo'yicha harakat qilishi mumkin. Shuningdek, fotonlar o'zlarining energiyasi va impulsi bilan elektromagnit to'lqinlarga ta'sir etadi, bu esa kvant optikasining markaziy jihati hisoblanadi.

Kvant optikasi nafaqat yorug'likni tushunishga, balki bir qancha ilg'or texnologiyalarni yaratishga yordam berdi. Masalan, lazerlar kvant optikasining bir nechta kashfiyotlaridan biridir. Lazerlar, fotonlar bo'lgan maxsus yorug'lik to'lqinlarining birlashgan va qo'shilgan holati hisoblanadi. Lazer texnologiyasi, tibbiyotda, sanoatda, kommunikatsiya tizimlarida va ilmiy tadqiqotlarda keng qo'llaniladi. Lazerlarning kiritilishi kvant optikasining yirik yutuqlaridan biri bo'lib, bu texnologiya har xil sohalarda yuksalishga olib keldi.

Kvant optikasi shuningdek, kvant hisoblash, kvant kriptografiya va kvant telekommunikatsiyasi kabi yangi sohalarning rivojlanishiga sabab bo'ldi. Kvant hisoblash kompyuter texnologiyalarida katta inqilob yaratishi mumkin, chunki u traditsion kompyuterlarga qaraganda ancha tez va samarali ishlash imkonini beradi. Kvant kompyuterlaridagi ma'lumotlar fotonlar orqali uzatiladi, va ularning holatlari o'zgartirilganda, hisoblash jarayonlari ancha tezlashadi. Kvant kriptografiya esa ma'lumotlarni juda xavfsiz tarzda uzatish imkonini beradi. Bu texnologiya, ma'lumotlarni himoya qilish va shifrlashda yangi imkoniyatlar yaratmoqda.

Kvant optikasining yana bir qiziqarli jihati — bu optik holatlarning superpozitsiyasi va entanglement hodisasi. Superpozitsiya, kvant tizimining bir vaqtning o'zida bir nechta holatda bo'lishini anglatadi. Masalan, foton bir vaqtning o'zida ikkita joyda bo'lishi mumkin. Entanglement esa, ikkita fotonning o'zaro bog'lanishi va ular o'rtasidagi holatning bir-biriga ta'sir etishi degan ma'noni anglatadi. Bu hodisalar, kvant kompyuterlar va kvant kriptografiya texnologiyalarini rivojlantirishda muhim rol o'ynaydi.

Shuningdek, kvant optikasi ilm-fanda juda ko'p yangi kashfiyotlarga olib kelmoqda. Masalan, kvant bo'linishi, kvant interferensiya va kvant tunellash kabi hodisalar, fotonlar va atomlarning xulq-atvorini yanada chuqurroq tushunishga yordam beradi. Bularning barchasi, optik texnologiyalarning yangi istiqbollari va kvant fizikasi nazariyasining yangi chegaralarini ochmoqda.

Xulosa qilib aytganda, kvant optikasi — bu yorug'lik va elektromagnit to'lqinlarning kvant xususiyatlarini o'rganadigan fan sohasi bo'lib, u nafaqat fizikada, balki texnologiyada ham inqilobiy yangiliklarga olib keldi. Kvant optikasi, yangi texnologiyalarni yaratishda, zamonaviy ilmiy tadqiqotlarda va kelajakda bizning kundalik hayotimizda yanada keng qo'llaniladigan imkoniyatlarga asos bo'lishi kutilmoqda. Yorug'lik va materiya o'rtasidagi murakkab munosabatlarni tushunish, kvant optikasining kelajagi juda porloq va istiqbolli ekanligini ko'rsatadi.</li>
          </ul>
        </div>
        <p>
          Fotoeffekt hodisasida yorug'lik ta'sirida metalldan elektronlar uchib chiqadi. 
          Bu hodisa yorug'likning kvant tabiatini tasdiqlaydi va texnikada keng qo'llaniladi.
        </p>
      </div>
    )
  },
  'lenses': {
    title: "Linzalar optikasi",
    content: (
      <div className="space-y-6">
        <p>
          Linzalar - yorug'likni sindirish orqali tasvirni hosil qiluvchi optik asboblar. 
          Ular yig'uvchi va sochuvchi turlarga bo'linadi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Linza formulalari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>1/F = 1/d + 1/f - linza formulasi</li>
            <li>Γ = H'/H = -f'/d - kattalashtirish</li>
            <li>D = 1/F - optik kuch (dioptriya)</li>
            <li>Linzalar optikasi — bu yorug'likning linzalar orqali o‘tishi, uning tarqalishi va tasvirlar hosil qilishi bilan bog‘liq bo‘lgan ilmiy soha. Linza — bu, odatda, optik materialdan (masalan, shisha yoki plastmassa) yasalgan va nurni qayta yo'naltiruvchi optik elementdir. Linzalar yordamida turli optik hodisalar, jumladan, tasvirlarning shakli, o‘lchami va joylashuvi o‘zgartirilishi mumkin. Linzalar optikasi yirik va kichik tasvirlarni yaratish, to‘g‘ri yoki teskari tasvirlarni olish va boshqa ko‘plab muammolarni hal qilishda keng qo‘llaniladi. Ushbu fan sohasining asoslari, shuningdek, zamonaviy optik qurilmalarning ishlash prinsiplari, masalan, mikroskoplar, teleskoplar, kamera va telefonlardagi linzalar bilan bog‘liq.

Linzalar optikasining asosiy prinsipi — yorug'lik to‘lqinlari linza yuzasiga tushganda, ular refraksiya, ya'ni sinish hodisasiga uchraydi. Refraksiya — bu yorug'lik to‘lqinlarining boshqa muhitga o‘tganida yo‘nalishining o‘zgarishidir. Linzalar asosan ikki xil turga bo‘linadi: konkav (yoki toraytiruvchi) va konveks (yoki kengaytiruvchi) linzalar.

Konveks linzalar (yoki to‘g‘ri linzalar) markazdan chetga qarab qalinlashgan linzalardir. Bu linzalar yorug'likni bir nuqtada to‘plab, tasvirni kiritish yoki ko‘paytirish uchun ishlatiladi. Konveks linzalar, masalan, mikroskoplar, teleskoplar va fotoapparatlar kabi qurilmalarda keng qo‘llaniladi. Ular tasvirni teskari yoki haqiqiy tarzda hosil qilish imkonini beradi. Konveks linzalar tasvirni aniqroq va kattaroq ko‘rsatishga yordam beradi.

Konkav linzalar (yoki kengaytiruvchi linzalar) esa markazda ingichka va chetlarida qalinroq bo‘lgan linzalardir. Bu linzalar yorug‘likni tarqatadi va tasvirni kichraytiradi. Konkav linzalar tasvirni to‘g‘ri va kichikroq tarzda yaratish uchun ishlatiladi. Ular, masalan, ko‘zoynaklarda, optik asboblarda va ba'zi tibbiy qurilmalarda qo‘llaniladi.

Linzalar optikasi yordamida tasvirlarning sifatini va o‘lchamlarini boshqarish mumkin. Linzalar yordamida teskari va to‘g‘ri tasvirlar hosil qilinishi mumkin. To‘g‘ri tasvirlar linzaning ma'lum joylashuvida haqiqiy, ya'ni obyektning tasviri real dunyoda hosil bo‘lgan tasvirlardir. Bunda obyektlar linzaning musbat tomonida joylashadi. Teskari tasvirlar esa linzaning manfiy tomonida hosil bo‘ladi, ular ko‘pincha virtual tasvirlar deb ataladi, chunki ular haqiqatda mavjud bo‘lmaydi, balki ko‘rish apparatimiz tomonidan ko‘rsatiladi.

Linzalar optikasining asosiy matematik formulasi shunday ko‘rinishga ega:

1
𝑓
=
1
𝑑
𝑜
+
1
𝑑
𝑖
f
1
​
 = 
d 
o
​
 
1
​
 + 
d 
i
​
 
1
​
 
Bu yerda:

𝑓
f — linzaning fokal uzunligi (linzaning markazidan tasvir hosil bo‘ladigan nuqtaga bo‘lgan masofa),
𝑑
𝑜
d 
o
​
  — obyektning linzaga bo‘lgan masofasi,
𝑑
𝑖
d 
i
​
  — tasvirning linzaga bo‘lgan masofasi.
Ushbu formula linzaning tasvir yaratish xususiyatlarini hisoblashda yordam beradi.

Linzalar optikasining amaliy qo‘llanilishi juda kengdir. Mikroskoplar va teleskoplar kabi ilmiy asboblar linzalarga asoslangan. Mikroskoplar kichik obyektlarni kattalashtirish uchun konveks linzalar yordamida ishlaydi, bu esa ularni yanada aniqroq ko‘rish imkonini beradi. Teleskoplar esa yulduzlar va boshqa koinot jismlarini ko‘rish uchun ishlatiladi, bunda tasvirlar katta masofada joylashganligi sababli, linzalar yordamida yorug'likni to‘plab tasvirlarni yoritish va kattalashtirish kerak bo‘ladi.

Shuningdek, kameralarda ham linzalar o‘ta muhim rol o‘ynaydi. Kamera linzalari, yorug‘likni to‘plash va tasvirni sensor yoki filmga yozish orqali tasvirlarni yaratadi. Ko‘zoynaklar va kontakt linzalari esa odamlarning ko‘rish qobiliyatini yaxshilash uchun ishlatiladi, bu linzalar ko‘zning optik xususiyatlariga qarab moslashtirilgan.

Xulosa qilib aytganda, linzalar optikasi — bu yorug‘likni boshqarish, tasvirlar hosil qilish va turli optik asboblar orqali ko‘rishni yaxshilash imkoniyatini beruvchi ilmiy soha. Linzalarning ishlash prinsiplari va ular yordamida yaratiladigan tasvirlar, zamonaviy ilm-fan va texnologiyaning rivojlanishiga katta hissa qo‘shgan. Ularning ko‘plab amaliy qo‘llanilishi, hayotimizda zarur va ajralmas bo‘lib qolgan turli qurilmalar va asboblarning asosini tashkil etadi.</li>
          </ul>
        </div>
        <p>
          Linzalar optik asboblarning asosiy elementi hisoblanadi: ko'zoynak, mikroskop, 
          teleskop, fotoapparatlar va boshqalar.
        </p>
      </div>
    )
  },
  'optical-instruments': {
    title: "Optik asboblar",
    content: (
      <div className="space-y-6">
        <p>
          Optik asboblar - yorug'lik yordamida turli vazifalarni bajaruvchi qurilmalar. 
          Ular kundalik hayotda, fanda va texnikada keng qo'llaniladi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy optik asboblar:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Mikroskop (kichik obyektlarni kuzatish)</li>
            <li>Teleskop (uzoq obyektlarni kuzatish)</li>
            <li>Spektroskop (spektral tahlil)</li>
            <li>Interferometr (aniq o'lchashlar)</li>
            <li>Optik asboblar — yorug'likni boshqarish, magnitlanishini yoki qirqishlarini o'lchash uchun mo'ljallangan qurilmalardir. Bu asboblar, optik hodisalar, masalan, yorug'likning sinishi, aks ettirilishi va tarqalishi kabi jarayonlarni o'rganishga yordam beradi. Optik asboblar, tibbiyotdan tortib, ilmiy tadqiqotlarga, sanoat va texnologiyalarga qadar keng qo'llaniladi. Ularning yordami bilan biz koinotning yulduzlaridan tortib, mikroskopik dunyogacha bo'lgan olamni o'rganishimiz mumkin. Optik asboblar insoniyat tarixida ilm-fanning rivojlanishida katta ahamiyat kasb etgan va hozirgi kunda ham zamonaviy texnologiyalarning asosini tashkil etadi.

Optik asboblar turli tamoyillarga asoslanadi, eng muhimi — yorug'likning sinishi va aks ettirilishi qonunlariga. Eng keng tarqalgan optik asboblardan biri — mikroskopdir. Mikroskoplar, kichik ob'ektlarni ko'rish va tahlil qilish uchun ishlatiladi. Ular ilmiy laboratoriyalarda, tibbiyotda va biologik tadqiqotlarda keng qo'llaniladi. Mikroskoplar yordamida odamlar hujayralar va mikroorganizmlar kabi juda kichik obyektlarni ko'rish imkoniga ega bo'lishadi. Mikroskoplarning ish prinsipi — nurning obyektga tushib, shishirilgan obyektiv linzalar orqali tasvirni kattalashtirishi.

Bundan tashqari, teleskoplar ham optik asboblardir. Teleskoplar, uzoqdagi osmon jismlarini kuzatish uchun mo'ljallangan asboblardir. Ular astronomiyada yulduzlar, sayyoralar va galaktikalarni o'rganish uchun zarur bo'lib, astronomlar uchun eng asosiy asboblardan biridir. Teleskoplar nurni kattalashtirish uchun maxsus linzalardan yoki reflektor tizimlaridan foydalanadi. Ular yorug'likning sinishi va aks ettirilishini o'rganish orqali, bizning koinotimizni yanada yaxshiroq tushunishimizga yordam beradi.

Optik asboblar, shuningdek, optik o'lchovlar uchun ham qo'llaniladi. Masalan, spektral analizatorlar yorug'likni ranglarga ajratib, har bir rangning o'ziga xos xususiyatlarini aniqlash imkonini beradi. Bu asboblar yordamida moddalarning kimyoviy tarkibini va fizikaviy xususiyatlarini o'rganish mumkin. Bunday asboblar tibbiyotda, kimyo sanoatida, ekotizimlarni monitoring qilishda va boshqa sohalarda qo'llaniladi. Optik analizatorlar, ayniqsa, laboratoriya ishlarida katta ahamiyatga ega.

Shuningdek, optik asboblar yordamida optik tolali kommunikatsiyalarni amalga oshirish mumkin. Optik tolalar — bu yorug'lik orqali ma'lumotlarni uzatish uchun ishlatiladigan maxsus materiallardir. Optik tolalar yordamida katta masofalarda yuqori tezlikda ma'lumotlarni uzatish mumkin. Ular internet va telekommunikatsiya tarmoqlarida, shuningdek, tibbiyotdagi diagnostika va lazerli operatsiyalar uchun ishlatiladi.

Optik asboblarning bir qismi sifatida, lazerlar ham keng qo'llaniladi. Lazerlar, yorug'likning muayyan bir nuqtada yo'naltirilgan to'lqinlarini chiqarish uchun ishlatiladi. Lazerlar tibbiyotda, sanoatda, kommunikatsiya tizimlarida, hamda ilmiy tadqiqotlarda qo'llaniladi. Masalan, lazerli jarrohlik operatsiyalari, aniq chizmalar yaratish va materiallarni kesish kabi ishlarni bajarishda lazer texnologiyasi ishlatiladi. Lazerlar, yorug'likning o'ziga xos xususiyatlari tufayli, ko'plab sohalarda tez, samarali va aniq ishlarni bajarishga yordam beradi.

Optik asboblarning zamonaviy texnologiyalarda ahamiyati katta. Bugungi kunda, ular turli xil qurilmalarda, masalan, smartfonlar, raqamli kameralar, lazerli printerlar va boshqa ko'plab texnologiyalarda qo'llaniladi. Optik texnologiyalar, shuningdek, tibbiyot sohasida rivojlanib, yangi diagnostika usullari, lazerli terapiya va jarrohlik usullarini yaratish imkonini berdi. Optik asboblar yordamida biz inson organizmini, mikroskopik tuzilmalarini, shuningdek, atrof-muhitni o'rganishga yordam beradigan yangi imkoniyatlarga ega bo'ldik.

Xulosa qilib aytganda, optik asboblar insoniyatning ilmiy va texnologik yutuqlarida muhim rol o'ynaydi. Ular orqali biz yorug'lik va materiyaning tabiatini chuqurroq tushunib, yangi kashfiyotlar qilish, mavjud texnologiyalarni takomillashtirish va yangi ilmiy yutuqlarga erishish imkoniyatiga ega bo'lamiz. Optik asboblar nafaqat ilm-fan va sanoat uchun, balki kundalik hayotimizda ham katta ahamiyatga ega. Ularning yordami bilan biz nafaqat mikroskopik dunyoni, balki koinotning cheksiz kengligini ham o'rganish imkoniga ega bo'ldik.</li>
          </ul>
        </div>
        <p>
          Zamonaviy optik asboblar raqamli texnologiyalar bilan birlashtirilgan bo'lib, 
          yuqori aniqlikdagi o'lchashlar va kuzatishlarni amalga oshirish imkonini beradi.
        </p>
      </div>
    )
  },
  'fiber-optics': {
    title: "Tolali optika",
    content: (
      <div className="space-y-6">
        <p>
          Tolali optika - yorug'likni optik tolalar orqali uzatish texnologiyasi. 
          Bu soha zamonaviy telekommunikatsiya tizimlarining asosini tashkil etadi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Optik tolaning tuzilishi:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>O'zak (core) - yorug'lik tarqaladigan qism</li>
            <li>Qobiq (cladding) - to'liq ichki qaytishni ta'minlaydi</li>
            <li>Himoya qatlami (coating)</li>
            <li>
            Tolali optika — bu optik tolalarning yorug'likni uzatish va boshqarish qobiliyatini o‘rganadigan ilmiy soha bo‘lib, asosan telekommunikatsiya va axborot texnologiyalarida keng qo‘llaniladi. Optik tolalar — bu yengil, juda ingichka va mustahkam materiallardan yasalgan uzun simlar bo'lib, ular yorug'likni uzatish uchun ishlatiladi. Bu tolalar asosan shisha yoki plastmassadan tayyorlanadi va yorug'lik to'lqinlarini yuqori samaradorlik bilan uzoq masofalarga uzatish imkonini beradi. Tolali optika texnologiyasi, ayniqsa, yuqori tezlikdagi internet, telefon aloqalari, tibbiyot va ilmiy tadqiqotlar sohasida juda muhim ahamiyatga ega.

Tolali optikaning asosiy ishlash prinsipi — bu yorug'lik to‘lqinlarining total ichki qaytarilish tamoyiliga asoslanadi. Total ichki qaytarilish — bu yorug'lik to‘lqini bir mediumdan ikkinchisiga o'tayotganda, agar yorug'likning tushish burchagi ma'lum bir qiymatdan katta bo'lsa, to‘lqin butunlay qaytib chiqadi. Optik tolalar orqali yorug'likning uzatilishi aynan shu tamoyilga tayanadi. Optik tolaning ichki yuzasida yorug'lik to‘lqinlari aks ettiriladi va bu orqali ularni uzoq masofalarga uzatish mumkin.

Tolali optikada ishlatiladigan optik tolalar odatda ikkita asosiy komponentdan iborat bo‘ladi: yadro va qoplama. Yadro — bu yorug'likning uzatiladigan asosiy qismi bo‘lib, u yuqori sinish koeffitsientiga ega bo‘ladi. Qoplama esa, yorug‘likning yadrodan chiqib ketmasligi uchun pastroq sinish koeffitsientiga ega bo‘ladi. Bu ikki qatlam orasidagi farq, yorug'likning ichki qaytarilishiga imkon yaratadi. Optik tolalar juda nozik bo‘lib, ularning diametri odatda bir necha mikrondan iborat bo‘ladi, lekin ular juda katta masofalarda yorug'likni to‘g‘ri uzatish imkonini beradi.

Tolali optika texnologiyasining asosiy afzalliklaridan biri — bu yuqori ma'lumot uzatish tezligi. Optik tolalar yordamida ma'lumotlar soni juda katta tezlikda uzatiladi, bu esa ular telekommunikatsiya tarmoqlarida ishlatilishini juda samarali qiladi. Masalan, internet aloqalarida optik tolalar yordamida tezliklar gigabitlar darajasiga yetishi mumkin, bu esa foydalanuvchilarga yuqori sifatli video oqimlari, onlayn o'yinlar va boshqa keng hajmli ma'lumotlarni uzatishda katta imkoniyatlar yaratadi.

Tolali optikada yana bir muhim jihat — bu uzatishning past darajadagi yo‘qotishlari. Yorug'lik to‘lqinlari optik tolalarda minimal yo‘qotishlar bilan uzatiladi, chunki to‘lqinlar tola ichida qaytariladi va hech qanday tashqi ta'sirlardan himoyalanadi. Shuningdek, optik tolalar uzoq masofalarga uzatilganida signal sifatining yomonlashishi sezilarli darajada kamayadi, bu esa ularni masofaviy aloqalarda samarali ishlatishni ta'minlaydi.

Tolali optikaning qo‘llanilishi juda kengdir. Eng mashhur sohalardan biri — bu telekommunikatsiya. Telefoniya va internet aloqalarida optik tolalar yordamida yuqori tezlikdagi ma'lumotlar uzatiladi. Tibbiyotda esa tolali optika endoskopik qurilmalarda qo‘llaniladi, bu esa jarrohlik operatsiyalarida va ichki organlarni tekshirishda foydalaniladi. Kamera tizimlarida ham optik tolalar orqali yuqori sifatli tasvirlar uzatiladi.

Shuningdek, ilmiy tadqiqotlarda tolali optika yordamida turli ma'lumotlar yig‘iladi. Optik tolalar yordamida turli ilmiy asboblar, masalan, lazerli spektroskopiya tizimlari va interferometrlar ishlab chiqiladi. Bu asboblar orqali materiallarning fizikaviy xususiyatlarini o‘rganish va aniq tahlillar olib borish mumkin.

Tolali optikada hali ko‘plab ilmiy ishlanmalar va yangiliklar mavjud. Birinchidan, optik tolalar yanada samarali va nozikroq bo‘lishi kerak, bu esa ulardan foydalanishni yanada samarali qiladi. Ikkinchidan, tolali optikada yangi materiallar va texnologiyalarni yaratish istiqbollari mavjud, masalan, kvant hisoblashlar va kvant interneti sohalarida.

Xulosa qilib aytganda, tolali optika texnologiyasi zamonaviy kommunikatsiya va texnologiyalarning ajralmas qismiga aylangan. Uning afzalliklari, jumladan, yuqori uzatish tezligi, past yo'qotishlar va uzoq masofalarga signal uzatish imkoniyati, uni telekommunikatsiya, tibbiyot va ilm-fan sohalarida keng qo‘llanilishiga olib kelgan. Bu texnologiya kelajakda yanada rivojlanib, yangi imkoniyatlar yaratadi.
            </li>
          </ul>
        </div>
        <p>
          Optik tolalarda yorug'lik to'liq ichki qaytish hodisasi asosida tarqaladi. 
          Bu usul signal yo'qotilishini kamaytiradi va uzatish tezligini oshiradi.
        </p>
      </div>
    )
  },
  'laser-physics': {
    title: "Lazer fizikasi",
    content: (
      <div className="space-y-6">
        <p>
          Lazer - majburiy nurlanish asosida kogerent yorug'lik hosil qiluvchi qurilma. 
          Lazerlar zamonaviy texnologiyaning eng muhim kashfiyotlaridan biri hisoblanadi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Lazer turlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Qattiq jismli lazerlar (rubin, neodim)</li>
            <li>Gaz lazerlari (geliy-neon, CO₂)</li>
            <li>Yarim o'tkazgichli lazerlar</li>
            <li>
            Lazer fizikasi — bu yorug‘likni yaratuvchi va boshqaruvchi texnologiyalarni o‘rganadigan ilmiy sohaga kiradi. Lazer, "Light Amplification by Stimulated Emission of Radiation" (stimulyatsiya qilingan nurlanish orqali yorug'likni kuchaytirish) qisqartmasidan olingan bo'lib, u elektromagnit to‘lqinlarining maxsus shakli hisoblanadi. Lazerlar yorug‘likning maxsus turlari bo‘lib, ular yuqori darajadagi aniqlik, kuchli nurlanish va yo‘naltirilganlikka ega. Lazerlarning fizikasi zamonaviy ilm-fan va texnologiyada, tibbiyotdan tortib, sanoat va kommunikatsiyalargacha, keng qo‘llaniladi. Lazer texnologiyasining asosiy asoslari va uning ilovalarini tushunish uchun lazerlarning ishlash prinsiplari va ularning fizikaviy xususiyatlarini bilish muhimdir.

Lazerning asosiy ishlash prinsipi kvant fizikasi va elektromagnit nazariyalariga asoslanadi. Lazerda yorug'likning kuchayishi stimulyatsiya qilingan nurlanish orqali amalga oshadi. Bu jarayon, atomlar yoki molekulalar energiya yuqoriga ko'tarilganda va keyin ularning qayta tiklanishi natijasida fotonlar chiqarilishi bilan sodir bo'ladi. Fotonlar bir-birini kuchaytiradigan holatga kelib, lazerda ko'payadi va shu orqali yorug'lik kuchayadi. Ushbu fotonlarning bir xil fazada va bir xil energiya darajasida bo'lishi lazerning "koherent"ligini ta'minlaydi, ya'ni lazer nuri juda yo'naltirilgan, toza va aniq bo'ladi.

Lazer ishlashining asosiy bosqichlari quyidagilardan iborat:

Aktiv muhitning ta'siri: Lazerda energiya ma'lum bir materialda, masalan, kristall, gaz yoki suyuqlikda, "aktik muhit" orqali yo'naltiriladi. Bu muhit fotonlarni chiqarish uchun kerakli sharoitni yaratadi. Masalan, qattiq moddali lazerda, aktiv muhit sifatida, rubin kristalli ishlatiladi.

Energiyani kiritish (pompalash): Lazerning ishlash jarayoni, aktiv muhitga tashqi energiya kiritilishi bilan boshlanadi. Bu energiya odatda yorug‘lik yoki elektr toki yordamida kiritiladi. Pompalash jarayonida, aktiv muhitdagi atomlar yoki molekulalar yuqori energiya holatiga ko'tariladi.

Stimulyatsiya qilingan emissiya: Pompalash natijasida yuqori energiyaga ko'tarilgan atomlar yoki molekulalar qayta tiklanishga o‘tadi va ortiqcha energiyani foton shaklida chiqaradi. Bu fotonlar boshqa atomlarni yoki molekulalarni stimulatsiya qiladi va shu bilan yana ko'proq fotonlar chiqarilishiga sabab bo‘ladi.

Yorug'likning ko'payishi va chiqarilishi: Bu jarayon davomida chiqarilgan fotonlar bir-birini kuchaytiradi, va lazerdan ko'plab yo'naltirilgan fotonlar chiqadi. Lazer nuri yuqori yo'naltirilgan va bir xil fazadagi fotonlardan iborat bo'ladi, shu sababli lazer yorug'ligi juda kuchli va aniq bo'ladi.

Lazerlar o'zining ko'plab foydali xususiyatlari bilan boshqa yorug'lik manbalaridan ajralib turadi. Eng muhim xususiyatlaridan biri — lazerning koherensiyasi. Lazer yorug'ligining barcha fotonlari bir xil fazada bo'lib, ular bir-birini kuchaytiradi. Boshqa yorug'lik manbalarida (masalan, quyosh nuri yoki elektr chiroqlari) fotonlar tasodifiy fazalarda tarqaladi, shuning uchun ularning nurlanishi tarqalgan va diffuzdir.

Yana bir muhim xususiyat — yo'naltirilganlik. Lazer nuri, boshqa yorug'lik manbalariga nisbatan, juda kichik burchakda yoyiladi. Bu lazerning yo'naltirilganligi va aniq nuqtaga tushish imkonini beradi. Bu xususiyat lazerning tibbiyotda, sanoatda va kommunikatsiyada ishlatilishiga imkon yaratadi.

Lazerlarning monoxromatikligi ham juda muhimdir, ya'ni lazerdan chiqarilgan yorug'lik bir xil to'lqin uzunligiga ega bo'ladi. Bu uning o'lchovlarda va ilmiy tadqiqotlarda aniq va aniq ishlatilishini ta'minlaydi.

Lazerlarning ilmiy va texnologik ahamiyati juda katta. Tibbiyotda, lazerlar jarrohlik operatsiyalarida, ayniqsa lazerli ko'z operatsiyalari, tish davolash va tumorlarni olib tashlashda keng qo'llaniladi. Sanoatda, lazerlar materiallarni kesish, payvandlash, metall va plastmassalarni ishlov berishda ishlatiladi. Lazerli tizimlar yuqori aniqlik va samaradorlikni ta'minlaydi, shuning uchun ular ko'plab sanoat tarmoqlarida talab qilinadi.

Kommunikatsiya tizimlarida ham lazerlar muhim o'rin tutadi. Optik tolali tarmoqlar lazerlar yordamida yuqori tezlikda ma'lumotlarni uzatish imkonini beradi. Bu texnologiya Internet va boshqa raqamli aloqa tarmoqlarining ishlashini tezlashtiradi va samarali qiladi.

Lazerlar fizik tadqiqotlarda ham keng qo‘llaniladi. Ular atomlar va molekulalar xususiyatlarini o‘rganishda, materiallar fizikasi va kvant mexanikasini sinovdan o‘tkazishda muhim vosita bo‘ladi. Lazerli spektroskopiya yordamida materiallarning tarkibini va tuzilishini aniqlash mumkin.

Xulosa qilib aytganda, lazerlar nafaqat yorug'likni kuchaytirish va boshqarishning zamonaviy usuli, balki zamonaviy ilm-fan va texnologiyaning asosiy vositalaridan biri hisoblanadi. Lazer fizikasi orqali biz yorug'likning yangi xususiyatlarini o'rganish imkoniyatiga ega bo'ldik. Lazer texnologiyalarining rivojlanishi, kelajakda yangi ilmiy yutuqlar va innovatsion yechimlarni keltirib chiqarishga xizmat
            </li>
          </ul>
        </div>
        <p>
          Lazerlarning asosiy xususiyatlari: yuqori monoxromatiklik, kogerentlik, 
          yo'nalganlik va yuqori quvvat zichligi. Bu xususiyatlar ularga keng qo'llanish 
          imkonini beradi.
        </p>
      </div>
    )
  },
  'holography': {
    title: "Golografiya",
    content: (
      <div className="space-y-6">
        <p>
          Golografiya - obyektning fazoviy tasvirini to'liq qayd qilish va qayta tiklash usuli. 
          Bu usul lazer nurlanishi yordamida amalga oshiriladi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Golografiya turlari:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Transmission gologrammalar</li>
            <li>Reflection gologrammalar</li>
            <li>Rangli golografiya</li>
            <li>Raqamli golografiya</li>
            <li>
            Golografiya — bu uch o‘lchamli tasvirlarni yaratish va ularni yozib olish texnologiyasidir. Golografiya, aslida, yorug‘likning interferensiya va difraksiya xususiyatlarini o‘rganishga asoslangan. Ushbu ilmiy soha yorug‘likni yoki boshqa elektromagnit to‘lqinlarni qanday boshqarish, ularni yozib olish va qayta tiklashni o‘rgatadi. Golografiya yordamida yaratilgan tasvirlar oddiy fotosuratlardan farq qiladi, chunki ular uch o‘lchamli bo‘lib, har bir burchakdan ko‘rsangiz ham, tasvirni asl shaklda ko‘rish imkoniyatini beradi.

Golografiyaning asosiy prinsipi — bu interferensiya hodisasiga asoslanadi. Interferensiya — bu ikki yoki undan ortiq to‘lqinlarning o‘zaro ta’siri va ular bir-birini kuchaytirish yoki kamaytirishiga olib kelishi. Golografiya texnologiyasi aynan shu prinsipga tayanadi. Golografik tasvirni olish uchun birinchi navbatda yorug‘lik manbai va ob'ektni joylashtirib, yorug‘likni ikki yo‘nalishda to‘g‘ri va yansıtılmış (refleks) tarzda aks ettirish kerak bo‘ladi. Bu ikki yorug‘lik to‘lqini bir-biriga ta’sir etadi, interferensiya hosil qiladi va shu orqali golografik tasvir yaratiladi.

Golografiya usuli 1948-yilda amerikalik fizik Denis Gabor tomonidan ixtiro qilingan. Gabor golografiyaning nazariy asoslarini ishlab chiqqan bo‘lib, keyinchalik bu texnologiya ko‘plab ilmiy va amaliy sohalarda qo‘llanila boshladi. Dastlab, golografiya asosan ilmiy va texnik tadqiqotlarda qo‘llangan bo‘lsa-da, hozirgi kunda u san’at, tibbiyot va ko‘plab boshqa sohalarda ham keng tarqalgan.

Golografiyaning ikki asosiy turini ajratish mumkin: statik va dinamik golografiya. Statik golografiya — bu oddiy tasvirlar yoki suratlarni uch o‘lchamli tarzda olish usulidir. Bu usulda tasvirlar bir marta olinadi va saqlanadi, lekin ular harakatlanmaydi. Dinamik golografiya esa tasvirlar harakatini yozib olishni ta’minlaydi. Dinamik golografiya texnologiyasi yordamida jonli tasvirlarni va hatto videolarni uch o‘lchamli shaklda qayd etish mumkin. Bu turdagi golografiya juda murakkab va yuqori texnologik asbob-uskunalarni talab qiladi.

Golografiya texnologiyasining amaliy qo‘llanilishi juda kengdir. Tibbiyotda golografiya yordamida inson tanasining ichki tuzilishini, masalan, organlar yoki suyaklarning uch o‘lchamli tasvirlarini olish mumkin. Bu usul an'anaviy rentgen tasvirlaridan farqli ravishda, tananing ichki strukturalarini aniqroq va batafsilroq ko‘rishga imkon beradi. Shuningdek, muhandislikda va materialshunoslikda golografiya materiallarning yuzasini va strukturasini tekshirishda qo‘llaniladi. Golografik tekshiruv yordamida materiallardagi noaniqliklarni yoki xatoliklarni aniqlash mumkin.

San'at va ko‘ngilochar sanoatda ham golografiya katta ahamiyat kasb etadi. Golografik tasvirlar va uch o‘lchamli animatsiyalar ko‘pincha filmlarda, reklama va ko‘ngilochar tadbirlarda ishlatiladi. Ko‘plab virtual va kontent yaratishda ham golografiya yordamida tasvirlar yaratiladi. Misol uchun, golografik konsertlar va jonli chiqishlar, golografik san’at ko‘rgazmalari, hamda virtual dunyolarni yaratish mumkin. Golografik tasvirlar yordamida kompyuterlar va boshqa qurilmalarda uch o‘lchamli tasvirlarni ko‘rish imkoniyati yuzaga keladi.

Golografiya texnologiyasining yana bir qiziqarli sohasi — bu golografik ma'lumot saqlash. Golografiya yordamida juda katta hajmdagi ma'lumotlarni uch o‘lchamli shaklda saqlash mumkin. Bu esa ma'lumot saqlash texnologiyalarini rivojlantirish va ma'lumot uzatishni tezlashtirish imkoniyatlarini yaratadi. Golografik ma'lumotlar saqlash texnologiyasi kelajakda kompyuterlarning ishlash tezligini oshirish va ma'lumotlar bazasini yanada samarali qilishda muhim o‘rin tutadi.

Xulosa qilib aytganda, golografiya — bu yorug‘likning interferensiya va difraksiya hodisalariga asoslangan, uch o‘lchamli tasvirlarni yaratish texnologiyasi bo‘lib, zamonaviy ilm-fan va texnologiyaning eng ilg‘or yo‘nalishlaridan biridir. Golografiya nafaqat ilmiy va tibbiy sohalarda, balki san’at, kommunikatsiya va ma'lumot texnologiyalarida ham o‘zining ahamiyatini ko‘rsatdi. Golografiya texnologiyasi kelajakda yangi imkoniyatlar yaratib, ilm-fan va texnologiyalarda yangi yutuqlarni qo‘lga kiritish imkonini beradi.
            </li>
          </ul>
        </div>
        <p>
          Golografik tasvirning o'ziga xos xususiyati - uning uch o'lchovli ekanligidir. 
          Gologrammaning har bir qismi butun obyekt haqida to'liq ma'lumot saqlaydi.
        </p>
      </div>
    )
  },
  'nonlinear-optics': {
    title: "Nochizig'iy optika",
    content: (
      <div className="space-y-6">
        <p>
          Nochizig'iy optika - kuchli yorug'lik maydonlarining muhit bilan o'zaro ta'sirini 
          o'rganuvchi soha. Bu hodisalar yuqori intensivlikdagi lazer nurlanishi yordamida kuzatiladi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy effektlar:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Ikkinchi garmonika generatsiyasi</li>
            <li>To'rt to'lqinli aralashish</li>
            <li>Optik solitonlar</li>
            <li>Kerr effekti</li>
            <li>
            Nochizig‘iy optika (yoki "nonlinear optics") — bu yorug‘lik va materiallar o‘rtasidagi o‘zaro ta’sirning noan’anaviy (lineer bo‘lmagan) xususiyatlarini o‘rganadigan fizika sohasi. Oddiy optika, ya'ni lineer optika, yorug‘likning materialga tushganida uning harakati va tarqalishini odatda lineer qonunlar orqali tushuntiradi. Biroq, agar yorug‘lik kuchli bo‘lsa, masalan, lazerlar orqali yuborilgan juda kuchli nurlar, materiallar bilan o‘zaro ta’sirda lineer qonunlardan chetga chiqadi. Bu hodisa nochizig‘iy optikada o‘rganiladi. Nochizig‘iy optikada yorug‘likning materialga bo‘lgan ta’siri, uning intensivligiga, shuningdek, materiallarning xususiyatlariga qarab o‘zgaradi.

Nochizig‘iy optika XX asrning o‘rtalarida ilmiy jamoatchilik e'tiborini qozona boshladi va uning rivojlanishi bilan yangi fizik hodisalar kashf qilindi. Bu sohada, materiallarning elektr maydonlariga, ya'ni kuchli optik maydonlarga ta'siri ostida yuzaga keladigan noan'anaviy javoblarni o‘rganish muhim ahamiyatga ega. Masalan, materialning elektr maydoni kuchli bo‘lganda, uning polarlashuvi va yorug‘likning to‘lqin xususiyatlari o‘zgaradi. Bu hodisalar, lineer optikadan farqli o‘laroq, to‘lqin intensivligi va materialning xususiyatlariga bevosita bog‘liq bo‘ladi.

Nochizig‘iy optikadagi eng muhim tushunchalardan biri — bu nonlinear polarlashuv. Agar yorug‘lik intensivligi yuqori bo‘lsa, materiallar odatiy (lineer) holatdan chiqa boshlaydi va ular yangi, noan'anaviy polarlashuvlarni ko‘rsatishi mumkin. Masalan, kuchli lazer nuri materialga tushganda, bu materialda polarlashuvning yuqori darajalari paydo bo‘ladi. Bu hodisa materialning elektromagnit maydonlarga qarshi javobini kuchaytiradi va ko‘proq fotonlar ishlab chiqarilishiga sabab bo‘ladi.

Nochizig‘iy optikadagi boshqa muhim hodisalar va jarayonlar quyidagilar:

Harmonik yuksaltirish (Harmonic Generation): Bu hodisa, materialda yuqori chastotali fotonlar chiqarilishiga olib keladi. Agar yorug‘likning kuchi yetarlicha yuqori bo‘lsa, u materialda ikki yoki undan ortiq barobar yuqori chastotali fotonlar ishlab chiqarilishi mumkin. Masalan, ikki foton birlashib, yangitdan yuqori chastotali foton hosil qilishi mumkin. Bu hodisa optik chastotani o‘zgartirishda va yangi yorug‘lik manbalarini yaratishda qo‘llaniladi.

Optik to‘lqin tarqalishi (Optical Solitons): Nochizig‘iy optikada to‘lqinlar materialda beqaror ravishda yoyilishi mumkin. Bunday hodisalar, masalan, optik solitonlar, yorug‘likning materialda o‘z-o‘zini saqlab qolgan shakllaridir. Bu hodisa to‘lqinlarning tarqalishida kuchli noan'anaviy ta’sirlar mavjudligini ko‘rsatadi va optik aloqa tizimlarida qo‘llanilishi mumkin.

Fotonlarning qirqilishi va qayta tarqalishi (Optical Switching): Nochizig‘iy optikada materiallar kuchli nurlanish ta’sirida yorug‘likning yo‘nalishini o‘zgartirishi yoki unga ta’sir ko‘rsatishi mumkin. Bu xususiyatlar optik kompyuterlar va optik aloqa tizimlarida ma'lumotlarni qayta ishlash va uzatishda muhim rol o‘ynaydi. Misol uchun, optik kompyuterlar traditsion kompyuterlarga qaraganda ancha tezroq ishlashi mumkin, chunki ular yorug‘likni ma'lumotlarni uzatish uchun ishlatadi.

Stimulyatsiya qilingan Ramanning tarqalishi (Stimulated Raman Scattering): Bu jarayon materialda fotonlarning kuchli o‘zgarishi va ularning boshqa energiyaga o‘tishini anglatadi. Bu hodisa, masalan, optik tolalar orqali ma'lumotlarni uzatishda yangi imkoniyatlar yaratadi. Raman tarqalishi bir qator texnologiyalarda, shu jumladan, spektroskopiya va aloqa tizimlarida qo‘llaniladi.

Nochizig‘iy optika ko‘plab ilmiy va texnologik sohalarda yangi imkoniyatlarni ochadi. Tibbiyotda, bu texnologiyalar lazerli jarrohlikda, o‘tkazuvchi optik to‘lqinlar va rasm olish tizimlarida ishlatiladi. Aloqa tizimlarida esa, optik tolalar orqali tezkor ma'lumot uzatish va yangi turdagi kompyuterlar yaratish imkonini beradi. Fizikada esa, nochizig‘iy optika yangi materiallar va yangi fizik hodisalarni kashf qilishda muhim vosita bo‘lib xizmat qiladi.

Nochizig‘iy optika shuningdek, yangi materiallar ishlab chiqishda, masalan, noan'anaviy optik modellar yaratishda ham qo‘llaniladi. Supero‘tkazuvchan materiallar va yarim o‘tkazgichlar orqali ishlovchi lazerlar hamda yangi nanomateriallar yaratish uchun nochizig‘iy optika nazariyasi asosiy yo‘nalishlardan biri bo‘lib qoladi. Bu materiallar eng kichik o‘lchamda kuchli optik va elektron xususiyatlarga ega bo‘lib, kelajakdagi texnologiyalarni shakllantirishda asosiy rol o‘ynaydi.

Xulosa qilib aytganda, nochizig‘iy optika, yorug‘lik va materiallarning o‘zaro ta’sirini chuqur o‘rganish orqali zamonaviy ilm-fan va texnologiyalarda yangi imkoniyatlarni yaratishda muhim o‘rin tutadi. Bu sohaning rivojlanishi nafaqat ilmiy kashfiyotlar va yangi materiallar yaratishga olib keladi, balki kelajakda bizning kundalik hayotimizni yanada zamonaviy va texnologik jihatdan ilg‘or qiladi.
            </li>
          </ul>
        </div>
        <p>
          Nochizig'iy optik hodisalar zamonaviy optik aloqa tizimlarida, 
          spektroskopiyada va yangi lazer turlarini yaratishda qo'llaniladi.
        </p>
      </div>
    )
  },
  'quantum-optics': {
    title: "Kvant optikasi asoslari",
    content: (
      <div className="space-y-6">
        <p>
          Kvant optikasi - yorug'lik va modda o'rtasidagi o'zaro ta'sirni kvant mexanikasi 
          nuqtai nazaridan o'rganuvchi soha. Bu soha zamonaviy kvant texnologiyalarining 
          asosini tashkil etadi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy tushunchalar:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Kvant kogerentlik</li>
            <li>Foton statistikasi</li>
            <li>Kvant chalkashlik</li>
            <li>Kvant kriptografiya</li>
          </ul>
        </div>
        <p>
          Kvant optikasi yutuqlari kvant kompyuterlari, xavfsiz aloqa tizimlari va 
          o'ta sezgir o'lchov asboblarini yaratish imkonini beradi.
        </p>
      </div>
    )
  },
  'optical-computing': {
    title: "Optik hisoblash",
    content: (
      <div className="space-y-6">
        <p>
          Optik hisoblash - ma'lumotlarni qayta ishlash va hisoblashlarni yorug'lik yordamida 
          amalga oshirish texnologiyasi. Bu soha elektron kompyuterlarga nisbatan yuqori 
          tezlikda ishlash imkonini beradi.
        </p>
        <div className="bg-white/5 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Asosiy komponentlar:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Optik tranzistorlar</li>
            <li>Optik xotira qurilmalari</li>
            <li>Optik kommutatorlar</li>
            <li>Optik protsessorlar</li>
            <li>
            Optik hisoblash — bu optik texnologiyalarni ishlatib, ma'lumotlarni qayta ishlash va hisoblash jarayonlarini amalga oshirish usulidir. Optik hisoblashning asosiy maqsadi, elektr asboblari orqali bajariladigan hisoblash jarayonlaridan farqli o‘laroq, yorug‘likni va uning xususiyatlarini ishlatish orqali hisoblashlarni tezlashtirish va samaradorligini oshirishdir. Optik hisoblash texnologiyalari, ayniqsa, yuqori tezlikda ma'lumotlarni qayta ishlash va katta hajmdagi ma'lumotlarni tez va samarali tarzda analiz qilishda katta imkoniyatlar yaratadi. Bu texnologiya, ayniqsa, sun'iy intellekt, ilmiy tadqiqotlar, tibbiyot, telekommunikatsiya va boshqa sohalarda keng qo‘llanilishi mumkin.

Optik hisoblashning asosiy afzalliklaridan biri — bu yorug‘likning yuqori tezlikdagi xususiyatlaridan foydalanishdir. Elektron qurilmalarda, masalan, kompyuterlarda ma'lumotlar elektr toki orqali uzatiladi, bu esa nisbatan sekin ishlashga olib kelishi mumkin. Optik hisoblashda esa ma'lumotlar yorug‘lik to‘lqinlari yordamida uzatiladi, bu esa juda yuqori tezlikda ishlash imkonini beradi. Yorug‘likning tezligi taxminan 300,000 km/soniya bo‘lib, bu elektronika bilan taqqoslaganda ancha tezroqdir.

Optik hisoblash texnologiyalari bir necha asosiy prinsiplarga asoslanadi. Bularning asosiylari orasida yorug‘likning interferensiya, difraksiya, refraksiya va poliarizatsiya kabi xususiyatlarini ishlatish kiradi. Masalan, interferensiya — bu ikkita yoki undan ortiq yorug‘lik to‘lqinlarining bir-biriga ta’siri natijasida yangi to‘lqinlar paydo bo‘lishi hodisasi. Optik hisoblashda interferensiya yordamida turli xil signalni birlashtirish yoki ajratish mumkin. Difraksiya esa yorug‘likning to‘sqinliklardan (masalan, tor yoki teshiklardan) o‘tib ketganda, yo‘nalishini o‘zgartirish hodisasidir. Bu hodisa optik hisoblashda ma'lumotlarni uzatishda ishlatiladi. Refraksiya — yorug‘likning bir mediumdan boshqasiga o‘tishi bilan uning yo‘nalishining o‘zgarishi. Optik hisoblashda refraksiyani ishlatish orqali ma'lumotlarni filtrlash yoki yo‘nalishlarini boshqarish mumkin.

Optik hisoblashning asosiy usullari:

Optik matritsalarni hisoblash: Bu usulda yorug‘lik to‘lqinlari bir nechta optik matritsalar orqali o'tkaziladi. Har bir matritsa ma'lum bir ma'lumotni aks ettiradi, va bu orqali to‘plangan signal keyinchalik qayta ishlanadi. Matritsalarda foydalaniladigan optik elementlar, masalan, prizmalar, linzalar yoki aynalar bo‘lishi mumkin.

Optik rezonanslar va lazerlar: Lazerlar optik hisoblashda keng qo‘llaniladi, chunki ular kuchli, aniq va uzoq masofaga yo‘naltirilgan yorug‘lik nurini yaratadi. Optik rezonanslar yordamida ma'lumotlar qayta ishlanadi va lazer nurlari yordamida bu ma'lumotlar uzoq masofalarga uzatiladi.

Optik logik eshiklar: Elektron hisoblash tizimlarida ishlatiladigan logik eshiklar (AND, OR, NOT va boshqalar) optik tizimlarda ham mavjud. Bu optik logik eshiklar yorug‘lik to‘lqinlarini boshqarish va bir-biriga ta’sir etish orqali ma'lumotlarni manipulyatsiya qilish imkonini beradi. Optik logik eshiklar yordamida hisoblash va ma'lumotlarni qayta ishlashda elektrdan farqli ravishda, yorug‘likdan foydalanish orqali tezlikni oshirish mumkin.

Optik parallel hisoblash: Optik hisoblashda ma'lumotlar bir vaqtning o‘zida bir nechta kanallardan o‘tiladi, bu esa hisoblash jarayonini sezilarli darajada tezlashtiradi. Elektronika tizimlarida ma'lumotlar ketma-ket tarzda ishlanadi, ammo optik tizimlarda parallel tarzda ishlash mumkin, bu esa katta hajmdagi ma'lumotlarni qisqa vaqt ichida qayta ishlash imkonini beradi.

Optik hisoblash texnologiyasi telekommunikatsiya sohasida ham katta ahamiyatga ega. Optik tolalar yordamida ma'lumotlar yuqori tezlikda uzatiladi, lekin optik hisoblashda ma'lumotlarni faqat uzatish emas, balki ularni qayta ishlash ham amalga oshiriladi. Optik hisoblash yordamida sun'iy intellekt va mashina o‘rganish algoritmlarini yanada tezroq va samarali tarzda bajarish mumkin. Optik hisoblash texnologiyalari yangi avlod kompyuterlarini yaratishda asosiy o‘rin tutishi mumkin. Optik kompyuterlar tez orada avvalgi elektron kompyuterlardan ancha tezroq va samarali bo‘lishi kutilmoqda.

Shuningdek, optik hisoblash texnologiyalari tibbiyotda ham qo‘llanilishi mumkin. Masalan, optik rezonans tomografiya (ORT) va lazerli ko‘rik asboblari yordamida tibbiy tasvirlarni qayta ishlash va yanada aniqroq tashxis qo‘yish mumkin. Optik texnologiyalar yordamida yuzlab gigabaytli ma'lumotlarni tahlil qilish va kasalliklarni aniqlashda yuqori samaradorlikka erishish mumkin.

Xulosa qilib aytganda, optik hisoblash — bu kelajakda kompyuter texnologiyalarining yangi yo‘nalishi bo‘lib, u yuqori tezlik, samaradorlik va parallellik kabi xususiyatlarga ega. Elektronika va optik texnologiyalarning uyg‘unlashuvi hisoblash jarayonlarini sezilarli darajada tezlashtiradi va samarali qiladi. Optik hisoblash texnologiyasi zamonaviy ilm-fan va texnologiyaning rivojlanishiga katta hissa qo‘shishi mumkin. Yangi yutuqlar va ishlanmalar bu sohani yanada kengaytirib, kompyuterlar va boshqa texnologiyalarni yanada samarali qilish imkonini yaratadi.
            </li>
          </ul>
        </div>
        <p>
          Optik hisoblash tizimlari parallel ma'lumotlarni qayta ishlash, tasvirlarni 
          tanib olish va sun'iy intellekt tizimlarida keng qo'llaniladi.
        </p>
      </div>
    )
  }
};

const TopicDetail: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const topic = topicContents[topicId || ''] || {
    title: "Mavzu topilmadi",
    content: <p>Kechirasiz, so'ralgan mavzu topilmadi.</p>
  };

  // Mavzular ro'yxatini olish
  const topics = Object.keys(topicContents);
  const currentIndex = topics.indexOf(topicId || '');
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < topics.length - 1;

  // Navigatsiya funksiyalari
  const goToPrevious = () => {
    if (hasPrevious) {
      navigate(`/topics/${topics[currentIndex - 1]}`);
    }
  };

  const goToNext = () => {
    if (hasNext) {
      navigate(`/topics/${topics[currentIndex + 1]}`);
    }
  };

  const goToTopics = () => {
    navigate('/topics');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Navigatsiya tugmalari */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              hasPrevious
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaArrowLeft />
            <span>Oldingi mavzu</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToTopics}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
          >
            <FaHome />
            <span>Mavzular ro'yxati</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            disabled={!hasNext}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              hasNext
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>Keyingi mavzu</span>
            <FaArrowRight />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">{topic.title}</h1>
          <div className="prose prose-invert max-w-none">
            {topic.content}
          </div>
          {topic.animation}
        </motion.div>

        {/* Pastki navigatsiya tugmalari */}
        <div className="flex justify-between items-center mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToPrevious}
            disabled={!hasPrevious}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              hasPrevious
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FaArrowLeft />
            <span>Oldingi mavzu</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToNext}
            disabled={!hasNext}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
              hasNext
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>Keyingi mavzu</span>
            <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
