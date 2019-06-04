/*'use strict';

const a = React.createElement;

const activeWhiteKeyStyle = {
    backgroundImage: 'linear-gradient(to top right, #e9e7d2, #888780)'
}
const inactiveWhiteKeyStyle = {
    backgroundImage: 'linear-gradient(to top right, #e9e7d2, #d9d7c2)'
}
const activeBlackKeyStyle = {
    backgroundColor: '#000'
}
const inactiveBlackKeyStyle = {
    backgroundColor: 'rgb(29, 28, 7)'
}
class Key extends React.Component{
    constructor(props){
        super(props);
        this.state={
            style: this.props.className == 'whiteKey' ? inactiveWhiteKeyStyle : inactiveBlackKeyStyle
        };
        this.playNote = this.playNote.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }
    componentDidMount(){
        document.addEventListener('keydown', this.keyDownHandler);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.keyDownHandler);
    }
    changeStyle(){
        if(this.props.className == 'whiteKey'){
            if (this.state.style == inactiveWhiteKeyStyle)
            this.setState({style: activeWhiteKeyStyle});
            else this.setState({style: inactiveWhiteKeyStyle});
        }
        else {
            if (this.state.style == inactiveBlackKeyStyle)
            this.setState({style: activeBlackKeyStyle});
            else this.setState({style: inactiveBlackKeyStyle});
        }
    }
    keyDownHandler(e){
        if(e.code == 'Key'+this.props.computerKey ||( e.code == 'Semicolon' && this.props.computerKey == ';')){
            this.changeStyle();
            setTimeout(() => this.changeStyle(), 100);
        
            let note = document.getElementById(this.props.keyId);
            note.currentTime=0;
            note.play();
        }
    }
    playNote(e){
        let note = document.getElementById(e.target.value);
        note.currentTime=0;
        note.play();
    }
    render(){
        return(	
        <button style={this.state.style} id={this.props.id} className={this.props.className} value={this.props.keyId} onClick={this.playNote}>
            <audio id={this.props.keyId} preload='auto' src={this.props.src}/>
            <p className='computerKey'>{this.props.computerKey}</p>
        </button>
        )
    }
}

class Piano extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return a(
            <div id='keyboard'>
            <Key computerKey='A' src='audio/C.wav' keyId="Cnote" id='Cdiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='W' src='audio/Csharp.wav' keyId="Csharpnote" id='Csharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='S' src='audio/D.wav' keyId="Dnote" id='Ddiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='E' src='audio/Dsharp.wav' keyId="Dsharpnote" id='Dsharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='D' src='audio/E.wav' keyId="Enote" id='Ediv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='F' src='audio/F.wav' keyId="Fnote" id='Fdiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='T' src='audio/Fsharp.wav' keyId="Fsharpnote" id='Fsharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='G' src='audio/G.wav' keyId="Gnote" id='Gdiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='Y' src='audio/Gsharp.wav' keyId="Gsharpnote" id='Gsharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='H' src='audio/A.wav' keyId="Anote" id='Adiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='U' src='audio/Asharp.wav' keyId="Asharpnote" id='Asharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='J' src='audio/B.wav' keyId="Bnote" id='Bdiv' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='K' src='audio/C2.wav' keyId="C2note" id='C2div' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='O' src='audio/C2sharp.wav' keyId="C2sharpnote" id='C2sharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey='L' src='audio/D2.wav' keyId="D2note" id='D2div' playNote={this.playNote} className='whiteKey'/>
            <Key computerKey='P' src='audio/D2sharp.wav' keyId="D2sharpnote" id='D2sharpdiv' playNote={this.playNote} className='blackKey'/>
            <Key computerKey=';' src='audio/E2.wav' keyId="E2note" id='E2div' playNote={this.playNote} className='whiteKey'/>
            </div> 
        ) 
    }
}

const domContainer = document.querySelector('#piano');
ReactDOM.render(a(Piano), domContainer);*/

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var activeWhiteKeyStyle = {
	backgroundImage: 'linear-gradient(to top right, #e9e7d2, #888780)'
};
var inactiveWhiteKeyStyle = {
	backgroundImage: 'linear-gradient(to top right, #e9e7d2, #d9d7c2)'
};
var activeBlackKeyStyle = {
	backgroundColor: '#000'
};
var inactiveBlackKeyStyle = {
	backgroundColor: 'rgb(29, 28, 7)'
};

var Key = function (_React$Component) {
	_inherits(Key, _React$Component);

	function Key(props) {
		_classCallCheck(this, Key);

		var _this = _possibleConstructorReturn(this, (Key.__proto__ || Object.getPrototypeOf(Key)).call(this, props));

		_this.state = {
			style: _this.props.className == 'whiteKey' ? inactiveWhiteKeyStyle : inactiveBlackKeyStyle
		};
		_this.playNote = _this.playNote.bind(_this);
		_this.keyDownHandler = _this.keyDownHandler.bind(_this);
		_this.changeStyle = _this.changeStyle.bind(_this);
		return _this;
	}

	_createClass(Key, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('keydown', this.keyDownHandler);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('keydown', this.keyDownHandler);
		}
	}, {
		key: 'changeStyle',
		value: function changeStyle() {
			if (this.props.className == 'whiteKey') {
				if (this.state.style == inactiveWhiteKeyStyle) this.setState({ style: activeWhiteKeyStyle });else this.setState({ style: inactiveWhiteKeyStyle });
			} else {
				if (this.state.style == inactiveBlackKeyStyle) this.setState({ style: activeBlackKeyStyle });else this.setState({ style: inactiveBlackKeyStyle });
			}
		}
	}, {
		key: 'keyDownHandler',
		value: function keyDownHandler(e) {
			var _this2 = this;

			if (e.code == 'Key' + this.props.computerKey || e.code == 'Semicolon' && this.props.computerKey == ';') {
				this.changeStyle();
				setTimeout(function () {
					return _this2.changeStyle();
				}, 100);

				var note = document.getElementById(this.props.keyId);
				note.currentTime = 0;
				note.play();
			}
		}
	}, {
		key: 'playNote',
		value: function playNote(e) {
			var note = document.getElementById(e.target.value);
			note.currentTime = 0;
			note.play();
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'button',
				{ style: this.state.style, id: this.props.id, className: this.props.className, value: this.props.keyId, onClick: this.playNote },
				React.createElement('audio', { id: this.props.keyId, preload: 'auto', src: this.props.src }),
				React.createElement(
					'p',
					{ className: 'computerKey' },
					this.props.computerKey
				)
			);
		}
	}]);

	return Key;
}(React.Component);

var Piano = function (_React$Component2) {
	_inherits(Piano, _React$Component2);

	function Piano(props) {
		_classCallCheck(this, Piano);

		return _possibleConstructorReturn(this, (Piano.__proto__ || Object.getPrototypeOf(Piano)).call(this, props));
	}

	_createClass(Piano, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ id: 'keyboard' },
				React.createElement(Key, { computerKey: 'A', src: 'audio/C.wav', keyId: 'Cnote', id: 'Cdiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'W', src: 'audio/Csharp.wav', keyId: 'Csharpnote', id: 'Csharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'S', src: 'audio/D.wav', keyId: 'Dnote', id: 'Ddiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'E', src: 'audio/Dsharp.wav', keyId: 'Dsharpnote', id: 'Dsharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'D', src: 'audio/E.wav', keyId: 'Enote', id: 'Ediv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'F', src: 'audio/F.wav', keyId: 'Fnote', id: 'Fdiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'T', src: 'audio/Fsharp.wav', keyId: 'Fsharpnote', id: 'Fsharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'G', src: 'audio/G.wav', keyId: 'Gnote', id: 'Gdiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'Y', src: 'audio/Gsharp.wav', keyId: 'Gsharpnote', id: 'Gsharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'H', src: 'audio/A.wav', keyId: 'Anote', id: 'Adiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'U', src: 'audio/Asharp.wav', keyId: 'Asharpnote', id: 'Asharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'J', src: 'audio/B.wav', keyId: 'Bnote', id: 'Bdiv', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'K', src: 'audio/C2.wav', keyId: 'C2note', id: 'C2div', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'O', src: 'audio/C2sharp.wav', keyId: 'C2sharpnote', id: 'C2sharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: 'L', src: 'audio/D2.wav', keyId: 'D2note', id: 'D2div', playNote: this.playNote, className: 'whiteKey' }),
				React.createElement(Key, { computerKey: 'P', src: 'audio/D2sharp.wav', keyId: 'D2sharpnote', id: 'D2sharpdiv', playNote: this.playNote, className: 'blackKey' }),
				React.createElement(Key, { computerKey: ';', src: 'audio/E2.wav', keyId: 'E2note', id: 'E2div', playNote: this.playNote, className: 'whiteKey' })
			);
		}
	}]);

	return Piano;
}(React.Component);

ReactDOM.render(React.createElement(Piano, null), document.getElementById('piano'));