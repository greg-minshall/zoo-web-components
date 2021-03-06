import { configure, addParameters, } from '@storybook/web-components';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

addParameters({
	docs: {
		iframeHeight: '200px',
		container: DocsContainer,
		page: DocsPage,
	},
});

// configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);

// force full reload to not reregister web components
// const req = require.context('../zoo-modules', true, /\.stories\.(js|mdx)$/);
// configure(req, module);
// if (module.hot) {
// 	module.hot.accept(req.id, () => {
// 		const currentLocationHref = window.location.href;
// 		window.history.pushState(null, null, currentLocationHref);
// 		window.location.reload();
// 	});
// }
