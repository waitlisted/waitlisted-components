import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedSubmit extends Component {
  static get is(){ return 'waitlisted-submit' }

  static get props () {
    return {

    };
  }

  connectedCallback () {
    super.connectedCallback();
  }
  disconnectedCallback () {
    // Ensure we callback the parent.
    super.disconnectedCallback();
  }

  renderCallback () {
    return (<button submit><slot /></button>)
  }
}

export default WaitlistedSubmit;