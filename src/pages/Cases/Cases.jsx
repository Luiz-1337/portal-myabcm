import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './cases.scss'

const Cases = () => {

    return(
     <div className="list">
     <Sidebar/>
     <div className="listContainer">
        <Navbar/>
        <Datatable/>
     </div>
     </div>
    )
}

export default Cases