import 'skatejs-web-components';
import { define, vdom } from 'skatejs';

import WaitlistedForm from './components/form'
import WaitlistedError from './components/error'
import WaitlistedPosition from './components/position'
import WaitlistedReflink from './components/reflink'
import WaitlistedRefurl from './components/refurl'
import WaitlistedTotal from './components/total'
import WaitlistedShow from './components/show'
import WaitlistedSubmit from './components/submit'



window.customElements.define(WaitlistedForm.is, WaitlistedForm);
window.customElements.define(WaitlistedError.is, WaitlistedError);
window.customElements.define(WaitlistedPosition.is, WaitlistedPosition);
window.customElements.define(WaitlistedReflink.is, WaitlistedReflink);
window.customElements.define(WaitlistedRefurl.is, WaitlistedRefurl);
window.customElements.define(WaitlistedTotal.is, WaitlistedTotal);
window.customElements.define(WaitlistedShow.is, WaitlistedShow);
window.customElements.define(WaitlistedSubmit.is, WaitlistedSubmit);