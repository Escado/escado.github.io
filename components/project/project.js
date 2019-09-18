class RatingElement extends HTMLElement {
    
    get style() {
        return `

        :host {
            border-radius: 3%;
            margin: 3rem;
            width: 14rem;
            height: 14rem;
            position: relative;
            transition: 0.3s;
            -webkit-box-shadow: 0 0.3rem 0.3rem 0.018rem rgba(0,0,0,0.2);
            box-shadow: 0 0.3rem 0.3rem 0.018rem rgba(0,0,0,0.2);
            background-color: #0000000a;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            text-decoration: none;
            text-decoration-color: inherit;
        }

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
        
        var type = this.getAttribute('type');

        var wrapper = document.createElement('a');

        wrapper.setAttribute('class', 'table-item no-bg ' + type);
        

        var label = document.createElement('div');
        label.setAttribute('class', 'item-label');

        var img = document.createElement('img');
        img.setAttribute('class', 'item-icon');
        img.setAttribute('src', 'img/' + type + '.svg')

        var ratingElement = document.createElement('rating-element');
        ratingElement.setAttribute('rating', '5');

        var rating = document.createElement('div');
        rating.setAttribute('class', 'item-rating');
        rating.appendChild(ratingElement)

        wrapper.appendChild(label);
        wrapper.appendChild(img);
        wrapper.appendChild(rating);

        var style = document.createElement('style');
        style.textContent = this.style;
        
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

customElements.define('project-element', RatingElement);