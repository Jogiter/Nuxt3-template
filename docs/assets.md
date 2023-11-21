# assets 文件夹

```tree

```

## image 命名规则以及存放目录结构

图片的功能命名 `name`，因为页面区分 dark/light 模式，以及多语言场景。因此设定按照命名规则如下：

```js
// dark-en-images
import name_en from '~/assets/images/2x/dark/en/name.png'

// dark-zh-images
import name_zh from '~/assets/images/2x/dark/zh/name.png'

// light-en-images
import light_name_en from '~/assets/images/2x/light/en/name.png'

// light-zh-images
import light_name_zh from '~/assets/images/2x/light/zh/name.png'

// mobile-dark-en-images
import m_name_en from '~/assets/images/mobile/2x/dark/en/name.png'

// mobile-dark-zh-images
import m_name_zh from '~/assets/images/mobile/2x/dark/zh/name.png'

// mobile-light-en-images
import m_light_name_en from '~/assets/images/mobile/2x/light/en/name.png'

// mobile-light-zh-images
import m_light_name_zh from '~/assets/images/mobile/2x/light/zh/name.png'
```

目录结构如下：

```tree
.
├── 2x
│   ├── dark
│   │   ├── en
│   │   └── zh
│   └── light
│       ├── en
│       └── zh
└── mobile
    └── 2x
        ├── dark
        │   ├── en
        │   └── zh
        └── light
            ├── en
            └── zh
```

在判断环境时，可以使用如下函数:

```ts
const { t, locale } = useI18n()
const colorMode = useColorMode()

/**
 * 获取正确的图片
 */
const getImage = ([img_en, img_zh, light_img_en, light_img_zh]) =>
  colorMode.preference === 'dark'
    ? locale.value === 'en'
      ? img_en
      : img_zh
    : locale.value === 'en'
    ? light_img_en
    : light_img_zh

provide('getImage', getImage)
```

### demo

参考 [components/home/section4.vue]():

```js
// dark-en-images
import tab1_en from '~/assets/images/2x/dark/en/tab1.png'
import tab2_en from '~/assets/images/2x/dark/en/tab2.png'
import tab3_en from '~/assets/images/2x/dark/en/tab3.png'
import tab4_en from '~/assets/images/2x/dark/en/tab4.png'
// dark-zh-images
// import tab1_zh from '~/assets/images/2x/dark/zh/tab1.png'
// import tab2_zh from '~/assets/images/2x/dark/zh/tab2.png'
// import tab3_zh from '~/assets/images/2x/dark/zh/tab3.png'
// import tab4_zh from '~/assets/images/2x/dark/zh/tab4.png'
// light-en-images
import light_tab1_en from '~/assets/images/2x/light/en/tab1.png'
import light_tab2_en from '~/assets/images/2x/light/en/tab2.png'
import light_tab3_en from '~/assets/images/2x/light/en/tab3.png'
import light_tab4_en from '~/assets/images/2x/light/en/tab4.png'
// light-zh-images
// import light_tab1_zh from '~/assets/images/2x/light/zh/tab1.png'
// import light_tab2_zh from '~/assets/images/2x/light/zh/tab2.png'
// import light_tab3_zh from '~/assets/images/2x/light/zh/tab3.png'
// import light_tab4_zh from '~/assets/images/2x/light/zh/tab4.png'
// mobile-dark-en-images
import m_tab1_en from '~/assets/images/mobile/2x/dark/en/tab1.png'
import m_tab2_en from '~/assets/images/mobile/2x/dark/en/tab2.png'
import m_tab3_en from '~/assets/images/mobile/2x/dark/en/tab3.png'
import m_tab4_en from '~/assets/images/mobile/2x/dark/en/tab4.png'
// mobile-dark-zh-images
// import m_tab1_zh from '~/assets/images/mobile/2x/dark/zh/tab1.png'
// import m_tab2_zh from '~/assets/images/mobile/2x/dark/zh/tab2.png'
// import m_tab3_zh from '~/assets/images/mobile/2x/dark/zh/tab3.png'
// import m_tab4_zh from '~/assets/images/mobile/2x/dark/zh/tab4.png'
// mobile-light-en-images
import m_light_tab1_en from '~/assets/images/mobile/2x/light/en/tab1.png'
import m_light_tab2_en from '~/assets/images/mobile/2x/light/en/tab2.png'
import m_light_tab3_en from '~/assets/images/mobile/2x/light/en/tab3.png'
import m_light_tab4_en from '~/assets/images/mobile/2x/light/en/tab4.png'
// mobile-light-zh-images
// import m_light_tab1_zh from '~/assets/images/mobile/2x/light/zh/tab1.png'
// import m_light_tab2_zh from '~/assets/images/mobile/2x/light/zh/tab2.png'
// import m_light_tab3_zh from '~/assets/images/mobile/2x/light/zh/tab3.png'
// import m_light_tab4_zh from '~/assets/images/mobile/2x/light/zh/tab4.png'
```
