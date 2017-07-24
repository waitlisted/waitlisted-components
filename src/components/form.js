import { Component, h, prop } from 'skatejs';
const React = { createElement: h };
import UrlParse from 'url-parse';
const sym = Symbol();

class WaitlistedForm extends Component {
  static get is(){ return 'waitlisted-form' }

  static get props () {
    return {
      domain: prop.string({ attribute: true }),
      form: prop.string({ attribute: true }),
      resultUrl: prop.string({ attribute: true })
    };
  }
  async connectedCallback () {
    let resp = await fetch(`https://${this.domain}/api/v2/site.json`)
    this.site = await resp.json()
    super.connectedCallback();
  }
  disconnectedCallback () {
    // Ensure we callback the parent.
    super.disconnectedCallback();
  }

  renderCallback () {
    let url = UrlParse(document.location, true)
    let content = this.innerHTML.trim()
    let nameBlock = null
    if (this.site.ask_name) {
      nameBlock = (<div class="wl-row wl-name">
        <label>Name</label>
        <input name="reservation[name]" />
      </div>)
    }

    let action = `https://${this.site.domain}/external/reservations`

    let refcode = ''
    if (url.query && url.query.refcode) {
      refcode = url.query.refcode
    }




    if (content.length == 0) {
      return (
        <form action={action} method="POST">
          {nameBlock}
          <div class="wl-row wl-email">
            <label>Email</label>
            <input name="reservation[email]" />
          </div>
          <input type="hidden" name="reservation[refcode]" value={refcode} />
          <input type="submit" value="Sign Up" />
        </form>
      );
    }
    return (
      <form action={action} method="POST">
        <input type="hidden" name="reservation[refcode]" value={refcode} />
        <slot />
      </form>
    )
  }
}

export default WaitlistedForm;