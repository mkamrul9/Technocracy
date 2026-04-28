import QuickActions from "@/components/QuickActions";
import Navbar from "@/components/Navbar";
import CountdownTimer from "@/components/CountdownTimer";

const CODE_REGISTRATION_LINK = "https://forms.gle/xhghADXrngrKxhUCA";
const HACK_REGISTRATION_LINK = "https://forms.gle/LMXuQvZLcMRRWJHA6";
const CODE_RULEBOOK_LINK = "https://drive.google.com/file/d/193Eb3jryGxNZusZviioP112IHe-4H-fX/view";
const HACK_RULEBOOK_LINK = "https://drive.google.com/file/d/1jb5QxWS96kKgWUMVrtelXgTg8U7MsiEc/view";
const FACEBOOK_PAGE_LINK = "https://www.facebook.com/technocracyece";
const FACEBOOK_EVENT_LINK = "https://www.facebook.com/events/2015645729337938/";
const SITE_URL = "https://technocracy2026.vercel.app";
const HACKSPARK_START = "2026-04-30T09:00:00+06:00";

const HACKSPARK_TEAMS = [
  {
    name: "Team OrbitSaaS",
    paymentMethod: "Bkash",
    transactionId: "DDJ1BK4LP5",
    members: [
      {
        name: "Muhammad Nisar Uddin",
        dept: "ECE",
        series: "21",
        id: "2110027",
        email: "nisar.ruet@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Abdur Rafiu",
        dept: "ECE",
        series: "21",
        id: "2110038",
        email: "abdurrafiu7@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Ribbie Mohammad Omar",
        dept: "ECE",
        series: "21",
        id: "2110041",
        email: "ribbie291001@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "RUET Innovators",
    paymentMethod: "Bkash",
    transactionId: "DDK2CX5R3C",
    members: [
      {
        name: "Md. Sohanur Rahman Sohan",
        dept: "ETE",
        series: "22",
        id: "2204041",
        email: "sohanfardin546@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
      {
        name: "Mohaiminul Islam",
        dept: "ETE",
        series: "22",
        id: "2204042",
        email: "mohaiminum118@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Iftakhar Mahmud Tamim",
        dept: "ETE",
        series: "22",
        id: "2204059",
        email: "imtamim1111@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Deadlock Syndicate",
    paymentMethod: "Bkash",
    transactionId: "DDK8DDHTWE",
    members: [
      {
        name: "Anup Paul",
        dept: "CSE",
        series: "24",
        id: "2403108",
        email: "anup14289@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Maisha Fariha",
        dept: "CSE",
        series: "24",
        id: "2403120",
        email: "maishafariha.32e@gmail.com",
        gender: "Female",
        tshirt: "XL",
      },
      {
        name: "Kazi Ibteshama Banu Khutba",
        dept: "CSE",
        series: "24",
        id: "2403024",
        email: "ibteshamasuha@gmail.com",
        gender: "Female",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "RESTless",
    paymentMethod: "Bkash",
    transactionId: "DDL3DWA04J",
    members: [
      {
        name: "Eazdan Mostafa Rafin",
        dept: "CSE",
        series: "20",
        id: "2003055",
        email: "eazdan.rafin@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Nahid Niyaz Shovon",
        dept: "CSE",
        series: "20",
        id: "2003008",
        email: "nahidniyaz185@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
      {
        name: "Naim Parvez",
        dept: "CSE",
        series: "20",
        id: "2003015",
        email: "naimparvez999@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
    ],
  },
  {
    name: "amranoob",
    paymentMethod: "Bkash",
    transactionId: "DDL4E84AOO",
    members: [
      {
        name: "Farhana Islam",
        dept: "ECE",
        series: "21",
        id: "2110047",
        email: "saimafarhanaislam@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Nazifa Fairuz Zuthi",
        dept: "CSE",
        series: "21",
        id: "2103111",
        email: "nazifafairuzzuthi@gmail.com",
        gender: "Female",
        tshirt: "M",
      },
      {
        name: "Md Redwan Bhuiyan Rafio",
        dept: "CSE",
        series: "21",
        id: "2103113",
        email: "rafio.work.2002@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Hacka-Bots",
    paymentMethod: "Bkash",
    transactionId: "DDL9EFHX1T",
    members: [
      {
        name: "Md. Sanzid Alam Sahil",
        dept: "ECE",
        series: "23",
        id: "2310010",
        email: "sanzid.sahil.999@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Zawad",
        dept: "ECE",
        series: "23",
        id: "2310018",
        email: "2310018",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Amit Chandra Roy",
        dept: "ECE",
        series: "23",
        id: "2310042",
        email: "royamit223399@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
    ],
  },
  {
    name: "11T",
    paymentMethod: "Bkash",
    transactionId: "DDL8EGAXWS",
    members: [
      {
        name: "Injamul Islam",
        dept: "CSE",
        series: "23",
        id: "2303043",
        email: "injamulislam132@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Raiyan Bin Rafique",
        dept: "CSE",
        series: "23",
        id: "2303024",
        email: "raiyanrohit10@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Mominul Islam Moon",
        dept: "CSE",
        series: "23",
        id: "2303001",
        email: "m.mmoon1527@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "model_misfit",
    paymentMethod: "Bkash",
    transactionId: "DDM7F6IMY7",
    members: [
      {
        name: "Abdullah Al Mamun",
        dept: "CSE",
        series: "20",
        id: "2003112",
        email: "abdullah1810276@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md. Ashraful Hossen Akash",
        dept: "CSE",
        series: "20",
        id: "2003111",
        email: "ashraful.hossen.akash@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md Barkullah",
        dept: "CSE",
        series: "20",
        id: "2003071",
        email: "mdbarik3282@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "TheMatrix",
    paymentMethod: "Bkash",
    transactionId: "DDM5F6WO3F",
    members: [
      {
        name: "Md. Yousuf",
        dept: "ECE",
        series: "23",
        id: "2310023",
        email: "mdyousuf2723@gmail.com",
        gender: "Male",
        tshirt: "3XL",
      },
    ],
  },
  {
    name: "Random_Name",
    paymentMethod: "Bkash",
    transactionId: "DDM9FK18IH",
    members: [
      {
        name: "Shariyar Hossain Durjoy",
        dept: "CSE",
        series: "20",
        id: "2003020",
        email: "shariyashajid@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Fahim Hossain",
        dept: "CSE",
        series: "20",
        id: "2003106",
        email: "fahimcpscrian01@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
      {
        name: "Md Basaratul Ferdaus Neon",
        dept: "CSE",
        series: "20",
        id: "2003021",
        email: "2003021@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "Luminous_Logic",
    paymentMethod: "Bkash",
    transactionId: "DDN5FSXTGJ",
    members: [
      {
        name: "Mst. Rabeya Khatun",
        dept: "ECE",
        series: "22",
        id: "2210001",
        email: "rabeya2802@gmail.com",
        gender: "Female",
        tshirt: "M",
      },
      {
        name: "Jaharun Binta Feroz Jeba",
        dept: "ECE",
        series: "22",
        id: "2210008",
        email: "jaharunjeba16@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Sadia Rahman Mithila",
        dept: "ECE",
        series: "22",
        id: "2210038",
        email: "sadimithi8@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Mst. Tania Khatun",
        dept: "ECE",
        series: "22",
        id: "2210046",
        email: "iamtania@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
    ],
  },
  {
    name: "First&&Last",
    paymentMethod: "Bkash",
    transactionId: "DDN8FWRVK8",
    members: [
      {
        name: "Mir Ashikur Rahman",
        dept: "CSE",
        series: "20",
        id: "2003109",
        email: "mirashikur109@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Niloy Dev",
        dept: "CSE",
        series: "20",
        id: "2003100",
        email: "niloydev59@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md Ibrahim Sarker Raiyan",
        dept: "CSE",
        series: "20",
        id: "2003092",
        email: "ibrahimsarkerraiyan@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "StackOverflow",
    paymentMethod: "Bkash",
    transactionId: "DDN6G1D6SM",
    members: [
      {
        name: "Mahir Hami Abrar",
        dept: "CSE",
        series: "22",
        id: "2203077",
        email: "mhabrarmts@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Mahmudul Hasan Mahmud",
        dept: "CSE",
        series: "22",
        id: "2203062",
        email: "mahmudruet418@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md Tanjid Hosen Rifat",
        dept: "CSE",
        series: "22",
        id: "2203069",
        email: "rifattanjid409@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Team Rookie",
    paymentMethod: "Bkash",
    transactionId: "DDN1G2BN3V",
    members: [
      {
        name: "Md. Riad Hasan",
        dept: "ECE",
        series: "23",
        id: "2310032",
        email: "riadhasanratul@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Mohammad Shahariar Sharif",
        dept: "ECE",
        series: "23",
        id: "2310026",
        email: "shahariarsharif226@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md. Arique Ahsan",
        dept: "CSE",
        series: "23",
        id: "2303082",
        email: "a.ahsan.1818@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "PikaBite",
    paymentMethod: "Bkash",
    transactionId: "DDN4G4KYDC",
    members: [
      {
        name: "Tasfiul Mostafa",
        dept: "ETE",
        series: "22",
        id: "2204052",
        email: "mostafatasfiul@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Afifa Tasnim Haque",
        dept: "ETE",
        series: "22",
        id: "2204004",
        email: "afifatasnimhaque@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Muammar Ilham",
        dept: "ETE",
        series: "22",
        id: "2204039",
        email: "muammarilham003@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "Rookie Devs",
    paymentMethod: "Bkash",
    transactionId: "DDN2G6M6M0",
    members: [
      {
        name: "Md. Samiul Alam",
        dept: "ECE",
        series: "22",
        id: "2210042",
        email: "samiulalam638@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md. Tasnim Shehjabin Shaon",
        dept: "ECE",
        series: "22",
        id: "2210041",
        email: "shaontasnim461@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "MD. Hujayfa Bin Jamal",
        dept: "ECE",
        series: "22",
        id: "2210048",
        email: "mdhuja503@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "CommitSeppuku",
    paymentMethod: "Bkash",
    transactionId: "DDN5GD9OFD",
    members: [
      {
        name: "Shafayetul Huda Sadi",
        dept: "ECE",
        series: "21",
        id: "2110057",
        email: "shafayet.sadi@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Md Tonmay Hossain Jifat",
        dept: "ECE",
        series: "21",
        id: "2110012",
        email: "tonmoyhossainjifat313@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Arifur Rahman",
        dept: "ECE",
        series: "21",
        id: "2110045",
        email: "arifafjr17@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "XeNon",
    paymentMethod: "Bkash",
    transactionId: "DDN5GEYZ2T",
    members: [
      {
        name: "Shuvo Dip Kar",
        dept: "CSE",
        series: "22",
        id: "2203168",
        email: "karsdk7@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Sayed Shafaque Bin Nur",
        dept: "CSE",
        series: "22",
        id: "2203125",
        email: "shafaque125rup@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md. Labib Shahriar Mahi",
        dept: "CSE",
        series: "22",
        id: "2203126",
        email: "mahi.at.lbp@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "Team Noobbie",
    paymentMethod: "Bkash",
    transactionId: "DDN0GGUECC",
    members: [
      {
        name: "Hem Chandra Ghosh Amio",
        dept: "CSE",
        series: "21",
        id: "2103027",
        email: "hemchandro82@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Atkia Farzana Esha",
        dept: "CSE",
        series: "21",
        id: "2103126",
        email: "eshafarzana666@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Samiha Nowshin",
        dept: "CSE",
        series: "21",
        id: "2103157",
        email: "polynafisakhatun@gmail.com",
        gender: "Female",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "loadshedding",
    paymentMethod: "Bkash",
    transactionId: "DDN8GKINRO",
    members: [
      {
        name: "Supti Pal",
        dept: "CSE",
        series: "22",
        id: "2203049",
        email: "suptipal291@gmail.com",
        gender: "Female",
        tshirt: "M",
      },
      {
        name: "Sadia Farhana",
        dept: "CSE",
        series: "22",
        id: "2203030",
        email: "farhana.jabiin04@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
      {
        name: "Fabliha Naowar Nizam Deya",
        dept: "CSE",
        series: "22",
        id: "2203057",
        email: "deyafabliha@gmail.com",
        gender: "Female",
        tshirt: "M",
      },
    ],
  },
  {
    name: "Fall_2_Jump",
    paymentMethod: "Bkash",
    transactionId: "DDN5GMFESF",
    members: [
      {
        name: "Ahnaf Mahadi Khan",
        dept: "CSE",
        series: "21",
        id: "2103143",
        email: "ahnafmahadikhan999@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Kaif Ahmed Khan",
        dept: "CSE",
        series: "21",
        id: "2103163",
        email: "kaifkhan.ruet@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Shad Ibna Hosian",
        dept: "CSE",
        series: "21",
        id: "2103131",
        email: "shadfahim9998@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "WeAreNothingButAI",
    paymentMethod: "Nagad",
    transactionId: "7599988T",
    members: [
      {
        name: "Rizowan Mahmud Rafi",
        dept: "CSE",
        series: "21",
        id: "2103073",
        email: "rizowanrafi71@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "MD. TAMIM IQBAL",
        dept: "CSE",
        series: "21",
        id: "2103094",
        email: "tamimiqbalacademic@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Sajid",
        dept: "CSE",
        series: "21",
        id: "2103096",
        email: "m.sajid1495@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "ruet_gradient_descent",
    paymentMethod: "Bkash",
    transactionId: "DDN6GOEB6A",
    members: [
      {
        name: "Tasnimul Islam",
        dept: "CSE",
        series: "23",
        id: "2303131",
        email: "tasnimul008@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Iftakhar Amin Alfi",
        dept: "ECE",
        series: "23",
        id: "2310033",
        email: "iftaalfi117@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Saidas Sadat",
        dept: "ECE",
        series: "23",
        id: "2310014",
        email: "saidassadat591@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "BitNode",
    paymentMethod: "Bkash",
    transactionId: "DDN3GPGTRP",
    members: [
      {
        name: "Raynul Islam Rafin",
        dept: "MTE",
        series: "21",
        id: "2108025",
        email: "raynulrafin193@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "cholo_BCS_dei",
    paymentMethod: "Bkash",
    transactionId: "DDN8GPJZT4",
    members: [
      {
        name: "Nur Nafis Fuad",
        dept: "ECE",
        series: "22",
        id: "2210032",
        email: "nnfuad01@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md. Taurat Kibria",
        dept: "ECE",
        series: "22",
        id: "2210028",
        email: "tauratkibria9@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Gulam Gilani Hasan",
        dept: "ECE",
        series: "22",
        id: "2210056",
        email: "gulamgilanih@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "OmaiGod",
    paymentMethod: "Bkash",
    transactionId: "DDN1GPF005",
    members: [
      {
        name: "Moshiour Rahman",
        dept: "ECE",
        series: "23",
        id: "2310022",
        email: "moshiourrahman145@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Zihad Hossain",
        dept: "ECE",
        series: "23",
        id: "2310008",
        email: "32zihadhossain@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Abdullah AL Jayed Joseph",
        dept: "ECE",
        series: "23",
        id: "2310012",
        email: "josephjihad14@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Fattah_Three",
    paymentMethod: "Bkash",
    transactionId: "DDO8GQKOXY",
    members: [
      {
        name: "Md Shihabul Islam Shihab",
        dept: "MTE",
        series: "22",
        id: "2208004",
        email: "shihabul.islam.shihab.004@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md. Nihad Alam Brinto",
        dept: "MTE",
        series: "22",
        id: "2208037",
        email: "mdnihadalambrinto@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md Abdullah Al Ahad",
        dept: "CSE",
        series: "22",
        id: "2203133",
        email: "abdullah.ruet22@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "BlackPower",
    paymentMethod: "Nagad",
    transactionId: "759BH1LP",
    members: [
      {
        name: "Tahsinuzzaman Sadik",
        dept: "ECE",
        series: "23",
        id: "2310021",
        email: "sadikuzzamantahsin321@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "Kemon_dilam_guyz",
    paymentMethod: "Bkash",
    transactionId: "DDO4HIA3QA",
    members: [
      {
        name: "Md. Adib Hasan",
        dept: "ECE",
        series: "22",
        id: "2210011",
        email: "iamadib120775@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
      {
        name: "Mahmudul Hasan",
        dept: "ECE",
        series: "22",
        id: "2210057",
        email: "mahruet796@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Md. Naimur Rahman Naim",
        dept: "ECE",
        series: "22",
        id: "2210026",
        email: "2210026@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Here4Food",
    paymentMethod: "Bkash",
    transactionId: "DDO5HJJLF9",
    members: [
      {
        name: "Okia Goni",
        dept: "ECE",
        series: "22",
        id: "2210027",
        email: "okiagoni613@gmail.com",
        gender: "Female",
        tshirt: "M",
      },
      {
        name: "Fabiha Hoque",
        dept: "ECE",
        series: "22",
        id: "2210052",
        email: "fabihahoque05@gmail.com",
        gender: "Female",
        tshirt: "XXL",
      },
      {
        name: "Maheya Jannat Nilima",
        dept: "ECE",
        series: "22",
        id: "2210049",
        email: "maheyajannatn@gmail.com",
        gender: "Female",
        tshirt: "XXL",
      },
      {
        name: "Sumaiya Islam",
        dept: "ECE",
        series: "22",
        id: "2210015",
        email: "sumaiyaaislam375@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
    ],
  },
  {
    name: "Team Brain_Not_Found",
    paymentMethod: "Bkash",
    transactionId: "DDO2HKLY7I",
    members: [
      {
        name: "MD Nushad Jaman Raj",
        dept: "CSE",
        series: "22",
        id: "2203068",
        email: "2203068@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Digbijoy Bhattacharjee",
        dept: "CSE",
        series: "22",
        id: "2203104",
        email: "2203104@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Indronil Roy",
        dept: "CSE",
        series: "22",
        id: "2203119",
        email: "2203119@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Team Combo",
    paymentMethod: "Bkash",
    transactionId: "Due",
    members: [
      {
        name: "Shahriar Islam Siyam",
        dept: "ECE",
        series: "22",
        id: "2210034",
        email: "siyamsahriar@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Shadman Aziz",
        dept: "ECE",
        series: "22",
        id: "2210029",
        email: "shadmanaziz5@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "TheAvarageGuys",
    paymentMethod: "Bkash",
    transactionId: "DO3HP9QLF",
    members: [
      {
        name: "Md. Abdullah Ash Shafi",
        dept: "CSE",
        series: "22",
        id: "2203060",
        email: "abdullahashshafi29@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Ruhul Amin Pappo",
        dept: "CSE",
        series: "22",
        id: "2203048",
        email: "papporuhulamin@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Abhishek Bhattacharjee",
        dept: "CSE",
        series: "22",
        id: "2203033",
        email: "abhattacharjee2332@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "empty",
    paymentMethod: "Bkash",
    transactionId: "DDO5HPOQWL",
    members: [
      {
        name: "Md.Morakib Hossain",
        dept: "CSE",
        series: "21",
        id: "2103065",
        email: "Mo",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md. Talha Bin Kobir",
        dept: "CSE",
        series: "21",
        id: "2103067",
        email: "talhabinkobir4050@gmail.com",
        gender: "Male",
        tshirt: "3XL",
      },
      {
        name: "Maysha Khanom Moon",
        dept: "CSE",
        series: "21",
        id: "2103068",
        email: "maysha412@gmail.com",
        gender: "Female",
        tshirt: "L",
      },
    ],
  },
  {
    name: "Team Kaizen",
    paymentMethod: "Bkash",
    transactionId: "DDO1HPOVO5",
    members: [
      {
        name: "Md. Atik Mouhtasim",
        dept: "CSE",
        series: "20",
        id: "2003118",
        email: "mdatikmouhtasim@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
      {
        name: "Iftiar Rafi",
        dept: "CSE",
        series: "20",
        id: "2003077",
        email: "iftiarrafi@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md Samir",
        dept: "CSE",
        series: "20",
        id: "2003098",
        email: "samireformed786@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "BRIGHT_bot",
    paymentMethod: "Bkash",
    transactionId: "DDO7HPSRUF",
    members: [
      {
        name: "Tahmid Sudad",
        dept: "CSE",
        series: "20",
        id: "2003143",
        email: "tahmidsudad@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md. Sifat Alam",
        dept: "CSE",
        series: "20",
        id: "2003135",
        email: "sifatalam21@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Tonmoy Saha",
        dept: "CSE",
        series: "20",
        id: "2003144",
        email: "tonmoy.official.20@gmail.com",
        gender: "Male",
        tshirt: "M",
      },
    ],
  },
  {
    name: "Osohay_24",
    paymentMethod: "Bkash",
    transactionId: "DDO8HQB6OE",
    members: [
      {
        name: "Md. Eftekhar Hasnat Rahi",
        dept: "CSE",
        series: "24",
        id: "2403006",
        email: "md.eftekharhasnatrahi@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Ahsan Habib Limon",
        dept: "CSE",
        series: "24",
        id: "2403037",
        email: "ahsanhabiblimonahsan179@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Adnan Islam Ramim",
        dept: "CSE",
        series: "24",
        id: "2403021",
        email: "adnanislam840798@gmail.com",
        gender: "Male",
        tshirt: "L",
      },
    ],
  },
  {
    name: "return_zero",
    paymentMethod: "Bkash",
    transactionId: "DDP5HREXOZ",
    members: [
      {
        name: "MD. Maruf Hasan",
        dept: "ECE",
        series: "22",
        id: "2210017",
        email: "2210017@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Shadid Hasan Niloy",
        dept: "ECE",
        series: "22",
        id: "2210024",
        email: "2210024@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md Ahnaf Abid Fahim",
        dept: "ECE",
        series: "22",
        id: "2210022",
        email: "2210022@student.ruet.ac.bd",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "Captcha",
    paymentMethod: "Bkash",
    transactionId: "DDP6I2UJU2",
    members: [
      {
        name: "Md Atique Ashfak Arib",
        dept: "ETE",
        series: "22",
        id: "2204020",
        email: "atiqueashfakarib@gmail.com",
        gender: "Male",
        tshirt: "3XL",
      },
      {
        name: "Sheikh Tanjim Ahmed",
        dept: "ETE",
        series: "22",
        id: "2204002",
        email: "sheikhtanjimahmedsoron@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
  {
    name: "Copy Paste Company",
    paymentMethod: "Bkash",
    transactionId: "DDP3I3G8UN",
    members: [
      {
        name: "Md Sajjad Hosen Siam",
        dept: "ECE",
        series: "21",
        id: "2110013",
        email: "siam.ece.ruet@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
      {
        name: "Md Tariful Islam",
        dept: "ECE",
        series: "21",
        id: "2110036",
        email: "tariful2121@gmail.com",
        gender: "Male",
        tshirt: "XL",
      },
    ],
  },
  {
    name: "SS DEV",
    paymentMethod: "Bkash",
    transactionId: "DDP1I63SHJ",
    members: [
      {
        name: "Shuvo Chakma",
        dept: "ECE",
        series: "23",
        id: "2310061",
        email: "chakmashuvo2016@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
      {
        name: "Mahfuz Alam Shuvra",
        dept: "ECE",
        series: "23",
        id: "2310040",
        email: "shuvrahasan2004@gmail.com",
        gender: "Male",
        tshirt: "XXL",
      },
    ],
  },
];

export default function Home() {
  const totalMembers = HACKSPARK_TEAMS.reduce((count, team) => count + team.members.length, 0);
  const teamSections = [
    {
      id: "solo",
      title: "Solo Teams",
      subtitle: "1 member",
      teams: HACKSPARK_TEAMS.filter((team) => team.members.length === 1),
    },
    {
      id: "duo",
      title: "Two Member Teams",
      subtitle: "2 members",
      teams: HACKSPARK_TEAMS.filter((team) => team.members.length === 2),
    },
    {
      id: "trio",
      title: "Three Member Teams",
      subtitle: "3 members",
      teams: HACKSPARK_TEAMS.filter((team) => team.members.length === 3),
    },
    {
      id: "quad",
      title: "Four Member Teams",
      subtitle: "4 members",
      teams: HACKSPARK_TEAMS.filter((team) => team.members.length === 4),
    },
  ].filter((section) => section.teams.length > 0);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        name: "Code Kachal",
        startDate: "2026-04-30T09:00:00+06:00",
        endDate: "2026-04-30T18:00:00+06:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: CODE_REGISTRATION_LINK,
        location: {
          "@type": "Place",
          name: "CSE Building, RUET",
          address: "CSE Building, Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
        },
        organizer: {
          "@type": "Organization",
          name: "ECE, RUET",
          url: SITE_URL,
        },
      },
      {
        "@type": "Event",
        name: "HackSpark",
        startDate: "2026-05-01T09:00:00+06:00",
        endDate: "2026-05-01T21:00:00+06:00",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        url: HACK_REGISTRATION_LINK,
        location: {
          "@type": "Place",
          name: "CSE Building, RUET",
          address: "CSE Building, Rajshahi University of Engineering & Technology, Rajshahi, Bangladesh",
        },
        organizer: {
          "@type": "Organization",
          name: "ECE, RUET",
          url: SITE_URL,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="ambientBackdrop" aria-hidden="true">
        <span className="glow glowOne" />
        <span className="glow glowTwo" />
        <span className="glow glowThree" />
      </div>
      <Navbar />
      <div className="navSpacer" aria-hidden="true" />
      <section className="newsTickerWrap" aria-label="Latest Technocracy news">
        <div className="newsTickerTrack">
          <span className="newsItem">
            DATE: <strong>30 April, 9:00 AM</strong> - Code Kachal starts.
          </span>
          <span className="newsItem">
            DATE: <strong>1 May</strong> - HackSpark Hackathon Day.
          </span>
          <span className="newsItem">
            NOTICE: <strong>Check-in starts at 8:30 AM</strong>.
          </span>

          <span className="newsItem">
            DATE: <strong>30 April, 9:00 AM</strong> - Code Kachal starts.
          </span>
          <span className="newsItem">
            DATE: <strong>1 May</strong> - HackSpark Hackathon Day.
          </span>
          <span className="newsItem">
            NOTICE: <strong>Check-in starts at 8:30 AM</strong>.
          </span>
        </div>
      </section>

      <main id="main-content">
        <section id="home" className="hero sectionBlock" data-reveal>
          <div className="binaryRain" aria-hidden="true">
            010101 001101 111000 100101 001011 010110 110010 000111 101001 011100
          </div>
          <div className="heroGrid">
            <div className="heroCopy" data-reveal>
              <p className="kicker">ECE Presents</p>
              <h1>
                TECHNOC<span>RACY</span> 2026
              </h1>
              <p className="heroSub">
                The flagship intra-university tech festival featuring Code Kachal and HackSpark. Built for problem solvers,
                makers, and future builders.
              </p>

              <div className="heroCtaRow">
                <a className="btnPrimary" href="#events">
                  Explore Events
                </a>
                <a className="btnGhost" href="#rulebooks">
                  View Rulebooks
                </a>
              </div>
            </div>

            <aside className="countdownCard" aria-label="Event countdown" data-reveal>
              <p className="countLabel">Event Starts In</p>
              <p className="countMeta">30 April, 9:00 AM</p>
              <CountdownTimer targetIso={HACKSPARK_START} />
            </aside>
          </div>
        </section>

        <section id="events" className="sectionBlock" data-reveal>
          <h2>Competition Tracks</h2>
          <p className="sectionLead">Two events, one platform. Join a focused coding contest or ship solutions in a full hackathon sprint.</p>

          <div className="eventGrid">
            <article className="eventCard codeCard" data-reveal>
              <div className="eventHeader">
                <p className="eventTag">Programming Contest</p>
                <p className="eventDate">Date: <span className="importantDate">30 April, 2026</span> | Thursday</p>
              </div>
              <h3>Code Kachal</h3>
              <ul>
                <li>Open for all departments, series 21-24</li>
                <li>Team size: up to 3 members</li>
                <li>Fast-paced algorithmic challenge format</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href={CODE_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href={CODE_RULEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook
                </a>
              </div>
            </article>

            <article className="eventCard hackCard" data-reveal>
              <div className="eventHeader">
                <p className="eventTag">Hackathon</p>
                <p className="eventDate">Date: <span className="importantDate">1 May, 2026</span> | Friday</p>
              </div>
              <h3>HackSpark</h3>
              <ul>
                <li>Open for all departments, series 20-24</li>
                <li>Team size: up to 3 members</li>
                <li>Prototype and pitch problem-solving ideas</li>
              </ul>
              <div className="eventActions">
                <a className="btnMini" href={HACK_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
                <a
                  className="btnMiniGhost"
                  href={HACK_RULEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rulebook
                </a>
              </div>
            </article>
          </div>

          <div className="benefitStrip" aria-label="Participant inclusions" data-reveal>
            <span>T-shirt</span>
            <span>Certificate</span>
            <span>Snacks & Lunch</span>
            <span>10% Callisto Coupon</span>
            <span>Crest & Trophy for Winners</span>
          </div>
        </section>

        <section id="schedule" className="sectionBlock" data-reveal>
          <h2>Time & Registration</h2>
          <p className="sectionLead">Important milestones to keep your team registration and preparation on track.</p>
          <p className="importantLine">Registration closes on <span className="importantDate">24 April, 2026</span></p>

          <div className="timelineGrid">
            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">24 April, 2026</span></p>
              <h3>Registration Deadline</h3>
              <p>Final date to submit team registration for both events.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">30 April, 2026</span> | Thursday</p>
              <h3>Code Kachal Contest Day</h3>
              <p>Intra RUET programming contest for series 21-24 from all departments.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate"><span className="importantDate">1 May, 2026</span> | Friday</p>
              <h3>HackSpark Main Day</h3>
              <p>Hackathon project sprint, evaluation, and winner selection.</p>
            </article>

            <article className="timelineCard" data-reveal>
              <p className="timelineDate">Team Policy</p>
              <h3>Team Size & Fee</h3>
              <p>Up to 3 members per team. Registration fee is 900 BDT per team.</p>
            </article>
          </div>
        </section>

        <section id="rulebooks" className="sectionBlock" data-reveal>
          <h2>Rulebooks</h2>
          <div className="cardGrid">
            <article className="infoCard" data-reveal>
              <h3>Code Kachal Rulebook</h3>
              <a
                href={CODE_RULEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
            <article className="infoCard" data-reveal>
              <h3>HackSpark Rulebook</h3>
              <a
                href={HACK_RULEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Rulebook
              </a>
            </article>
          </div>
        </section>

        <section id="kits" className="sectionBlock" data-reveal>
          <h2>Prize & Participant Kits</h2>
          <div className="cardGrid kitGrid">
            <article className="infoCard participantCard" data-reveal>
              <h3>For Each Participant</h3>
              <p className="kitLead">Every registered member receives a complete participant package.</p>
              <div className="kitPillWrap">
                <span className="kitPill">Participation Certificate</span>
                <span className="kitPill">Official Event T-shirt</span>
                <span className="kitPill">Snacks & Lunch</span>
                <span className="kitPill">10% Callisto Coupon</span>
              </div>
            </article>

            <article className="infoCard winnerCard" data-reveal>
              <h3>For Winning Teams</h3>
              <p className="kitLead">Top teams receive official recognition and premium rewards.</p>
              <div className="winnerRow">
                <span className="winnerTag">Crest</span>
                <span className="winnerTag">Trophy</span>
                <span className="winnerTag">Champion Honor</span>
              </div>
            </article>
          </div>
        </section>

        <section id="teams" className="sectionBlock teamSection">
          <div className="teamSectionHeader">
            <div>
              <p className="kicker">HackSpark 2026</p>
              <h2>Registered Teams</h2>
              <p className="sectionLead">
                A live snapshot of confirmed teams and their members from the registration form.
              </p>
            </div>
            <div className="teamSummary" aria-label="Registration summary">
              <div className="teamSummaryCard">
                <span>Total Teams</span>
                <strong>{HACKSPARK_TEAMS.length}</strong>
              </div>
              <div className="teamSummaryCard">
                <span>Total Members</span>
                <strong>{totalMembers}</strong>
              </div>
            </div>
          </div>

          {teamSections.map((section) => (
            <div key={section.id} className="teamGroup">
              <div className="teamGroupHeader">
                <div>
                  <h3>{section.title}</h3>
                  <p className="sectionLead">{section.subtitle}</p>
                </div>
                <span className="teamCount">{section.teams.length} teams</span>
              </div>

              <div className="teamGrid">
                {section.teams.map((team) => (
                  <article key={team.name} className="teamCard">
                    <div className="teamCardHeader">
                      <div>
                        <p className="teamTag">{team.members.length} members</p>
                        <h4 className="teamName">{team.name}</h4>
                      </div>
                    </div>

                    <div className="teamMembers">
                      {team.members.map((member) => (
                        <div key={`${team.name}-${member.id}`} className="memberCard">
                          <p className="memberName">{member.name}</p>
                          <div className="memberMeta">
                            <span className="memberTag">{member.dept}</span>
                            <span className="memberTag">Series {member.series}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="venue" className="sectionBlock" data-reveal>
          <h2>Place & Contact</h2>

          <div className="venueGrid">
            <article className="infoCard singleCard" data-reveal>
              <h3>Venue</h3>
              <p><span className="importantDate">CSE Building, RUET</span>, Rajshahi.</p>
              <p>Specific room-wise seating and reporting points will be announced before event day.</p>
              <a href="https://maps.google.com/?q=CSE%20Building%20RUET" target="_blank" rel="noopener noreferrer">
                Open CSE Building on Map
              </a>
            </article>

            <article className="infoCard singleCard" data-reveal>
              <h3>Organizer Desk</h3>
              <p>For registration support and event communication, contact the ECE Technocracy organizing panel.</p>
              <p>Official contact numbers and helpdesk links will be published soon.</p>
              <a href="#home">Back To Top</a>
            </article>
          </div>
        </section>

        <section id="faq" className="sectionBlock" data-reveal>
          <h2>FAQ</h2>
          <div className="faqGrid">
            <article className="faqCard" data-reveal>
              <h3>Can I join both events?</h3>
              <p>Yes. You can register for Code Kachal, HackSpark, or both if your team meets eligibility requirements.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>Who can participate?</h3>
              <p>Code Kachal is for all departments, series 21-24. HackSpark is for all departments, series 20-24.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>How many members are allowed?</h3>
              <p>Each team can have up to 3 members.</p>
            </article>

            <article className="faqCard" data-reveal>
              <h3>What does each participant get?</h3>
              <p>Participation certificate, official event t-shirt, snacks and lunch, and a 10% Callisto discount coupon.</p>
            </article>
          </div>
        </section>

        <section id="updates" className="sectionBlock updatesSection" data-reveal>
          <p className="updateLabel">Stay Connected</p>
          <h2>For More Update Visit Our Page</h2>
          <p className="sectionLead">
            Get all live updates, notices, and post-event highlights on our official Facebook channels.
          </p>
          <div className="updateActions">
            <a className="btnPrimary" href={FACEBOOK_PAGE_LINK} target="_blank" rel="noopener noreferrer">
              Visit Technocracy Page
            </a>
            <a className="btnGhost" href={FACEBOOK_EVENT_LINK} target="_blank" rel="noopener noreferrer">
              Open Event Link
            </a>
          </div>
        </section>
      </main>

      <footer className="siteFooter" data-reveal>
        <div className="footerInner">
          <div className="footerBrandBlock">
            <p className="footerEyebrow">ECE, RUET</p>
            <h3>Technocracy 2026</h3>
            <p>Code Kachal and HackSpark for innovators, builders, and problem-solvers.</p>
          </div>

          <div className="footerLinksBlock">
            <p className="footerTitle">Quick Links</p>
            <a href={CODE_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
              Code Kachal Registration
            </a>
            <a href={HACK_REGISTRATION_LINK} target="_blank" rel="noopener noreferrer">
              HackSpark Registration
            </a>
            <a href={CODE_RULEBOOK_LINK} target="_blank" rel="noopener noreferrer">
              Code Kachal Rulebook
            </a>
            <a href={HACK_RULEBOOK_LINK} target="_blank" rel="noopener noreferrer">
              HackSpark Rulebook
            </a>
          </div>

          <div className="footerInfoBlock">
            <p className="footerTitle">Event Info</p>
            <p>Venue: CSE Building, RUET</p>
            <p>Registration Deadline: <span className="importantDate">24 April, 2026</span></p>
            <p>Team Size: Up to 3 Members</p>
            <p>Fee: 900 BDT / Team</p>
          </div>
        </div>

        <div className="footerBottom">
          <p>© 2026 Technocracy. All rights reserved.</p>
          <a href="#home">Back to top</a>
        </div>
      </footer>

      <QuickActions />
    </>
  );
}
