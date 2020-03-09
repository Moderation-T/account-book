import configs from "@/configs";

const {BASE_URL} = configs;

export default accountApi = (date,id) => {
  return {
    // 获取首页统计信息
    getStatistic: `${BASE_URL}/get_statistic?date=${date}`,
    // 首页账目记录列表
    getAccountList: `${BASE_URL}/account_list?date=${date}`,
    // 新建账目
    createAccount:`${BASE_URL}/account_list`,
    // 编辑账目
    editAccount:`${BASE_URL}/account_list`,
    // 删除账目
    deleteAccount: `${BASE_URL}/account_list?{id}`,
    // 图表
    getAccountChart:`${BASE_URL}/account_chart?date=${date}`
  };
};
