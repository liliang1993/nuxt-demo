export default ({app, isClient, isServer }) => {
    app.router.beforeEach((to, from, next)=> {
        console.log('to', isClient, isServer, to.path);
        next()
    })
}