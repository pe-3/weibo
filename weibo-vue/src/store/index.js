/**
 * @file 集中状态管理文件，暴露 store，处理缓存
 */
import Vuex from 'vuex';
import modules from './modules';
import cache from './cache';

const isProd = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  strict: isProd,
  modules,
  plugins: [cache]
});