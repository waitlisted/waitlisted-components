import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedPosition extends Component {
  static get is(){ return 'waitlisted-total' }

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
    if (url.query && url.query.total_count) {
      return (<div class='wl-total'>{url.query.total_count}</div>)
    }
    return null
  }
}

export default WaitlistedPosition;