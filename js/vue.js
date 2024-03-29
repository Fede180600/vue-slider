Vue.config.devTools = true;

const app = new Vue (
    {
        el: '#root',
        data: {
            sliderItems: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',

                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

                },
            ],
            currentSlide: 0,
        },
        
        methods: {
            nextSlide: function() {
                this.currentSlide !== (this.sliderItems.length - 1) ? this.currentSlide++ : this.currentSlide = 0;
            },

            prevSlide: function() {
                this.currentSlide ===  0 ? this.currentSlide = this.sliderItems.length - 1 : this.currentSlide--;
            }
        }
    }
)