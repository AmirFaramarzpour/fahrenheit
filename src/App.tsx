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
  const [activeCategory, setActiveCategory] = useState('espresso-based');

  const menuCategories: MenuCategory[] = [
    {
      id: 'espresso-based',
      name: ' اسپرسو بار',
      icon: <Coffee className="w-6 h-6" />,
      items: [
        { name: 'اسپرسو سولو', description: '', price: 'High Robusta: 55 T, Commercial: 65 T, Special: 80 T' },
        { name: 'اسپرسو دوپیو', description: '', price: 'High Robusta: 70 T, Commercial: 80 T, Special: 100 T' },
        { name: 'آمریکانو', description: 'اسپرسو- آب جوش', price: 'High Robusta: 75 T, Commercial: 85 T, Special: 105 T' },
        { name: 'آمریکانو شیرعسلی', description: 'اسپرسو- آب جوش- شیر عسلی', price: 'High Robusta: 85 T, Commercial: 95 T, Special: 110 T' },
        { name: 'لاته', description: 'اسپرسو- شیر- فوم شیر', price: 'High Robusta: 100 T, Commercial: 120 T, Special: 130 T' },
        { name: 'لاته نوتلا', description: 'اسپرسو- شیر- فوم شیر- نوتلا', price: 'High Robusta: 120 T, Commercial: 140 T, Special: 155 T' },
        { name: 'لاته کارامل', description: 'اسپرسو- شیر- فوم شیر- کارامل', price: 'High Robusta: 110 T, Commercial: 130 T, Special: 140 T' },
        { name: 'لاته عسل دارچین', description: 'اسپرسو- شیر- فوم شیر- عسل- دارچین', price: 'High Robusta: 115 T, Commercial: 135 T, Special: 150 T' },
        { name: 'کوکولاته', description: 'اسپرسو- شیر- فوم شیر- سیروپ نارگیل- پودر نارگیل', price: 'High Robusta: 110 T, Commercial: 130 T, Special: 145 T' },
        { name: 'موکا', description: 'اسپرسو- شیر- فوم شیر- سیروپ شکلات- سس شکلات', price: 'High Robusta: 110 T, Commercial: 130 T, Special: 145 T' },
        { name: 'کاپوچینو', description: 'اسپرسو- شیر- فوم شیر زیاد', price: 'High Robusta: 95 T, Commercial: 115 T, Special: 130 T' },
        { name: 'کورتادو', description: 'اسپرسو- شیر', price: 'High Robusta: 90 T, Commercial: 110 T, Special: 125 T' }



      ]
    },
    {
      id: 'brewed-coffee',
      name: 'قهوه های دمی',
      icon: <CoffeeIcon className="w-6 h-6" />,
      items: [
        { name: 'وی60', description: '', price: '140 T' },
        { name: 'ترک', description: '', price: '80 T' },
        { name: 'فرانسه', description: '', price: '80 T' },
        { name: 'پرشین', description: 'قهوه اصیل ایرانی به همراه هل و زعفران- شیرزعفران', price: '90 T' }

      ]
    },
    {
      id: 'hot-drinks',
      name: 'نوشیدنی های گرم',
      icon: <Soup className="w-6 h-6" />,
      items: [
        { name: 'هات لوتوس', description: 'کرم لوتوس- شکلات سفید- شیر- فوم شیر', price: '120 T' },
        { name: 'هات پسته', description: 'کرم پسته- پودر پسته- شکلات سفید- شیر- فوم شیر', price: '130 T' },
        { name: 'هات پینات', description: 'کره بادام زمینی- بادام زمینی- شکلات دارک- شیر- فوم شیر', price: '100 T' },
        { name: 'هات زعفران', description: 'زعفران- پودر هل- شکلات سفید- شیر- فوم شیر', price: '80 T' },
        { name: 'ماسالا', description: 'ترکیبی از ادویه های هندی باطبع گرم- شیر- فوم شیر', price: '90 T' },
        { name: 'هات چاکلت', description: 'پودر شکلات- شکلات رنده شده- شیر- فوم شیر', price: '90 T' },
        { name: 'هات چاکلت مارشملو', description: 'پودر شکلات- شکلات رنده شده- مارشمالو- شیر- فوم شیر', price: '105 T' },
        { name: 'هات چاکلت فندق', description: 'پودر شکلات- شکلات فندق- فندق- شیر- فوم شیر', price: '110 T' },
        { name: 'هات چاکلت بستنی', description: 'پودر شکلات- شکلات رنده شده- شیر- بستنی وانیلی', price: '110 T' },
        { name: 'شیر کاکائو', description: 'پودر کاکائو- شیر- شکر', price: '70 T' },
        { name: 'لاته اسپیرولینا', description: 'پودر جلبک اسپیرولینا- شیر- فوم شیر', price: '120 T' },
        { name: 'شیر گرم', description: '', price: '40 T' },
        { name: 'شیر دارچین', description: '', price: '45 T' },
        { name: 'شیر کارامل', description: 'شیر- کارامل دست ساز', price: '50 T' },
        { name: 'شیر زعفران', description: '', price: '60 T' }



      ]
    },
    {
      id: 'tea',
      name: 'چای و دمنوش',
      icon: <Leaf className="w-6 h-6" />,
      items: [
        { name: 'چای سیاه', description: '', price: '35 T' },
        { name: 'چای هلو', description: 'چای سیاه آسام- هلو- زردآلو', price: '70 T' },
        { name: 'چای سبز لوندر', description: 'چای سبز اعلاء- لوندر', price: '70 T' },
        { name: 'کوئین بری', description: 'توت فرنگی- کرن بری- گل های معطر- زرشک وحشی', price: '90 T' },
        { name: 'استرابری کیس', description: 'توت فرنگی- انبه- آناناس- سیب- آلوئه‌ورا- پاپایا- شیرین بیان', price: '90 T' },
        { name: 'گلدن وانیلا', description: 'سیب- وانیل- میخک- شیرین بیان- دارچین', price: '80 T' },
        { name: 'اپل پارادایس', description: 'سیب، به- دارچین', price: '80 T' },
        { name: 'مولن روژ', description: 'به- ریشه چغندر- گل رز- گل ختمی', price: '80 T' },
        { name: 'ویکتوریا سان ست', description: 'زردچوبه- زنجبیل- فلفل سیاه- دارچین', price: '80 T' },
        { name: 'لمون گرس', description: 'لمون گرس- زنجبیل- نعنا', price: '80 T' },
        { name: 'چای لاهیجان', description: 'چای سیاه دستچین لاهیجان', price: '50 T' },
        { name: 'چای زعفران', description: 'چای سیاه- زعفران', price: '60 T' },
        { name: 'چای مراکشی', description: 'چای سیاه- نعنا- نبات', price: '70 T' }

      ]
    },
    {
      id: 'cold-espresso',
      name: 'نوشیدنی های سرد بر پایه اسپرسو',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'آیس آمریکانو', description: 'اسپرسو- آب، یخ', price: 'High Robusta: 75 T, Commercial: 85 T, Special: 105 T' },
        { name: 'آیس رومانو تونیک', description: 'اسپرسو- سیروپ لیمو- آب لیمو- آب گازدار', price: 'High Robusta: 95 T, Commercial: 105 T, Special: 125 T' },
        { name: 'آیس لاته', description: 'اسپرسو- شیر- یخ', price: 'High Robusta: 100 T, Commercial: 120 T, Special: 135 T' },
        { name: 'آیس موکا', description: 'اسپرسو- شیر- سیروپ شکلات- یخ', price: 'High Robusta: 110 T, Commercial: 130 T, Special: 145 T' },
        { name: 'آیس لاته کارامل ', description: 'اسپرسو- شیر- سیروپ کارامل- یخ', price: 'High Robusta: 110 T, Commercial: 130 T, Special: 145 T' },
        { name: 'فراپه کارامل', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ کارامل- یخ', price: '130 T' },
        { name: 'فراپه فندق', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ فندق- یخ', price: '130 T' },
        { name: 'فراپه شکلات', description: 'اسپرسو- شیر- یک اسکوپ بستنی- سیروپ شکلات- یخ', price: '130 T' },
        { name: 'آفوگاتو', description: 'اسپرسو- یک اسکوپ بستنی', price: '105 T' },
        { name: 'آفوگاتو شکلات فندقی', description: 'اسپرسو- یک اسکوپ بستنی- شکلات فندقی', price: '125 T' },
        { name: 'آفوگاتو لوتوس', description: 'اسپرسو- یک اسکوپ بستنی- کرم لوتوس- بیسکوئیت لوتوس', price: '135 T' },
        { name: 'آفوگاتو پسته', description: 'اسپرسو- یک اسکوپ بستنی- کره پسته- پودر پسته', price: '145 T' },



      ]
    },
    {
      id: 'machabar',
      name: 'ماچا بار',
      icon: <LeafyGreen className="w-6 h-6" />,
      items: [
        { name: 'لاته ماچا', description: 'پودر چای ماچا- شیر- فوم شیر', price: '140 T' },
        { name: 'آیس ماچا', description: ' ماچا- شیر- یخ', price: '140 T' },
        { name: 'منگو ماچا', description: 'ماچا- شیر- پوره انبه', price: '180 T' },
        { name: 'ماچا بری', description: 'ماچا- شیر- پوره توت فرنگی', price: '170 T' },


      ]
    },
    {
      id: 'milkshakes',
      name: 'میلک شیک ها',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'شیک نوتلا', description: 'بستنی شکلاتی- نوتلا', price: '180 T' },
        { name: 'شیک لوتوس', description: 'بستنی وانیلی- کرم لوتوس', price: '180 T' },
        { name: 'شیک پینات بِری', description: 'بستی کاراملی- کره بادام زمینی- پوره توت فرنگی', price: '140 T' },
        { name: 'شیک چابانا', description: 'بستنی شکلاتی- موز- شکلات', price: '160 T' },
        { name: 'شیک استوایی', description: 'بستنی وانیلی- توت فرنگی- هلو- انبه- آناناس- نارگیل', price: '170 T' },
        { name: 'شیک بری', description: 'بستنی وانیلی- توت فرنگی - شاه توت', price: '120 T' },
        { name: 'شیک منگونات', description: 'بستنی وانیلی- کره پسته- انبه- نارگیل', price: '200 T' },
        { name: 'شیک چوکونات', description: 'بستنی شکلاتی- کره بادام زمینی- بادام زمینی- شکلات', price: '140 T' },
        { name: 'شیک نسکافه', description: 'بستنی وانیلی- پودر قهوه', price: '110 T' }

      ]
    },
    {
      id: 'smoothies',
      name: 'اسموتی ها',
      icon: <CupSodaIcon className="w-6 h-6" />,
      items: [
        { name: 'مِلون بِری', description: 'هندوانه- گلاب- لیمو- شاه‌توت- شکر', price: '110 T' },
        { name: 'سیب و نعنا', description: 'سیب سبز- نعنا', price: '180 T' },
        { name: 'دراگون', description: 'انبه- آب انبه- شاه‌توت- آب شاه‌توت', price: '180 T' },
        { name: 'آمور', description: 'توت فرنگی- شاه‌توت- آلبالو- آناناس- هلو- آب اناز', price: '160 T' },
        { name: 'گرین آیلند', description: 'طالبی- آب آلوئه‌ورا- نارگیل', price: '120 T' },
        { name: 'کوکوکیس', description: '- انبه- آناناس- نارگیل- هلو- آب آناناس', price: '160 T' },

      ]
    },
    {
      id: 'flavored-milk',
      name: 'شیر طعم دار',
      icon: <Milk className="w-6 h-6" />,
      items: [
        { name: 'شیر نوتلا', description: '', price: '100 T' },
        { name: 'شیر موز', description: '', price: '85 T' },
        { name: 'شیر موز پسته', description: 'شیر- موز- کره پسته- پودر پسته', price: '130 T' },
        { name: 'شیر پسته', description: ' شیر- پسته- پودر پسته', price: '160 T' },
        { name: 'شیر بادام زمینی', description: 'شیر- کره بادام زمینی- بادام زمینی', price: '90 T' },
        { name: 'شیر انبه', description: 'شیر- میوه طبیعی انبه', price: '110 T' },
        { name: 'شیر موز انبه', description: 'شیر- میوه های طبیعی موز و انبه', price: '100 T' },

      ]
    },
    {
      id: 'cold-drinks',
      name: 'نوشیدنی های سرد',
      icon: <GlassWater className="w-6 h-6" />,
      items: [
        { name: 'موهیتو', description: 'لیمو- نعنا فلفلی- سودا', price: '95 T' },
        { name: 'رد موهیتو', description: 'لیمو- نعنا فلفلی- پوره توت فرنگی- سیروپ کرن بری- سودا', price: '110 T' },
        { name: 'لیموناد', description: 'لیمو- سیروپ لیمو- سودا', price: '85 T' },
        { name: 'دراگون فلای', description: 'پوره دراگون فروت- پوره توت فرنگی- لیمو- آب انبه- آب پرتغال- سیروپ پشن فروت- سودا', price: '170 T' },
        { name: 'تامارین', description: 'لیمو- سیروپ لیمو- سس تمر هندی- سودا ', price: '120 T' },
        { name: 'کوکو بلو', description: 'آب آناناس- آب نارگیل- آب آلوئورا- اسپرولینا- سودا ', price: '150 T' },
        { name: 'بلواسکای', description: 'لیمو- آب آناناس- آب پرتغال- سیروپ بلوکارسائو- سودا', price: '130 T' },

      ]
    },
    {
      id: 'icecream',
      name: 'بستنی',
      icon: <IceCream className="w-6 h-6" />,
      note: "همگی قیمت‌ها برای یک اسکوپ بستنی لحاظ شده است.",
      items: [
        { name: 'یک اسکوپ بستنی وانیلی', description: '', price: '25 T' },
        { name: 'یک اسکوپ بستنی شکلات تکه‌ای', description: '', price: '25 T' },
        { name: 'یک اسکوپ بستنی کارامل', description: '', price: '25 T' },
        { name: 'یک اسکوپ بستنی استوایی', description: '', price: '25 T' },
        { name: 'یک اسکوپ بستنی معجون ترش', description: '', price: '25 T' },
        { name: 'یک اسکوپ بستنی زعفران پسته', description: '', price: '25 T' },

      ]
    },
    {
      id: 'waffle',
      name: 'وافل',
      icon: <Cookie className="w-6 h-6" />,
      items: [
        { name: 'وافل فارنهایت', description: 'وافل- میوه فصل- مغزیجات- یک اسکوپ بستنی و یک تاپینگ به دلخواه \n بستنی‌ها ← وانیل، شکلات،کارامل،معجون ترش، استوایی، زعفران پسته \n تاپینگ‌ها ← کره بادام زمینی، کره پسته، نوتلا، لوتوس، سس شکلات، کارامل نمکی', price: '270 T' },
        { name: 'پینات کلاب', description: 'دو عدد وافل- کره بادام زمینی- بادام زمینی', price: '140 T' },
        { name: 'فروتی نات', description: 'دو عدد وافل- کره بادام زمینی- بادام زمینی- میوه فصل', price: '180 T' },
        { name: 'نوتلا کلاب', description: 'دو عدد وافل- نوتلا- فندق', price: '140 T' },
        { name: 'فروتی‌لا', description: 'دو عدد وافل- نوتلا- فندق- میوه فصل', price: '180 T' },
        { name: 'لوتوس کلاب', description: 'دو عدد وافل- کرم لوتوس، پرک بادام درختی ', price: '180 T' },
        { name: 'بیسکوفروت', description: 'دو عدد وافل- کرم لوتوس- پرک بادام درختی- میوه فصل', price: '220 T' },


      ]
    },
    {
      id: 'special',
      name: 'آیتم‌های ویژه',
      icon: <SparkleIcon className="w-6 h-6" />,
      items: [
        { name: 'شوکوبری پسته', description: 'توت فرنگی- سس شکلات- یک اسکوپ بستنی- کره پسته- پودر پسته- شَعریه ', price: '270 T' },
        { name: 'شوکوبری', description: 'توت فرنگی- سس شکلات- یک اسکوپ بستنی', price: '200 T' },
        { name: 'اسپیرولینا بری', description: 'اسپیرولینا- شیر- پوره توت فرنگی', price: '150 T' },



      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8f9f3]">
      {/* Hero Section */}
      <div
        className="h-[30vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/amirfaramarzpour/IMG_4757.JPEG?updatedAt=1747561355546")',
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
                onClick={() => setActiveCategory(category.id)}
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
          <img
            src="https://ik.imagekit.io/amirfaramarzpour/Logo%20(6).png?updatedAt=1735067165975"
            alt="Cafe Logo"
            className="mx-auto w-24 h-auto mb-4"
          />
          <h2 className="text-lg font-bold">Contact Us</h2>
          <h3
            className="text-sm mt-2 cursor-pointer"
            onClick={() => navigator.clipboard.writeText('+98 9115004007')}
          >
            Phone: +98 9115004007
          </h3>
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
            Fahrenheit Cafe on Map:{" "}
            <a
              href="https://maps.app.goo.gl/pwrNxpWV6MJb48kV7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              Sari, Saba St.
            </a>
          </p>
          <p className="text-sm mt-4">Sat-Thu: 07:00 AM - 00:00 AM | Friday: 11:00 AM - 00:00 AM</p>
          <p className="text-sm mt-2">
          © 2025 Fahrenheit Café. All rights reserved | Design:{" "}
            <a
              href="https://amirfaramarzpour.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline"
            >
              AmirFaramarzpour
            </a>
          </p>
        </div>
      </footer>



    </div>
  );
}

export default App;