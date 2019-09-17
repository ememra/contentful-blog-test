const {getConfigForKeys} = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
 'CTF_PAGE_TYPE_ID',
 'CTF_SPACE_ID',
 'CTF_CDA_ACCESS_TOKEN'
])
const {createClient} = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

const pkg = require('./package')

const config = {
 head: {
   title: 'Emura Design Portfolio',
   titleTemplate: '%s｜Emura Design Portfolio',
   meta: [
     { charset: 'utf-8' },
     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     { hid: 'description', name: 'description', content: 'Nuxt.js project' }
   ],
   link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,900i&display=swap' }
    ]
 },
  css: [
    '~/assets/scss/style.scss'
  ],
 loading: { color: '#3B8070' },
 build: {
   extend (config, { isDev, isClient }) {
     if (isDev && isClient) {
       config.module.rules.push({
         enforce: 'pre',
         test: /\.(js|vue)$/,
//         loader: 'eslint-loader',
         exclude: /(node_modules)/
       })
     }
   },
 },
 plugins: [ { src: '~plugins/contentful' } ],
 generate: {
   routes () {
     return cdaClient.getEntries({
       'content_type': ctfConfig.CTF_PAGE_TYPE_ID
     }).then(entries => {
       return [
         ...entries.items.map(entry => `/page/${entry.fields.path}`)
       ]
     })
   },
   fallback: true
 },
 mode: 'universal',
 env: {
   CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
   CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
   CTF_PAGE_TYPE_ID: ctfConfig.CTF_PAGE_TYPE_ID
 },
 modules: [
   '@nuxtjs/style-resources',
   'nuxt-fontawesome',
   '@nuxtjs/markdownit',
 ],
  markdownit: {
    injected: true, // $mdを利用してmarkdownをhtmlにレンダリングする
    breaks: true, // 改行コードを<br>に変換する
    html: true, // HTML タグを有効にする
    linkify: true, // URLに似たテキストをリンクに自動変換する
    typography: true,  // 言語に依存しないきれいな 置換 + 引用符 を有効にします。
    use: [
      'markdown-it-toc' // 目次を作るためのライブラリ。別途インストールが必要
    ]
  },
  styleResources: {
    scss: [
      '~/assets/scss/base/_setting.scss' // 読みませたいscssファイルを指定します。
    ]
  },
  webfontloader: {
    google: {
      families: ['Roboto']
    }
  },
   fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      },
    ]
  },
}
module.exports = config
