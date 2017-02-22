import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedError extends Component {
  static get is(){ return 'waitlisted-error' }

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
    // Check for errors
    let url = UrlParse(document.location, true)
    if (url.query && url.query.error) {
      let errors = url.query.error.replace(/\+/g, ' ')
      return (<div class='wl-errors'>{errors}</div>)
    }
    return null
  }
}

export default WaitlistedError;