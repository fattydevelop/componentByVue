<style lang="less">
  @import '../main.less';
  #cssmenu,
  #cssmenu ul,
  #cssmenu ul li,
  #cssmenu ul li a {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    line-height: 1;
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #cssmenu {
    width: 220px;
    color: @menuFont;
  }
  #cssmenu ul ul {
    display: none;
  }
  .align-right {
    float: right;
  }
  #cssmenu{
    ul{
        li{
            a{
                padding: 16px 22px;
                cursor: pointer;
                z-index: 2;
                font-size: 16px;
                text-decoration: none;
                color: @menuChildFont;
                background: @menuBackground;
                -webkit-transition: color .2s ease;
                -o-transition: color .2s ease;
                transition: color .2s ease;
            }
            a:hover{
                 color: @menuFontHover;
            }
            a:active{
                ul{
                    color:red;
                }
            }
        }
        ul{
            li{
                a{
                        padding: 14px 22px;
                        cursor: pointer;
                        z-index: 2;
                        font-size: 14px;
                        text-decoration: none;
                        color: #dddddd;
                        background: @menuChildBackgound;
                        -webkit-transition: color .2s ease;
                        -o-transition: color .2s ease;
                        transition: color .2s ease;
                }
            }
            ul{
                li{
                    a{
                        padding-left: 32px;
                     }
                     a:hover{
                        color: #ffffff;
                     }
                }
            }
        }
    }
  }
  #cssmenu ul > li.has-sub > a:after {
    position: absolute;
    right: 26px;
    top: 19px;
    z-index: 5;
    display: block;
    height: 10px;
    width: 2px;
    background: #ffffff;
    content: "";
    -webkit-transition: all 0.1s ease-out;
    -moz-transition: all 0.1s ease-out;
    -ms-transition: all 0.1s ease-out;
    -o-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
  }
  #cssmenu ul > li.has-sub > a:before {
    position: absolute;
    right: 22px;
    top: 23px;
    display: block;
    width: 10px;
    height: 2px;
    background: #ffffff;
    content: "";
    -webkit-transition: all 0.1s ease-out;
    -moz-transition: all 0.1s ease-out;
    -ms-transition: all 0.1s ease-out;
    -o-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
  }
  #cssmenu ul > li.has-sub.open > a:after,
  #cssmenu ul > li.has-sub.open > a:before {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  #cssmenu ul ul > li.has-sub > a:after {
    top: 16px;
    right: 26px;
    background: #dddddd;
  }
  #cssmenu ul ul > li.has-sub > a:before {
    top: 20px;
    background: #dddddd;
  }
  #cssmenu ul ul ul{
      color: red;
    }
</style>

<template>
    <div class="mainLeft" id="cssmenu">
        <ul class="navBar">
          <li v-repeat="option in options" v-on="click:expandList" v-class="has-sub:option.child">
            <a href={{option.url}}>{{option.name}}</a>
            <ul v-if="option.child">
                <li v-repeat="child in option.child"  v-class="has-sub:child.parChild">
                    <a href={{child.url}}>{{child.name}}</a>
                     <ul v-if="child.parChild">
                       <li v-repeat="parChild in child.parChild">
                          <a href={{parChild.url}}>{{parChild.name}}</a>
                       </li>
                     </ul>
                </li>
            </ul>
          </li>
        </ul>
    </div>
</template>

<script>
    module.exports = {
        methods:{
            expandList:function(e){
               e.stopPropagation();
               e=e.target;
               var self = $(e).parent('li');
               if(!self.hasClass('has-sub'))
                    return;
               var ulTemp = $(self.find('ul')[0]);
               if(self.hasClass('open')){
                  ulTemp.slideUp(200);
                  self.removeClass('open');
               }
               else{
                  ulTemp.slideDown(200);
                  self.addClass('open');
               }
            }
        },
        data:function(){
            return {
                options:[
                    {
                        'name':'home',
                        'url':'#home'
                    },
                    {
                        'name':'buyPos',
                        'url':'#buyPos',
                        'child':[
                           {
                              'name':'child1',
                              'url':'#child1'
                           },
                           {
                               'name':'child2',
                               'url':'#child2',
                               'parChild':[
                                  {
                                     'name':'parChild1',
                                     'url':'#parChild1'
                                  },
                                  {
                                      'name':'parChild2',
                                      'url':'#parChild2'
                                  }
                               ]
                           }
                        ]
                    }
                ]
            }
        }
    }
</script>