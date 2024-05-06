import { MyRequest, fullURL } from './request';
export const API = {
  /** 中台接口控制层 */
  middle: {
    /** 活动状态-获取
BEGIN：活动开始 END：活动结束 */
    getActivityStatus: new MyRequest(
      fullURL('/middle/activityStatus/get'),
      'GET',
    ),
    /** 活动状态-修改
BEGIN：活动开始 END：活动结束 */
    getActivityStatusSet: new MyRequest(
      fullURL('/middle/activityStatus/set'),
      'GET',
    ),
    /** 数据统计(导出) */
    ExportByDate: new MyRequest(fullURL('/middle/all/exportByDate'), 'GET'),
    /** 抽奖设置-删除 */
    deleteAward: new MyRequest(fullURL('/middle/award/delete'), 'GET'),
    /** 抽奖设置-列表 */
    awardList: new MyRequest(fullURL('/middle/award/list'), 'GET'),
    /** 抽奖设置-添加 */
    saveAward: new MyRequest(fullURL('/middle/award/save'), 'POST'),
    /** 抽奖设置-修改 */
    updateAward: new MyRequest(fullURL('/middle/award/update'), 'POST'),
    /** 产品配置-删除 */
    fundConfigDelete: new MyRequest(
      fullURL('/middle/fundConfig/delete'),
      'GET',
    ),
    /** 产品配置-列表 */
    fundConfigList: new MyRequest(fullURL('/middle/fundConfig/list'), 'GET'),
    /** 产品配置-新增 */
    fundConfigSave: new MyRequest(fullURL('/middle/fundConfig/save'), 'POST'),
    /** 产品配置-修改 */
    fundConfigUpdate: new MyRequest(
      fullURL('/middle/fundConfig/update'),
      'POST',
    ),
    /** 投教信息配置-添加 */
    addInvestEdu: new MyRequest(fullURL('/middle/investEdu/add'), 'POST'),
    /** 投教信息配置-删除 */
    deleteInvestEdu: new MyRequest(fullURL('/middle/investEdu/delete'), 'GET'),
    /** 投教信息配置-列表 */
    investEduList: new MyRequest(fullURL('/middle/investEdu/list'), 'GET'),
    /** 投教信息配置-修改 */
    updateInvestEdu: new MyRequest(fullURL('/middle/investEdu/update'), 'POST'),
    /** 中台登录获取token
中台登录获取token */
    midLogin: new MyRequest(fullURL('/middle/midLogin'), 'POST'),
    /** 推送逻辑-添加 */
    addPushConfig: new MyRequest(fullURL('/middle/pushConfig/add'), 'POST'),
    /** 推送逻辑-删除 */
    deletePushConfig: new MyRequest(
      fullURL('/middle/pushConfig/delete'),
      'GET',
    ),
    /** 推送逻辑-列表 */
    pushConfigList: new MyRequest(fullURL('/middle/pushConfig/list'), 'GET'),
    /** 推送逻辑-修改 */
    updatePushConfig: new MyRequest(
      fullURL('/middle/pushConfig/update'),
      'POST',
    ),
    /** 产品推送-新增 */
    addPushLog: new MyRequest(fullURL('/middle/pushLog/add'), 'POST'),
    /** 产品推送-删除 */
    deletePushLog: new MyRequest(fullURL('/middle/pushLog/delete'), 'GET'),
    /** 产品推送-列表 */
    pushLog: new MyRequest(fullURL('/middle/pushLog/list'), 'GET'),
    /** 产品推送-修改 */
    updatePushLog: new MyRequest(fullURL('/middle/pushLog/update'), 'POST'),
    /** 基金名称-查询 */
    queryFundName: new MyRequest(fullURL('/middle/queryFundName'), 'GET'),
    /** 任务配置-删除 */
    seeTaskDelete: new MyRequest(fullURL('/middle/task/delete'), 'GET'),
    /** 任务配置-列表 */
    seeTaskList: new MyRequest(fullURL('/middle/task/list'), 'GET'),
    /** 任务配置-新增 */
    seeTaskSave: new MyRequest(fullURL('/middle/task/save'), 'POST'),
    /** 任务配置-修改 */
    seeTaskUpdate: new MyRequest(fullURL('/middle/task/update'), 'POST'),
    /** 体验金配置-添加 */
    addTryGoldConfig: new MyRequest(
      fullURL('/middle/tryGoldConfig/add'),
      'POST',
    ),
    /** 体验金配置-删除 */
    BooleanTryGoldConfig: new MyRequest(
      fullURL('/middle/tryGoldConfig/delete'),
      'GET',
    ),
    /** 体验金配置-列表 */
    tryGoldConfigList: new MyRequest(
      fullURL('/middle/tryGoldConfig/list'),
      'GET',
    ),
    /** 体验金配置-修改 */
    updateTryGoldConfig: new MyRequest(
      fullURL('/middle/tryGoldConfig/update'),
      'POST',
    ),
    /** 上传接口
可以上传图片和音视频 */
    upload: new MyRequest(fullURL('/middle/uploadFile'), 'POST'),
  },
};
