const app = Vue.createApp({
    //add code here
    data() {
        return {
            showBooks: true,
            // title: "The Final Empire",
            // author: "Brandon Sanderson",
            // age: 45,
            x: 0,
            y: 0,
            books: [
                {title: "name of the wind", author: "patrick rothfuss", img: "assets/name_of_the_wind.jpg", isFav: true},
                {title: "the way of the kings", author: "brandon sanderson", img: "assets/the_way_of_kings.jpg", isFav: false},
                {title: "the final empire", author: "brandon sanderson", img: "assets/the_final_empire.jpg", isFav: true},
            ],
            url: "http://www.google.com",
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            // [!] to see the attributes of e (event parameter), use [console.log(e)] and @ inspect/console in browser  
            this.x = e.offsetX
            this.y = e.offsetY
        },
        // toggleFav(item_id) {
        //     console.log(item_id)
        //     this.books.forEach(element => {
        //         if (element["id"] == item_id){
        //             element["isFav"] = !element["isFav"]
        //         }
        //     });
        toggleFav(item) {
            item.isFav = !item.isFav
        }
    },
    computed: { // properties here is update in realtime
        filteredBooks() {
            return this.books.filter((books) => books.isFav)
        }
    }
})


app.mount("#app")

// Challenge: Add to Favs
// - attach a click event to each li tag (for each book)
// - when a user clicks an li, toggle the "isFav" property of that book