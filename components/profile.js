Vue.component('static-profile', {

    // setting the template that this component will use to render
    templateURL: '../templates/profile.html',

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
        profile: {
            "name": "Thomas Palzkill",
            "position": "Web-Developer",
            "summary": "Curiosity keeps me up at night and wakes me up in the morning. In school I struggled to maintain focus as my mind raced between my interests. Now that I have experience as a developer curiosity is my greatest asset. I began programming as a hobby while I was studying Political Science in college; after graduating it was clear to me that I wanted to pursue software engineering further. I enrolled in a bootcamp and began flexing my curiosity to get my hands on and head around as many technologies as I could in as little time as possible."
        }
    }),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them
    mounted() {
        this.getProfile();
    },

    // this is where you define all the methods this component needs
    methods: {
         // getPost simply sets the 'posts' variable with static data
        getProfile() {
            this.profile = [
                {
                    "name": "Thomas Palzkill",
                    "position": "Web-Developer",
                    "summary": "Curiosity keeps me up at night and wakes me up in the morning. In school I struggled to maintain focus as my mind raced between my interests. Now that I have experience as a developer curiosity is my greatest asset. I began programming as a hobby while I was studying Political Science in college; after graduating it was clear to me that I wanted to pursue software engineering further. I enrolled in a bootcamp and began flexing my curiosity to get my hands on and head around as many technologies as I could in as little time as possible."
                },
            ];
        }
    }
});
new Vue({
    el: '#app'
});
