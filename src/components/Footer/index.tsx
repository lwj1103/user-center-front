import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'blog',
          title: '个人博客',
          href: 'http://www.lwj1103.com',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/lwj1103',
          blankTarget: true,
        },
        {
          key: 'algorithm',
          title: '代码随想录',
          href: 'https://programmercarl.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
