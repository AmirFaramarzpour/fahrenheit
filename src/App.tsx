import React, { useState } from 'react';
import { 
  Coffee, 
  CoffeeIcon, 
  Soup, 
  Leaf, 
  CupSoda, 
  Milk, 
  IceCream, 
  GlassWater,
  Waves,
  Cookie,
  IceCream2,
  SparkleIcon,
  CupSodaIcon,
  LeafyGreen
} from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
  note?: string; // Adding the note property
}

function App() {
  const [activeCategory, setActiveCategory] = useState('');

  const menuCategories: MenuCategory[] = [
    {
      id: 'espresso-based',
      name: ' اسپرسو بار',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { name: 'اسپرسو سولو', description: '', price: 'High Robusta: 120 T, Commercial: 130 T, Special: 150 T' },
        { name: 'اسپرسو دوپیو', description: '', price: 'High Robusta: 145 T, Commercial: 160 T, Special: 185 T' },
        { name: 'آمریکانو', description: 'اسپرسو- آب جوش', price: 'High Robusta: 150 T, Commercial: 165 T, Special: 190 T' },
        { name: 'آمریکانو شیرعسلی', description: 'اسپرسو- آب جوش- شیر عسلی', price: 'High Robusta: 180 T, Commercial: 195 T, Special: 220 T' },
        { name: 'لاته', description: 'اسپرسو- شیر- فوم شیر', price: 'High Robusta: 220 T, Commercial: 240 T, Special: 280 T' },
        { name: 'لاته نوتلا', description: 'اسپرسو- شیر- فوم شیر- نوتلا', price: 'High Robusta: 255 T, Commercial: 275 T, Special: 310 T' },
        { name: 'لاته کارامل', description: 'اسپرسو- شیر- فوم شیر- کارامل', price: 'High Robusta: 240 T, Commercial: 260 T, Special: 300 T' },
        { name: 'لاته عسل دارچین', description: 'اسپرسو- شیر- فوم شیر- عسل- دارچین', price: 'High Robusta: 255 T, Commercial: 275 T, Special: 310 T' },
        { name: 'کوکولاته', description: 'اسپرسو- شیر- فوم شیر- سیروپ نارگیل- پودر نارگیل', price: 'High Robusta: 255 T, Commercial: 275 T, Special: 310 T' },
        { name: 'موکا', description: 'اسپرسو- شیر- فوم شیر- سیروپ شکلات- سس شکلات', price: 'High Robusta: 240 T, Commercial: 260 T, Special: 300 T' },
        { name: 'کاپوچینو', description: 'اسپرسو- شیر- فوم شیر زیاد', price: 'High Robusta: 210 T, Commercial: 220 T, Special: 290 T' },
        { name: 'کورتادو', description: 'اسپرسو- شیر', price: 'High Robusta: 200 T, Commercial: 210 T, Special: 280 T' }



      ]
    },
    {
      id: 'brewed-coffee',
      name: 'قهوه های دمی',
      icon: <CoffeeIcon className="w-6 h-6" />,
      items: [
        { name: 'وی60', description: '', price: '260 T' },
        { name: 'ترک', description: '', price: '180 T' },
        { name: 'فرانسه', description: '', price: '200 T' },
        { name: 'پرشین', description: 'قهوه اصیل ایرانی به همراه هل و زعفران- شیرزعفران', price: '210 T' }

      ]
    },
    {
      id: 'hot-drinks',
      name: 'نوشیدنی های گرم',
      icon: <Soup className="w-6 h-6" />,
      items: [
        { name: 'هات لوتوس', description: 'کرم لوتوس- شکلات سفید- شیر- فوم شیر', price: '380 T' },
        { name: 'هات پسته', description: 'کرم پسته- پودر پسته- شکلات سفید- شیر- فوم شیر', price: '390 T' },
        { name: 'هات پینات', description: 'کره بادام زمینی- بادام زمینی- شکلات دارک- شیر- فوم شیر', price: '340 T' },
        { name: 'هات زعفران', description: 'زعفران- پودر هل- شکلات سفید- شیر- فوم شیر', price: '270 T' },
        { name: 'ماسالا', description: 'ترکیبی از ادویه های هندی باطبع گرم- شیر- فوم شیر', price: '265 T' },
        { name: 'هات چاکلت', description: 'پودر شکلات- شکلات رنده شده- شیر- فوم شیر', price: '265 T' },
        { name: 'هات چاکلت مارشملو', description: 'پودر شکلات- شکلات رنده شده- مارشمالو- شیر- فوم شیر', price: '310 T' },
        { name: 'هات چاکلت فندق', description: 'پودر شکلات- شکلات فندق- فندق- شیر- فوم شیر', price: '310 T' },
        { name: 'هات چاکلت بستنی', description: 'پودر شکلات- شکلات رنده شده- شیر- بستنی وانیلی', price: '310 T' },
        { name: 'شیر کاکائو', description: 'پودر کاکائو- شیر- شکر', price: '250 T' },
        { name: 'شیر گرم', description: '', price: '120 T' },
        { name: 'شیر دارچین', description: '', price: '120 T' },
        { name: 'شیر کارامل', description: '', price: '150 T' },
        { name: 'شیر زعفران', description: '', price: '155 T' },
        { name: 'شیر نوتلا', description: '', price: '170 T' },
        { name: 'شیر بادام زمینی', description: 'شیر- بادام زمینی', price: '170 T' },




      ]
    },
    {
      id: 'tea',
      name: 'چای و دمنوش',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'چای سیاه', description: '', price: '95 T' },
        { name: 'چای هلو', description: 'چای سیاه آسام- هلو- زردآلو', price: '140 T' },
        { name: 'چای سبز لوندر', description: 'چای سبز اعلاء- لوندر', price: '140 T' },
        { name: 'کوئین بری', description: 'توت فرنگی- کرن بری- گل های معطر- زرشک وحشی', price: '165 T' },
        { name: 'استرابری کیس', description: 'توت فرنگی- انبه- آناناس- سیب- آلوئه‌ورا- پاپایا- شیرین بیان', price: '165 T' },
        { name: 'گلدن وانیلا', description: 'سیب- وانیل- میخک- شیرین بیان- دارچین', price: '165 T' },
        { name: 'اپل پارادایس', description: 'سیب، به- دارچین', price: '165 T' },
        { name: 'مولن روژ', description: 'به- ریشه چغندر- گل رز- گل ختمی', price: '165 T' },
        { name: 'ویکتوریا سان ست', description: 'زردچوبه- زنجبیل- فلفل سیاه- دارچین', price: '165 T' },
        { name: 'لمون گرس', description: 'لمون گرس- زنجبیل- نعنا', price: '165 T' },
        { name: 'چای لاهیجان', description: 'چای سیاه دستچین لاهیجان', price: '110 T' },
        { name: 'چای زعفران', description: 'چای سیاه- زعفران', price: '120 T' },
        { name: 'چای مراکشی', description: 'چای سیاه- نعنا- نبات', price: '140 T' }

      ]
    },
    {
      id: 'cold-espresso',
      name: 'نوشیدنی های سرد بر پایه اسپرسو',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'آیس آمریکانو', description: 'اسپرسو- آب، یخ', price: 'High Robusta: 150 T, Commercial: 165 T, Special: 190 T' },
        { name: 'آیس رومانو تونیک', description: 'اسپرسو- سیروپ لیمو- آب لیمو- آب گازدار', price: 'High Robusta: 280 T, Commercial: 295 T, Special: 325 T' },
        { name: 'آیس لاته', description: 'اسپرسو- شیر- یخ', price: 'High Robusta: 220 T, Commercial: 240 T, Special: 280 T' },
        { name: 'آیس موکا', description: 'اسپرسو- شیر- سیروپ شکلات- یخ', price: 'High Robusta: 240 T, Commercial: 260 T, Special: 300 T' },
        { name: 'آیس لاته کارامل ', description: 'اسپرسو- شیر- سیروپ کارامل- یخ', price: 'High Robusta: 240 T, Commercial: 260 T, Special: 300 T' },
        { name: 'فراپه کارامل', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ کارامل- یخ', price: '280 T' },
        { name: 'فراپه فندق', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ فندق- یخ', price: '280 T' },
        { name: 'فراپه شکلات', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ شکلات- یخ', price: '280 T' },
        { name: 'آفوگاتو', description: 'اسپرسو- یک اسکوپ بستنی', price: '225 T' },
        { name: 'آفوگاتو نوتلا (شکلات فندقی)', description: 'اسپرسو- یک اسکوپ بستنی- شکلات فندقی', price: '265 T' },
        { name: 'آفوگاتو لوتوس', description: 'اسپرسو- یک اسکوپ بستنی- کرم لوتوس- بیسکوئیت لوتوس', price: '265 T' },
        { name: 'آفوگاتو پسته', description: 'اسپرسو- یک اسکوپ بستنی- کره پسته- پودر پسته', price: '265 T' },



      ]
    },
    {
      id: 'machabar',
      name: 'ماچا بار',
      icon: <LeafyGreen className="w-6 h-6" />,
      items: [
        { name: 'لاته ماچا', description: 'پودر چای ماچا- شیر- فوم شیر', price: '285 T' },
        { name: 'آیس ماچا', description: ' ماچا- شیر- یخ', price: '285 T' },
        { name: 'منگو ماچا', description: 'ماچا- شیر- پوره انبه', price: '340 T' },
        { name: 'ماچا بری', description: 'ماچا- شیر- پوره توت فرنگی', price: '340 T' },
        { name: 'ماچا رویا', description: '', price: '305 T' },




      ]
    },
    {
      id: 'milkshakes',
      name: 'میلک شیک ها',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'شیک نوتلا', description: 'بستنی شکلاتی- نوتلا', price: '380 T' },
        { name: 'شیک لوتوس', description: 'بستنی وانیلی- کرم لوتوس', price: '380 T' },
        { name: 'شیک پینات بِری', description: 'بستی کاراملی- کره بادام زمینی- پوره توت فرنگی', price: '320 T' },
        { name: 'شیک چابانا', description: 'بستنی شکلاتی- موز- شکلات', price: '380 T' },
        { name: 'شیک استوایی', description: 'بستنی وانیلی- توت فرنگی- هلو- انبه- آناناس- نارگیل', price: '380 T' },
        { name: 'شیک بری', description: 'بستنی وانیلی- توت فرنگی - شاه توت', price: '380 T' },
        { name: 'شیک منگونات', description: 'بستنی وانیلی- کره پسته- انبه- نارگیل', price: '430 T' },
        { name: 'شیک چوکونات', description: 'بستنی شکلاتی- کره بادام زمینی- بادام زمینی- شکلات', price: '300 T' },
        { name: 'شیک نسکافه', description: 'بستنی وانیلی- پودر قهوه', price: '290 T' },
        { name: 'شیک لواشک', description: 'بستنی ترش- آب آلبالو، لواشک', price: '330 T' }


      ]
    },
    {
      id: 'smoothies',
      name: 'اسموتی ها',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'مِلون بِری', description: 'هندوانه- گلاب- لیمو- شاه‌توت- شکر', price: '280 T' },
        { name: 'دراگون', description: 'انبه- آب انبه- شاه‌توت- آب شاه‌توت', price: '370 T' },
        { name: 'آمور', description: 'توت فرنگی- شاه‌توت- آلبالو- آناناس- هلو- آب اناز', price: '340 T' },
        { name: 'گرین آیلند', description: 'طالبی- آب آلوئه‌ورا- نارگیل', price: '290 T' },
        { name: 'کوکوکیس', description: '- انبه- آناناس- نارگیل- هلو- آب آناناس', price: '330 T' },

      ]
    },
    {
      id: 'flavored-milk',
      name: 'شیر طعم دار',
      icon: <Milk className="w-6 h-6" />,
      items: [
        { name: 'شیر موز', description: '', price: '230 T' },
        { name: 'شیر موز پسته', description: 'شیر- موز- کره پسته- پودر پسته', price: '270 T' },
        { name: 'شیر پسته', description: ' شیر- پسته- پودر پسته', price: '290 T' },
        { name: 'شیر انبه', description: 'شیر- میوه طبیعی انبه', price: '240 T' },
        { name: 'شیر موز انبه', description: 'شیر- میوه های طبیعی موز و انبه', price: '290 T' },

      ]
    },
    {
      id: 'cold-drinks',
      name: 'نوشیدنی های سرد',
      icon: <GlassWater className="w-6 h-6" />,
      items: [
        { name: 'موهیتو', description: 'لیمو- نعنا فلفلی- سودا', price: '260 T' },
        { name: 'رد موهیتو', description: 'لیمو- نعنا فلفلی- پوره توت فرنگی- سیروپ کرن بری- سودا', price: '290 T' },
        { name: 'لیموناد', description: 'لیمو- سیروپ لیمو- سودا', price: '230 T' },
        { name: 'دراگون فلای', description: 'پوره دراگون فروت- پوره توت فرنگی- لیمو- آب انبه- آب پرتغال- سیروپ پشن فروت- سودا', price: '330 T' },
        { name: 'کوکو بلو', description: 'آب آناناس- آب نارگیل- آب آلوئورا- اسپرولینا- سودا ', price: '300 T' },
        { name: 'بلواسکای', description: 'لیمو- آب آناناس- آب پرتغال- سیروپ بلوکارسائو- سودا', price: '290 T' },

      ]
    },
    {
      id: 'icecream',
      name: 'بستنی',
      icon: <IceCream className="w-6 h-6" />,
      note: "همگی قیمت‌ها برای یک اسکوپ بستنی لحاظ شده است.",
      items: [
        { name: 'یک اسکوپ بستنی وانیلی', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی شکلات تکه‌ای', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی کارامل', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی استوایی', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی معجون ترش', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی زعفران پسته', description: '', price: '80 T' },
        { name: 'یک اسکوپ بستنی شکلات کارامل', description: '', price: '80 T' },


      ]
    },
    {
      id: 'waffle',
      name: 'وافل',
      icon: <Cookie className="w-6 h-6" />,
      items: [
        { name: 'وافل فارنهایت', description: 'وافل- میوه فصل- مغزیجات- یک اسکوپ بستنی و یک تاپینگ به دلخواه \n بستنی‌ها ← وانیل، شکلات،کارامل،معجون ترش، استوایی، زعفران پسته \n تاپینگ‌ها ← کره بادام زمینی، کره پسته، نوتلا، لوتوس، سس شکلات، کارامل نمکی', price: '390 T' },
        { name: 'پینات کلاب', description: 'دو عدد وافل- کره بادام زمینی- بادام زمینی', price: '330 T' },
        { name: 'فروتی نات', description: 'دو عدد وافل- کره بادام زمینی- بادام زمینی- میوه فصل', price: '370 T' },
        { name: 'نوتلا کلاب', description: 'دو عدد وافل- نوتلا- فندق', price: '330 T' },
        { name: 'فروتی‌لا', description: 'دو عدد وافل- نوتلا- فندق- میوه فصل', price: '370 T' },
        { name: 'لوتوس کلاب', description: 'دو عدد وافل- کرم لوتوس، پرک بادام درختی ', price: '330 T' },
        { name: 'بیسکوفروت', description: 'دو عدد وافل- کرم لوتوس- پرک بادام درختی- میوه فصل', price: '370 T' },


      ]
    },
    {
      id: 'special',
      name: 'آیتم‌های ویژه',
      icon: <SparkleIcon className="w-6 h-6" />,
      items: [
        { name: 'شوکوبری پسته', description: 'توت فرنگی- سس شکلات- یک اسکوپ بستنی- کره پسته- پودر پسته- شَعریه ', price: '480 T' },
        { name: 'شوکوبری', description: 'توت فرنگی- سس شکلات- یک اسکوپ بستنی', price: '430 T' },
        { name: 'اسپیرولینا بری', description: 'اسپیرولینا- شیر- پوره توت فرنگی', price: '330 T' },
        { name: 'شوکوبری نوتلا', description: 'توت فرنگی- سس شکلات- نوتلا- یک اسکوپ بستنی', price: '460 T' },




      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9f3]">
      {/* Hero Section */}
      <div
        className="h-[30vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/amirfaramarzpour/FahrenheitCafe/IMG_4757.JPEG?updatedAt=1781168499446")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1
              className="text-4xl md:text-7xl  mb-4 el-messiri-regular"
              style={{
                fontFamily: '"Changa", sans-serif',
                fontOpticalSizing: 'auto',
                fontWeight: 500,
                fontStyle: 'bold',
              }}
            >
              
            </h1>
            <p
              className="text-2xl md:text-2xl caveat-regular"
              style={{
                fontFamily: '"Caveat", cursive',
                fontOpticalSizing: 'auto',
                fontWeight: 200,
                fontStyle: 'bold',
              }}
            >
              
            </p>
          </div>
        </div>
      </div>





      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="max-w-12x1 mx-auto px-2">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2 py-1" style={{ direction: 'rtl' }}>
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category.id ? '' : category.id
                  )
                }
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors text-base ${
                  activeCategory === category.id ? 'bg-[#6F4E37] text-[#FFFFFF]' : 'bg-[#3F7D58] text-[#FFFFFF] hover:bg-[#77B254]'
                }`}
              >
                {category.icon}
                <span
                  className="mt-1 text-center text-xs text-[#e0e6da] el-messiri-regular"
                  style={{
                    fontFamily: '"El Messiri", sans-serif',
                    fontOpticalSizing: 'auto',
                    fontWeight: 400, // Regular weight
                    fontStyle: 'SemiBold ',
                  }}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>





      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 py-8 font-customLateef" style={{ direction: 'rtl' }}>
        {menuCategories.map((category) => (
          <div
            key={category.id}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
              activeCategory === category.id ? '' : 'hidden'
            }`}
          >
            {category.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#1b3438] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border border-[#e8f5e9]"
              >
                <div className="flex justify-between items-start text-right">
                  <div>
                    <h3
                      className="text-xl font-semibold text-[#F0F0D7]"
                      style={{
                        fontFamily: '"Lalezar", system-ui',
                        fontWeight: 400,
                        fontStyle: 'normal',
                      }}
                    >
                      {item.name}
                    </h3>

                    <p className="text-[#f8f9f3] mt-1 text-s font-customLateef">
                      {item.description.split('\n').map((line, index) => (
                        <span key={index} style={{ display: 'block' }}>
                          {line.trim()}
                        </span>
                      ))}
                    </p>
                  </div>                  <div className="text-xl mt-1 text-[#ced9a9] font-customLateef" style={{ direction: 'ltr', textAlign: 'left' }}>
                    {item.price.split(', ').map((priceLine, idx) => (
                      <p key={idx}>{priceLine}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>








      {/* Footer */}
      <footer className="bg-[#3F7D58] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
                              <div className="bg-[#3F7D58] py-4 flex justify-center">
                    <a
                      href="https://forms.gle/WoJdmJRMomSCaWxX7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-all duration-300 hover:scale-105"
                    >
                      <img
                        src="https://ik.imagekit.io/amirfaramarzpour/FahrenheitCafe/f90968c738c1dcf0ae03d7428dc6c6ea.png"
                        alt="رزرو میز"
                        className="h-24 md:h-28 w-auto"
                      />
                    </a>
                  </div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <h3
            className="text-sm mt-2 cursor-pointer"
            onClick={() => navigator.clipboard.writeText('+98 9115004007')}
          >
            Phone: +98 9115004007
          </h3>
          <h2 className="text-2xl text-[#FFDA62] font-customLateef font-bold mt-4">.:: به سفارشات بیرون‌بر مبلغ ۱۵ هزار تومان افزوده خواهد شد ::.</h2>
          <h2 className="text-lg font-bold mt-4">Follow Us on Instagram</h2>
          <div className="flex justify-center items-center mt-2 space-x-2">
            <a
              href="https://www.instagram.com/fahrenheit.cafe.boutique/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-[#ad8026]"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <h3 className="text-sm">@fahrenheit.cafe.boutique</h3>
          </div>
          <p className="text-sm mt-2">
          ⚲ Fahrenheit Cafe on Map:{" "}
            <a
              href="https://maps.app.goo.gl/pwrNxpWV6MJb48kV7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Sari, Saba St.
            </a>
          </p>
          <p className="text-sm mt-4">Sat-Thu: 07:00 AM - 00:00 AM | Friday: 09:00 AM - 00:00 AM</p>
          <p className="text-sm mt-2">
          © 2026-2027 Fahrenheit Café. All rights reserved | Design:{" "}
            <a
              href="https://amirfaramarzpour.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Amir
            </a>

          </p>
          <a
              href="https://t.me/Darrk_forests"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  hover:text-[#ad8026]"
            >
              📚 Sip Slowly. Read Deeply
            </a>
            <img
            src="https://ik.imagekit.io/amirfaramarzpour/FahrenheitCafe/Logo%20(6).png?updatedAt=1781168502454"
            alt="Cafe Logo"
            className="mx-auto w-24 h-auto mb-4"
          />
        </div>
      </footer>



    </div>
  );
}

export default App;