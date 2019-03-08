export default {
    template: `
    <div id="signup-container" class="row">
        <div id="signup" class="col-10 col-offset-1 col-lg-8 offset-lg-2">
            <h2>Sign Up</h2>
            <br>
            <input type="text" placeholder="First Name" required>
            <br>
            <input type="text" placeholder="Last Name" required>
            <br>
            <input type="email" placeholder="Email Address" required>
            <br>
            <input type="tel" placeholder="Phone Number" required>
            <br>
            <button type="button" v-on:click="signUp()">Sign Up</button>
        </div>
    </div>
    `,
    data() {
        return {
            message: "hello from sign up page",
        }
    },

    methods: {
        signUp() {
            // post to database
        }
        
    }
}