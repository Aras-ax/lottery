/**
 * 奖品设置
 * type
 * count
 * title:
 * img:
 */
const prizes = [
  {
    type: 0,
    count: 100,
    title: "特别奖",
    img: "../img/mbp.jpg"
  },
  {
    type: 1,
    count: 1,
    title: "MacBook Pro",
    img: "../img/mbp.jpg"
  },
  {
    type: 2,
    count: 2,
    title: "华为 Mate30 ",
    img: "../img/huawei.png"
  },
  {
    type: 3,
    count: 3,
    title: "大疆无人机",
    img: "../img/spark.jpg"
  },
  {
    type: 4,
    count: 20,
    title: "Kindle",
    img: "../img/kindle.jpg"
  },
  {
    type: 5,
    title: "小度在家",
    count: 50,
    img: "../img/baidu.jpg"
  }
];

/**
 * 一次抽取的奖品个数
 * 顺序为：[特别奖，一等奖，二等奖，三等奖，四等奖，五等奖]
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 5];

const COMPANY = "MoShang";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
