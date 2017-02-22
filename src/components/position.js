import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedPosition extends Component {
  static get is(){ return 'waitlisted-position' }

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
    if (url.query && url.query.position) {
      return (<div class='wl-position'>{url.query.position}</div>)
    }
    return null
  }
}

export default WaitlistedPosition;