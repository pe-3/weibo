/**
 * @file 配置持久化缓存插件
 */

import createPersistedState from 'vuex-persistedstate'

const cache = createPersistedState({
    storage: localStorage,
    overwrite: true,
    key: 'weibo-vuex'
});

export default cache;