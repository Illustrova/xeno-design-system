const React = require('react');

const SvgrMock = React.forwardRef((props, ref) =>
  React.createElement('span', { ref, role: 'img', 'aria-label': 'some-alt-text', ...props })
);

module.exports = { ReactComponent: SvgrMock };
