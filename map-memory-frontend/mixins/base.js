import {AXIOS} from '~/common/http-commons'

export default{
  methods :{
    getBaseServiceUrl () {
      AXIOS.get('/api/v1/base-service/url').then(response => {
                // JSON responses are automatically parsed.
                this.base_service_url = response.data;
              }).catch(e => {

              })
    },
    checklogin () {
      AXIOS.get('/api/v1/user/whoami').then(response => {
            // JSON responses are automatically parsed.

            this.isLoggedIn = true;
          }).catch(e => {
            this.isLoggedIn = false;
            this.$router.push('/login')
          })
    },
    goPage (val) {
      this.$router.push(val)
  },
  },
  data () {
    return {
      base_service_url:'',
      isLoggedIn : false,
      available_icons:[
        {
          id:'book.png',
          name:'秘籍'
        },
        {
          id:'book2.png',
          name:'大金书'
        },{
          id:'darkbook.png',
          name:'暗黑本'
        },
        {
          id:'book3.png',
          name:'小蓝书'
        },
        {
          id:'book4.png',
          name:'宝书'
        },
        {
          id:'taiqiu.png',
          name:'台球'
        },
        {
          id:'ye.png',
          name:'绿叶'
        },
        {
          id:'taiyang.png',
          name:'太阳'
        },
        {
          id:'taiyang2.png',
          name:'太阳2'
        },
        {
          id:'taiyang3.png',
          name:'太阳3'
        },
        {
          id:'xuehua.png',
          name:'雪花'
        },
        {
          id:'document.png',
          name:'文件盒'
        },
        {
          id:'ppt.png',
          name:'PPT'
        },
        {
          id:'db.png',
          name:'数据1'
        },
        {
          id:'db2.png',
          name:'数据2'
        },
        {
          id:'pdf.png',
          name:'文件'
        },
        {
          id:'sugar.png',
          name:'糖果'
        },
        {
          id:'laptop.png',
          name:'笔记本电脑'
        },
        {
          id:'chuxuguan.png',
          name:'储蓄罐'
        },
        {
          id:'toolbox.png',
          name:'工具箱'
        },
        {
          id:'programming.png',
          name:'程序'
        },
        {
          id:'accbook.png',
          name:'账本'
        },
        {
          id:'man.png',
          name:'男人'
        },
        {
          id:'samoye.png',
          name:'萨摩耶'
        },
        {
          id:'chaiquan.png',
          name:'柴犬'
        },
        {
          id:'chaiquan2.png',
          name:'柴犬2'
        },
        {
          id:'hashiqi.png',
          name:'哈士奇'
        },
        {
          id:'hashiqi2.png',
          name:'哈士奇2'
        },
        {
          id:'hashiqi3.png',
          name:'哈士奇3'
        },
        {
          id:'alasijiabaobao.png',
          name:'阿拉斯加宝宝'
        },
        {
          id:'hashiqibaobao.png',
          name:'哈士奇宝宝'
        },
        {
          id:'keji.png',
          name:'柯基'
        },
        {
          id:'kejibaobao.png',
          name:'柯基宝宝'
        },
        {
          id:'movie.png',
          name:'放映机'
        },
        {
          id:'party.png',
          name:'Party'
        },
        {
          id:'threestar.png',
          name:'三星'
        },
        {
          id:'bomb.png',
          name:'爆炸'
        },
        {
          id:'threebody.png',
          name:'三体'
        },
        {
          id:'java.png',
          name:'咖啡'
        },
        {
          id:'nansheng.png',
          name:'男生'
        },
        {
          id:'chest.png',
          name:'宝箱'
        },
        {
          id:'airconditioner.png',
          name:'空调'
        },{
          id:'go.png',
          name:'土拨鼠'
        },{
          id:'mac.png',
          name:'Mac'
        },{
          id:'pai.png',
          name:'数学'
        },{
          id:'bodybuilding.png',
          name:'健身'
        },{
          id:'list.png',
          name:'列表'
        },{
          id:'shell.png',
          name:'贝壳'
        },{
          id:'cash.png',
          name:'钱'
        },{
          id:'question.png',
          name:'问题'
        },{
          id:'knowledge.png',
          name:'知识'
        },{
          id:'python.png',
          name:'Python'
        },{
          id:'php.png',
          name:'PHP'
        },{
          id:'elephant.png',
          name:'大象'
        },{
          id:'weekend.png',
          name:'周末'
        },{
          id:'ubuntu.png',
          name:'Ubuntu'
        },{
          id:'centos.png',
          name:'Centos'
        },{
          id:'mysql.png',
          name:'Mysql'
        },{
          id:'docker.png',
          name:'Docker'
        },{
          id:'tensorflow.png',
          name:'Tensorflow'
        },{
          id:'mongo.png',
          name:'Mongo'
        },{
          id:'redis.png',
          name:'Redis'
        }
      ],
    }
  }
}
