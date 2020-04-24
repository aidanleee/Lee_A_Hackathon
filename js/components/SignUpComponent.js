export default {
    template: `
    <div id="signup-container" class="row">
        <form @submit.prevent="signUp" id="signup" class="col-10 col-offset-1 col-lg-8 offset-lg-2">
            <h2>Sign Up</h2>
            <br>
            <input type="text" name="first_name" id="first_name" placeholder="First Name" required>
            <br>
            <input type="text" name="last_name" id="last_name" placeholder="Last Name" required>
            <br>
            <input type="email" name="email" id="email" placeholder="Email Address" required>
            <br>
            <input type="tel" name="phone" id="phone" placeholder="Phone Number" required>
            <br>
            <button type="submit">Sign Up</button>
        </form>
    </div>
    `,

    methods: {
        signUp() {
            // debugger;
            let url = "./includes/index.php?add_user=true",
                userData = new FormData(document.querySelector("form"));
            
            fetch(url, {
                method: 'POST',
                body: userData
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result == true) {
                        alert('added a new user!')
                    } else {
                        alert('couldn\'t add user: ', data.result)
                    }
                })
                .catch((err) => console.error(err)
                );
        }
        
    }
}