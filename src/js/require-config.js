require.config({
    baseUrl:'/',
    paths:{
        'jquery':'libs/jquery/jquery-1.11.3.min',
        'cookie':'libs/jquery/jquery-plugins/jquery.cookie',
        'header':'js/component/header',
        'main':'js/component/main',
        'footer':'js/component/footer',
        'url':'js/component/url',
        'template':'libs/template-web',
        'zoom':'libs/jquery/jquery-plugins/jquery.elevateZoom-3.0.8.min'

    },

    //不符合AMD规范的模块，垫片
    shim:{
        'cookie':{
            deps:['jquery']
        },
        'zoom':{
            deps:['jquery']
        }
    }
})