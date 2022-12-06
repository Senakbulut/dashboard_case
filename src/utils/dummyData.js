import Mobile from "../assets/icons/mobile";
import Person from "../assets/icons/person";
import QrCode from "../assets/icons/qrcode";
import Turkcell from "../assets/images/turkcell.png";
import Game from "../assets/images/game.png";
import Process from "../assets/images/process.png";
import Food from "../assets/icons/food";
import Money from "../assets/icons/money";
import Gold from "../assets/icons/gold";
import AvatarImg from "../assets/images/avatar.png";
import { colors } from "../styles/globalStyle";

export const dataSteps = [
  {
    icon: <Mobile />,
    title: "Telefonunuzdan Fups uygulamasını açın.",
  },
  {
    icon: <Person />,
    title: "Profil fotoğrafınızdaki QR ikonuna basın.",
  },
  {
    icon: <QrCode />,
    title: "QR Kodu okutarak internet şubeye giriş yapabilirsiniz.",
  },
];
export const options = [
  {
    value: "standarthesap",
    label: "Standart Hesap",
  },
  {
    value: "onaylıhesap",
    label: "Onaylı Hesap",
  },
  {
    value: "premiumhesap",
    label: "Premium Hesap",
  },
];
export const dataList = [
  {
    href: "#",
    color: `${colors.purple}`,
    title: `Burger’s Lab`,
    avatar: <Food />,
    description: "Aile Hesabım (Yasemin Pınar)",
    sign: "-",
    count: "- ₺200,00",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
  {
    href: "#",
    color: `${colors.green}`,
    title: `Gelen Transfer`,
    avatar: <Money />,
    description: "Dolar Hesabım (Erman Karakaya)",
    sign: "+",
    count: "$140,00",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
  {
    href: "#",
    color: `${colors.yellow}`,
    title: `Para Yükle`,
    avatar: <Gold />,
    description: "Altın Hesabım",
    count: "2,00 gr",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
  {
    href: "#",
    color: `${colors.purple}`,
    title: `Burger’s Lab`,
    avatar: <Food />,
    description: "Aile Hesabım (Yasemin Pınar)",
    sign: "-",
    count: "- ₺200,00",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
  {
    href: "#",
    color: `${colors.purple}`,
    title: `Burger’s Lab`,
    avatar: <Food />,
    description: "Aile Hesabım (Yasemin Pınar)",
    sign: "-",
    count: "- ₺200,00",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
  {
    href: "#",
    color: `${colors.purple}`,
    title: `Burger’s Lab`,
    avatar: <Food />,
    description: "Aile Hesabım (Yasemin Pınar)",
    sign: "-",
    count: "- ₺200,00",
    time: "2 saat önce",
    companyAvatar: `${AvatarImg}`,
  },
];
export const dataCarousel = [
  {
    imageSrc:`${Turkcell}`,
    title:"TURKCELL KAMPANYASI",
    description: "Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.",
  },
  {
    imageSrc:`${Game}`,
    title:"OYUN & E-PIN FIRSATI",
    description: "Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.",
  },
  {
    imageSrc:`${Process}`,
    title:"ÜCRETSİZ İŞLEM",
    description: " Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.",
  },
  {
    imageSrc:`${Turkcell}`,
    title:"TURKCELL KAMPANYASI",
    description: "Fatura ödemelerinizde her ay 10 TL kazan dilediğince harca.",
  },
  {
    imageSrc:`${Game}`,
    title:"OYUN & E-PIN FIRSATI",
    description: "Tüm alışverişlerinizde %20 bonus kazanma fırsatını kaçırma.",
  },
  {
    imageSrc:`${Process}`,
    title:"ÜCRETSİZ İŞLEM",
    description: " Fups App'i hemen indir! Ücretsiz işlem fırsatından sende yararlan.",
  },
]
