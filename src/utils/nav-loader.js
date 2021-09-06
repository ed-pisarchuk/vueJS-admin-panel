class NavLoader {
    loadBase (component) {
        return () => import(`@/views/${component}.vue`)
    }
    loadNavGroupA (component) {
        return () => import(`@/views/admin/${component}.vue`)
    }
    loadNavGroupB (component) {
        return () => import(`@/views/contacts/${component}.vue`)
    }
    hello(){
        return "Hello"
    }
}

module.exports = NavLoader