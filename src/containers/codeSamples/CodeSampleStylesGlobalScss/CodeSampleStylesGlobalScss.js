import React from 'react';
import { Helmet } from 'react-helmet-async';

const CodeSampleStylesGlobalScss = () => {

  return (

      <div className="container">

        <Helmet title="Code Sample Styles Global Scss" />

        <h1 className="mt-4 mb-3">Global Scss Styles</h1>

        <h4 className="mt-4 mb-3">file: src > theme > scss > global > styles.global.scss</h4>

        <div className="row">

          <div>

            <pre className="pre-style" >
{`

@import "../app/functions.scss";
@import "../app/variables.scss";
@import "../app/fonts.scss";

// ---------------------------------------------

$body-bg: #F7F7F7;
$font-size-base: .875rem;
$navbar-dark-color: #C6E2FF;
$dropdown-bg: #F0F8FF;
$navbar-dark-active-color: #00BFFF;

// ---------------------------------------------

@import "~bootstrap/scss/_functions.scss";
@import "~bootstrap/scss/_variables.scss";
@import "~bootstrap/scss/_mixins.scss";

$btn-primary-bg: adjust-hue(theme-color("primary"), +20deg);
$dropdown-bg: darken($dropdown-bg, 20%);

@import "~bootstrap/scss/_root.scss";
@import "~bootstrap/scss/_reboot.scss";
@import "~bootstrap/scss/_type.scss";
@import "~bootstrap/scss/_images.scss";
@import "~bootstrap/scss/_code.scss";
@import "~bootstrap/scss/_grid.scss";
@import "~bootstrap/scss/_tables.scss";
@import "~bootstrap/scss/_forms.scss";
@import "~bootstrap/scss/_buttons.scss";
@import "~bootstrap/scss/_transitions.scss";
@import "~bootstrap/scss/_dropdown.scss";
@import "~bootstrap/scss/_button-group.scss";
@import "~bootstrap/scss/_input-group.scss";
@import "~bootstrap/scss/_custom-forms.scss";
@import "~bootstrap/scss/_nav.scss";
@import "~bootstrap/scss/_navbar.scss";
@import "~bootstrap/scss/_card.scss";
// @import "~bootstrap/scss/_breadcrumb.scss";
// @import "~bootstrap/scss/_pagination.scss";
@import "~bootstrap/scss/_badge.scss";
// @import "~bootstrap/scss/_jumbotron.scss";
@import "~bootstrap/scss/_alert.scss";
// @import "~bootstrap/scss/_progress.scss";
// @import "~bootstrap/scss/_media.scss";
@import "~bootstrap/scss/_list-group.scss";
@import "~bootstrap/scss/_close.scss";
@import "~bootstrap/scss/_modal.scss";
@import "~bootstrap/scss/_tooltip.scss";
@import "~bootstrap/scss/_popover.scss";
// @import "~bootstrap/scss/_carousel.scss";
@import "~bootstrap/scss/_utilities.scss";
// @import "~bootstrap/scss/_print.scss";

// ---------------------------------------------

$fa-font-path : "~@fortawesome/fontawesome-free/webfonts";
$fa-font-path-modified : "../fontAwesome";
$fa-font-size-base:    16px !default;
$fa-font-display:      auto !default;
$fa-css-prefix:        fa !default;
$fa-version:           "5.10.2" !default;
$fa-border-color:      #eee !default;
$fa-inverse:           #fff !default;
$fa-li-width:          2em !default;
$fa-fw-width:          (20em / 16);
$fa-primary-opacity:   1 !default;
$fa-secondary-opacity: .4 !default;

// Convenience function used to set content property
@function fa-content($fa-var) {
  @return unquote("\"#{ $fa-var }\"");
}

$fa-var-500px: \f26e;
$fa-var-headphones: \f025;
$fa-var-headphones-alt: \f58f;
$fa-var-sign-in-alt: \f2f6;
$fa-var-sign-out-alt: \f2f5;
// $fa-var-facebook: \f09a;
// $fa-var-facebook-f: \f39e;
// $fa-var-facebook-messenger: \f39f;
$fa-var-facebook-square: \f082;

// ---------------------------------------------

@import "~@fortawesome/fontawesome-free/scss/mixins";
@import "~@fortawesome/fontawesome-free/scss/core";
@import "~@fortawesome/fontawesome-free/scss/fixed-width";

.#{$fa-css-prefix}-500px:before { content: fa-content($fa-var-500px); }
.#{$fa-css-prefix}-headphones:before { content: fa-content($fa-var-headphones); }
.#{$fa-css-prefix}-headphones-alt:before { content: fa-content($fa-var-headphones-alt); }
.#{$fa-css-prefix}-sign-in-alt:before { content: fa-content($fa-var-sign-in-alt); }
.#{$fa-css-prefix}-sign-out-alt:before { content: fa-content($fa-var-sign-out-alt); }
// .#{$fa-css-prefix}-facebook:before { content: fa-content($fa-var-facebook); }
// .#{$fa-css-prefix}-facebook-f:before { content: fa-content($fa-var-facebook-f); }
// .#{$fa-css-prefix}-facebook-messenger:before { content: fa-content($fa-var-facebook-messenger); }
.#{$fa-css-prefix}-facebook-square:before { content: fa-content($fa-var-facebook-square); }

// ---------------------------------------------

@font-face {
  font-family: 'Font Awesome 5 Brands';
  font-style: normal;
  font-weight: normal;
  font-display: $fa-font-display;
  src: url('#{$fa-font-path}/fa-brands-400.woff2') format('woff2');
}

.fab {
  font-family: 'Font Awesome 5 Brands';
}

@font-face {
  font-family: 'Font Awesome 5 Free';
  font-style: normal;
  font-weight: 900;
  font-display: $fa-font-display;
  src: url('#{$fa-font-path}/fa-solid-900.woff2') format('woff2');
}

.fa,
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
}

// ---------------------------------------------

@import "../app/mixins.scss";
@import "../app/app.scss";
`}
            </pre>

          </div>
        </div>
      </div>
  );
};

export default CodeSampleStylesGlobalScss;
