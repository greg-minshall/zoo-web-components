/* global window */

import { configure, addParameters, setCustomElements, } from '@storybook/web-components';
import customElements from '../custom-elements.json';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

setCustomElements(customElements);

addParameters({
  docs: {
	iframeHeight: '200px',
	container: DocsContainer,
    page: DocsPage,
  },
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
const req = require.context('../stories', true, /\.stories\.(js|mdx)$/);
configure(req, module);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}