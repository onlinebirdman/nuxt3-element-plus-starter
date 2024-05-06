type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

namespace defs {
  export class AddFundConfigDTO {
    /** 创建时间 */
    createdTime?: string;

    /** 产品特点 */
    feature?: string;

    /** 产品代码 */
    fundCode?: string;

    /** 产品名称 */
    fundName?: string;

    /** 主键 */
    id?: number;

    /** 赚钱能力 */
    incomeLevel?: string;

    /** 收益展示 */
    incomeType?: string;

    /** 投教信息配置 */
    investEdus?: Array<defs.InvesteduObject>;

    /** 是否默认 */
    isDefault?: boolean;

    /** 跳转链接 */
    jumpUrl?: string;

    /** 种子名称 */
    name?: string;

    /** 推送任务配置 */
    pushConfigs?: Array<defs.PushConfigObject>;

    /** 风险等级 */
    riskLevel?: string;

    /** 关联任务配置 */
    tasks?: Array<defs.TaskObject>;

    /** 体验金配置 */
    tryGoldConfigs?: Array<defs.TRYGOLDCONFIGObject>;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class AwardObject {
    /** 活动id */
    activityId?: string;

    /** 奖品名称 */
    awardName?: string;

    /** 奖品类型 （ALIPAY：支付宝红包 TRYGOLD：体验金） */
    awardType?: string;

    /** 批次id */
    batchId?: string;

    /** 主键 */
    id?: number;

    /** 金额 */
    money?: number;

    /** 奖品数量 */
    num?: number;

    /** 1：成长值 2：满签 3：兜底 4：新用户体验金 */
    type?: number;

    /** 中奖概率 */
    winRate?: number;
  }

  export class FundConfigObject {
    /** 创建时间 */
    createdTime?: string;

    /** 产品特点 */
    feature?: string;

    /** 产品代码 */
    fundCode?: string;

    /** 产品名称 */
    fundName?: string;

    /** 主键 */
    id?: number;

    /** 赚钱能力 */
    incomeLevel?: string;

    /** 收益展示 */
    incomeType?: string;

    /** 是否默认 */
    isDefault?: boolean;

    /** 跳转链接 */
    jumpUrl?: string;

    /** 种子名称 */
    name?: string;

    /** 风险等级 */
    riskLevel?: string;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class InvesteduObject {
    /** 投教内容 */
    content?: string;

    /** 创建时间 */
    createdTime?: string;

    /** 第几天 */
    dayNum?: number;

    /** 产品代码 */
    fundCode?: string;

    /** 主键 */
    id?: number;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class MidUserDTO {
    /** 密码 */
    password?: string;

    /** 登录账号 */
    username?: string;
  }

  export class PushConfigObject {
    /** 文案内容 */
    content?: string;

    /** 创建时间 */
    createdTime?: string;

    /** 产品代码 */
    fundCode?: string;

    /** 主键 */
    id?: number;

    /** 涨跌幅 */
    income?: number;

    /** 推送跳转内容 */
    jumpUrl?: string;

    /** 推送逻辑（TOTAL:累计收益 DAY:单日涨跌幅） */
    type?: string;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class PushlogObject {
    /** 推送话术 */
    content?: string;

    /** 创建时间 */
    createdTime?: string;

    /** 产品代码 */
    fundCode?: string;

    /** 主键 */
    id?: number;

    /** 推送链接 */
    jumpUrl?: string;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class ResponseVO<T0 = any> {
    /** body */
    body: T0;

    /** 状态码, 正确时返回 e0000, 其他非 e0000则是错误的 */
    errCode?: string;

    /** 信息, 若有错误则是具体的错误信息 */
    errMessage?: string;
  }

  export class TRYGOLDCONFIGObject {
    /** 创建时间 */
    createdTime?: string;

    /** 产品代码 */
    fundCode?: string;

    /** 主键 */
    id?: number;

    /** 体验金金额 */
    money?: number;

    /** 体验金批次码 */
    tryGoldCode?: string;

    /** 体验金数量 */
    tryGoldNum?: number;

    /** 修改时间 */
    updatedTime?: string;
  }

  export class TaskObject {
    /** 加自选活动id */
    actNo?: string;

    /** 创建时间 */
    createdTime?: string;

    /** 第几天 */
    dayNum?: number;

    /** 产品代码 */
    fundCode?: string;

    /** 主键 */
    id?: number;

    /** 跳转链接 */
    jumpUrl?: string;

    /** 成长值奖励 */
    reward?: number;

    /** 任务名称 */
    taskName?: string;

    /** 任务类型（SEE 浏览 ADD 加自选 FOLLOW 关注） */
    taskType?: string;

    /** 修改时间 */
    updatedTime?: string;
  }
}

namespace API {
  /**
   * 中台接口控制层
   */
  export namespace middle {
    /**
        * 活动状态-获取
BEGIN：活动开始 END：活动结束
        * /middle/activityStatus/get
        */
    export const getActivityStatus: MyRequest<
      {},
      defs.ResponseVO<string>['body']
    >;

    /**
        * 活动状态-修改
BEGIN：活动开始 END：活动结束
        * /middle/activityStatus/set
        */
    export const getActivityStatusSet: MyRequest<
      {
        /** activityStatus */
        activityStatus: string;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 数据统计(导出)
     * /middle/all/exportByDate
     */
    export const ExportByDate: MyRequest<
      {
        /** beginDate */
        beginDate: string;
        /** endDate */
        endDate: string;
      },
      any['body']
    >;

    /**
     * 抽奖设置-删除
     * /middle/award/delete
     */
    export const deleteAward: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 抽奖设置-列表
     * /middle/award/list
     */
    export const awardList: MyRequest<
      {
        /** 1：成长值 2：满签 3：兜底 */
        type: number;
      },
      defs.ResponseVO<Array<defs.AwardObject>>['body']
    >;

    /**
     * 抽奖设置-添加
     * /middle/award/save
     */
    export const saveAward: MyRequest<
      defs.AwardObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 抽奖设置-修改
     * /middle/award/update
     */
    export const updateAward: MyRequest<
      defs.AwardObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品配置-删除
     * /middle/fundConfig/delete
     */
    export const fundConfigDelete: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品配置-列表
     * /middle/fundConfig/list
     */
    export const fundConfigList: MyRequest<
      {},
      defs.ResponseVO<Array<defs.FundConfigObject>>['body']
    >;

    /**
     * 产品配置-新增
     * /middle/fundConfig/save
     */
    export const fundConfigSave: MyRequest<
      defs.AddFundConfigDTO,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品配置-修改
     * /middle/fundConfig/update
     */
    export const fundConfigUpdate: MyRequest<
      defs.AddFundConfigDTO,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 投教信息配置-添加
     * /middle/investEdu/add
     */
    export const addInvestEdu: MyRequest<
      defs.InvesteduObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 投教信息配置-删除
     * /middle/investEdu/delete
     */
    export const deleteInvestEdu: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 投教信息配置-列表
     * /middle/investEdu/list
     */
    export const investEduList: MyRequest<
      {},
      defs.ResponseVO<Array<defs.InvesteduObject>>['body']
    >;

    /**
     * 投教信息配置-修改
     * /middle/investEdu/update
     */
    export const updateInvestEdu: MyRequest<
      defs.InvesteduObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
        * 中台登录获取token
中台登录获取token
        * /middle/midLogin
        */
    export const midLogin: MyRequest<
      defs.MidUserDTO,
      defs.ResponseVO<string>['body']
    >;

    /**
     * 推送逻辑-添加
     * /middle/pushConfig/add
     */
    export const addPushConfig: MyRequest<
      defs.PushConfigObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 推送逻辑-删除
     * /middle/pushConfig/delete
     */
    export const deletePushConfig: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 推送逻辑-列表
     * /middle/pushConfig/list
     */
    export const pushConfigList: MyRequest<
      {},
      defs.ResponseVO<Array<defs.PushConfigObject>>['body']
    >;

    /**
     * 推送逻辑-修改
     * /middle/pushConfig/update
     */
    export const updatePushConfig: MyRequest<
      defs.PushConfigObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品推送-新增
     * /middle/pushLog/add
     */
    export const addPushLog: MyRequest<
      defs.PushlogObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品推送-删除
     * /middle/pushLog/delete
     */
    export const deletePushLog: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 产品推送-列表
     * /middle/pushLog/list
     */
    export const pushLog: MyRequest<
      {},
      defs.ResponseVO<Array<defs.PushlogObject>>['body']
    >;

    /**
     * 产品推送-修改
     * /middle/pushLog/update
     */
    export const updatePushLog: MyRequest<
      defs.PushlogObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 基金名称-查询
     * /middle/queryFundName
     */
    export const queryFundName: MyRequest<
      {
        /** fundCode */
        fundCode: string;
      },
      defs.ResponseVO<string>['body']
    >;

    /**
     * 任务配置-删除
     * /middle/task/delete
     */
    export const seeTaskDelete: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 任务配置-列表
     * /middle/task/list
     */
    export const seeTaskList: MyRequest<
      {},
      defs.ResponseVO<Array<defs.TaskObject>>['body']
    >;

    /**
     * 任务配置-新增
     * /middle/task/save
     */
    export const seeTaskSave: MyRequest<
      defs.TaskObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 任务配置-修改
     * /middle/task/update
     */
    export const seeTaskUpdate: MyRequest<
      defs.TaskObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 体验金配置-添加
     * /middle/tryGoldConfig/add
     */
    export const addTryGoldConfig: MyRequest<
      defs.TRYGOLDCONFIGObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 体验金配置-删除
     * /middle/tryGoldConfig/delete
     */
    export const BooleanTryGoldConfig: MyRequest<
      {
        /** id */
        id: number;
      },
      defs.ResponseVO<boolean>['body']
    >;

    /**
     * 体验金配置-列表
     * /middle/tryGoldConfig/list
     */
    export const tryGoldConfigList: MyRequest<
      {},
      defs.ResponseVO<Array<defs.TRYGOLDCONFIGObject>>['body']
    >;

    /**
     * 体验金配置-修改
     * /middle/tryGoldConfig/update
     */
    export const updateTryGoldConfig: MyRequest<
      defs.TRYGOLDCONFIGObject,
      defs.ResponseVO<boolean>['body']
    >;

    /**
        * 上传接口
可以上传图片和音视频
        * /middle/uploadFile
        */
    export const upload: MyRequest<{}, defs.ResponseVO['body']>;
  }
}
