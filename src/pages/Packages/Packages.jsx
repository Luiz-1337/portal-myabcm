import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './packages.scss'

const Packages = () => {

    return(
     <div className="list">
     <Sidebar/>
     <div className="listContainer">
     <Navbar/>
     </div>
     </div>
    )
}

export default Packages