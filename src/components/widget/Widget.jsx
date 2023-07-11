import './widget.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({type}) => {
let data;
const amount = 100;
const diff = 20;
    switch(type){
        case 'user':
            data ={
                title:'USERS',
                isMoney:false,
                link:"See all users",
            };
            break;
            case 'order':
            data ={
                title:'ORDERS',
                isMoney:false,
                link:"View your orders",
            };
            break;
            case 'earning':
            data ={
                title:'EARNING',
                isMoney:true,
                link:"View net earnings",
            };
            break;
            case 'balance':
            data ={
                title:'BALANCE',
                isMoney:true,
                link:"See details",
            };
            break;
            default:
            break;
    }





return(
    <div className="widget">
       <div className="left"> <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && "$"}{amount}</span>
        <span className="link">{data.link}</span>
        </div>
       
       <div className="right">
        <div className="percentage positive">
            <KeyboardArrowUpIcon/>    
            {diff}%
        </div>

       </div>  
    </div>
)

}

export default Widget