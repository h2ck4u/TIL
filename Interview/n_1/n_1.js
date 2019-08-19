/** 
 * 버튼을 누르면 감소, 증가하는 스핀박스를 만드세요.
 * 디자인은 신경 쓰지 않아도 됩니다.
 */

// 구술이었는데, 라이브코딩을 시켜서 당황..!

class Spinbox {
    constructor() {
        this.element = this.getElement();
    }

    getElement() {
        const spinbox = document.createElement('div');
        this.btnPlus = new Button('plus');
        this.btnMinus = new Button('minus');
        this.label = new Label();
        spinbox.appendChild(this.btnPlus.element);
        spinbox.appendChild(this.label.element);
        spinbox.appendChild(this.btnMinus.element);

        spinbox.addEventListener('click', this.onClick.bind(this));

        return spinbox;
    }

    onClick(e) {
        const name = e.target.name;
        if (name === 'plus') {
            this.label.val++;
        } else if (name === 'minus') {
            this.label.val--;
        }
        this.label.setText();
    }
}

class Button {
    constructor(name) {
        this.name = name;
        this.element = this.getElement(name);
        this.val = 0;
    }

    getElement(name) {
        const button = document.createElement('button');
        if (name === 'plus') {
            button.textContent = '+';
        } else {
            button.textContent = '-';
        }
        button.name = name;
        return button;
    }
}

class Label {
    constructor() {
        this.val = 0;
        this.element = this.getElement();
        this.setText();
    }

    getElement() {
        const label = document.createElement('label');
        label.id = 'label';
        return label;
    }

    setText() {
        this.element.textContent = this.val;
    }
}