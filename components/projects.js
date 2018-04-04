Vue.component('static-projects', {

    // setting the template that this component will use to render
    template:
    `<div id='ancestor' class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
        <p class="title">KillBase</p>
        <p class="subtitle">December 2017</p>
        <p>A Galvanize assignment and my first full-stack app, KillBase is a fictional contract killing platform. Clients can take out contracts on targets, which assassins will then be able to accept. As- sassins can only take contracts if they satisfy the requisite ’sKILL Level’. At any time an assassin can become a target or a client.</p>
        </article>
        <article class="tile is-child box">
        <p class="title">Rad-Libs</p>
        <p class="subtitle">October 2017</p>
        <p>A phrasal template game pulls text from numerous API’s, removes words from those texts that have some discernible meaning and replaces them with the word type as a placeholder then prompting the user to fill in the blanks and ultimately displaying the users take and the original text.</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
        <p class="title">Rad-Spots</p>
        <p class="subtitle">January 2018</p>
        <p>A social-media app for skateboarders which allows users to create profiles for themselves as well as their favorite spots. When a user posts a video to a spot that media will be featured on both the spot and the user profile. Users check-in at spots and other users can comment and upvote posts and spots. On login a user will be presented a map, created with Mapbox, of all the spots in their area.</p>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
      <p class="title">Bar-Hopper</p>
      <p class="subtitle">February 2018</p>
      <p>The goal is to allow a user to invite friends to a preset Crawl at any time. The yelp API returns bars near the current location, laid out in a route through Mapbox. Once the party leader has refined the route and all the party members have joined, the game can begin. User parties go from bar to bar completing different challenges along the way until the route completes.</p>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
    <p class="title">Global Thermo-Nuclear War</p>
    <p class="subtitle">March 2018</p>
    <p>Global Thermonuclear War is a full-stack board game, played across multiple devices, where you are an international power locked in an arms race with the rest of the world. Our team wanted to build a game that took full advantage of technologies like mobile devices, video projectors, and cameras while also having the in-person social interaction of a traditional board game.</p>
    <br />
    <div class='content'>
    <h3>Tech Stack</h3>
    <ul>
  <li>Mobile app written in Flutter.</li>
  <li>Projected game board using Vue.js and Phaser.js.</li>
<li>Webcam and Tracking.js to track player interaction with the projected board.</li>
<li>Realtime Firebase database to sync gamestate across all physical devices.</li>
<li>PostgreSQL database for storing account info and player statistics.</li>
<li>Full stack website with Vue.js and Bulma to create games and view player stats.</li>
<li>KOA server to coordinate communication between components.</li>
<li>Waffle.io for user stories and project management.</li>
<li>Project hosted on Amazon EC2.</li>
</ul>
</div>
</div>
    </article>

</div>`
      // "<div class='container'><ul class='columns'><li v-for='project in projects' class='column projcolumn '><div class='box'><p class='is-size-3'>{{project.title}}</p><p class='is-size-6'>{{project.description}}</p></div></li></ul></div>"
    ,

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
