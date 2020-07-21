let container = document.querySelector('#app');
let canvas = document.querySelector('#canv');
let tools = document.querySelector('#tools');
let coordinates = document.querySelector('#coordinates');

let abobe = {
    app: container,
    canvas: canvas,
    tools: tools,
    coordinates: coordinates,
    ctx: null, //канвасная штука
    x: 0,
    y: 0,
    editor: {
        currentTool: null,
        currentColor: '#000',
        currentBrushSize: 10,
        // currentFont: '...',
    },
    init() {
        this.ctx = this.canvas.getContext('2d');
        this._handleEvents();
    },
    _handleEvents() {
        this.canvas.addEventListener('mousemove', this._moveHandler.bind(this));
        this.canvas.addEventListener('mousedown', this._start.bind(this));
        this.canvas.addEventListener('mouseup', this._end.bind(this));


        this.tools.addEventListener('click', this._clickHandler.bind(this));
        this.tools.addEventListener('change', this._changeHandler.bind(this));
    },
    _getCoordinates({x, y}) {
        this.x = x;
        this.y = y;

        document.querySelector('#xCoord').innerText = x;
        document.querySelector('#yCoord').innerText = y;
    },
    _moveHandler(e) {
        this._getCoordinates({ x: e.offsetX, y: e.offsetY })
    },
    _clickHandler(e) {
        if (e.target.name == 'tool') {
            this.editor.currentTool = e.target.dataset.tool;
        }
    },
    _changeHandler(e) {
        if (e.target.name == 'tool-input') {
            this.editor[`current${e.target.dataset.tool}`] = e.target.value;
        }
    },

    _start() {
        this.ctx.fillStyle = this.editor.currentColor;
        
        if(this.editor.currentTool == 'pencil') {
            this._pencil(); //чисто канвасные темы
        }

        // if(this.editor.currentTool == 'eraser') {
        //     this._eraser(); //чисто канвасные темы
        // }
    },
    _end() {
        this.canvas.onmousemove = null;
    },

    _pencil() {
        let size = this.editor.currentBrushSize;
        this.canvas.onmousemove = () => {
            this.ctx.fillRect(this.x, this.y, size, size);
            // console.log('Я рисую на асфальте ' + this.editor.currentColor + ' ' + this.editor.currentTool + ' слово в коодинатах ' + (this.x, this.y))
        }
    }
}

abobe.init()
