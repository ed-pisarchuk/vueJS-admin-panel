class NavLoader {
    loadBase (component) {
        return () => import(`@/components/${component}.vue`)
    }
    loadNavGroupA (component) {
        return () => import(`@/components/nav-group-a/${component}.vue`)
    }
    loadNavGroupB (component) {
        return () => import(`@/components/nav-group-b/${component}.vue`)
    }
    hello(){
        return "Hello"
    }
}

module.exports = NavLoader