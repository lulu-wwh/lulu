<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" class="mt">
        <el-card>
          <el-row>
            <el-col :span="10">
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
              ></el-image>
            </el-col>
            <el-col :span="14">
              <p style="margin-top: 25px">卢璐</p>
              <p>150******50</p>
            </el-col>
          </el-row>
          <hr class="mt" />
          <el-row :gutter="20">
            <el-col :span="6" class="mt">
              <i class="el-icon-position shop"></i>
              <p>代发货</p>
            </el-col>
            <el-col :span="6" class="mt">
              <i class="el-icon-present shop"></i>
              <p>待收货</p>
            </el-col>
            <el-col :span="6" class="mt">
              <i class="el-icon-chat-line-square shop"></i>
              <p>待评价</p>
            </el-col>
            <el-col :span="6" class="mt">
              <i class="el-icon-date shop"></i>
              <p>全部订单</p>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <el-menu>
                <el-submenu index="1">
                  <template slot="title">
                    <span>尺码对照表</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">XS</el-menu-item>
                    <el-menu-item index="1-2">S</el-menu-item>
                    <el-menu-item index="1-3">M</el-menu-item>
                    <el-menu-item index="1-4">L</el-menu-item>
                    <el-menu-item index="1-5">XL</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="2">
                  <span slot="title">我的收藏</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <span slot="title">我的账单</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span slot="title">意见反馈</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <span slot="title">关于我们</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="16" class="mt">
        <el-card>
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"> 文章</span>
              <el-row :gutter="20">
                <el-rol :span="10">
                  <h3>时光匆匆，回首，又是一年岁末时</h3>
                  <p style="text-indent: 2em">
                    还来不及说太过匆匆，墙上的挂历就被悄无声息地撕到了最后的几页，旧的岁月就要转瞬即逝，成为无法重来的过去。轻叩心扉，重温旧日情怀，感慨良多。这一年里，有得有失，有舍有弃，有聚有散，有笑有哭，有省有悟。岁月，赠予了我们不少的忧伤与欢喜，同时也沧桑着我们的心智。
                  </p>

                  <p style="text-indent: 2em">
                    光阴就这样在尘事的纷扰中一路飞逝，而在心底里暗生着的那一抹情愫，却缠缠绕绕，弯弯曲曲。一路的风尘中，不停的记录着点滴的往事，一些思绪，零零散散，飘落在了老去的时光里。往事如风，来回的吹，岁月如歌，浅浅唱吟，风干的记忆常常会被时光拨弄起尘灰，消散的往事时时被萦怀于记忆里。时光苍老着岁月，岁月掩埋了时光，年年岁岁，我们每一个人都在演绎着各自不同的人生，而沉淀下来的却是每个生命里点点滴滴的温情。伫立于年末的门槛里，拨动着岁月里悠悠绵长的心弦，品着一脉悠然的静意，听那过往里的狂欢与温馨，看那过往里的忧伤与哭泣，终将沉淀的心事婉约成了一首歌，风吹过后，留下的是一抹浅笑的爱意。
                  </p>

                  <p style="text-indent: 2em">
                    在生命的四季里，我们经历了春上枝头的美好，走过了惆怅的叶落离枝，跨过无奈的落叶凋零成泥，……庆幸的是，在这个薄凉的世界里，还存有许多琐碎的感动和温暖，如点点星星的萤火，散落在流年的水岸，明媚着薄凉的光阴，温润着尘世中行走者的那颗心。花开花落，缘来缘散，岁月的长河里我们曾温暖过许多的相遇，也曾惆怅过许多的别离，那些擦肩而过的一个个身影，在我们空旷的心田里留下了一道道的痕迹，而那些远去的脚步中回响着的是岁月的足音，岁月荏苒，繁华落尽，那些藏在时光霓裳中的美好与希望，我们始终都不忍随意的丢弃。
                  </p>

                  <p style="text-indent: 2em">
                    想来人都是这样走过来的，由稚嫩到逐渐的懂得与成熟，从朦胧到逐渐的明白和觉醒，由纠结到逐渐的豁达与坦然，从单纯到逐渐的纯粹和明晰。一生的情怀和修行，最终达到一种境界，昄依简朴与素雅，豁达淡泊和宁静。都说时光越老，人心越淡，到了一定的年纪，以前一些不喜欢的人或事情，知道了如何从容的去面对，已然有了一种一笑而过的淡然心境。越往光阴深处走行，觉得越是简单，越是淡泊宁静，才是生活中难得的一种美好意境。早已喜欢上了把日子过得尽量的平淡简宁，闲暇时，拥一扇晴窗，将心晾放在阳光下，翻晒着过往里的思情；兴趣来时提笔游走于绘画间和文字里，品味着过往里的际遇，咀嚼着其中所含藏着的酸甜苦辣辛。尽享着阳光洒落下的温暖，聆听岁月走过的声音，安抚着起伏波动的思绪，净化着躁动不宁的心灵。
                  </p>
                </el-rol>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="应用">
              <el-row>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Alipay</span>
                  <h4>活跃用户</h4>
                  <p>16万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Angular</span>
                  <h4>活跃用户</h4>
                  <p>19万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Ant Design</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Ant Design Pro</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
              </el-row>
              <el-row class="mt">
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Bootstrap</span>
                  <h4>活跃用户</h4>
                  <p>16万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">React</span>
                  <h4>活跃用户</h4>
                  <p>19万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Vue</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Webpack</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
              </el-row>
              <el-row class="mt">
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Alipay</span>
                  <h4>活跃用户</h4>
                  <p>16万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Angular</span>
                  <h4>活跃用户</h4>
                  <p>19万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Ant Design</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Ant Design Pro</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
              </el-row>
              <el-row class="mt">
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Bootstrap</span>
                  <h4>活跃用户</h4>
                  <p>16万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">React</span>
                  <h4>活跃用户</h4>
                  <p>19万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Vue</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
                <el-col :span="5" class="apply ml">
                  <el-image
                    style="width: 30px; height: 30px; border-radius: 50%"
                    :src="'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png'"
                  >
                  </el-image
                  ><span style="margin-left: 10px">Webpack</span>
                  <h4>活跃用户</h4>
                  <p>10万</p>
                  <i class="el-icon-download icon"></i><span>|</span>
                  <i class="el-icon-edit icon"></i><span>|</span>
                  <i class="el-icon-share icon"></i><span>|</span
                  ><span class="icon">...</span>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="项目">
              <el-row :gutter="5">
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >那是一种内在的东西， 他们到达不了，也无法触及的</span
                      >
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >希望是一个好东西，也许是最好的，好东西是不会消亡的</span
                      >
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>生命就像一盒巧克力，结果往往出人意料</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="5" class="mt">
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</span>
                    </div>
                  </el-card>
                </el-col>

                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>生命就像一盒巧克力，结果往往出人意料</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >希望是一个好东西，也许是最好的，好东西是不会消亡的</span
                      >
                    </div>
                  </el-card>
                </el-col>

                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >那是一种内在的东西， 他们到达不了，也无法触及的</span
                      >
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="5" class="mt">
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >那是一种内在的东西， 他们到达不了，也无法触及的</span
                      >
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >希望是一个好东西，也许是最好的，好东西是不会消亡的</span
                      >
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>生命就像一盒巧克力，结果往往出人意料</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
              <el-row :gutter="5" class="mt">
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>城镇中有那么多的酒馆，她却偏偏走进了我的酒馆</span>
                    </div>
                  </el-card>
                </el-col>

                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span>生命就像一盒巧克力，结果往往出人意料</span>
                    </div>
                  </el-card>
                </el-col>
                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >希望是一个好东西，也许是最好的，好东西是不会消亡的</span
                      >
                    </div>
                  </el-card>
                </el-col>

                <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img
                      src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
                      class="image"
                    />
                    <div style="padding: 14px">
                      <span
                        >那是一种内在的东西， 他们到达不了，也无法触及的</span
                      >
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg",
    };
  },
};
</script>

<style scoped>
.shop {
  color: red;
  font-size: 30px;
  margin-left: 10px;
}

h3 {
  text-align: center;
}
h4 {
  margin-top: 20px;
}
.apply {
  border: #dcdcdc 1px solid;
  padding: 10px;
}
.icon {
  font-size: 16px;
  margin-left: 6px;
  margin-right: 6px;
}
.apply p {
  border-bottom: #dcdcdc 1px solid;
}

.image {
  width: 100%;
  display: block;
}
</style>