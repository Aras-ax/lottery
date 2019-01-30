let prizes = [{
        type: 0,
        count: 100,
        title: '特别奖',
        img: '../img/huawei.png'
    }, {
        type: 1,
        count: 1,
        title: '华为Mate 20X',
        img: '../img/huawei.png'
    },
    {
        type: 2,
        count: 2,
        title: '大疆无人机',
        img: '../img/spark.jpg'
    },
    {
        type: 3,
        count: 3,
        title: 'Kindle',
        img: '../img/kindle.jpg'
    },
    {
        type: 4,
        count: 20,
        title: '小度在家',
        img: '../img/baidu.jpg'
    }, {
        type: 5,
        title: '凌美钢笔',
        count: 50,
        img: '../img/lamy.png'
    }
];

/**
 * 一次抽取的奖品个数
 * 顺序为：[特别奖，一等奖，二等奖，三等奖，四等奖，五等奖]
 */
const EACH_COUNT = [1, 1, 1, 1, 1, 5];

const COMPANY = 'MoShang';
const ROW_COUNT = 7;
const COLUMN_COUNT = 17;


/**
 * 高亮矩阵
 */
const HIGHLIGHT_CELL = ['1-1', '1-2', '1-3', '2-3', '3-1', '3-2', '3-3', '4-1', '5-1', '5-2', '5-3', '1-5', '1-6', '1-7', '2-5', '2-7', '3-5', '3-7', '4-5', '4-7', '5-5', '5-6', '5-7', '1-10', '2-9', '2-10', '3-10', '4-10', '5-9', '5-10', '5-11', '1-13', '1-14', '1-15', '2-13', '2-15', '3-13', '3-14', '3-15', '4-15', '5-13', '5-14', '5-15'];

module.exports = {
    prizes,
    EACH_COUNT,
    ROW_COUNT,
    COLUMN_COUNT,
    COMPANY,
    HIGHLIGHT_CELL
};