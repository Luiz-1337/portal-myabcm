import "./sidebar.scss";
import HomeIcon from '@mui/icons-material/Home';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ListIcon from '@mui/icons-material/List';
import InventoryIcon from '@mui/icons-material/Inventory';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
      <img src='https://cdn.eadplataforma.app/client/myabcm/upload/others/753689c9b3db9008b0296c49aadc0ad9.png' alt=''/>
      </div>
      <hr />
      <div className="center">
        <ul> 
          <p className="title">MAIN</p>
          <Link to='/Home' style={{ textDecoration: "none" }}>
            <li>
                <HomeIcon className="icon" />
                <span>Home</span>
            </li>
            </Link> 
            <p className="title">LIST</p> 
            <Link to='/Cases' style={{ textDecoration: "none" }}>
            <li>
              <CasesRoundedIcon className="icon"/>
                <span>Cases</span>
            </li>
            </Link>
            <Link to='/Documentations' style={{ textDecoration: "none" }}>
            <li>
              <DocumentScannerIcon className="icon"/>
                <span>Documentations</span>
            </li>
            </Link>
            <Link to='/Activation' style={{ textDecoration: "none" }}>
            <li>  <ListIcon className="icon"/>
                <span>Activation Codes</span>
            </li>
            </Link>
            <Link to='/Packages' style={{ textDecoration: "none" }}>
            <li> 
                <InventoryIcon className="icon"/>
                <span>Packages</span>
            </li>
            </Link>
            <p className="title">SETTINGS</p> 
            <li> 
                <AccountBoxRoundedIcon className="icon"/>
                <span>Profile</span>
            </li>
            <li> 
                <PasswordRoundedIcon className="icon"/>
                <span>Change Password</span>
            </li>
            <Link to='/'>
            <li> 
                <LogoutRoundedIcon className="icon"/>
                <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
