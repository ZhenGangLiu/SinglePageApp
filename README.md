## ### spa基础原理 

-  通过锚点值改变url，切换页面
### $location监视页面锚点的变化
- $location.url()方法可以获取到页面的锚点值，但是不包含#号
- 是通过$watch动态的监视$location.url()方法的返回值,再做相应的处理.
- 要把$location赋值给$scope的一个属性($scope.loaction=$location)

### 路由初步使用（ngRoute）
` npm instal angular-route`

- 通过模块的config方法来创建路由规则
- 有一个参数：类似于controller的第二个参数
- 有一个需要注入的参数:$routeProvider
    + 这个参数是用来设置具体的规则的
    + $routeProvier.when()
        - when第一个参数是当前url中锚点的值
        - when第二个参数是object对象：template属性
            - 最终angular会把template对应的模板字符串插入到页面拥有ng-view指令的标签的innerHTML位置.
            - controller属性，指向一个控制器,最终控制器的暴露的数据能够在template指定的字符串的使用。

### 路由参数
- 类似于过滤器中使用参数的形式
- when('/students/:name'),最终在控制器中可以通过$routeParams拿到这个参数，
    + $routeParams就是一个拥有name属性的对象.
    + 可以在参数后加个问号表示当前参数是可选。
        ——- when('/students/:name?')



- otherwise
- 用于匹配前面所有when方法没有匹配到规则。
    +指定了一个对象作为参数，这个对象有个属性:redirectTo:'/students/'





### 完整写法

    
    var app=angular.module('myApp',['ngRoute']);
    
    //$routeProvider用他来配置路由表
    
    app.config(function ($routeProvider) {
        //1路径
        //2对象：你要做的事
        $routeProvider
                .when('/my',{
                    template:'<h1>我的</h1>'
                })
                .when('/friend',{
                    template:'<h2>{{name}}</h2>',
                    controller:function ($scope) {
                        //匿名的controller
                        $scope.name='朋友'
                    }
                })
                .when('/mycontroller',{
                    template:'<h3>{{name}}</h3>',
                    controller:'myCtrl'
                })
                .when('/mytemplate',{ //推荐写法
                    templateUrl:'mytemplate.html',
                    controller:'myCtrl2'
                })
                .otherwise({
                    redirectTo:'/my'   //默认跳转现有路径
                });
    });
