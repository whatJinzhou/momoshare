/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22293223&pid=5adc45f825aae7802e8473e88fcb6e1f&tid=0cb45064d2838b4eafae9ee4682cd1ba",
    "https://www.maimemo.com/share/page?uid=22293223&pid=5adc45f825aae7802e8473e88fcb6e1f&tid=0cb45064d2838b4eafae9ee4682cd1ba",
    "https://www.maimemo.com/share/page?uid=22293223&pid=5adc45f825aae7802e8473e88fcb6e1f&tid=0cb45064d2838b4eafae9ee4682cd1ba",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=32454734&pid=5adc45f825aae7802e8473e88fcb6e1f&tid=4789033904777fb5342442003c3446b8",


  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
