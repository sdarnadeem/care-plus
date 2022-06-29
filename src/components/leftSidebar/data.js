import DashboardIcon from "@mui/icons-material/Dashboard";
import BiotechIcon from "@mui/icons-material/Biotech";
import GroupIcon from "@mui/icons-material/Group";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PaymentIcon from "@mui/icons-material/Payment";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import BookIcon from "@mui/icons-material/Book";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const content = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
    slug: "dashboard",
  },
  {
    icon: BookIcon,
    text: "Patient",
    slug: "patient",
  },
  {
    icon: BiotechIcon,
    text: "Clinics",
    slug: "clinics",
    items: [
      {
        text: "All Clinics",
        slug: "all-clinics",
      },
      {
        text: "Online Clinics",
        slug: "online-clinics",
      },
      {
        text: "Block Clinics",
        slug: "block-clinics",
      },
    ],
  },
  {
    icon: GroupIcon,
    text: "Doctors",
    slug: "doctors",
    items: [
      {
        text: "Add Doctor",
        slug: "Add Doctor",
      },

    ],
  },
  {
    icon: AttachMoneyIcon,
    text: "Fees",
    slug: "fees",
    items: [
      {
        text: "Clinic",
        slug: "clinic",
      },
      {
        text: "Doctor",
        slug: "doctor",
      },
    ],
  },
  {
    icon: PaymentIcon,
    text: "Payments",
    slug: "payments",
    items: [
      {
        text: "Transactions",
        slug: "transactions",
      },
      {
        text: "Admin Payment Details",
        slug: "admin-payment-details",
      },
      {
        text: "Payment Gateway Setting",
        slug: "payment=gateway-setting",
      },
    ],
  },
  {
    icon: CoPresentIcon,
    text: "Commission",
    slug: "commission",
    items: [
      {
        text: "Clinic",
        slug: "clinics",
      },
      {
        text: "Doctor",
        slug: "doctors",
      },
    ],
  },
  {
    icon: AccountBoxIcon,
    text: "Admin Profile",
    slug: "admin-profile",
  },
  {
    icon: LogoutIcon,
    text: "Logout",
    slug: "logout",
  },
];

export default content;
