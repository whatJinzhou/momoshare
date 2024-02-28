/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22293223&pid=60042dfc5107bb07fdaf44cc57d24b33&tid=f7e5b06a26a4e87f302a6c6b5ea3c132",
    "https://www.maimemo.com/share/page?uid=22293223&pid=60042dfc5107bb07fdaf44cc57d24b33&tid=f7e5b06a26a4e87f302a6c6b5ea3c132",
    "https://www.maimemo.com/share/page?uid=22293223&pid=b826c9310f2645a2c5a670393871a8b3&tid=2a7bc9b319623ba5fb1ec0c4f103cb85",
 
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=22293223&pid=68a50749ba1194bd6dddeeb891b20eda&tid=e36b548ff2dd7e156ee643891ccdf8d8",


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
