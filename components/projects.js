Vue.component('static-projects', {

    // setting the template that this component will use to render
    templateURL: '../templates/projects.html',

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
        projects: []
    }),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them
    mounted() {
        this.getProjects();
    },

    // this is where you define all the methods this component needs
    methods: {
         // getPost simply sets the 'posts' variable with static data
        getProjects() {
            this.projects = [
                {
                    "title": "Rad-Libs",
                    "description": "A phrasal template game pulls text from numerous apis, removes words from those texts that have some discernible meaning and replaces them with the word type as a placeholder then prompting the user to fill in the blanks and ultimately displaying the users take and the original text.",
                    "techStack": ""
                },
                {
                    "title": "Rad-Spots",
                    "description": "A social-media app for skateboarders which allows users to create profiles for themselves as well as their favortie spots. When a user posts a video to a spot that media will be featured on both the spot and the user profile. Users check-in at spots and other users can comment and upvote posts and spots. On login a user will be presented a map, created with Mapbox, of all the spots in their area.",
                    "techStack": ""
                },
                {
                    "title": "Rad-Crawls",
                    "description": "My first attempt at mobile development is a bar-hopping game. The end goal is to allow a user to invite friends to a Crawl at any time. The yelp API returns bars near the current location, laid out in a route through Mapbox. Once the party leader has refined the route and all the party memebers have joined, the game can begin. User parties go from bar to bar completing different challenges along the way until the route completes. ",
                    "techStack": ""
                },
                {
                    "title": "KillBase",
                    "description": "A Galvanize assignment and my first full-stack app, KillBase is a fictional contract killing platform. Clients can take out contracts on targets, which assassins will then be able to accept. Assassins can only take contracts if they satisfy the requisite 'sKILL Level'. At any time an assassin can become a target or a client. ",
                    "techStack": ""
                }
            ];
        }
    }
});
new Vue({
    el: '#app2'
});
