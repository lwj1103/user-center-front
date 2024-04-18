import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import {Button, Dropdown, Form, message,} from 'antd';
import {useRef, useState} from 'react';
import {deleteUser, search, updateUser} from "@/services/ant-design-pro/api";
export const waitTimePromise = async (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const waitTime = async (time: number = 100) => {
  await waitTimePromise(time);
};

const { useForm } = Form;
const columns: ProColumns<API.CurrentUser>[] = [

  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    ellipsis: true,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    ellipsis: true,
  },
  {
    title: '头像',
    dataIndex: 'avatarUrl',
    ellipsis: true,
    valueType : 'image',
    hideInSearch:true
  },
  {
    title: '性别',
    dataIndex: 'gender',
    ellipsis: true,
    valueEnum: {
      1: {text: '男'},
      0: {text: '女'}
    }
  },
  {
    title: '电话',
    dataIndex: 'phone',
    ellipsis: true,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    copyable: true,
    ellipsis: true,
  },

  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
  },
  {
    title: '用户角色',
    dataIndex: 'userRow',
    valueType: 'select',
    valueEnum: {
      1: {text: '管理员', status: 'Success'},
      0: {text: '普通用户', status: 'Default',}
    }
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.email} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  const [form] = useForm(); // 使用 useForm 获取表单实例
  const [userLists, setUserLists] = useState({}); // 定义 userLists 状态用于存储用户数据
  return (
    <ProTable<API.CurrentUser>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={
        async (params, sort, filter) => {
        console.log(sort,"filter",filter);
        const result = await search();
        setUserLists(result)
        console.log(userLists)
        return {
          data:result
        }
      }}
      editable={{
        type: 'multiple',
        onDelete:async (id)=>{
          const deleteResult = await deleteUser({id:id})
          if(deleteResult.code === 0 && deleteResult.data > 0){
            message.info("删除成功")
          }
          else {
            message.info("删除失败")
          }
        },
        onSave:async (key,record)=>{
          const  updateResult = await updateUser(record);
          if(updateResult.code === 0){
            message.info("更新成功");
          }
          else {
            alert(updateResult.description);
          }
        }


      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true },
        },
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
        searchText:"搜索",
        filterType:"query"
      }}
      onSubmit={async (params) => {
        console.log(params)
        const result = {} // 根据搜索条件获取用户数据
        setUserLists(result); // 更新 userLists
      }}
      onReset={()=>{
        form.resetFields(); // 重置搜索表单的值
        console.log("reset")
      }}

      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
        onChange: (page) => console.log(page),
      }}
      dateFormatter="string"
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload();
          }}
          type="primary"

        >
          新建
        </Button>,
        <Dropdown
          key="menu"
          menu={{
            items: [
              {
                label: '1st item',
                key: '1',
              },
              {
                label: '2nd item',
                key: '1',
              },
              {
                label: '3rd item',
                key: '1',
              },
            ],
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>,
      ]}
    />
  );
};
