import { MoreVert } from '@mui/icons-material'
import './featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
    return (
        <div className="featured">
         <div className="top">
            <h1 className="title">Open cases by priority</h1>
            <MoreVert fontSize='small'/>
         </div>
         <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text='70%' strokeWidth={4}/>
            </div>
            <p className="title">Total cases closed today</p>
            <p className="amount">07</p>
            <p className="desc">Texto Texto Texto Texto Texto Texto Texto </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult">10</div>
                </div>
            </div>
        </div>   
        </div>
    )

}

export default Featured