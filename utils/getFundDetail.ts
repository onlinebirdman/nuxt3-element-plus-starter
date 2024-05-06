import { API as apiService } from '~/api'
export default async (fundCode:string) => {
  const detailInfo = await Promise.all([
    apiService.investEduList.request(),
    apiService.taskList.request(),
    apiService.pushConfigList.request(),
    apiService.tryGoldConfigList.request(),
  ])
  
  const [
    investEdus,
    tasks,
    pushConfigs,
    tryGoldConfigs,
  ] = detailInfo.map(list => list.filter(item => item.fundCode === fundCode))
  

  return {
    investEdus,
    tasks,
    pushConfigs,
    tryGoldConfigs,
  }
}