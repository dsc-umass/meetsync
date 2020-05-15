import MainLayout from "./MainLayout"
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'


//Note: Row has a max width of 880px which messes up sidebar position hence below styling
const rowStyling = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  flexWrap: "wrap",
  //max-width: 880px;
}

export default function DashboardLayout(props) {
	return (
		<MainLayout>
      <div style={rowStyling}>
        <Col xs="2" style={{paddingLeft:"0px"}}>
          <Sidebar username="T S"/>
        </Col>
        <Col xs="10">
          {props.children}
        </Col>
      </div>
		</MainLayout>
	);
}