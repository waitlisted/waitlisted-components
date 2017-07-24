import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedTotal extends Component {
  static get is(){ return 'waitlisted-total' }

  static get props () {
    return {
      domain: prop.string({ attribute: true })
    };
  }
  async connectedCallback () {
    if (this.domain != "") {
      let resp = await fetch(`https://${this.domain}/api/v2/site.json`)
      this.site = await resp.json()
    }
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
    else if (this.site) {
      return (<div class='wl-total'>{this.site.total_count}</div>)
    }

    return null
  }
}

export default WaitlistedTotal;