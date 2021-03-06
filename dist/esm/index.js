function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import SelectSearch from './SelectSearch';
export default memo(forwardRef(function (props, ref) {
  return React.createElement(SelectSearch, _extends({
    innerRef: ref
  }, props));
}));