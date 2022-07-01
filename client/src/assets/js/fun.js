/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @purpose 判断url链接是否是https?:|mailto:|tal: 开头的
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
  }
  
  /**
   * @purpose 检验字符串是否是 admin  editor
   * @param {string} str
   * @returns {Boolean}
   */
  export function validUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
  }
  
  /**
   * @purpose 判断是否是url链接
   * @param {string} url
   * @returns {Boolean}
   */
  export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }
  
  /**
   * @purpose 判断都是小写字母
   * @param {string} str
   * @returns {Boolean}
   */
  export function validLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
  }
  
  /**
   * @purpose 判断都是大写字母
   * @param {string} str
   * @returns {Boolean}
   */
  export function validUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
  }
  
  /**
   * @purpose 判断是否是字母
   * @param {string} str
   * @returns {Boolean}
   */
  export function validAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
  }
  /**
   * @purpose 校验邮箱
   * @param {string} email
   * @returns {Boolean}
   */
  export function validEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
  }
  
  /**
   * @purpose 判断是否字符串
   * @param {string} str
   * @returns {Boolean}
   */
  export function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
      return true
    }
    return false
  }
  
  /**
   * @purpose 判断是否是数组
   * @param {Array} arg
   * @returns {Boolean}
   */
  export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
      return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
  }
  /**
   * @purpose 校验手机号
   * @param {String} phone
   * @returns {Boolean}
   */
  export function validPhone(phone) {
    const reg = /^(0|86|17951)?(13[0-9]|15[0123456789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    return reg.test(phone)
  }
  
  /**
   * @purpose 校验中文
   * @param {String} chinese
   * @returns {Boolean}
   */
   export function validChinese(chinese) {
    const reg=new RegExp("^([\u4e00-\u9fa5]|[.])*$");
    return reg.test(chinese)
  }
  
  
  
  