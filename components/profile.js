
Vue.component('static-profile', {

    // setting the template that this component will use to render
    template: "<section class='hero is-fullheight' id='profile'><div id='prof-container' class='hero-body'><div class='columns'><div class='column is-one-quarter has-text-centered'><img src='static/img/tom.jpg' class='image' width=250 alt='Tom Palzkill'></div><div class='column'><h1 class='has-text-weight-bold is-size-1 has-text-justified'>{{name}}</h1><h3 class='has-text-weight-bold is-size-3 has-text-justified'>{{position}}</h3><br><p id='profpar' class='has-text-info has-text-weight-semilight is-size-5 has-text-justified'>{{summary}}</p></div></div></div><div class='hero-foot'><nav class='navbar is-fixed-bottom is-transparent'><div class='tabs'><div class='container'><ul><li class=''><a href='#profile'>Profile</a></li><li><a href='#projects'>Projects</a></li><li><a href='#educationshit'>Education</a></li><li><a href='#contact'>Contact</a></li><li><a>More</a></li></ul></div></nav></div></div></section>",

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
      "name": "Thomas Palzkill",
      "position": "Full-Stack Web-Developer",
      "image": 'https://pixady.com/file/directDownload/file-1OeLwr7YvdFwWDlgGxbV8xvBj',
      "summary": "Curiosity keeps me up at night and wakes me up in the morning. In school I struggled to maintain focus as my mind raced between my interests. Now that I have experience as a developer curiosity is my greatest asset. I began programming as a hobby while I was studying Political Science in college; after graduating it was clear to me that I wanted to pursue software engineering further. I enrolled in a bootcamp and began flexing my curiosity to get my hands on and head around as many technologies as I could in as little time as possible."
    }),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them


    // this is where you define all the methods this component needs
    methods: {}
         // getPost simply sets the 'posts' variable with static data
});
new Vue({
    el: '#app'
});
