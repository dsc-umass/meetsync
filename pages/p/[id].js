import React from "react"
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import ReactLoading from 'react-loading';
import axios from 'axios';

const Example = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
);

function withMyHook(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useRouter();
    return <Component {...props} myHookValue={myHookValue} />;
  }
}

class Event extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    const myHookValue = this.props.myHookValue;
    console.log(myHookValue)
    // Set initial state
    this.state = {
      eventId: myHookValue.query.id,
      event: {},
      promiseIsResolved: false
    }
  }

  componentDidMount() {
    console.log(this.state.eventId)
    axios.get('/api/getOneEvent?id=' + this.state.eventId)
      .then((res) => {
        this.setState({
          event: res.data,
          promiseIsResolved: true
        })
      });
  }

  render(){
    const title = this.state.event.title;
    const desc = this.state.event.description;
    if(!this.state.promiseIsResolved){return (
      <Layout>
        <section>
          <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <Example type={"balls"} color={"#ffffff"} />
          </div>
        </section>
      </Layout>
    )}
    return (
      <Layout>
        <section>
          <div className="container">
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>
        </section>
      </Layout>
    );
  }
}

export default withMyHook(Event);