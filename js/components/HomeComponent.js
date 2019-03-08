export default {
    template: `
    <div id="home-container" class="row">
        <div id="logo" class="col-10 offset-1 col-lg-8 offset-lg-2">
            <img src="images/logo-white.svg" alt="Logo">
        </div>
        <div id="title" class="col-12">
            <h2>Find Yourself at Home</h2>
        </div>
        <router-link :to="{ path: '/signup' }" class="button">Sign Up</router-link>
    </div>
    `,

    data() {
        return {
            message: "hello from the users page",
        } 
    },

    methods: {
        
    }
}