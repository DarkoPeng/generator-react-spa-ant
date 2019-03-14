import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import './index.css'

const { SubMenu } = Menu
const { Header, Sider, Content } = Layout

export default class Navigation extends React.Component {
  render() {
    const { children } = this.props
    console.log(children)
    return (
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
            <Menu.Item key='1'>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='2'>
              <Link to='topic'>Topic</Link>
            </Menu.Item>
            <Menu.Item key='3'>
              <Link to='about'>About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout className='layout'>
          <Sider width={200}>
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <SubMenu
                key='sub1'
                title={
                  <span>
                    <Icon type='user' />
                    subnav 1
                  </span>
                }>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub2'
                title={
                  <span>
                    <Icon type='laptop' />
                    subnav 2
                  </span>
                }>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub3'
                title={
                  <span>
                    <Icon type='notification' />
                    subnav 3
                  </span>
                }>
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '24px 24px 24px', height: '100%' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280
              }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}
