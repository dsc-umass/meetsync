import MainLayout from "./MainLayout"
import { Row, Col } from 'reactstrap'
import Sidebar from '../components/Sidebar'

export default function DashboardLayout(props) {
	return (
		<MainLayout>
			<div>
        <Row>
          <Col xs="2">
            <Sidebar username="T S"/>
          </Col>
          <Col xs="8">
            {props.children}}
          </Col>
        </Row>
      </div>
		</MainLayout>
	);
}