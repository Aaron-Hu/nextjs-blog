import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useCallback } from 'react'
import Link from 'next/link'
import '../styles/global.css'
import "antd/dist/antd.css";

const { SubMenu } = Menu;

export default function App({ Component, pageProps }) {
  const [current, setCurrent] = useState()

  const handleClick = useCallback((e) => {
    setCurrent(e.key)
  }, [])

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
          <Link href="/posts">Posts</Link>
        </Menu.Item>
        <Menu.Item key="blod" icon={<AppstoreOutlined />}>
          <Link href="/blogs">Blogs</Link>
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <Component {...pageProps} />
    </>
  )
}