export default {
    template: `
    <div id="signup-container" class="row">
        <form action="index.php" method="POST" id="signup" class="col-10 col-offset-1 col-lg-8 offset-lg-2">
            <h2>Sign Up</h2>
            <br>
            <input type="text" name="fname" placeholder="First Name" required>
            <br>
            <input type="text" name="lname" placeholder="Last Name" required>
            <br>
            <input type="email" name="email" placeholder="Email Address" required>
            <br>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <br>
            <button type="submit" name="submit"">Sign Up</button>
        </form>
    </div>
    `,
    data() {
        return {
            message: "hello from sign up page",
        }
    },

    methods: {
        
    }
}