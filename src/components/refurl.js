import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedRefurl extends Component {
  static get is(){ return 'waitlisted-refurl' }

  static get props () {
    return {
      as: prop.string({ attribute: true })
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
      if (this.as == 'input') {
        return (<input value={shareUrl} type="text" class="wl-refurl-input"></input>)
      }
      else {
        return (<div class="wl-refurl">{shareUrl}</div>)
      }
    }
    return null
  }
}

export default WaitlistedRefurl;