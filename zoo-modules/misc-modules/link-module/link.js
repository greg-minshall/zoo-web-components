class Link extends HTMLElement {
	constructor() {
		super();
		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
		<style>
		:host {
			contain: layout;
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			position: relative;
			padding: 0 5px;
		}
	
		::slotted(a) {
			text-decoration: none;
			font-size: 12px;
			line-height: 16px;
			padding: 0 2px;
			color: #FFFFFF;
		}
		::slotted(a:hover), ::slotted(a:focus), ::slotted(a:active) {
			color: #FFFFFF;
			cursor: pointer;
		}
	
		:host([type="primary"]) ::slotted(a) {
			color: var(--primary-mid, #3C9700);
		}
		:host([type="primary"]) ::slotted(a:visited) {
			color: var(--primary-light, #66B100);
		}
		:host([type="primary"]) ::slotted(a:hover), :host([type="primary"]) ::slotted(a:focus), :host([type="primary"]) ::slotted(a:active) {
			color: var(--primary-dark, #286400);
		}
	
		:host([type="grey"]) ::slotted(a) {
			color: #767676;
		}
		:host([type="grey"]) ::slotted(a:hover), :host([type="grey"]) ::slotted(a:focus), :host([type="grey"]) ::slotted(a:active) {
			color: var(--primary-dark, #286400);
		}
	
		:host([type="warning"]) ::slotted(a) {
			color: #ED1C24;
		}
		:host([type="warning"]) ::slotted(a:hover), :host([type="warning"]) ::slotted(a:focus), :host([type="warning"]) ::slotted(a:active) {
			color: var(--warning-dark, #BD161C);
		}
	
		:host([size="large"]) ::slotted(a) {
			font-size: 18px;
			line-height: 22px;
			font-weight: bold;
		}
	
		:host([size="bold"]) ::slotted(a) {
			font-weight: bold;
		}
		:host([size="bold"]) ::slotted(a:active) {
			background: #E6E6E6;
			border-radius: 5px;
		}
		</style>
		<slot name="pre"></slot>
		<slot name="anchor"></slot>
		<slot name="post"></slot>`;
	}

	static get observedAttributes() {
		return ['type', 'size'];
	}
	get type() {
		return this.getAttribute('active');
	}
	set type(type) {
		this.setAttribute('type', type);
	}
	get size() {
		return this.getAttribute('size');
	}
	set size(size) {
		this.setAttribute('size', size);
	}
}
window.customElements.define('zoo-link', Link);