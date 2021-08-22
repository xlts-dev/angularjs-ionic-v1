<a name="1.5.13"></a>
# 1.5.13 venerably-shielding (2021-08-20)

## Bug Fixes
- **jqLite:** prevent possible XSS due to regex-based HTML replacement
  - This is fixes a [Medium Severity](https://snyk.io/vuln/SNYK-JS-ANGULAR-570058) and
    [High Severity](https://snyk.io/vuln/SNYK-JS-ANGULAR-572020) vulnerability associated with
    [CVE-2020-7676](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-7676).
  - This fix was cherry-picked from the v1.8.x branch.
- **docs:** remove extra `.` in error link URLs

## New Features
- **jqLite:** print warnings for problematic HTML input

## Breaking Changes

### **jqLite** due to:
- **jqLite**: prevent possible XSS due to regex-based HTML replacement

See https://jquery.com/upgrade-guide/3.5/. This applies a similar change
to jqLite. Using self-closing tags in HTML is no longer supported.


<a name="1.5.12"></a>
# 1.5.12 archaically-looming (2021-08-01)

This is the first XLTS for AngularJS release for the `1.5.x` packages! 🚀

As such, there have been updates to the License and the Security Policy. New security issues should
be sent to [security@xlts.dev](mailto:security@xlts.dev).

## Bug Fixes

- **sanitizeUri:** sanitize URIs that contain IDEOGRAPHIC SPACE chars
  - This is a [Medium Severity Security fix](https://snyk.io/vuln/npm:angular:20171018) for a XSS
    vulnerability in Chrome 62 and earlier.
- **jqlite:** nosel error points to an invalid URL
- **$interpolate:** fix docs URL in `noconcat` error
- **$sce:** fix docs URL in `iequirks` error
- **misc:**
  - update error reference links to use code.angularjs.xlts.dev
  - fix 28 security warnings in build, test, and release tooling
- **browserTrigger:** support CompositionEvent
- **grunt-utils:** insert the core CSS styles without using innerHTML
- **Angular:**
  - add workaround for Safari / Webdriver problem
  - do not auto bootstrap if the `src` exists but is empty
  - do not auto bootstrap if the currentScript has been clobbered
  - do not auto bootstrap if the script source is bad and inside SVG
- **minErr:** update url to https
- **docs:**
  - linting cleanup of the web worker used for search
  - fix `@media` breakpoints for small/extra small devices
- **ngScenario:** completely remove the angular scenario runner


## Breaking Changes

### **ngScenario** due to:
- **ngScenario**: completely remove the angular scenario runner

The angular scenario runner end-to-end test framework has been
removed from the project and will no longer be available on npm
starting with 1.5.12.

It was deprecated and removed from the documentation in 2014. Applications that still use it should
migrate to [Protractor](http://www.protractortest.org) or another e2e testing framework.
