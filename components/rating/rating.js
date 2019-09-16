class RatingElement extends HTMLElement {
    
    get style() {
        return `
        div {
            display: inline-block;
            transform: rotate(11deg);
        }
        
        .yellow {
            color: #ffb300;
        }
        
        .dark {
            color: #44330d;
        }`
    }

    constructor() {
        super()
        var shadow = this.attachShadow({ mode: 'open' });

        var wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');

        const rating = this.parseRating();

        for (let index = 0; index < rating; index++) {
            var star = document.createElement('div');
            star.setAttribute('class', 'yellow');
            star.textContent = '★';
            wrapper.appendChild(star);
        }

        for (let index = 0; index < 5 - rating; index++) {
            var star = document.createElement('div');
            star.setAttribute('class', 'dark');
            star.textContent = '★';
            wrapper.appendChild(star);
        }

        var style = document.createElement('style');

        style.textContent = this.style;
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    parseRating() {
        var rating = this.getAttribute('rating');

        if (rating > 5)
            rating = 5;
        else if (rating < 0)
            rating = 0;
        
        return rating;
    }
}

customElements.define('rating-element', RatingElement);