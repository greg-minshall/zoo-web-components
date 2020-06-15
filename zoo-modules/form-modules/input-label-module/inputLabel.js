class InputLabel extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
		<style>
		label {
			font-size: 14px;
			line-height: 20px;
			font-weight: 800;
			color: #555555;
			text-align: left;
		}
		</style>
		<label></label>
		`;
	}

	static get observedAttributes() {
		return ['labeltext'];
	}

	handleLabel(oldVal, newVal) {
		const label = this.shadowRoot.querySelector('label');
		if (newVal) {
			label.innerHTML = newVal;
		} else {
			label.innerHTML = '';
		}
	}

	get labeltext() {
		return this.getAttribute('labeltext');
	}

	set labeltext(text) {
		this.setAttribute('labeltext', text);
		this.handleLabel(this.labeltext, text);
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		if(attrName == 'labeltext') this.handleLabel(oldVal, newVal);
	}
}
window.customElements.define('zoo-input-label', InputLabel);