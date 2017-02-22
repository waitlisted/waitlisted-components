## Waitlisted Components

This is a library of web components to use with custom forms. Custom forms are form you supply on your own site. They can be styled and do not require the use of a modal. These components are designed to work in conjunction with your existing website to make it easy to display waitlist reservation data.


###Example Usage

```
<script src="dist/index-with-deps.min.js"></script>

<waitlisted-show>
  <waitlisted-error></waitlisted-error>
  <waitlisted-form domain="waitlisted.app.waitlisted.dev"></waitlisted-form>
</waitlisted-show>

<waitlisted-show submitted>
  <waitlisted-reflink>
  Link to share!
  </waitlisted-reflink>
  <waitlisted-refurl></waitlisted-refurl>
  <waitlisted-refurl as="input"></waitlisted-refurl>

  <waitlisted-position></waitlisted-position> of <waitlisted-total></waitlisted-total>
</waitlisted-show>
```

### Components

`waitlisted-show` - Conditionally shows content based on if the form has already been submitted successfully. You may supply the `submitted` attribute, to show content of submit, and omit it for pre-submit.

`waitlisted-error` will write out any errors in the submission process, example 'Email must be valid.'

`waitlisted-form` this is write out a simple form with name and email fields, along with a submit button. You should pass the domain attribute to it. You may optionally replace the form's inner content by passing your own. Form fields are passed as `<input name="reservation[email]" />` or `<input name="reservation[name]" />`


`waitlisted-reflink` can be wrapped around any content and will link that content to the referral url.

`waitlisted-refurl` will write out the referral url. You may pass the `as` attribute, to output the url in a text input, this makes it easy to copy and paste.

`waitlisted-position` will write out the current reservation's position.

`waitlisted-total` will write out the total number of reservations.