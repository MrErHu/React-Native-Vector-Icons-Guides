　　之前总是想写一些关于学习体会和感受的文章，今天也来一篇关于React Native的教程文章。前段时间我尝试着用React Native构建一个论坛的APP,在这个过程中遇见一个问题: 最开始我是用图片的形式去构建APP中的图标，但用图片构建图标的过程中会遇到一个问题，就是图片的加载速度非常之慢，APP页面加载过程中图标会出现留白的情况，所以我就想要用Iconfont去构建图标。

## Iconfont

　　Iconfont，如字面的意思，就是字体图标。如果你身处在一个视觉或者交互对页面UI一天一变的蛋疼团队，你会深刻的理解使用图片作为图标的不便之处:

1. 图标大小会变化，当然你可以通过设置的图片大小去改变图标。但是如果你开始使用的图片的分辨率较低的话，放大图标会造成图标的失真。当然你可以一开始就选择一个高分辨率的图片，但是高分辨的图片会造成加载速度减慢。
2. 图标的颜色会变化，假如一开始视觉要求红色的图标，明个脑子一抽风，又要求蓝色的图片。这时候如果你用的是图片，没别的办法，只能换新的图片。
3. 图标本身也会变化，今天视觉觉得圆的图标好看，明个觉得方的图标好看，咱又得辛辛苦苦替换图片或者改变图片的应用路径。

　　有了Iconfont一切就不一样了:

1. Iconfont中字体图标都是矢量的，你可以像设置字体大小一样，放大或缩小并且保证不失真。
2. Iconfont中字体图标同字体相同，可以通过设置颜色属性改变图标颜色。
3. Iconfont字体图标制作简单，并且目前有相当多的线上图标库和制作图标Iconfont的站点。只要上传svg的图标设计稿，就能线上生成iconfont字体文件，而且连使用代码都直接生成。
4. Iconfont字体图标具有非常好的兼容性，甚至在IE6中都可以使用。

## React Native中使用Iconfont

　　说了Iconfont这么多的好处，现在我们就尝试着在React Native中使用Iconfont。作为Github的搬运工，想要在React Native中使用Iconfont我们需要使用库:[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons),
`react-native-vector-icons` 使得React Native支持自定义的图标库，并支持`NavBar/TabBar/ToolbarAndroid`等控件与图片形式的图标以及各种样式。其主要优点有:

- 你可以使用自定义的图标库，支持SVG和常规的Iconfont
- 可以在原生的`TabBarIOS`中使用
- 你可以在`Text`组件中像使用emojis表情一样或者在按钮中使用图标
- 如果原生的组件需要的是一个Image(例如:NavigatorIOS),你可以像使用一个`Image`一样使用Icon
- 大多数情况下是在JavaScript中使用，因此可以非常灵活的定制样式并且很方便地集成进现有的项目中
- 不需要定义`height`和`width`
- 可以在样式表中定义类似`size`和`color`的属性，而不是通过属性去定义

　　`react-native-vector-icons`内置了很多字体图标，譬如:

* [`Entypo`](http://entypo.com) by Daniel Bruce (**411** icons)
* [`EvilIcons`](http://evil-icons.io) by Alexander Madyankin & Roman Shamin (v1.8.0, **70** icons)
* [`FontAwesome`](http://fortawesome.github.io/Font-Awesome/icons/) by Dave Gandy (v4.7.0, **675** icons)
* [`Foundation`](http://zurb.com/playground/foundation-icon-fonts-3) by ZURB, Inc. (v3.0, **283** icons)
* [`Ionicons`](http://ionicframework.com/docs/v2/ionicons/) by Ben Sperry (v3.0.0, **859** icons)
* [`MaterialIcons`](https://www.google.com/design/icons/) by Google, Inc. (v3.0.1, **932** icons)
* [`MaterialCommunityIcons`](https://materialdesignicons.com/) by MaterialDesignIcons.com (v1.9.33, **1932** icons)
* [`Octicons`](http://octicons.github.com) by Github, Inc. (v5.0.1, **176** icons)
* [`Zocial`](http://zocial.smcllns.com/) by Sam Collins (v1.0, **100** icons)
* [`SimpleLineIcons`](http://simplelineicons.com/) by Sabbir & Contributors (v2.4.1, **189** icons)

　　 当然我们希望能够支持我们自定义Iconfont。下面逐步介绍如果在React Native中使用Iconfont。

　　首先，下载相应的Iconfont文件(*.ttf),我们在阿里巴巴矢量图标库中新建一个项目，将所需要的图标都保存到该项目中，并下载到本地。

![](http://os40r8ms0.bkt.clouddn.com/step1.png)

　　我们通过`react-native init`的方式初始化一个React Native项目，在其中新建一个`assets`目录，其中再建一个`font`的文件夹来存储字体文件。我们的项目是在iOS中开发的，首先在iOS进行相应的系统配置。项目目录如下图所示:

![](http://os40r8ms0.bkt.clouddn.com/project%20dictionary.png)

### iOS配置

　　`react-native-vector-icons`支持相当多的内置字体库，但要使用内置字体库，也需要进行如下的配置，所有的内置字体库文件都在`node_modules/react-native-vector-icons`中的`Fonts`文件夹下。我们以刚才下载的`Iconfont.ttf`为例，我们将其复制进`assets/font`文件夹下。然后我们用Xcode
打开`ios`目录下`*.xcodeproj`项目配置文件。如下图所示:

![](http://os40r8ms0.bkt.clouddn.com/step2.png)

　　我们在目录下新建`Fonts`文件夹(非必须)，并将`assets/font`中的`Iconfont.ttf`**拖拽**进工程配置中的`Fonts`文件夹，**切记！一定要是在Xcode中拖拽进该目录**，如果是拖拽进Xcode中时，我们会看见下面的对话框,

![](http://os40r8ms0.bkt.clouddn.com/step4.png)

我们选择`Create groups`并按照需求选择多选项，我们只需要在iOS中使用，就只选择第一项就可以。然后我们打开`(项目名)Guides`下的`Info.plist`文件。

![](http://os40r8ms0.bkt.clouddn.com/step4.png)

　　然后我们在`Information property list`下新建`Fonts provided by application`属性，并配置`Iconfont.ttf`,如下图所示:

![](http://os40r8ms0.bkt.clouddn.com/step5.png)


### Android配置

　　Android的配置相对比较简单，如果只想使用在`react-native-vector-icons`中内置的图标，只需要在项目中`android/app/build.gradle`目录下增加:

```javascript
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

　　对于自定义的图标库，也只需要在`android/app/build.gradle`中添加:

```javascript

project.ext.vectoricons = [
    iconFontNames: ['Iconfont.ttf' ] //添加你需要赋值的字符文件
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

```

## 使用方法

### Icon Component

　　如果是内置图标库中图标，你可以通过如下方式使用:

```javascript
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)
```

　　对于自定义图标库，我们可以参考一下`FontAwesome`是怎么设计的:

```javascript

/**
 * FontAwesome icon set component.
 * Usage: <FontAwesome name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from './lib/create-icon-set';
import glyphMap from './glyphmaps/FontAwesome.json';

const iconSet = createIconSet(glyphMap, 'FontAwesome', 'FontAwesome.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

```

　　而`FontAwesome.json`中代码如下
```javascript
{
  "glass": 61440,
  "music": 61441,
  "search": 61442,
  "envelope-o": 61443,
  "heart": 61444,
  "star": 61445,
  "star-o": 61446,
  "user": 61447,
  //等等...
}
```

　　这样一看使用方法也是非常地简单，综合上述代码，我们首先介绍一下其中的API:

```
createIconSet(glyphMap, fontFamily[, fontFile])
```

返回基于`glyphMap`的自定义字体集，其中`key`是图标的名字，值可以是UTF-8字符，也可以是字符编码(需要注意的是，`glyphMap`配置文件中的`value`需要是十进制，如果字体库中提供的是十六进制编码，那么就需要将十六进制转换成十进制数)。`fontFamily`不是文件名。`fontFile`参数是可选的，其目的是支持安卓系统，应该是资源目录下的地址。

那么非常简单，我们也可以编写一个我们自定义的图标组件：

```javascript
import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
import glyphMap from './Iconfont.json';

const iconSet = createIconSet(glyphMap, 'Iconfont', 'Iconfont.ttf');

export default iconSet;
```

最后的效果如下:

![](http://os40r8ms0.bkt.clouddn.com/show1.png)

　　不仅如此，我们还可以在`Icon`中使用`Text`组件，

```javascript
<Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{fontFamily: 'Arial', fontSize: 15}}>Login with Facebook</Text>
</Icon.Button>
```

从而做出如下的效果:

![](http://os40r8ms0.bkt.clouddn.com/show2.png)

　　`react-native-vector-icons`还有其他的用法，这里只是抛砖迎玉，不再啰嗦，有兴趣大家可以到Github中仔细阅读一下文档。本文章的代码地址如下[React-Native-Vector-Icons-Guides](https://github.com/MrErHu/React-Native-Vector-Icons-Guides)，有需要的同学可以参考一下。