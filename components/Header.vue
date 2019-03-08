<template>
    <div class="m-header">   
        <h2 class="m-header-left">
            <a href="#" class="logo">
                <img src="../assets/logo_new_white.png" alt="量化云">
            </a>
        </h2>
        <div class="m-header-right">
            <nav class="m-header-nav">
                <ul class="header-nav-menu">
                    <li class="header-nav-item">
                        <a href="#" class="active">首页</a>
                    </li>
                    <li class="header-nav-item">
                        <a href="#">核心业务</a>
                    </li>
                    <li class="header-nav-item">
                        <a href="#">核心优势</a>
                    </li>
                    <li class="header-nav-item">
                        <a href="#">公司动态</a>
                    </li>
                    <li class="header-nav-item">
                        <a href="#">关于我们</a>
                    </li>
                    <li class="header-nav-item">
                        <a href="#">加入我们</a>
                    </li>
                </ul>
            </nav>

            <div class="lang-wrap">
                <a href="#" class="active">简</a>
                <a href="#">繁</a>
                <a href="#">EN</a>
            </div>
        </div>
    </div>    
</template>

<style scoped>
    .m-header {
       background-color: black; 
       position: fixed; 
       width: 100%;
       min-height: 55px;
       padding: 10px;
       box-sizing: border-box;
    }
    .m-header-left {
        float: left;
    }
    .logo img{
        height: 50px;
    }
    .m-header-right {
        float: right;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
    }
    .m-header-nav {
        display: inline-block;
        margin-right: 30px;                                                                                                                                                                                                                                                                                                                                                       
    }
    .header-nav-item {
        display: inline-block;
    }
    .header-nav-item a {
        padding: 10px 15px; 
    } 
    .m-header-right a{
        color: #fff;
    }
    .m-header-right a:hover{
        color: #77c8ff;
    }
    .m-header-right a.active{
        color: #77c8ff;
    }
    .lang-wrap {
        display: inline-block;
    }
</style>

