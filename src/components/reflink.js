import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedReflink extends Component {
  static get is(){ return 'waitlisted-reflink' }

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
    let baseUrl = `${url.origin}${url.pathname}`
    if (url.query && url.query.affiliate) {
      let shareUrl = `${baseUrl}?refcode=${url.query.affiliate}`
      return (<a href={shareUrl}><slot /></a>)
    }
    return null
  }
}

export default WaitlistedReflink;