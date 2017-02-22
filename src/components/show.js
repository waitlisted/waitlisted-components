import { Component, h, prop } from 'skatejs';
import UrlParse from 'url-parse';

const React = { createElement: h };

const sym = Symbol();

class WaitlistedShow extends Component {
  static get is(){ return 'waitlisted-show' }

  static get props () {
    return {
      submitted: prop.boolean({ attribute: true })
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

    if ((this.submitted && url.query && url.query.id) || (!this.submitted && (!url.query || (url.query && !url.query.id)))) {
      console.log("HELLO!!!!", this.submitted)
      return (<slot />)
    }
    return null
  }
}

export default WaitlistedShow;