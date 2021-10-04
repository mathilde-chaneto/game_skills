class Carousel {

    /**
     * 
     * @param {HTMLelement} element 
     * @param {object} options 
     * @param {object} options.slidestoscroll 
     * @param {object} options.slidestovisible 
     */

    constructor(element, options = {}) {
        console.log("hello");
        this.element = element
        this.options = Object.assign({}, {

            slidesToScroll: 1,
            slidesToVisible: 1

        }, options)
        debugger;

        this.children = [].slice.call(element.children);
        let root = this.createDivWithClass('carousel');
        let container = this.createDivWithClass('carousel__container');
        root.appendChild(container);
        this.element.appendChild(root);
        this.children.forEach(function (child) {

            container.appendChild(child)

        })

    }

    createDivWithClass(className) {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }
}

document.addEventListener('DOMContentLoaded', function () {

    new Carousel(document.querySelector('#container'), {
        slidesToScroll: 2,
        slidesToVisible: 3

    })



})