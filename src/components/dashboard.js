import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import renderIf from 'render-if';
import 'antd/dist/antd.css';

const {Header, Content} = Layout;


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'splash'
        }
    }
  handleClick = (event) => {
    this.setState({
      current: event.key,
    });
  }
  render() {
    return (
      <div><Header>
           <Menu
               onClick={this.handleClick}
               selectedKeys={[this.state.current]}
               mode="horizontal"
               style={{backgroundColor: "#fffcff",
                       color: "#f53234"}}
             >
               <Menu.Item key="Dashboard">
                 <Icon type="home" /> Dashboard
               </Menu.Item>
               <Menu.Item key="Rankings">
                 <Icon type="area-chart" /> Rankings
               </Menu.Item>
           </Menu>
           </Header>
           <Content>
           {renderIf(this.state.current==='splash')(
             <div>
             <p> Splash </p>
             </div>
           )}
           {renderIf(this.state.current==='Dashboard')(
             <div>
               <p> Dashboard </p>
             </div>
           )}
           {renderIf(this.state.current==='Rankings')(
             <div>
               <p> Rankings </p>
             </div>
           )}
           </Content>
        </div>
    );
  }
}
export default Dashboard;