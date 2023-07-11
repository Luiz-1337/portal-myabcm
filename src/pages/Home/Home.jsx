import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import Datatable from '../../components/datatable/Datatable';

const HomePage = () => {
 
  return (
<div className='home'>
<Sidebar/>
<div className="homeContainer">
<Navbar/>
<div className="charts">
  <Featured/>
  <Chart/>
</div>
<div className="listContainer">
<Datatable/>
</div>
</div>
</div>
  
)
}

export default HomePage;
