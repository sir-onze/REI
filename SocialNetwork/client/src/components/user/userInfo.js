import React,{ Component } from 'react';
import 'antd/dist/antd.css';
import '../../view/profile.css';
import { Card, Col, Row} from 'antd';

import {connect} from 'react-redux'
import store from '../store'
import {loadUser} from '../../actions/tokenAction'
import List from './list'

/** Falta adicionar os links !!!! para os diferentes feeds */
class userInfo extends Component{
    componentWillMount(){
        this.props.loadUser()
    }
    render(){
        return(
            <div style={{ marginTop:'5vh',background: '#002147', padding: '30px', borderRadius: '30px'}}>
                <Row gutter={16}>
                    <Col span={4}></Col>
                    <Col span={16}>
                        <Card title="Dados do utilizador" bordered={false} style={{borderRadius: '30px'}}>
                            <List></List>
                        </Card>
                    </Col>
                    <Col span={4}>
                    </Col>
                </Row>
          </div>
        );
    }
}

const mapStateToProps = state =>({
    posts: state.posts.items,
    user: state.token.user
});

export default connect(mapStateToProps,{loadUser})(userInfo);