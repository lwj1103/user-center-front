// @ts-ignore
/* eslint-disable */


declare namespace API {
  type CurrentUser = {

    id:number;
    username:string;
    nickName:string;
    avatarUrl:string;
    gender:number;
    phone:string;
    email:string;
    createTime:Date;
    userRow:number;
  };

  type LoginResult = {
    username?:string;
    userRow?:number;
    status?: string;
    type?: string;
    currentAuthority?: string;
  };
  type BaseResponse<T> = {
    code:number;
    data:T;
    message:string;
    description:string;
  }
  type RegisterResult = number;

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type DeleteParams = {
    id : RecordKey;
  }
  type RegisterParams = {
    username?: string;
    password?: string;
    checkPassword?: string;
  };
  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
